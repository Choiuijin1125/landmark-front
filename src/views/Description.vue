/<template>
  <div class="position-relative">
    <section class="section pt-150 pb-2 section-components">
      <div class="container mb-5">
        <h2 class="h2 text-lg-center font-weight-bold mb-5">데이터셋 소개</h2>
        <div class="mb-3">
          <small class="h3 text-uppercase font-weight-bold"
            >데이터셋 구축 목표</small
          >
        </div>
        <div class="col-12 mb-3">
          <p class="text-center font-weight-bold lead">
            전국 50개 도시, 500개 랜드마크, 이미지별 200장 총 500만장의 데이터셋 구축
          </p>
        </div>
        <div class="col-12 mb-3">
          <img
                alt="Rounded image"
                class="img-fluid rounded mt-4 mb-4"
                src="img/source/main-summary.svg"
                lazy="loaded"
                style="width: 1000px;"
              />
        </div>
        <div class="col-12 mb-5">
          <table class="table-sm table">
              <thead>
                  <tr>
                      <th class="text-center">#</th>
                      <th>구 분</th>
                      <th>랜드마크 수</th>
                      <th>시 군 구</th>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                      <td class="text-center">1</td>
                      <td>강원도</td>
                      <td>1790개</td>
                      <td>00개 도시</td>
                  </tr>
                  <tr>
                      <td class="text-center">2</td>
                      <td>경기도</td>
                      <td>7264개</td>
                      <td>00개 도시</td>
                  </tr>
                  <tr>
                      <td class="text-center">3</td>
                      <td>경상남도</td>
                      <td>2569개</td>
                      <td>00개 도시</td>
                  </tr>
                  <tr>
                      <td class="text-center">4</td>
                      <td>경상북도</td>
                      <td>2711개</td>
                      <td>00개 도시</td>
                  </tr>
                  <tr>
                      <td class="text-center">5</td>
                      <td>광주광역시</td>
                      <td>463개</td>
                      <td>00개 도시</td>
                  </tr>
                  <tr>
                      <td class="text-center">6</td>
                      <td>대구광역시</td>
                      <td>748개</td>
                      <td>00개 도시</td>
                  </tr>
                  <tr>
                      <td class="text-center">7</td>
                      <td>부산시</td>
                      <td>2565개</td>
                      <td>00개 도시</td>
                  </tr>
                  <tr>
                      <td class="text-center">8</td>
                      <td>서울특별시</td>
                      <td>2226개</td>
                      <td>00개 도시</td>
                  </tr>
                  <tr>
                      <td class="text-center">9</td>
                      <td>울산광역시</td>
                      <td>403개</td>
                      <td>00개 도시</td>
                  </tr>
                  <tr>
                      <td class="text-center">10</td>
                      <td>인천광역시</td>
                      <td>1011개</td>
                      <td>00개 도시</td>
                  </tr>
                  <tr>
                      <td class="text-center">11</td>
                      <td>전라남도</td>
                      <td>1791개</td>
                      <td>00개 도시</td>
                  </tr>
                  <tr>
                      <td class="text-center">12</td>
                      <td>전라북도</td>
                      <td>1791개</td>
                      <td>00개 도시</td>
                  </tr>
                  <tr>
                      <td class="text-center">13</td>
                      <td>제주특별자치도</td>
                      <td>1001개</td>
                      <td>00개 도시</td>
                  </tr>
                  <tr>
                      <td class="text-center">14</td>
                      <td>충청남도</td>
                      <td>1261개</td>
                      <td>00개 도시</td>
                  </tr>
                  <tr>
                      <td class="text-center">15</td>
                      <td>충청북도</td>
                      <td>1038개</td>
                      <td>00개 도시</td>
                  </tr>
              </tbody>
          </table>
        </div>
        <div class="col-12 mb-5">
          <div class="row text-center">
            <div class="col-6">
              <img
                alt="Rounded image"
                class="img-fluid rounded mb-4"
                src="img/source/main_static.png"
                lazy="loaded"
                style="width: 500px;"
              />
            </div>
            <div class="col-6">
              <img
                alt="Rounded image"
                class="img-fluid rounded mb-4"
                src="img/source/main_geo.png"
                lazy="loaded"
                style="width: 500px;"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section pt-1 section-components">
      <div class="py-5 bg-secondary">
        <div class="container">
          <div class="mb-3">
            <small class="h3 text-uppercase font-weight-bold"
              >대표 도면</small
            >
          </div>
          <div class="row text-center">
            <div class="col-12">
              <img
                alt="Rounded image"
                class="img-fluid rounded shadow mb-4"
                src="img/source/main_landmark.jpg"
                lazy="loaded"
                style="width: 1920px;"
              />
              <small class=" h4 d-block text-uppercase font-weight-bold"
                >광화문</small
              >
            </div>
            

          </div>
          <div class="text-left">
            <div class="json">
              <div class="jsonreg">{</div>
              <div class="jsonk">"info" : info,</div>
              <div class="jsonk">"images" : [image],</div>
              <div class="jsonk">"annotations": [annotation],</div>
              <div class="jsonk">"licenses"   : [license],</div>
              <div class="jsonreg">}</div>
              <br>
              <div class="jsonreg">info{</div>
              <div class="jsonk">"description"       : int,</div>
              <div class="jsonk">"version"    : str,</div>
              <div class="jsonk">"description": str,</div>
              <div class="jsonk">"contributor": str,</div>
              <div class="jsonk">"url"        : str,</div>
              <div class="jsonk">"date_created" : datetime,</div>
              <div class="jsonreg">}</div>
              <br>
              <div class="jsonreg">image{</div>
              <div class="jsonk">"id"           : int,</div>
              <div class="jsonk">"width"        : int,</div>
              <div class="jsonk">"height"       : int,</div>
              <div class="jsonk">"file_name"    : str,</div>
              <div class="jsonk">"license"      : int,</div>
              <div class="jsonk">"flickr_url"   : str,</div>
              <div class="jsonk">"coco_url"     : str,</div>
              <div class="jsonk">"date_captured": datetime,</div>
              <div class="jsonreg">}</div>
              <br>
              <div class="jsonreg">license{</div>
              <div class="jsonk">"id"             : int,</div>
              <div class="jsonk">"name"           : str,</div>
              <div class="jsonk">"url"            : str,</div>
              <div class="jsonreg">}</div>
