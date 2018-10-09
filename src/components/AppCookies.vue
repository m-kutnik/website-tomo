<template>
  <div 
    v-show="!cookie"
    class="cookies">
    Strona www używa plików "Cookies".  Szczegółowe informacje w <span href="/polityka_plikow_cookies.pdf">Polityka plików "Cookies".</span>
    <a @click="setCookie('cookie', 1, 365)">Akceptuję, zwiń!</a>
  </div>
</template>

<script>
export default {
  name: "AppCookies",
  data() {
    return {
      cookie: false,
    }
  },
  mounted() {
    this.cookie = this.getCookieValue("cookie")
  },
  methods: {
    setCookie(name, value, days) {
      const d = new Date()
      document.cookie = `${name}=${value};${d.setTime(
        d.getTime() + days * 24 * 60 * 60 * 1000,
      )};path=/`
      this.cookie = true
    },
    getCookieValue(name) {
      const cookie = RegExp("" + name + "[^;]+").exec(document.cookie)
      return cookie != null ? unescape(cookie[1]) : null
    },
  },
}
</script>

<style lang="scss" scoped>
.cookies {
  position: fixed;
  z-index: 9999;
  bottom: 0px;
  background: rgb(0, 0, 0);
  width: 100%;
  text-align: center;
  color: rgb(255, 255, 255);
  padding: 10px 0px;
  font-size: 12px;
  overflow: hidden;

  & > a {
    color: #ff3100;
    margin: 0 10px;
  }
}
</style>
