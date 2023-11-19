<template>
  <div>
    <b-navbar toggleable="lg" type="dark" class="banner_colour" >
      <!--<b-navbar-brand href="#">NavBar</b-navbar-brand>-->

      <!-- <img class="header" height="30" alt="HelloFresh" src="https://cdn.hellofresh.com/logo/Hello_Fresh_Lockup.png" id="desktop-navigation-logo" data-test-id="desktop-logo" style="display: block;"> -->
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

    <div>
      <div class="project_title component text-center">
        <b-row>
          <b-col>
            <img alt="Lemon" :src="require('@/assets/hello fresh logo.png')" class="lemon">
          </b-col>
          <b-col>
            <h1 class="title"> Try Out These Recipes! </h1>
          </b-col>
          <b-col align-self="end">
            <img alt="Lemon" :src="require('@/assets/hello fresh logo.png')" class="lemon">
          </b-col>
        </b-row>
      </div>
    </div>
  </div>

  <div>
    <button v-b-popover.hover.top="'Click here if you want to see the recipes in the tiles format'" @click="changeView('view1')">Square View</button>
    <button v-b-popover.hover.top="'Click here if you want to see the recipes in the list format'" @click="changeView('view2')">List View</button>

    <!-- OUR FIRST (TILE) VIEW OF THE RECIPES -->
    <div v-if="currentView === 'view1'">
      <b-card title="We've gathered the most fitting recipes for you...">
        <b-row>
        <div v-for="recipe in allRecipes.filteredRecipes" v-bind:key="recipe._id" class="recipe_card">
          <b-card
              :title=recipe.name
              :img-src=recipe.imageLink
              img-alt="Image"
              img-top
              tag="article"
              class="mb-2 p-3 hover-effect"
          >
            <!-- <b-card-text>
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </b-card-text> -->
            <b-button :href=recipe.websiteURL target="_blank" class="recipe_button">Get the recipe</b-button>
          </b-card>
        </div>
        </b-row>
      </b-card>
      <b-card title="We've also suggested other recipes... (we will remove the ingredient you don't like if you order)">
        <b-row>
        <div v-for="recipe in allRecipes.recipesWithDislikedIngredients" v-bind:key="recipe._id" class="recipe_card">
          <b-card
              :title=recipe.name
              :img-src=recipe.imageLink
              img-alt="Image"
              img-top
              tag="article"
              class="mb-2 p-3 hover-effect"
          >
            <!-- <b-card-text>
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </b-card-text> -->
            <b-button :href=recipe.websiteURL target="_blank" class="recipe_button">Get the recipe</b-button>
          </b-card>
        </div>
        </b-row>
      </b-card>
    </div>

    <!-- OUR SECOND (LIST) VIEW OF THE RECIPES -->
    <div v-if="currentView === 'view2'">
       <b-card title="We've gathered the most fitting recipes for you...">
        <div class="container-sm">
        <b-list-group>
          <b-list-group-item v-for="recipe in allRecipes.filteredRecipes" v-bind:key="recipe._id" href="#" class="hover-effect">
            <div class="d-flex w-100 justify-content-between align-items-center">
              <h5 class="mb-1">{{ recipe.name }}
                <img height="250" alt="HelloFresh" :src=recipe.imageLink data-test-id="desktop-logo" style="display: block;">
              </h5>
              <div class="w-50 align-items-center"> <b-button :href=recipe.websiteURL target="_blank" class="recipe_button">Get the recipe</b-button> </div>
            </div>
          </b-list-group-item>
        </b-list-group>
      </div>
      </b-card>
      <b-card title="We've also suggested other recipes... (we will remove the ingredient you don't like if you order)">
        <div class="container-sm">
          <b-list-group>
            <b-list-group-item v-for="recipe in allRecipes.recipesWithDislikedIngredients" v-bind:key="recipe._id" href="#" class="hover-effect">
              <div class="d-flex w-100 justify-content-between align-items-center">
                <h5 class="mb-1">{{ recipe.name }}
                  <img height="250" alt="HelloFresh" :src=recipe.imageLink data-test-id="desktop-logo" style="display: block;">
                </h5>
                <div class="w-50 align-items-center"> <b-button :href=recipe.websiteURL target="_blank" class="recipe_button">Get the recipe</b-button> </div>
              </div>
            </b-list-group-item>
          </b-list-group>
        </div>
      </b-card>
    </div>
  </div>
</template>

<script>
import {api} from "@/helpers/helpers";

export default {
  name: "Recipe-Overview",
  props: {
    allowedIngredients: {
      type: Object,
      default: () => ({})
    },
    dislikedIngredients: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      currentView: 'view1',
      allRecipes: [],
    };
  },
  async mounted() {
    const json = {
      allowedIngredients: this.allowedIngredients,
      dislikedIngredients: this.dislikedIngredients
    };
    this.allRecipes = await api.getAllRecipes(json);
    console.log(this.allRecipes);
  },
  methods: {
    changeView(view) {
      this.currentView = view;
    },
  },
};
</script>

<style scoped>
.header {
  height: 50px !important;
}
.project_title {
  //background-color: #047A46;
  padding: 10px;
}
.lemon {
  width: 110px;
  height: 100px;
}
.mb-2 {
  //border: 4px solid #9ECE1A;
  width: 400px;
  height: 400px;
  background-color: #9ECE1A;
  color: #fff;
  font-family: 'Helvetica', Arial, sans-serif; /* TODO: change the font? */
  .hover-effect:hover {
    background-color: #fff;
  }
}
.recipe_card {
  padding: 40px;
  width: min-content;
}
.banner_colour {
  background-color: #047A46;
  color: #fff;
}
.title {
  padding: 40px;
}
button {
  background-color: #9ECE1A;
  font-family: 'Helvetica', Arial, sans-serif; /* TODO: change the font? */
  border-radius: 10%; /* Make the button round */
  padding: 8px 12px; /* Adjust padding as needed */
}
.recipe_button {
  background-color: #047A46;
  color: #fff;
}
.container-sm {
  padding: 40px;
  width: 700px;
}
.list-group {
  border: 4px solid #047A46;
}
.list-group-item {
  border-bottom: 2px solid #9ECE1A;
}
.hover-effect:hover {
  background-color: #d4e5d2;
  color: #000;
}
.hover-effect:hover img { /* Style for the image inside the hovered list item */
  border: 4px solid #9ECE1A;
  padding: 1px;
}
img {
  padding: 5px;
}
.mb-1 {
  padding: 20px;
}
</style>
