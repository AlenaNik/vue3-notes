<template>
    <div>
        <p> Count: {{ count }} </p>
        <p> A. {{ numbers.a }} </p>
        <p> B: {{ numbers.b }} </p>
        <p> Total : {{ total }} </p>
      <button @click="increase('a')">Increase a</button>
      <button @click="increase('b')">Increase b</button>
      <button @click="increment"> + </button>
      <button @click="decrement"> - </button>
    </div>
</template>

<script>
import { ref, reactive, computed } from 'vue';

export default {
  setup() {
    // for a single value / number
    const count = ref(0)
    // for complex objects / values
    const numbers = reactive({
      a: 0,
      b: 0
    })

    const increase = (num) => {
        numbers[num] += 1
    }

    const increment = () => {
        count.value += 1
    }
    const decrement = () => {
        count.value -= 1
    }

    const total = computed(() => {
       return count.value + numbers.a + numbers.b
    })

    return {
        count,
        increment,
        decrement,
        increase,
        numbers,
        total
    }
  }
}
</script>

<style scoped>

</style>