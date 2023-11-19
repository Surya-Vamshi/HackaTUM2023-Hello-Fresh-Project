<template>
  <div class="container">
    <h1 class="title">Which ingredients can you not stand?</h1>
    <b-form-group>
      <b-row class="diet-options">
        <b-col v-for="ingredient in allIngredients" :key="ingredient._id" sm="2"
               :class="['color-circle', selectedIngredients.includes(ingredient._id) ? 'selected' : '']">
          <!-- Invisible checkbox -->
          <input type="checkbox"
                 :id="`checkbox-${ingredient._id}`"
                 v-model="selectedIngredients"
                 :value="ingredient._id"
                 class="invisible-checkbox" />
          <!-- Custom label which controls the checkbox -->
          <label :for="`checkbox-${ingredient._id}`" class="ingredient-label">
            <img :src="ingredient.imageLink" :alt="ingredient.name" class="ingredient-image">
            <span>{{ ingredient.name }}</span>
          </label>
        </b-col>

      </b-row>
    </b-form-group>
    <b-button class="button" @click="goToNextPersonalisationPage()">Next</b-button>
  </div>
</template>

<script>
import {api} from "@/helpers/helpers";

export default {
  name: "Dislike-Personalisation",
  props: {
    selectedAllergies: {
      type: Object,
      default: () => ({})
    },
    selectedLifestyles: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      allIngredients: [],
      selectedIngredients: [],
      allergyList: this.selectedAllergies ? this.selectedAllergies : null,
      lifestyleList: this.selectedLifestyles ? this.selectedLifestyles : null,
    };
  },
  async mounted() {
    // const json = { ...this.selectedAllergies, ...this.selectedLifestyles };
    const json = {
      allergyList: this.selectedAllergies,
      lifestylePrefList: this.selectedLifestyles
    };
    // console.log(json);

    this.allIngredients = await api.getAllowedIngredients(json);
  },
  methods: {
    goToNextPersonalisationPage() {
      // console.log(this.selectedIngredients);
      this.$emit('getRecipes', this.allIngredients, this.selectedIngredients);
    }
      // this.$emit('nextPage', 'lifestyle', this.selectedAllergies);
    },
    isSelected(ingredientId) {
      return this.selectedIngredients.includes(ingredientId);
    },
  }
}
</script>

<style scoped>
.button {
  display: block;
  width: 150px;
  padding: 10px 20px;
  margin: 2rem auto;
  font-size: 1rem;
  color: #fff;
  background-color: #5cb85c;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  transition: background-color 0.2s;
}


.container {
  //margin-top: 100px;
  max-width: 900px;
  //margin: 2rem auto;
  padding: 2rem;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
}

.color-circle {
  margin-top: 8px;
  border: 2px solid #d8d8d8;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 125px;
  height: 125px;
  background-color: #effff4; /* Light background color similar to HelloFresh theme */
  margin-bottom: 0.5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: background-color 0.2s; /* Smooth transition for background color change */

}

.title {
  font-size: 2rem;
  color: #5cb85c;
  text-align: center;
  margin-bottom: 2rem;
}

.diet-options {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.ingredient-image {
  width: 75px; /* Adjust size as needed */
  height: 75px; /* Adjust size as needed */
  object-fit: cover; /* Ensures the image covers the area without stretching */
  border-radius: 50%; /* Circular images */
  margin-bottom: 10px; /* Space between image and checkbox */
}

.invisible-checkbox {
  opacity: 0;
  position: absolute;
  width: 0;
  height: 0;
  margin: 0;
  padding: 0;
}

.color-circle.selected {
  background-color: #c8e6c9; /* New background color when selected */
  transform: scale(1.1); /* Optional: scale up the circle slightly when selected */
}
</style>
