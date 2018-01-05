<template>
  <div class="content">
    <div class="ask">
      <div class="askControls">
        <input id="askInput" data-vv-validate-on="none" v-validate="'required'" type="text" name="question" v-model="question" placeholder="As me a yes/no question" />
        <button id="askButton" type="button" @click="getAnswer">Ask</button>
      </div>
      <span v-show="errors.has('question')" class="help is-danger">{{ errors.first('question') }}</span>
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
      question: ''
    } 
  },
  components: {
    Answers
  },
  methods: {
    getAnswer() {
      
      this.$validator.validateAll().then((result) => {
        if (!result) {
          return;
        }
        
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
      });
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
  flex-direction: column;
  justify-content: center;
  height: 150px;
  background-color: #ccc;
  border-bottom: solid 1px #bbb;
  font-size: 24px;
}

#askInput {
  width: 400px;
  height: 40px;
  font-size: 20px;
}

#askButton {
  height: 40px;
  font-size: 20px;
}
.results {
  margin-top: 25px;
}

.answerImage {
  width: 100px;
}
</style>
