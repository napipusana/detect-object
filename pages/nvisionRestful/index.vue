<template>
  <div class="container mt-2">
    <h1>Nvision SDK: Object Detection</h1>
    <h5>Select an image</h5>
    <div class="my-3">
      <!-- <input type="file" @change="onFileChange"> -->
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
      <div class="style-img">
        <img class="size-img" :src="image" />
      </div>
      <!-- <button @click="removeImage">Remove image</button> -->
    </div>
    <SpinnableButton class="btn btn-success my-4 px-4 py-2" :disabled="disableUpload" :click="request">
      UPLOAD
    </SpinnableButton>

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
    // Icon: require('~/assets/img/upload.png'),
     data: [],
     file: [],
     fileTest: null,
     fileDoc: [],
     companyDocFileList: [],
     image: require('~/assets/img/no-image.jpg'),
     objectDetectionService: null,
     checkUpload: true,
     warningMsg: ''
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
      this.checkUpload = false
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length)
        return;
      this.createImage(files[0]);
    },
    createImage(file) {
      var image = new Image();
      var reader = new FileReader();
      var vm = this;

      reader.onload = (e) => {
        vm.image = e.target.result;
        // console.log(this.image)
      };
      reader.readAsDataURL(file);
    },
    removeImage: function (e) {
      this.image = '';
    },
    request(button) {
      const nvision = require("@nipacloud/nvision");

      const objectDetectionService = nvision.objectDetection({
          apiKey: 'cdb29f355cb4059995e05420dc8d963f657898bf3a5f2f5e7a88c58279f5e4a0a1c4c4cf874594b42e413fc45c425425ac'
      });

      objectDetectionService.predict({
          rawData: this.image.replace(/data:image\/png;base64,/, ""),
          configurations: [
            {
                parameter: "OutputCroppedImage",
                value: "false"
            },
            {
                parameter: "ConfidenceThreshold",
                value: "0.1"
            }
          ]
      }).then((result) => {
         this.warningMsg = 'Upload success'
        this.showModal('alertModal')
          console.log(result);
          button.stop()
      });
    },
    showModal(modal) {
      this.$refs[modal].show()
    },
    hideModal(modal) {
      this.warningMsg = ''
      this.$refs[modal].hide()
    }
  }
}
</script>

<style>
img {
  width: 30%;
  /* margin: auto; */
  display: block;
  margin-bottom: 10px;
}

.btn-img{
  background-color: #f7f7f7;
  border: 1px solid #c1c1c1;
}
.text-img{
  font-weight: 600;
}
.style-img {
  width: 450px;
  height: 450px;
  border: 1px solid rgb(197, 179, 179);
  background-color: #F8EAEF;
}
.style-img .size-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
.text-msg {
  color: green;
  font-weight: 700;
}
</style>