</div>
          </div>
        </div>
      </div>
    </section>
    <section class="section pt-0 section-components">
      <div class="py-1">
        <div class="container">
          <div class="mb-3">
            <small class="h3 text-uppercase font-weight-bold"
              >데이터셋 분석</small
            >
          </div>
          <h3 class="h4 font-weight-bold mb-4">Exploratory Data Analysis</h3>
          <div class="row text-center">
            <div class="col-4">
              <img
                alt="Rounded image"
                class="img-fluid rounded shadow mb-4"
                src="img/icons/common/eda.png"
                lazy="loaded"
                style="width: 300px;"
              />
              <small class="d-block text-uppercase font-weight-bold"
                >Image</small
              >
            </div>
            <div class="col-4">
              <img
                alt="Rounded image"
                class="img-fluid rounded shadow mb-4"
                src="img/icons/common/eda.png"
                lazy="loaded"
                style="width: 300px;"
              />
              <small class="d-block text-uppercase font-weight-bold"
                >Image</small
              >
            </div>
            <div class="col-4">
              <img
                alt="Rounded image"
                class="img-fluid rounded shadow mb-4"
                src="img/icons/common/eda.png"
                lazy="loaded"
                style="width: 300px;"
              />
              <small class="d-block text-uppercase font-weight-bold"
                >Image</small
              >
            </div>
          </div>
          <div class="row text-center">
            <div class="col-4">
              <img
                alt="Rounded image"
                class="img-fluid rounded shadow mb-4"
                src="img/icons/common/eda.png"
                lazy="loaded"
                style="width: 300px;"
              />
              <small class="d-block text-uppercase font-weight-bold"
                >Image</small
              >
            </div>
            <div class="col-4">
              <img
                alt="Rounded image"
                class="img-fluid rounded shadow mb-4"
                src="img/icons/common/eda.png"
                lazy="loaded"
                style="width: 300px;"
              />
              <small class="d-block text-uppercase font-weight-bold"
                >Image</small
              >
            </div>
            <div class="col-4">
              <img
                alt="Rounded image"
                class="img-fluid rounded shadow mb-4"
                src="img/icons/common/eda.png"
                lazy="loaded"
                style="width: 300px;"
              />
              <small class="d-block text-uppercase font-weight-bold"
                >Image</small
              >
            </div>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script>
  import Vue from "vue";
  import axios from "axios";
  export default {
    data() {
      return {
        uploadedImage: "",
      };
    },
    methods: {
      fileSelect() {
        console.log(this.$refs);
        this.uploadedImage = this.$refs.uploadedImage.files[0];
        var frm = new FormData();
        frm.append("file", this.uploadedImage);
        axios
          .post("http://15.165.113.21:5000/fileUpload", frm, {
            headers: {
              "Content-Type": "multipart/form-data",
              "Access-Control-Allow-Origin": "*",
            },
          })
          .then(function(response) {
            console.log(response);
          })
          .catch(function(error) {
            console.log(error);
          });
      },
      getPredict: function() {
        var frm = new FormData();
        frm.append("file", this.uploadedImage);
        axios
          .post("http://15.165.113.21:5000/fileUpload", frm, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          })
          .then(function(response) {
            console.log(response);
          })
          .catch(function(error) {
            console.log(error);
          });
      },
    },
  };
</script>

<style></style>
