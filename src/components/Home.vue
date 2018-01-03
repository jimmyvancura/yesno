<template>
  <div class="content">
    <div class="ask">
      <div>{{ msg }}&nbsp;</div>
      <input type="text" v-model="question" />
      <button type="button" @click="getAnswer">Ask</button>
    </div>
    <Answers />
  </div>
</template>

<script>
import axios from 'axios';
import Answers from './Answers'
import store from '../vuex/store'

export default {
  name: 'Home',
  data () {
    return {
      msg: 'Ask me a question ... ',
      question: ''
    } 
  },
  components: {
    Answers
  },
  methods: {
    getAnswer() {
      axios.get('https://yesno.wtf/api')
        .then(response => {
          const data = response.data;
           store.dispatch({
            type: 'addQuestion',
            question: { answer: data.answer, image: data.image, key: store.state.questions.length, question: this.question }
          })
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

.ask {
  display: flex;
  justify-content: center;
  padding: 100px;
  background-color: #ccc;
  border-bottom: solid 1px #bbb;
  font-size: 24px;
}

.results {
  margin-top: 25px;
}

.answerImage {
  width: 100px;
}
</style>
