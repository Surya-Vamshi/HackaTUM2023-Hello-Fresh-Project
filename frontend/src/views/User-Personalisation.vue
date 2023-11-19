<template>
  <header-component></header-component>
  <allergies-personalisation
      v-if="allergies"
      @nextPage="nextPage"
  ></allergies-personalisation>
  <LifestylePreference
      v-if="lifestyle"
      @nextPage="nextPage"
  ></LifestylePreference>
  <DislikePersonalisation
      v-if="dislike"
      :selectedAllergies="selectedAllergies"
      :selectedLifestyles="selectedLifestyles"
      @getRecipes="getRecipes"
  ></DislikePersonalisation>
  <recipe-overview
    v-if="recipes"
    :allowedIngredients="allowedIngredients"
    :dislikedIngredients="dislikedIngredients"
  ></recipe-overview>
</template>

<script>
import HeaderComponent from '@/components/Header-Component';
import AllergiesPersonalisation from '@/components/Allergies-Personalisation';
import LifestylePreference from '@/components/Lifestyle-Preference';
import DislikePersonalisation from '@/components/Dislike-Personalisation';
import RecipeOverview from '@/components/Recipe-Overview';

export default {
  name: "User-Personalisation",
  components: {
    HeaderComponent,
    AllergiesPersonalisation,
    LifestylePreference,
    DislikePersonalisation,
    RecipeOverview
  },
  data() {
    return {
      allergies: true,
      lifestyle: false,
      dislike: false,
      recipes: false,
      selectedAllergies: [],
      selectedLifestyles: [],
      allowedIngredients: [],
      dislikedIngredients: []
    }
  },
  methods: {
    nextPage(page, data) {
      if (page === 'lifestyle') {
        this.allergies = false;
        this.lifestyle = true;
        this.selectedAllergies = data;
        // console.log(this.selectedAllergies);
      } else if (page === 'dislike') {
        this.lifestyle = false;
        this.dislike = true;
        this.selectedLifestyles = data;
        // console.log(this.selectedLifestyles);
      }
    },
    getRecipes(allowedIngredients, dislikedIngredients) {
      this.dislike = false;
      this.recipes = true;
      this.allowedIngredients = allowedIngredients;
      this.dislikedIngredients = dislikedIngredients;
    }
  }
}
</script>

<style scoped>

</style>
