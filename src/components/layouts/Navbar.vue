<template>
  <div class="navbar">
    <div class="navbar_wrapper">
      <div class="navbar_logo">
        <img :src="Logo" :alt="text_alt_logo">
      </div>
      <div class="navbar_right">
        <div class="navbar_right_avatar">
            <img class="navbar_right_avatar_img" src="https://i.pravatar.cc/500?img=32">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from './../../assets/logo.svg'
export default {
  name: "Navbar",

  data: () => ({
    Logo,
    text_alt_logo: 'Logo Moviz'
  })
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

      &_img {
        @apply rounded-full w-10 h-10 m-1;
      }
    }
  }
}
</style>