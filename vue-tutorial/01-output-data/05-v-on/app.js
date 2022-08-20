const app = Vue.createApp({
 methods: {
  doSomeThing() {
    alert('foo');
  }
 }
});

app.mount('#app');