<template>
  <div class="container">
    <h1 class="title">Which lifestyle suits you best?</h1>
    <b-form-group>
      <b-row class="diet-options">
        <b-col v-for="lifestyle in allLifestyles" v-bind:key="lifestyle" sm="2" class="color-circle">
          <b-form-radio inline
                           v-model="selectedLifestyles"
                           :key="lifestyle"
                           :value="lifestyle"
          >
            {{ lifestyle }}
          </b-form-radio>
        </b-col>
      </b-row>
    </b-form-group>
    <b-button class="button" @click="goToNextPersonalisationPage()">Next</b-button>
  </div>
</template>

<script>
export default {
  name: "Lifestyle-Preference",
  data() {
    return {
      allLifestyles: [
          'Meat', 'Seafood', 'Vegetarian', 'Vegan', 'All of these'
      ],
      selectedLifestyles: [],
    }
  },
  methods: {
    goToNextPersonalisationPage() {
      if (this.selectedLifestyles.length !== 0) {
        if (this.selectedLifestyles === 'All of these') {
          this.selectedLifestyles = [
            'Meat', 'Seafood', 'Vegetarian', 'Vegan'
          ]
        } else if (this.selectedLifestyles === 'Meat') {
          this.selectedLifestyles = [
            'Meat', 'Vegetarian', 'Vegan'
          ]
        } else if (this.selectedLifestyles === 'Seafood') {
          this.selectedLifestyles = [
            'Seafood', 'Vegetarian', 'Vegan'
          ]
        } else if (this.selectedLifestyles === 'Vegetarian') {
          this.selectedLifestyles = [
            'Vegetarian', 'Vegan'
          ]
        } else {
          this.selectedLifestyles = [
            'Vegan'
          ]
        }
      }
      this.$emit('nextPage', 'dislike', this.selectedLifestyles);
    }
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
  margin-top: 100px;
  max-width: 900px;
  margin: 2rem auto;
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
  width: 150px;
  height: 150px;
  background-color: #effff4; /* Light background color similar to HelloFresh theme */
  margin-bottom: 0.5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

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
</style>
