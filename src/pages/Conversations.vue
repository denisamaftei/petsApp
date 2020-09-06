<template>
    <q-page-container>
       <div> Test </div>
        <!-- <AdContainer></AdContainer> -->
        <SearchBar></SearchBar>
    </q-page-container>
</template>
<script>
// import AdContainer from 'components/AdContainer.vue'
import SearchBar from 'components/SearchBar.vue'
export default {
    components: {
        // AdContainer,
        SearchBar
  },
  data () {
    return {
      tab: 'mails'
    }
  }
}
</script>