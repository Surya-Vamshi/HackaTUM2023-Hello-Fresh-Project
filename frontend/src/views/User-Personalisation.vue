<template>
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
      @nextPage="nextPage('change view')"
  ></DislikePersonalisation>
</template>

<script>
import AllergiesPersonalisation from '@/components/Allergies-Personalisation';
import LifestylePreference from '@/components/Lifestyle-Preference';
import DislikePersonalisation from '@/components/Dislike-Personalisation';

export default {
  name: "User-Personalisation",
  components: {
    AllergiesPersonalisation,
    LifestylePreference,
    DislikePersonalisation
  },
  data() {
    return {
      allergies: true,
      lifestyle: false,
      dislike: false,
      selectedAllergies: [],
      selectedLifestyles: []
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
    }
  }
}
</script>

<style scoped>

</style>
