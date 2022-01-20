<template>
  <div class="navbar">
    <div class="navbar_wrapper">
      <div class="navbar_logo">
        <img :src="Logo" :alt="text_alt_logo">
      </div>
      <div v-if="user" class="navbar_right">
        <div class="navbar_right_avatar">
            <p class="navbar_right_avatar_pseudo">{{ text_welcome }} <span class="font-bold">{{ user.pseudo }}</span></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from './../../assets/logo.svg'
export default {
  name: "Navbar",

  props: ['user'],

  data: () => ({
    Logo,
    text_alt_logo: 'Logo Moviz',
    text_welcome: 'Welcome'
  }),

  mounted() {
    console.log('ii', this.user)
  },

  watch: {
    user: function() {
      return this.user
    }
  }

}
</script>

<style lang="scss" scoped>
.navbar {
  @apply mb-2 shadow-lg bg-white text-neutral-content w-full;

  &_wrapper {
    @apply container mx-auto flex justify-between w-full;
  }

  &_logo {
    @apply flex-1 px-2 mx-2 lg:flex
  }

  &_right {

    &_avatar {
      @apply relative inline-flex;

      &_pseudo {
        @apply text-black capitalize;
      }
    }
  }
}
</style>