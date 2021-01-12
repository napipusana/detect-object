<template>
  <div class="container mt-2">
    <h1>Nvision SDK: Object Detection</h1>
    <h5>Select an image</h5>
    <div class="my-3">
      <input
        :id="`fileUploaded`"
        type="file"
        accept=".jpeg, .png"
        class="d-none"
        @change="onFileChange">
      <label :for="`fileUploaded`">
        <a class="btn btn-img pointer-cursor">
          <span class="text-img">Choose File</span>
        </a>
      </label>
    </div>
    <div class="my-4">
      <div class="style-img position-relative">
        <img class="size-img" :src="image" />
        <div class="position-absolute border-gradient"
          v-for="(item, index) in dataDetect" v-b-tooltip.hover
          :key="index" :title="item.parent" :style="item.size">
        </div>
      </div>
    </div>
    <div>
      <div>Analyzed Results :</div>
      
      <div v-for="(parentItems, index) in detectedGroup" :key="index" class="d-inline-flex mr-2">
        <b-dropdown id="index" :text="parentItems[0].parent" variant="primary" class="">
          <b-dropdown-item v-for="(item, index) in parentItems" :key="index" href="#">
            {{item.name}} : {{ Math.round(item.confidence * 100) }}%
          </b-dropdown-item>
        </b-dropdown>
      </div>

    </div>
    <SpinnableButton class="btn btn-success my-4 px-4 py-2" :disabled="disableUpload" :click="request">
      UPLOAD
    </SpinnableButton>

    <div v-if="result" class="card w-50 mb-4">
      <pre>{{ result }}</pre>
    </div>

    <div>
      <b-modal ref="alertModal" modal-content="border-radius: 1.5rem;" :centered="true">
        <template slot="modal-title">
          <div class="tittlemodal w-100">
            <h4>
              <span class="text-msg">SUCCESS</span>
            </h4>
          </div>
        </template>
        <div class="d-block text-center">
          {{ warningMsg }}
        </div>
        <template slot="modal-footer">
          <b-button class="bg-blue text-white border-0" @click.prevent="() => { hideModal('alertModal') }">
            <span class="fw-600">OK</span>
          </b-button>
        </template>
      </b-modal>
    </div>
  </div>
</template>

<script>
import nvision from "@nipacloud/nvision";
import SpinnableButton from '@/components/Partials/SpinnableButton'

export default {
  components: {
    nvision,
    SpinnableButton
  },
  props: {
    msg: {
      type: String,
      default() {
        return ''
      }
    }
  },
  data() {
    return {
     data: [],
     file: [],
     fileTest: null,
     fileDoc: [],
     companyDocFileList: [],
     image: require('~/assets/img/no-image.jpg'),
     objectDetectionService: null,
     checkUpload: true,
     warningMsg: '',
     result: null,
     fileExtension: null,
     detectedGroup: [],
     dataName: [],
     dataDetect: [],
     actualImageRatio: null
    }
  },
  computed: {
    disableUpload() {
      return this.checkUpload === true
    }
  },
  mounted() {
    
  },
  created() {
    
  },
  methods: {
    onFileChange(e) {
      this.dataDetect = []
      this.detectedGroup = []
      this.result = null
      this.checkUpload = false
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length)
        return;
      this.createImage(files[0]);
    },
    createImage(file) {
      this.fileExtension = file.name.split('.').pop()
      var reader = new FileReader();
      var vm = this;

      reader.onload = (e) => {
        vm.image = e.target.result;

        var image = new Image();
        image.onload = (k) => {
          this.setActualImageRatio(k.path[0])
        }
        image.src = e.target.result;

      };
      reader.readAsDataURL(file);

    },
    setActualImageRatio(actualImage) {
      let maxLenght = actualImage.height > actualImage.width ? actualImage.height : actualImage.width
      this.actualImageRatio = maxLenght <= 450 ? 1 : 450 / maxLenght
    },
    request(button) {
      const nvision = require("@nipacloud/nvision");
      
      let img
      if (this.fileExtension === 'png') {
        img = this.image.replace(/data:image\/png;base64,/, "")
      } else if (this.fileExtension === 'jpeg' || this.fileExtension === 'jpg') {
        img = this.image.replace(/data:image\/jpeg;base64,/, "")
      }

      const objectDetectionService = nvision.objectDetection({
          apiKey: 'cdb29f355cb4059995e05420dc8d963f657898bf3a5f2f5e7a88c58279f5e4a0a1c4c4cf874594b42e413fc45c425425ac'
      });
      objectDetectionService.predict({
          rawData: img,
          configurations: [
            // {
            //     parameter: "OutputCroppedImage",
            //     value: "false"
            // },
            // {
            //     parameter: "ConfidenceThreshold",
            //     value: "0."
            // }
          ]
      }).then((result) => {
          this.warningMsg = 'Upload success'
          this.showModal('alertModal')
          
          this.setDetectedOjectsStyle(result.detected_objects)
          
          this.result = JSON.stringify(result, null, 4)
          let group = result.detected_objects.reduce((r, a) => {
            r[a.parent] = [...r[a.parent] || [], a];
            return r;
          }, {});
          button.stop()
          this.detectedGroup = group
      });
    },
    showModal(modal) {
      this.$refs[modal].show()
    },
    hideModal(modal) {
      this.warningMsg = ''
      this.$refs[modal].hide()
    },
    setDetectedOjectsStyle(detectedObjects) {
      this.dataDetect = detectedObjects
        .sort((a, b) => (b.bounding_box.bottom - b.bounding_box.top) * (b.bounding_box.right - b.bounding_box.left) -
          (a.bounding_box.bottom - a.bounding_box.top) * (a.bounding_box.right - a.bounding_box.left))
        .map((x, i) => ({
          parent: x.parent,
          size: {
            bottom: `${x.bounding_box.bottom * this.actualImageRatio}px`,
            left: `${x.bounding_box.left * this.actualImageRatio}px`,
            right: `${x.bounding_box.right * this.actualImageRatio}px`,
            top: `${x.bounding_box.top * this.actualImageRatio}px`,
            height: `${Math.abs((x.bounding_box.bottom - x.bounding_box.top) * this.actualImageRatio)}px`,
            width: `${Math.abs((x.bounding_box.right - x.bounding_box.left) * this.actualImageRatio)}px`,
            zIndex: i + 1
          }
        }))
    }
  }
}
</script>

<style>

.btn-img{
  background-color: #f7f7f7;
  border: 1px solid #c1c1c1;
}
.text-img{
  font-weight: 600;
}
.style-img {
  overflow: hidden;
}
.style-img .size-img {
  max-width: 450px;
  max-height: 450px;
  object-fit: contain;
}
.text-msg {
  color: green;
  font-weight: 700;
}
.border-gradient {
  border: 3px solid;
  border-image-slice: 1;
  border-image-source: linear-gradient( 135deg, #69FF97 10%, #00E4FF 100%);
}
</style>
