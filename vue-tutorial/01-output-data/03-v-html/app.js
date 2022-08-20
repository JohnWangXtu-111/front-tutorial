const app = Vue.createApp({
  data() {
    return {
      htmlStr: '<span>Vue</span> and <span>React</span> '
    }
  }
});

app.mount('#app');