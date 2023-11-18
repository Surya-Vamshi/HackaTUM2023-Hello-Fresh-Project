<template>
 <h1>Tests</h1>
  <b-row>
    <b-col v-for="test in tests" v-bind:key="test.id">{{ test.string_id }}</b-col>
  </b-row>
</template>

<script>
import {api} from "@/helpers/helpers";

export default {
  name: 'Group-test',
  data() {
    return {
      tests: []
    };
  },
  async mounted() {
    this.tests = await api.getAllTests();
  },
}
</script>

<style scoped>

</style>
