import Vue from "vue"
import Router from "vue-router"
import Home from "./views/Home.vue"

Vue.use(Router)

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "Strona główna",
      component: Home,
    },
    {
      path: "/home-garden",
      name: "Home & Garden",
      component: () =>
        import(/* webpackChunkName: "products-home" */ "./views/ProductsHome.vue"),
    },
    {
      path: "/professional",
      name: "Professional",
      component: () =>
        import(/* webpackChunkName: "products-professional" */ "./views/ProductsProfessional.vue"),
    },
    {
      path: "/wynajem",
      name: "Wynajem",
      component: () =>
        import(/* webpackChunkName: "rental" */ "./views/Rental.vue"),
    },
    {
      path: "/o-firmie",
      name: "O firmie",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue"),
    },
    {
      path: "/dojazd",
      name: "Dojazd",
      component: () =>
        import(/* webpackChunkName: "location" */ "./views/Location.vue"),
    },
    {
      path: "/kontakt",
      name: "Kontakt",
      component: () =>
        import(/* webpackChunkName: "contact" */ "./views/Contact.vue"),
    },
  ],
})
