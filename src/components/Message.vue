<template>
  <div>
  <div>
    <h2>{{ message }}</h2>
  </div>
  <div>
    <button
      class="bg-blue-500 m-2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      @click="inverseMessage"
    >
      Inverse Message
    </button>
  </div>
  <div>
    <label
      class="block text-gray-700 text-sm font-bold mb-2"
      for="newMessage1"
    >
      Set New Message With v-model on computed properties
    </label>
  </div>
  <div>
    <input
      id="newMessage1"
      class="shadow appearance-none border rounded w-full py-2 px-3
      text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      name="newMessage1"
      type="text"
      v-model="message"
    />
  </div>
    <div>
    <label
      class="block text-gray-700 text-sm font-bold mb-2"
      for="newMessage2"
    >
      Set New Message With @input and :value
    </label>
  </div>
  <div>
    <input
      id="newMessage2"
      class="shadow appearance-none border rounded w-full py-2 px-3
      text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      name="newMessage2"
      type="text"
      :value="message"
      @input="updateMessage"
    />
  </div>
  <div>
    <label
      class="block text-gray-700 text-sm font-bold mb-2"
      for="newMessage3"
    >
      Set New Message With v-model on data
    </label>
  </div>
  <div>
    <input
      id="newMessage3"
      class="shadow appearance-none border rounded w-full py-2 px-3
      text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      name="newMessage3"
      type="text"
      v-model="newMessage"
    />
  </div>
  <div>
    <button
      class="bg-blue-500 m-2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      @click="setMessage({ message: newMessage })"
    >
      Set Message
    </button>
  </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  name: 'Message',
  data: () => ({
    newMessage: '',
  }),
  computed: {
    // we can use gettter and setter for computed values
    // in this way we can use v-model with vuex
    // but the preferred way is :value and @input
    message: {
      set(value) {
        this.setMessage({ message: value });
      },
      get() {
        return this.$store.state.message;
      },
    },
  },
  methods: {
    // we can use the spread operator (...)
    // to spread all the mutations we need to our methods in a component
    // so in this case we can use this.setMessage({ message: 'hello' })
    // instead of this.$store.commit('setMessage', { message: 'whatever })
    // mutations get mapped into methods!!
    ...mapMutations([
      'setMessage',
      'inverseMessage',
    ]),
    updateMessage(e) {
      this.setMessage({ message: e.target.value });
    },
  },
};
</script>
