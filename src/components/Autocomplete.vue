<template>
  <div>
    <div style="p-10">
      <!-- here we use the label from the props -->
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
    <div v-bind:class="{ insvisible: true }">
      <div class="w-1/3 bg-white rounded-lg shadow absolute">
        <ul class="divide-y-2 divide-gray-100" style="width:100%">
          <!-- we use the computed property matches to iterate over -->
          <li
            class="p-3 hover:bg-blue-600 hover:text-blue-200"
            v-bind:key="suggestion.id"
            v-for="suggestion in matches"
          >
            <!-- here we use data to be shown in the link (see list of fruits in the parent) -->
            <a href="#">{{ suggestion.data }}</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    value: '',
    current: 0,
  }),
  // props are a way how we can pass data to a component from its parent
  props: {
    suggestions: {
      type: Array,
      required: true,
    },
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
  computed: {
    // this computed property is basically the same as a method but with advanced caching
    // this function will only reevaluate if one of their reactive dependensies have changed
    // in our case every time when value changes we will reevaluate this function
    // if nothing has changed we will return the cached value
    matches() {
      if (!this.value) {
        return [];
      }

      // simple filter
      const filteredResults = this.suggestions.filter((suggestion) => {
        // we lowercase the search value and the searchable fields
        // to achieve best results
        // you need to know if you need an case sensitive search
        const lowerCaseSuggestion = suggestion.data.toLowerCase();
        const lowerCaseValue = this.value.toLowerCase();

        // return true if the searchable field includes the search value
        return lowerCaseSuggestion.includes(lowerCaseValue);
      });

      return filteredResults;
    },
    hasSuggestions() {
      // check if we have matches to see if we need to show the list
      // for the autocomplete
      return Array.isArray(this.matches) && this.matches.length > 0;
    },
  },
  methods: {},
};
</script>
