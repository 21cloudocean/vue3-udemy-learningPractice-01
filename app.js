const content = 'OMGCHANGE'
const link = 'https://www.baidu.com'
const app = Vue.createApp({
  data() {
    return {
      courseGoal: content,
      vueLink: link
    }
  },
  methods: {
    outputGoal() {
      const randomNum = Math.random()
      if (randomNum < 0.5) {
        return 'Learn Vue!'
      } else {
        return 'Master Vue!'
      }
    }
  }
})
app.mount('#user-goal')
