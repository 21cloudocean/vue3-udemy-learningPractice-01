const content = 'OMGCHANGE'
const content2 = 'STAYSTILL'
const link = 'https://www.baidu.com'
const app = Vue.createApp({
  data() {
    return {
      courseGoal: 'Learn VUE better',
      courseGoalA: content,
      courseGoalB: '<h2 style="color:red">Be Amazing!</h2>',
      vueLink: link
    }
  },
  methods: {
    outputGoal() {
      const randomNum = Math.random()
      console.log(randomNum)
      if (randomNum < 0.5) {
        return this.courseGoalA
      } else {
        return this.courseGoalB
      }
    }
  }
})
app.mount('#user-goal')
console.log(app)
