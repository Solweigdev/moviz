<template>
  <div class="game">
    <navbar-component/>
    <div class="game_wrapper">
      <div class="game_wrapper_header">
        <div class="game_wrapper_header_timer">
          <p class="game_wrapper_header_timer_text">{{ text_timer }}</p>
        </div>
        <div class="game_wrapper_header_score">
          <p class="game_wrapper_header_score_new">{{ text_new_score_title }} {{ text_new_score_result }}</p>
          <p class="game_wrapper_header_score_last">{{ text_last_score_title }} {{ text_last_score_result }}</p>
        </div>
      </div>
      <div class="game_wrapper_ask">
        <div class="game_wrapper_ask_cover"
             style="background: url(https://www.wallpapertip.com/wmimgs/2-22688_star-wars-wallpapers-mobile-for-wallpaper-background-star.jpg) center center; background-size: cover">
        </div>
        <div class="game_wrapper_ask_actor"
             style="background: url(http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcQNmLkoJVzOGYfIRSIpNlTeZo7T0bGfr793J7LxfY-u1-m_E9hEbaE3Q4HbuI0V) center center; background-size: cover">
        </div>
        <h3 class="game_wrapper_ask_title">Did <span class="text-orange-400">{{ text_actor }}</span> play in <span
            class="text-pink-400">{{ text_movies }}</span> ?</h3>
      </div>
      <div class="game_wrapper_answer">
        <button class="btn game_wrapper_answer_yes">{{ text_answer_yes }}</button>
        <button class="btn game_wrapper_answer_no">{{ text_answer_no }}</button>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "./layouts/Navbar.vue";

export default {
  name: "Game",

  components: {
    'navbar-component': Navbar
  },

  data: () => ({
    text_timer: '60',
    text_new_score_title: 'score :',
    text_new_score_result: '5',
    text_last_score_title: 'higth score :',
    text_last_score_result: '10',
    text_actor: 'Robert Downey Jr.',
    text_movies: 'Stars wars',
    text_answer_yes: 'Yes',
    text_answer_no: 'No'
  })
}
</script>

<style lang="scss" scoped>
.game {

  &_wrapper {
    @apply container mx-auto px-5;

    &_header {
      @apply flex justify-between my-5;

      &_timer {
        @apply bg-orange-400 h-12 w-12 rounded-full flex justify-center items-center;

        &_text {
          @apply text-white font-bold;
        }
      }

      &_score {
        @apply flex flex-col justify-end items-end;

        &_new {
          @apply font-bold;
        }

        &_last {
          @apply text-gray-400
        }
      }
    }

    &_ask {
      @apply my-5 relative;

      &_cover {
        @apply w-full border border-8 border-gray-300 rounded h-72;
      }

      &_actor {
        @apply absolute border border-8 border-gray-300 rounded top-32 right-5 w-40 h-72;
      }

      &_title {
        @apply font-bold text-3xl my-8
      }
    }

    &_answer {
      @apply mt-40 flex gap-10;

      &_yes {
        @apply flex-1 h-60 bg-green-500 hover:bg-green-800 border-none text-3xl
      }

      &_no {
        @apply flex-1 h-60 bg-red-500 hover:bg-red-800 border-none text-3xl
      }
    }
  }
}
</style>