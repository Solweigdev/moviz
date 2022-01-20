<template>
  <div class="home">
    <navbar-component :user="user" />
    <div class="home_wrapper">
      <div class="home_wrapper_content">
        <div class="home_wrapper_content_left">
          <h1 class="home_wrapper_content_left_title">{{ txt_home_title }}</h1>
          <p>{{ txt_home_description }}</p>
          <router-link to="/game">
            <button @click="" class="btn btn-lg btn-primary home_wrapper_content_left_btn">
              <img :src="Play" alt="">
              {{ txt_home_btn_play }}
            </button>
          </router-link>
        </div>
        <div class="home_wrapper_content_right">
          <img :src="IlluHomeOne" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "./layouts/Navbar.vue";

import IlluHomeOne from './../assets/illu_home_one.svg'
import Play from './../assets/play.svg'

export default {
  name: "Home",

  components: {
    'navbar-component': Navbar
  },

  data: () => ({
    txt_home_title: "Welcome to the Moviz",
    txt_home_description: "You'll be asked a series of \"Yes or No\" questions. Answer as many as you can in the allowed time ! Good luck !",
    txt_home_btn_play: "Play",
    IlluHomeOne,
    Play,
    user: null
  }),

  created() {
    this.$store.commit('SET_NEW_USER');
    this.$store.dispatch("fetchMovies");

  },

  mounted: function() {
    this.user = this.$store.getters.getUser;
    console.log('th', this.user)
  },
}
</script>

<style lang="scss" scoped>
.home {

  &_wrapper {
    @apply container mx-auto px-5 flex flex-col justify-center;
    height: calc(100vh - 72px);

    &_content {
      @apply flex gap-20 items-center;

      &_left {
        @apply w-1/3;

        &_title {
          @apply text-4xl font-bold py-3
        }

        &_description {
          @apply text-sm
        }

        &_btn {
          @apply flex gap-3 my-6
        }
      }

      &_right {
        @apply flex-auto flex justify-end
      }
    }
  }
}
</style>