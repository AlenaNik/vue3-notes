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
import { ref, watch } from 'vue';

export default {
  setup() {
    // for a single value / number
    const count = ref(0)
    const a = ref(0);
    const b = ref(0)
    const history = ref([])

    const increment = () => {
        count.value += 1
    }
    const decrement = () => {
        count.value -= 1
    }

    // computed as an option API

    // const total = computed(() => {
    //    return count.value + numbers.a + numbers.b
    // })

    // // when any of the values changes perform a side effect
    //
    // watch(numbers, (newVal) => {
    //     console.log(newVal.a, newVal.b)
    // }, {
    //     // the flag that would call if one more time
    //     immediate: true
    // })

    // // Vue will figure out what object to watch
    //
    // watchEffect(() => {
    //     console.log(numbers.a)
    // })

    watch([a, b], ([newA, newB], [oldA, oldB]) => {
        console.log(oldA, oldB)
        console.log(newA, newB)
        if (newA !== oldA) {
          history.value.push(`a: ${oldA} -> ${newA}`)
        }
        if (newB !== oldB) {
            history.value.push(`b: ${newB} -> ${oldB}`)
        }
    })

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