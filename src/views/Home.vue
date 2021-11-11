<template>
  <div class="home">
    <Autocomplete
      v-bind:suggestions="fruits"
      v-bind:searchValue.sync="searchValue"
      label="Suche"
      placeholder="Appl..."
    />
    <hr />
    <Autocomplete-server
      v-bind:searchValue.sync="searchValue2"
      label="Suche"
      placeholder="Los A..."
    />
    <hr />
    <Counter />
    <hr />
    <Message />
    <hr />
    <Todo />
  </div>
</template>

<script>
// @ is an alias to /src
import Counter from '@/components/Counter.vue';
import Message from '@/components/Message.vue';
import Todo from '@/components/Todo.vue';

// these components are not using the store
// as these were created before the vuex session
import Autocomplete from '@/components/Autocomplete.vue';
import AutocompleteServer from '@/components/AutocompleteServer.vue';

export default {
  name: 'Home',
  data: () => ({
    searchValue: '',
    searchValue2: '',
    fruits: [
      { data: 'apple', id: 0 },
      { data: 'orange', id: 1 },
      { data: 'pear', id: 2 },
      { data: 'mango', id: 3 },
      { data: 'grapefruit', id: 4 },
      { data: 'mandarin', id: 6 },
      { data: 'lime', id: 7 },
      { data: 'nectarine', id: 8 },
      { data: 'peache', id: 9 },
      { data: 'plum', id: 10 },
      { data: 'strawberry', id: 11 },
      { data: 'rasperry', id: 12 },
      { data: 'blueberry', id: 13 },
      { data: 'kiwifruit', id: 14 },
      { data: 'passionfruit', id: 15 },
      { data: 'watermelon', id: 16 },
      { data: 'rockmelon', id: 17 },
      { data: 'honeydew melon', id: 18 },
    ],
  }),
  components: {
    Counter,
    Message,
    Todo,
    Autocomplete,
    AutocompleteServer,
  },
};
</script>

<style>
@import url("https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css");
#app {
  margin: 2rem;
}
hr {
  margin: 5rem 0;
}
h2 {
  font-size: 3rem;
}
</style>
