<template>
  <div class="drinks">
    <drink
      v-for="drink in drinks"
      v-bind:key="drink.name"
      v-bind:name="drink"
      v-on:drink_selected_event="drink_selected_handler"
      v-bind:selectedDrink="current_drink"
    ></drink>
  </div>
</template>
    <script>
import drink from "./drinks.vue";
export default {
  name: "drinksSelector",
  components: {
    drink,
  },
  data() {
    return {
      drinks: ["tea", "coffe", "green Tea", "Zouhourat", "baboned"],
      current_drink: null,
    };
  },
  methods: {
    drink_selected_handler(drink_name) {
      this.current_drink = drink_name;
    },
  },
};
</script>

<style scoped>
</style>