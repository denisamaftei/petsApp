<template>
    <q-page >
        <SearchBar></SearchBar>
        <AdContainer></AdContainer>
    </q-page>
   
</template>
<script>
import AdContainer from 'components/AdContainer.vue'
import SearchBar from '../components/SearchBar.vue'
export default {
    name: 'Caring',
    components: {
        AdContainer,
        SearchBar
  },
  data () {
    return {
      tab: 'mails'
    }
  }
}
</script>