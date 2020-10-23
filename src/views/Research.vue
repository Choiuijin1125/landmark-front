/<template>
  <div class="position-relative">
    <section class="section pt-150 section-components">
      <div class="container mb-3">
        <h2 class="h2 text-lg-center font-weight-bold mb-2">연구 과정</h2>
        <div class="py-5">
        <div class="container">
          <div class="mb-3">
            <small class="h3 text-uppercase font-weight-bold"
              >인공지능 과제</small
            >
          </div>
        <div class="container">  
          <h4 class="h5 mb-5">
            한국형 랜드마크 데이터셋은 대용량 이미지 DB에서 추상화 수준의 이미지 분류(Instance-Level Recognition)과 이미지 검색(Image Retrieval), 객체 검출(Object Detection) 인공지능 알고리즘 고도화를 목적으로 구축되고 연구 되었음
          </h4>          
          <h4 class="h4 font-weight-bold mb-4">
            A Large Scale Instance-Level Recognition Task
          </h4>
          <h5 class="h5 font-weight-bold mb-4">
            <a href="https://www.aihub.or.kr" target="_blank">검증 모델 : ResNet101 + ArcFace</a>
          </h5>
          <h5 >ResNet101</h5>
          <h6 class="mb-4">
            <ul class="refer_list">
              <li>ILSVRC(ImageNet Large Scale Visual Recognition Challenge) 2015에서 우승한 모델로 이미지 분류 인식 오류의 Human performance 5%를 넘긴 최초 모델</li>
              <li>Kaiming He, et al , “Deep residual learning for image recognition,” The IEEE Conference on Computer Vision and Pattern Recognition (CVPR), 2016 에서 ResNet34가 공개되었으며, ResNet-N에서 N은 모델의 layer 수를 의미함</li>
            </ul>
            <div class="row text-center mb-4 pb-50">
            <div class="col-12">
              <img
                alt="Rounded image"
                class="img-fluid rounded mb-4"
                src="img/source/resnet.png"
                lazy="loaded"
              />
              <small class="d-block font-weight-bold"
                >ResNet-N</small
              >
            </div>
          </div>
          </h6>
          <h5>ArcFace</h5>
          <h6 class="mb-4">
            <ul class="refer_list">
              <li>ArcFace: Additive Angular Margin Loss for Deep Face Recognition  Jiankang Deng, Jia Guo, Niannan Xue, Stefanos Zafeiriou  CVPR, 2019 에서 제안했으며, 기존의 클래스 분류를 위한 활성화 함수인 Softmax loss를 Angular Margin Loss로 변경하여 Kaggle Landmarks Recognition Challenge에서 State Of The Art 주순을 달성하였음</li>
            </ul>
          </h6>
          <div class="row text-center mb-3">
            <div class="col-6">
              <img
                alt="Rounded image"
                class="img-fluid rounded mb-4"
                src="img/source/arcface.png"
                lazy="loaded"
                style="width: 400px; height: 210px"
              />
              <small class="d-block font-weight-bold"
                >Compare Losses</small
              >
            </div>
            <div class="col-6">
              <img
                alt="Rounded image"
                class="img-fluid rounded mb-4"
                src="img/source/arcface2.png"
                lazy="loaded"
                style="width: 400px;"
              />
              <small class="d-block font-weight-bold"
                >Softmax vs ArcFace</small
              >
            </div>
          </div>
          
          <h5>ResNet101 + ArcFace</h5>
          <h6 class="mb-4">
            <ul class="refer_list">
              <li>다양한 영상 분석에서 높은 성능을 보여주며, 영상 분석 딥러닝 알고리즘 중 가장 널리 사용되고 있는 CNN(Convolutional Neural Network)기반의 ResNet-101 모델과 Large-scale face recognition task에서 SOTA 수준을 달성한 ArcFace를 사용</li>
            </ul>
          </h6>
            <div class="row text-center mb-4 pb-50">
            <div class="col-12">
              <img
                alt="Rounded image"
                class="img-fluid rounded mb-4"
                src="img/source/resnet-arcface.png"
                lazy="loaded"
              />
              <small class="d-block font-weight-bold"
                >ResNet101-ArcFace</small
              >
            </div>
          </div>
          <h5>평가 지표</h5>
                    <h6 class="mb-4">
            <ul class="refer_list">
              <li>대용량 이미지 분류 task를 검증하기 위해서 Global Average Precision(GAP)을 채택함 micro Average Precision(μAP)로도 불리우며 이미지 분류 시스템 평가를 위한 측정 지표로 사용됨</li>
            </ul>
          </h6>            
            <div class="row text-center mb-4 pb-50">
            <div class="col-12">
              <img
                alt="Rounded image"
                class="img-fluid rounded mb-4"
                src="img/source/metric.png"
                lazy="loaded"
              />
              <small class="d-block font-weight-bold"
                >micro Average Precision</small
              >
