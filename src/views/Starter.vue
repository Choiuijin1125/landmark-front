<template>
        <div class="position-relative">
            <!-- shape Hero -->
            <section class="section-shaped my-0">
                <div class="position-absolute row mt-5 pl-5 pt-100" style="z-index:1">
                            <div class="col-lg-12 text-white">
                                <h1 class="display-4">NIA 랜드마크 AI 데이터셋
                                    <span class="font-weight-light">500만장의 AI 학습용 랜드마크 데이터셋 </span>
                                </h1>
                            </div>
                        </div>
                <div class="shape-skew">
                    <b-carousel id="carousel1"
                                    controls
                                    indicators>
                            <!-- Text slides with image -->
                            <b-carousel-slide img-src="img/icons/common/main.jpg"></b-carousel-slide>
                            <b-carousel-slide img-src="img/icons/common/main_slide8.jpg"></b-carousel-slide>
                            <b-carousel-slide img-src="img/icons/common/main_slide9.jpg"></b-carousel-slide>
                        </b-carousel>
                </div>
                <div class="container shape-container d-flex">
                    <div class="col px-0">
                        
                    </div>
                </div>
            </section>
            <!-- 1st Hero Variation -->
        </div>
</template>
<script>
import { BCarousel } from "bootstrap-vue/esm/components/carousel/carousel";
import { BCarouselSlide } from "bootstrap-vue/esm/components/carousel/carousel-slide";


export default {
  components: {
    BCarousel,
    BCarouselSlide
  }
};
</script>
<style>
</style>
