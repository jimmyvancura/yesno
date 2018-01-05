<template>
  <div class="question">
    Images and answers provided by: <a href="https://yesno.wtf" target="_new">https://yesno.wtf</a>
    <div v-for="(question, index) in questions" v-bind:key="question.key">
      <div class="questionText">{{ question.question }}</div>
      <img v-bind:class="[(index===0) ? 'answerImage' : 'answerImageSmall']" :src="question.image"/>
      <div>({{ question.answer }})</div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Answers',
  computed: mapState({
      questions: state => state.questions.reverse()
  })
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.question {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}

.questionText {
  margin-top: 20px;
  font-size: 24px;
  font-weight: bold;
}

.answerImage {
  width: 300px;
}

.answerImageSmall {
  width: 100px;
}
</style>
