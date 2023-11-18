<template>
  <!-- Header -->
  <h1>Fellow Fresh</h1>
  <br>
  <!-- Information -->
  <nav class="navbar navbar-expand-lg navbar-dark" style="background-color: #047A46;">
    <a class="navbar-brand menu-text" href="#">Menu</a>
    <div class="row">
      <div class="col-xs-12">
        <div class="text-right">
          <a href="http://localhost:8080/help" class="btn-default text-white" role="button">Help</a>
        </div>
      </div>
    </div>
  </nav>

  <div class = "p-4">
  <!-- tabs bar -->
  <div>
    <b-tabs content-class="mt-3">
      <b-tab title="Allergies" active>
        <p class="left-align-text">
          <!-- Checkbox group for multiple selections -->
          <b-form-group
              label="Please check the food you're allergic to:"
              v-slot="{ ariaDescribedby }"
              class="checkbox-group"
          >
            <b-form-checkbox-group
                v-model="selectedMultiple"
                :aria-describedby="ariaDescribedby"
                name="food-allergy-multiple"
                class="custom-checkbox"
            >
              <!-- Display each checkbox option on a new line -->
              <span v-for="(option, index) in options" :key="option.value">
          <b-form-checkbox
              :value="option.value"
              :aria-describedby="ariaDescribedby"
              :name="`option-${index}`"
              class="custom-checkbox"
              plain
          >
            {{ option.text }}
          </b-form-checkbox>
          <br> <!-- Force a new line between options -->
        </span>
            </b-form-checkbox-group>
          </b-form-group>
        </p>


      </b-tab>
      <b-tab title="Lifestyle Preferences" active>
        <p class="left-align-text">
          <!-- Radio group for single selection -->
          <b-form-group
              label="Please select your diet:"
              v-slot="{ ariaDescribedby }"
              class="radio-group"
          >

              <!-- Display each radio option on a new line -->
              <b-form-radio
                  v-for="(option, index) in singleOptions"
                  :key="index"
                  :value="option.value"
                  :aria-describedby="ariaDescribedby"
                  :name="`single-option-${index}`"
                  class="custom-radio"
                  plain
              >
                {{ option.text }}
              </b-form-radio>
              <br> <!-- Force a new line between options -->
          </b-form-group>
        </p>
      </b-tab>



      <b-tab title="Dislikes" active>
        <p class="left-align-text">
          <!-- Checkbox group for multiple selections -->
          <b-form-group
              label="Please check the food you don't like:"
              v-slot="{ ariaDescribedby }"
              class="checkbox-group"
          >
            <b-form-checkbox-group
                v-model="selectedMultiple"
                :aria-describedby="ariaDescribedby"
                name="food-allergy-multiple"
                class="custom-checkbox"
            >
              <!-- Display each checkbox option on a new line -->
              <span v-for="(option, index) in options" :key="option.value">
          <b-form-checkbox
              :value="option.value"
              :aria-describedby="ariaDescribedby"
              :name="`option-${index}`"
              class="custom-checkbox"
              plain
          >
            {{ option.text }}
          </b-form-checkbox>
          <br> <!-- Force a new line between options -->
        </span>
            </b-form-checkbox-group>
          </b-form-group>
        </p>
      </b-tab>
    </b-tabs>


  </div>
  <!-- finish button -->
  <b-button variant="success">Search for recepies</b-button>
  </div>
</template>

<script >
export default {
  data() {
    return {
      selectedMultiple: [], // For multiple selections
      selectedSingle: null, // For single selection
      options: [
        { text: 'Orange', value: 'orange' },
        { text: 'Apple', value: 'apple' },
        { text: 'Pineapple', value: 'pineapple' },
        { text: 'Grape', value: 'grape' }
      ],
      singleOptions: [ // New set of options for single selection
        { text: 'vegan', value: 'vegan' },
        { text: 'vegetarian', value: 'vegetarian' },
        { text: 'pescetarian', value: 'pescetarian' },
        { text: 'no restrictions', value: 'no restrictions' }
      ]
    }
  }
}
</script>

<style>
.checkbox-group .custom-checkbox {
  margin-left: -10px; /* Adjust the value to move the checkboxes to the left */
}

.custom-checkbox label {
  text-align: left; /* Left-align the checkbox text */
}

.left-align-text {
  text-align: left; /* Left-aligns the text inside the <p> element */
  padding-left: 20px;
}

.checkbox-group .custom-checkbox label {
  text-align: left; /* Left-aligns the checkbox labels */
}

.checkbox-group .custom-checkbox .checkbox-label {
  padding-left: 10px; /* Adjust the value to move the text to the right */
}

.menu-text {
  margin-left: 20px; /* Adds a 20px left margin to the "Menu" text */
}


</style>