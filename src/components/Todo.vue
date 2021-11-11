<template>
  <div>
    <h2>Todo List</h2>
    <ul>
      <li v-bind:key="todo.id" v-for="todo in todos">
        {{todo.text}} - done:
        {{todo.done}}
      </li>
    </ul>
    <h2>Done TODOS</h2>
    <ul>
      <li v-bind:key="todo.id" v-for="todo in getDoneTodos">
        {{todo.text}} - done:
        {{todo.done}}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Todo',
  computed: {
    todos: {
      get() {
        return this.$store.state.todos;
      },
    },
    // we can use the spreadOperator to get our getters from the store on our component
    // so we can use this.getDoneTodos()
    // instead of this.$store.getters.getDoneTodos()
    ...mapGetters([
      'getDoneTodos',
    ]),
  },
  methods: {

  },
};
</script>

<style scoped>
  ul {
    list-style: none;
  }
</style>
