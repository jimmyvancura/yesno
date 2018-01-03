<template>
  <div class="content">
    <div class="ask">
      {{ msg }}
      <input type="text" v-model="question" />
      <button type="button" @click="getAnswer">Ask</button>
    </div>
    <div class="results">
      <div v-for="answer in answers" v-bind:key="answer.key">
        {{ answer.question }}
        {{ answer.answer }}
        <img class="answerImage" :src="answer.image"/>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Home',
  data () {
    return {
      msg: 'Ask me a question ...',
      question: '',
      answers: []
    } 
  },
  methods: {
    getAnswer() {
      axios.get('https://yesno.wtf/api')
        .then(response => {
          const data = response.data;
          console.log(this.question)
          this.answers.push({ answer: data.answer, image: data.image, key: this.answers.length, question: this.question });
          this.question = '';
      })
      .catch(e => {
        // this.errors.push(e)
      })
    }
  }
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