<div class="container mt-3">
            <ul class="text-left">
              <li class=""><span class="font-italic font-weight-bold">N : </span>모든 쿼리에서 모델이 반환한 총 예측 수 </li>
              <li class=""><span class="font-italic font-weight-bold">M : </span>훈련 데이터셋에서 하나 이상의 랜드마크가 표시된 전체 쿼리 수</li>
              <li class=""><span class="font-italic font-weight-bold">P(i) : </span>i 번째 쿼리의 정밀도</li>
              <li class=""><span class="font-italic font-weight-bold">rel(i) : </span>prediction i의 이진 분류기(i번째 에측이 정확하면 1이고, 그렇지 않으면 0)</li>
            </ul>    
            </div>  
            </div>
          </div>
                  
          </div>
        <div class="container">  
          <h4 class="h4 font-weight-bold mb-4">
            A Large Scale Image Retrieval Task
          </h4>
          <h5 class="h5 font-weight-bold mb-4">
            <a href="https://www.aihub.or.kr" target="_blank">검증 모델 : DELF, DELG</a>
          </h5>
          <h5 >DELF</h5>
          <h6 class="mb-4">
            <ul class="refer_list">
              <li>Google Landmark Dataset(GLD)에 사용되는 모델이며 포항공대와 구글이 콜라보로 논문을 발표하였으며 Kaggle Landmark Retrieval Challenge에서 가장 우수한 성능을 달성한 모델</li>
              <li>대용량의 이미지 데이터 셋에 대한 검색 정확도 향상을 목적으로 제안</li>
              <li>ResNet50을 Backbone 으로 사용하고 Image pyramid 기법 및 Attention-based 기법을 사용하여 Keypoint를 추출함</li>
            </ul>
            <div class="row text-center mb-4 pb-50">
            <div class="col-12">
              <img
                alt="Rounded image"
                class="img-fluid rounded mb-4"
                src="img/source/delf.png"
                lazy="loaded"
                style="width:500px"
              />
              <small class="d-block font-weight-bold"
                >DELF</small
              >
            </div>
          </div>
          <div class="ml-3 container">
            <h6>1. Dense localized feature extraction</h6>
            <ul class="refer_list">
              <li>Dense localized feature extraction</li>
              <li>대용량의 이미지 데이터 셋에 대한 검색 정확도 향상을 목적으로 제안</li>
              <li>ResNet50을 Backbone 으로 사용하고 Image pyramid 기법 및 Attention-based 기법을 사용하여 Keypoint를 추출함</li>
            </ul>
            <h6>2. Keypoint selection</h6>
            <ul class="refer_list">
            <li>CNN 기반 class 별 local feature 추출검색에 대한 정확성과 계산 효율성 개선을 위해 Attention weight를 활용, Keypoint feature만을 추출</li></ul>
            <h6>3. Dimensionality reduction</h6>
            <ul class="refer_list">
              <li>L2 normalization(Regularization), PCA를 이용한 차원 축소</li>
            </ul>
            <h6>4. Indexing and retrieval</h6>
            <ul class="refer_list">
              <li>Product Quantization, KD-Tree를 활용 input 이미지로부터 추출된 feature에 대한 검색 알고리즘 </li>
              <li>대용량의 이미지 데이터 셋에 대한 검색 정확도 향상을 목적으로 제안</li>
              <li>Product Quantization : Vector Quantization과 같이 기존 벡터를 여러개의 subvector로 나누어, 유사한 subvector들은 같은 code vector로 변환 </li>
              <li>KD-Tree : K 차원으로 이루어진 vector들에 대하여 각 차원을 순차적으로 돌아가며, binary search tree를 생성</li>
              <li>RANSAC을 활용 feature 위치, 거리 간의 유사도를 계산</li>
              <li>RANSAC : 전체 데이터 셋으로부터 random 샘플링하여 regression 모델을 계산, 각 데이터와의 절대편차를 계산하여 regression model 최적화(전체 데이터 셋에 포함된 outlier로부터 독립적인 regression model을 계산할 수 있음</li>
            </ul>            
            </div>
          </h6>
          <h5>평가 지표</h5>
                    <h6 class="mb-4">
            <ul class="refer_list">
              <li>대용량 이미지 분류 task를 검증하기 위해서 Global Average Precision(GAP)을 채택함 micro Average Precision(μAP)로도 불리우며 이미지 분류 시스템 평가를 위한 측정 지표로 사용됨</li>
            </ul>
          </h6>            
            <div class="row text-center mb-4 pb-50">
            <div class="col-12">
              <img
                alt="Rounded image"
                class="img-fluid rounded mb-4"
                src="img/source/map.png"
                lazy="loaded"
              />
              <small class="d-block font-weight-bold"
                >mean Average Precision</small
              >
<div class="container mt-3">
            <ul class="text-left">
              <li class=""><span class="font-italic font-weight-bold">Q : </span>인덱스 셋 쿼리 이미지 수</li>
              <li class=""><span class="font-italic font-weight-bold">Mq : </span>쿼리 이미지 q와 공통된 랜드마크를 포함하는 인덱스 이미지의 수</li>
              <li class=""><span class="font-italic font-weight-bold">Nq : </span>쿼리 이미지 q에 대한 모델의 예측 수</li>
              <li class=""><span class="font-italic font-weight-bold">Pq : </span>k 번째 쿼리의 정밀도</li>
              <li class=""><span class="font-italic font-weight-bold">relq : </span>prediction q의 이진 분류기(k번째 예측이 정확하면 1이고, 그렇지 않으면 0)</li>
            </ul>    
            </div>  
            </div>
          </div>
                  
          </div>
          <div class="container pt-50">
            <h2 class="h2 text-lg-center font-weight-bold mb-5">참고 문헌</h2>
            <ul class="refer_list">
              <li>
                <a
                  href="https://arxiv.org/abs/1612.06321"
                  target="_blank"
                  title="새창"
                  class="ref_lk"
                  >"Large-Scale Image Retrieval with Attentive Deep Local Features",
                H. Noh, A. Araujo, J. Sim, T. Weyand and B. Han, Proc. ICCV'17
                </a
                >
              </li>
              <li>
                <a
                  href="https://arxiv.org/abs/1812.01584"
                  target="_blank"
                  title="새창"
                  class="ref_lk"
                  >"Detect-to-Retrieve: Efficient Regional Aggregation for Image Search", 
                  M. Teichmann*, A. Araujo*, M. Zhu and J. Sim, Proc. CVPR'19
                </a
                >
              </li>
              <li>
                <a
                  href="https://arxiv.org/abs/2001.05027"
                  target="_blank"
                  title="새창"
                  class="ref_lk"
                  >"Unifying Deep Local and Global Features for Image Search", B. Cao*, A. Araujo* and J. Sim, Proc. ECCV'20
                </a
                >
              </li>
              <li>
                <a
                  href="https://arxiv.org/abs/2004.01804"
                  target="_blank"
                  title="새창"
                  class="ref_lk"
                  >"Google Landmarks Dataset v2 - A Large-Scale Benchmark for Instance-Level Recognition and Retrieval",
                  T. Weyand*, A. Araujo*, B. Cao and J. Sim, Proc. CVPR'20
                </a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
      </div>
    </section>
        <section class="section pt-0 section-components">
      <div class="py-5 bg-secondary">
        <div class="container">
          <div class="mb-3">
            <small class="h3 text-uppercase font-weight-bold"
              >검증 결과</small
            >
          </div>
          <h3 class="h4 font-weight-bold mb-4">Instance-Level Recognition</h3>
          <div class="row text-center">
            <div class="col-6">
              <img
                alt="Rounded image"
                class="img-fluid rounded shadow mb-4"
                src="img/source/resnet-result.png"
                lazy="loaded"
                style="width: 400px;"
              />
              <small class="d-block font-weight-bold"
                >accuracy</small
              >
            </div>
            <div class="col-6">
              <img
                alt="Rounded image"
                class="img-fluid rounded shadow mb-4"
                src="img/source/resnet-result2.png"
                lazy="loaded"
                style="width: 400px;"
              />
              <small class="d-block font-weight-bold"
                >loss</small
              >
            </div>
          </div>
          <div class="row text-center">
            <h3 class="h4 text-left font-weight-bold mb-4 col-12">Image Retrieval</h3>
            <div class="col-6">
              <img
                alt="Rounded image"
                class="img-fluid rounded shadow mb-4"
                src="img/source/resnet-result.png"
                lazy="loaded"
                style="width: 400px;"
              />
              <small class="d-block font-weight-bold"
                >accuracy</small
              >
            </div>
            <div class="col-6">
              <img
                alt="Rounded image"
                class="img-fluid rounded shadow mb-4"
                src="img/source/resnet-result2.png"
                lazy="loaded"
                style="width: 400px;"
              />
              <small class="d-block font-weight-bold"
                >loss</small
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
    },  };
</script>

<style></style>
