const content = 'OMGCHANGE'
const link = 'https://www.baidu.com'
const app = Vue.createApp({
  data() {
    return {
      courseGoal: content,
      vueLink: link
    }
  }
})
app.mount('#user-goal')
