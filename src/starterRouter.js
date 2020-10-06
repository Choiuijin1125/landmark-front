import Vue from "vue";
import Router from "vue-router";
import MainHeader from "./layout/starter/StarterHeader";
import SubHeader from "./layout/starter/SubHeader";
import Footer from "./layout/starter/StarterFooter";
import Starter from "./views/Starter.vue";
import Description from "./views/Description.vue";
import Service from "./views/Service.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "starter",
      components: {
        header: MainHeader,
        default: Starter,
        footer: Footer,
      },
    },
    {
      path: "/description",
      name: "description",
      components: {
        header: SubHeader,
        default: Description,
        footer: Footer,
      },
    },
    {
      path: "/research",
      name: "research",
      components: {
        header: SubHeader,
        default: Description,
        footer: Footer,
      }
    },
     {
        path: "/service",
        name: "service",
        components: {
          header: SubHeader,
          default: Service,
          footer: Footer,
        },
    },
  ],
});
