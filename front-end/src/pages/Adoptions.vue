<template>
    <q-page >
        <SearchBar></SearchBar>
        <AdContainer @click.native="handleClick"></AdContainer>
    </q-page>
   
</template>
<script >
import AdContainer from 'components/AdContainer.vue'
import SearchBar from '../components/SearchBar.vue'
export default {
    name: 'Adoptions',
    components: {
        AdContainer,
        SearchBar
  },
  methods: {
    handleClick() {
      this.$router.push({ name: "Ad" });
    }

  },
  data () {
    return {
      tab: 'mails'
    }
  }
}
</script>