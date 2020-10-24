<template>
  <div id ="app" class="position-relative">
    <section class="section pt-150 pb-0 section-components">
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
        <div class="container">
    <div class="row text-center">
      <div class="col-12 ">
      <vue-dropzone class="col-12" ref="dropzone" id="drop1" :options="dropzoneOptions" v-on:vdropzone-sending=fileSelect></vue-dropzone>
                <table v-show="probSeen" class="table-sm table mt-3">
              <thead>
                  <tr>
                      <th>top-5</th>
                      <th>name</th>
                      <th>prob</th>
                      
                  </tr>
              </thead>
              <tbody>
                  <tr>
                      <td>top-1</td>
                      <td>{{pred.class_name[0]}}</td>
                      <td>
                        <div class="progress-wrapper">
                          <div class="progress-primary">
                              <div class="progress-percentage">
                                <span>{{pred.probs[0]}}%</span>
                                </div>
                                </div>
                                <div class="progress" style="height: 8px;">
                                  <div role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" class="progress-bar bg-primary" :style="{'width': `${parseInt(100 * pred.probs[0])}%`}"></div></div></div>
                      </td>
                  </tr>
                  <tr>
                      <td>top-2</td>
                      <td>{{pred.class_name[1]}}</td>
                      <td>
                        <div class="progress-wrapper">
                          <div class="progress-primary">
                              <div class="progress-percentage">
                                <span>{{pred.probs[1]}}%</span>
                                </div>
                                </div>
                                <div class="progress" style="height: 8px;">
                                  <div role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" class="progress-bar bg-primary" :style="{'width': `${parseInt(100 * pred.probs[1])}%`}"></div></div></div>
                      </td>
                  </tr>
                  <tr>
                      <td>top-3</td>
                      <td>{{pred.class_name[2]}}</td>
                      <td>
                        <div class="progress-wrapper">
                          <div class="progress-primary">
                              <div class="progress-percentage">
                                <span>{{pred.probs[2]}}%</span>
                                </div>
                                </div>
                                <div class="progress" style="height: 8px;">
                                  <div role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" class="progress-bar bg-primary" :style="{'width': `${parseInt(100 * pred.probs[2])}%`}"></div></div></div>
                      </td>
                  </tr>
                  <tr>
                      <td>top-4</td>
                      <td>{{pred.class_name[3]}}</td>
                      <td>
                        <div class="progress-wrapper">
                          <div class="progress-primary">
                              <div class="progress-percentage">
                                <span>{{pred.probs[3]}}%</span>
                                </div>
                                </div>
                                <div class="progress" style="height: 8px;">
                                  <div role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" class="progress-bar bg-primary" :style="{'width': `${parseInt(100 * pred.probs[3])}%`}"></div></div></div>
                      </td>
                  </tr>
                  <tr>
                      <td>top-5</td>
                      <td class="align-middle">{{pred.class_name[4]}}</td>
                      <td>
                        <div class="progress-wrapper">
                          <div class="progress-primary">
                              <div class="progress-percentage">
                                <span>{{pred.probs[4]}}%</span>
                                </div>
                                </div>
                                <div class="progress" style="height: 8px;">
                                  <div role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" class="progress-bar bg-primary" :style="{'width': `${parseInt(100 * pred.probs[4])}%`}"></div></div></div>
                      </td>
                  </tr>
              </tbody>
          </table>
      <button class="mt-4 btn btn-primary" @click="removeAllFiles">Reset</button>
      </div>
      <div class="col-sm-4">
      </div>
      
    </div>
</div>
    </section>
  </div>
</template>

<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBwlNqAEil52XRPHmSVb4Luk18qQG9GqcM&sensor=false&language=en"></script>
<script>
  import Vue from "vue";
  import axios from "axios";
  import vueDropzone from 'vue2-dropzone'
  import 'vue2-dropzone/dist/vue2Dropzone.min.css'
  export default {
    components:{
        vueDropzone
    },
    data() {
      return {
        pred: {'class_name': '',
               'probs': ''},
        probSeen: false,
        dropzoneOptions: {
          url: 'https://httpbin.org/post',
          thumbnailWidth: 640,
          thumbnailHeight: 500,
          maxFilesize: 4,
          maxFiles: 1,
          headers: { "My-Awesome-Header": "header value" },
          addRemoveLinks: true
      }
      };
    },
    methods: {
      removeAllFiles() {
          this.$refs.dropzone.removeAllFiles(true)
          var vm = this;
          vm.probSeen = false;
          vm.pred = {'class_name': '',
                     'probs': ''}
        },
      fileSelect(file, xhr, formData) {
        var vm = this; 
        vm.probSeen = true; 
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
