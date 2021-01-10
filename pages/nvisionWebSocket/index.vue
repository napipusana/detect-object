<template>
  <div class="container camera">
    <video autoplay class="feed"></video>
    <div class="my-3">
      <center><button type="button" class="btn btn-primary" @click="takePicture()">Capture</button></center>
    </div>
    <canvas></canvas>
    <!-- <div>
      <PhotoCapture v-model="imageBase64" />
      <VideoCapture uploadUrl="<example-server-address.com>" v-model="videoUrl" />
    </div> -->
    
  </div>
</template>

<script>
// import nvision from "@nipacloud/nvision";
// import {PhotoCapture, VideoCapture} from 'vue-media-recorder'


export default {
  components: {
    // PhotoCapture,
    // VideoCapture
  },
  data() {
    return {
     data: [],
     video: '',
      src: '',
      stream: '',
      hasUserMedia: false,
      styleObject: {
        transform: 'scale(-1, 1)',
        filter: 'FlipH'
      },
      photo: null,
      imageBase64: null,
            videoUrl: null
    }
  },
  mounted() {
    this.init()
  },
  created() {
    
  },
  methods: {
    takePicture() {
      let redio = (window.innerHeight > window.innerWidth) ? 16 / 9 : 9 / 16
      const picture = document.querySelector("canvas")

      const ctx = picture.getContext("2d");
      ctx.imageSmoothingEnabled = true
      ctx.imageSmoothingQuality = "high"
      ctx.drawImage(document.querySelector("video"), 0, 0 , picture.width, picture.height)
    },
    init() {
      this.video = this.$refs.video;
      navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia || navigator.oGetUserMedia;
      
      if (navigator.getUserMedia) {
        let constraints = {
            video: {
              width: {
                min: 640,
                ideal: 1280,
                max: 1920
              },
              height: {
                min: 360,
                ideal: 720,
                max: 1080
              }
            }
          }
          navigator.getUserMedia(constraints, (stream) => {
        // navigator.getUserMedia({ video: true }, (stream) => {
          // this.src = window.URL.createObjectURL(stream);
          // this.stream = stream;
          // this.hasUserMedia = true;
          const videoPlayer = document.querySelector("video")
          videoPlayer.srcObject = stream
          videoPlayer.play()
        }, (error) => {
          console.log(error);
        });
      }
    }
  }
}
</script>

<style>
.camera{
  width: 400vm;
  /* height: 200vh; */
  padding: 25px;
}
.feed{
  width: 100%;
  height: 600px;
  margin: 0 auto;
  background-color: black;
  box-shadow: 4px 4px 12px 0px black;
}
canvas{
  display: block;
  width: 100%;
  max-width: 1280;
  margin: 0;
}
</style>