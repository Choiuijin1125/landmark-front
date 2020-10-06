/<template>
  <div class="position-relative">
    <section class="section pt-150 section-components">
      <div class="container mb-5">
        <h2 class="h2 text-lg-center font-weight-bold mb-5">시도해보세요 !</h2>
        <div class="mb-3">
          <small class="h3 text-uppercase font-weight-bold"
            >데이터셋 구축 목표</small
          >
        </div>
        <div class="col-12 mb-5">
          <p class="text-center lead">
            전국 50개 도시, 500개 랜드마크, 각 200장 총 500만장의 데이터셋 구축
          </p>
        </div>
      </div>
    </section>
    <section>
        <div class="ct-example-row">
    <div class="row">
      <div class="col-sm-8 ml-5"><span>col-sm-8</span>
      <vue-dropzone ref="myVueDropzone" id="dropzone" :options="dropzoneOptions" v-on:vdropzone-sending=fileSelect></vue-dropzone>
      </div>
      <div class="col-sm-4"><span>{{pred.class_name[0]}}</span></div>
      <button v-on:vdropzone-removed-file=removeImage>reset</button>
    </div>
    <div class="row">
      <div class="col-sm"><span>col-sm</span></div>
      <div class="col-sm"><span>col-sm</span></div>
      <div class="col-sm"><span>col-sm</span></div>
    </div>
</div>
    </section>
  </div>
</template>

<script>
  import Vue from "vue";
  import axios from "axios";
  import vue2Dropzone from 'vue2-dropzone'
  import 'vue2-dropzone/dist/vue2Dropzone.min.css'
  export default {
    components:{
        vueDropzone: vue2Dropzone
    },
    data() {
      return {
        pred: {'class_name': ''},
        dropzoneOptions: {
          url: 'https://httpbin.org/post',
          thumbnailWidth: 640,
          thumbnailHeight: 500,
          maxFilesize: 4,
          maxFiles: 1,
          headers: { "My-Awesome-Header": "header value" }
      }
      };
    },
    methods: {
      removeImage(file) {
          this.$refs.myVueDropzone.removeFile(file)
        },

      fileSelect(file, xhr, formData) {
        var vm = this;  
        formData.append('file', file);
        axios
          .post("http://15.165.113.21:5000/fileUpload", formData, {
            headers: {
              "Content-Type": "multipart/form-data",
              "Access-Control-Allow-Origin": "*",
            },
          })
          .then(function(response) {
            console.log(response)
            vm.pred = response.data
            console.log(vm.pred)
          })
          .catch(function(error) {
            console.log(error);
          });
        },
        
    },
  };
</script>

<style></style>
