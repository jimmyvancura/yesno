<template>
  <div class="content">
    <div v-for="question in questions" v-bind:key="question.key">
      {{ question.question }}
      {{ question.answer }}
      <img class="answerImage" :src="question.image"/>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Answers',
  computed: mapState({
      questions: state => state.questions
  })
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.content {
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
