<template>
  <vs-tabs :position="isSmallerScreen ? 'top' : 'left'" class="tabs-shadow-none" id="profile-tabs" :key="isSmallerScreen">

    <!-- GENERAL -->
    <vs-tab icon-pack="feather" icon="icon-user" :label="!isSmallerScreen ? 'Users' : ''">
      <div class="tab-general md:ml-4 md:mt-0 mt-4 ml-0">
        <all-users-list />
      </div>
    </vs-tab>
    <vs-tab icon-pack="feather" icon="icon-lock" :label="!isSmallerScreen ? 'Invitations' : ''">
      <div class="tab-change-pwd md:ml-4 md:mt-0 mt-4 ml-0">
        <pending-users-list />
      </div>
    </vs-tab>
  </vs-tabs>
</template>

<script>
import AllUsersList from './AllUsersList.vue'
import PendingUsersList from './PendingUsersList.vue'

export default {
  components: {
    AllUsersList,
    PendingUsersList,
  },
  data () {
    return {

    }
  },
  computed: {
    isSmallerScreen () {
      return this.$store.state.windowWidth < 768
    }
  }
}
</script>

<style lang="scss">
#profile-tabs {
  .vs-tabs--content {
    padding: 0;
  }
}
</style>
