<template>
  <div class="question">
    <div v-for="question in questions" v-bind:key="question.key">
      <div>{{ question.question }}</div>
      <img class="answerImage" :src="question.image"/>
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
}

.results {
  margin-top: 25px;
}

.answerImage {
  width: 200px;
}
</style>
