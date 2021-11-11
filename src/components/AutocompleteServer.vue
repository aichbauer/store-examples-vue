<template>
  <div>
    <div style="p-10">
      <label for="" class="block text-gray-700 text-sm font-bold mb-2">{{ label }}</label>
      <!-- we use a v-model on value in our data object -->
      <!-- here we use the placeholder from the props using v-bind: the short version would be : -->
      <input
        class="shadow appearance-none border rounded w-full py-2 px-3
        text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="text"
        v-model="value"
        v-bind:placeholder="placeholder"
      />
    </div>
    <div>
      <div v-bind:class="{ insvisible: true }" class="w-1/3 bg-white rounded-lg shadow asolute">
        <ul class="divide-y-2 divide-gray-100" style="width:100%">
          <!-- we use the computed property matches to iterate over -->
          <li
            class="p-3 hover:bg-blue-600 hover:text-blue-200"
            v-bind:key="suggestion.id"
            v-for="suggestion in suggestions"
          >
            <!--
              here we use PlaceName to be shown in the link
              (see the list that is coming back from our api request)
            -->
            <a href="#">{{ suggestion.PlaceName }}</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import _ from 'lodash';

// register on rapidApi and use your own apiKey to test this example
const apiKey = '';

export default {
  // we use a empty array for the suggestions
  // we will fill the array with data from the api
  data: () => ({
    value: '',
    current: 0,
    suggestions: [],
  }),
  // using props to pass data from the parent
  props: {
    label: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: true,
    },
    searchValue: {
      type: String,
      required: true,
      twoWay: true,
    },
  },
  // when the component is created
  created() {
    // we bind the lodash debounce function
    // that will get called with the getSearchResults function
    // the debounce is 500 ms, so the function passed to the dounce is only evaluated
    // after this time has passed
    // but we will invoke the dobounce on every keystroke
    // see watchers
    this.debouncedGetSuggestions = _.debounce(this.getSearchResults, 500);
  },
  watch: {
    // we watch the value
    // wich is bound to our input via v-model
    // so every time we hit a key when we are inside our input field
    // we invoke the doubounce function
    // if the debounce is invoked within the 500ms again
    // it will not resolve the previous function
    // only if the 500ms have passed the function
    // passed to the debounce will be invoced
    // in this case the getSearchresult with the newValue
    value(newValue) {
      this.debouncedGetSuggestions(newValue);
    },
  },
  computed: {
    // just checking if we should display the autocomplete list
    // if its empty we do not need to show it
    hasSuggestions() {
      return Array.isArray(this.suggestions) && this.suggestions.length > 0;
    },
  },
  methods: {
    // this is an async function
    async getSearchResults(query) {
      // here we pass our query
      // e.g. in our case the newValue in the watcher
      // call the api
      const response = await fetch(`https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/UK/GBP/en-GB/?query=${query}`, {
        method: 'GET',
        headers: {
          'x-rapidapi-host': 'skyscanner-skyscanner-flight-search-v1.p.rapidapi.com',
          'x-rapidapi-key': apiKey,
        },
      });
      // get the json response
      const data = await response.json();
      // get the Places object
      const results = data?.Places;

      // set the suggestions to the results
      // and autocomplete will be shown
      this.suggestions = results || [];
    },
  },
};
</script>
