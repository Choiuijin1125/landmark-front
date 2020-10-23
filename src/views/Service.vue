/<template>
  <div class="position-relative">
    <section class="section pt-150 section-components">
      <div class="container mb-5">
        <h2 class="h2 text-lg-center font-weight-bold mb-5">시도해보세요 !</h2>
        <div class="container">
          <div class="mb-3">
            <small class="h3 mb-3 text-uppercase font-weight-bold"
              >응용 서비스 시나리오</small
            >
            <p class="h5">Pretrained Resnet101+Arcface 모델을 Docker와 Tensorflow Serving을 이용하여 적재하였으며, 아래와 같은 파이프라인으로 시스템을 구축하여 사용자가 이미지를 업로드 시 랜드마크 이미지의 추론값을 Web UI에 표기되게 구현하였음. 추후 사용자가 랜드마크 이미지의 추가 메타 정보를 구축하여 지능형 관광 시스템 또는 이미지 분류 검색 엔진등에 활용이 가능함</p>
          </div>
                  <div class="col-12 mb-3">
          <img
                alt="Rounded image"
                class="img-fluid rounded mt-4 mb-4"
                src="img/source/service.png"
                lazy="loaded"
                style="width: 1000px;"
              />
        </div>
        <div class="container">
          <ul>
            <li>사용자가 Web UI를 이용하여 이미지 업로드</li>
            <li>Vue js 프론트엔드 서버에서 Flask 백엔드 서버로 이미지 데이터 전송</li>
            <li>Flask 백엔드 서버에서 Pretrained Resnet101+Arcface 모델이 적재되어있는 Docker + Tensorflow 서버로 이미지 데이터의 Inference 요청</li>
            <li>추론(Inference) 결과를 REST API 형태로 GET하여 모델이 이미지를 분류한 결과와 Top-5 확률을 Web UI에 표기</li>
          </ul>
        </div>
        </div>
      </div>
    </section>
    <section>
        <div class="ct-example-row text-center">
    <div class="row">
      <div class="col-sm-12 text-center">
      <vue-dropzone ref="myVueDropzone" id="dropzone" :options="dropzoneOptions" v-on:vdropzone-sending=fileSelect></vue-dropzone>
      </div>
      <div class="col-sm-4"><span>{{pred.class_name[0]}}</span><button v-on:vdropzone-removed-file=removeImage>reset</button></div>
      
    </div>
</div>
    </section>
  </div>
</template>

<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBwlNqAEil52XRPHmSVb4Luk18qQG9GqcM&sensor=false&language=en"></script>
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
