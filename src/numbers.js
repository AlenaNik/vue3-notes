import { ref, watch } from 'vue';

export function useNumbers() {

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
