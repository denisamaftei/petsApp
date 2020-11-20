<template>
    <q-page-container>      
      <div class="q-pa-md q-gutter-sm row  justify-center items-center content-center">
        <q-banner rounded >
          <template v-slot:avatar>
            <img class="profile-banner" src="../assets/PetsProfile.jpg">
          </template>
        </q-banner>
          <q-avatar class="user-avatar" color="primary" text-color="white">J</q-avatar>
      </div>
    </q-page-container>
</template>
<script>
// import AdContainer from 'components/AdContainer.vue'
import SearchBar from 'components/SearchBar.vue'
export default {
    components: {
        // AdContainer,
        // SearchBar
  },
  data () {
    return {
      tab: 'mails'
    }
  }
}
</script>

<style>

.profile-banner {
  opacity: .5;
  width: 100%
}
.user-avatar{
  /* height: 2em;
  width: 2em; */
}

</style>