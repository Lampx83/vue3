<template>
  <div class="flex w-full flex-wrap">
    <h1 class="w-full text-center text-3xl m-5">Mardown App</h1>
    <section class="flex w-full h-screen m-5">
      <article class="w-1/2">
        <textarea
          ref="markdownTextArea"
          class="w-full h-full"
          :value="text"
          @input="update"
        ></textarea>
      </article>
      <article class="w-1/2 border bg-gray-100" v-html="markedText"></article>
    </section>
  </div>
</template>

<script>
import { marked } from "marked";
import debounce from '../utilities/mixins/debounce'
export default {
  mixins:[debounce],
  data() {
    return {
      text: "",
    };
  },
  mounted() {
    this.$refs.markdownTextArea.focus()
  },
  computed: {
    markedText() {
      return marked.parse(this.text);
    },
  },
  methods:{
    update(e){
      const task=()=>(this.text = e.target.value);
      this.debounce(task,500)
    }
  }
};
</script>

<style>
</style>