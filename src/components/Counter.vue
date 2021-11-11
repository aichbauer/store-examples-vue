<template>
  <div>
    <h2>{{ count }}</h2>
    <button
      class="bg-blue-500 m-2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      @click="increment"
    >
      Increment
    </button>
    <button
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      @click="incrementAsync"
    >
      Increment Async
    </button>
  </div>
</template>

<script>
export default {
  name: 'Counter',
  computed: {
    count() {
      // get the value from the $store
      // keep in mind that the $store has a state
      // and we want to access the state not the $store
      return this.$store.state.count;
    },
  },
  methods: {
    increment() {
      // a mutation is always sync
      // to change data in our state
      // we can only commit mutations
      // there is no other way
      this.$store.commit('increment');
    },
    incrementAsync() {
      // dispatching actions
      // an action can be async
      // and commit many mutations
      this.$store.dispatch('incrementAsync');
    },
  },
};
</script>
