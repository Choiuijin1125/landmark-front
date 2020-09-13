<template>
  <footer class="footer has-cards">
    <div class="container container-lg"></div>
    <div class="container">
      <div class="row row-grid align-items-center my-md">
        <div class="col-lg-12">
          <h4 class="text-primary font-weight-light mb-2">
            한국 랜드마크 이미지 데이터셋은 한국정보화진흥원의 지원사업으로
            구축되었습니다.
          </h4>
          <h5 class="mb-0 font-weight-light">
            <a href="https://www.aihub.or.kr" target="_blank">AI Hub</a> 에서
            다양한 AI데이터를 제공하고 있습니다.
          </h5>
        </div>
      </div>
      <div class="container">
        <div class="row row-grid my-md justify-content-between">
          <img
            src="img/theme/team-2-800x800.jpg"
            class="rounded-circle"
            style="width: 150px;"
            alt="pcn"
          />
          <img
            src="img/theme/team-2-800x800.jpg"
            class="rounded-circle"
            style="width: 150px;"
            alt="dacon"
          />
          <img
            src="img/theme/team-2-800x800.jpg"
            class="rounded-circle"
            style="width: 150px;"
            alt="dacon"
          />
          <img
            src="img/theme/team-2-800x800.jpg"
            class="rounded-circle"
            style="width: 150px;"
            alt="dacon"
          />
        </div>
      </div>
      <hr />
      <div class="row align-items-center justify-content-md-between">
        <div class="col-md-6">
          <div class="copyright">
            &copy; {{ year }}
            <a href="https://www.dacon.io" target="_blank" rel="noopener">DACON Inc</a>
          </div>
        </div>
        <div class="col-md-6">
          <ul class="nav nav-footer justify-content-end">
            <li class="nav-item">
              <a href="https://www.dacon.io" class="nav-link" target="_blank">DACON Inc</a>
            </li>
            <li class="nav-item">
              <a href="https://www.dacon.io" class="nav-link" target="_blank">About Us</a>
            </li>
            <li class="nav-item">
              <a
                href="https://github.com/creativetimofficial/argon-design-system/blob/master/LICENSE.md"
                class="nav-link"
                target="_blank"
              >MIT License</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  name: "starter-footer",
  data() {
    return {
      year: new Date().getFullYear()
    };
  }
};
</script>
<style></style>
