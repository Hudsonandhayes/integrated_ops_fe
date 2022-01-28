<template>
  <vs-popup class="holamundo" title="Lorem ipsum dolor sit amet" :active.sync="open">
    <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
  </vs-popup>
</template>

<script>
    export default {
        name: "user-edit-popup",
      data() {
          return {
            open: false,
          }
      },
      methods: {
        toggleInfoPopup () {
          this.open = !this.open
        },
      }
    }
</script>

<style scoped>

</style>
