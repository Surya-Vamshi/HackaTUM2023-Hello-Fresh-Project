<template>
  <div>
    <b-navbar toggleable="lg" type="dark" class="banner_colour" >
      <img class="header" height="30" alt="HelloFresh" :src="require('@/assets/hello fresh logo.png')" id="desktop-navigation-logo" data-test-id="desktop-logo" style="display: block;">

      <b-col class="d-flex align-items-center">
        <div class="project_title component text-center">
          <h1 class="font-weight-bold">Fellow Fresh</h1>
        </div>
      </b-col>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
        </b-nav-form>

        <b-nav-item-dropdown text="Language" right>
          <b-dropdown-item href="#">EN</b-dropdown-item>
          <b-dropdown-item href="#">ES</b-dropdown-item>
          <b-dropdown-item href="#">DE</b-dropdown-item>
          <b-dropdown-item href="#">FA</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template #button-content>User</template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>

      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script setup>

</script>

<style scoped>
.header {
  height: 50px !important;
}
.banner_colour {
  background-color: #047A46;
  color: #fff;
}
button {
  background-color: #9ECE1A;
  font-family: 'Helvetica', Arial, sans-serif;
  border-radius: 10%; /* Make the button round */
  padding: 8px 12px; /* Adjust padding as needed */
}

::v-deep .dropdown-toggle {
  color: white !important;
}
</style>
