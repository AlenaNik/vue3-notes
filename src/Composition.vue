<template>
    <div>
        <p> Count: {{ count }} </p>
        <p> A. {{ a }} </p>
        <p> B: {{ b }} </p>
        <p> Total : {{ total }} </p>
      <button @click="a++">Increase a</button>
      <button @click="b++">Increase b</button>
      <button @click="increment"> + </button>
      <button @click="decrement"> - </button>
      <div v-for="msg in history" :key="msg">
          {{ msg }}
      </div>
    </div>
</template>

<script>
import { useNumbers } from "./numbers";

export default {

  mounted() {
    console.log('mounted')
  },

  setup() {
    const { count, increment, decrement, a, b, history } = useNumbers();

    return {
        count,
        increment,
        decrement,
        a,
        b,
        history
    }
  }
}
</script>

<style scoped>

</style>