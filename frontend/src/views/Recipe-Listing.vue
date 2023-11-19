<template>
  <div>
    <b-navbar toggleable="lg" type="dark" class="banner_colour" >
      <!--<b-navbar-brand href="#">NavBar</b-navbar-brand>-->
      <img height="50" alt="HelloFresh" src="https://cdn.hellofresh.com/logo/Hello_Fresh_Lockup.png" id="desktop-navigation-logo" data-test-id="desktop-logo" style="display: block;">

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
          </b-nav-form>

          <b-nav-item-dropdown text="Lang" right>
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

  <h1 class="title"> Listing! </h1>

  <div class="container-sm">
    <b-list-group>
      <b-list-group-item href="#">
        <div class="d-flex w-100 justify-content-between align-items-center">
          <h5 class="mb-1">Crispy Cheddar Chicken
            <img height="250" alt="HelloFresh" src="https://img.hellofresh.com/w_3840,q_auto,f_auto,c_limit,fl_lossy/c_fill,f_auto,fl_lossy,h_432,q_auto/hellofresh_s3/image/64107d1ffca8e2850e0dc925-eac2e91a.jpg" data-test-id="desktop-logo" style="display: block;">
          </h5>
          <div class="w-50 align-items-center"> <b-button href="#" class="recipe_button">Get the recipe</b-button> </div>
        </div>
        <small>3 days ago</small>

        <!-- <b-button href="#" class="btn_colour">Get the recipe</b-button> -->

      </b-list-group-item>

      <b-list-group-item href="#" class="flex-column align-items-start">
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1">Recipe 2</h5>
          <small class="text-muted">5 days ago</small>
        </div>

        <small class="text-muted">Bla bla.</small>
      </b-list-group-item>
    </b-list-group>
  </div>
</template>

<script setup>

</script>

<style scoped>
.title {
  padding: 40px;
}
.banner_colour {
  background-color: #047A46;
  color: #fff;
}
.container-sm {
  width: 700px;
}
.list-group {
  border: 4px solid #047A46;
}
.list-group-item {
  border-bottom: 2px solid #9ECE1A;
}
img {
  padding: 10px;
}
.mb-1 {
  padding: 10px;
}
.recipe_button {
  background-color: #047A46;
  color: #fff;
}
</style>