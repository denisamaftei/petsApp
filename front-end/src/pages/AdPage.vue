<template>
    <q-page-container>
      <div class="q-pa-md">
        <div class="q-gutter-md">
            <q-banner rounded >
          <template v-slot:avatar>
            <img class="profile-banner" src="../assets/PetsProfile.jpg">
          </template>
        </q-banner>
        <div class="text-center publish-ad-header">Adopție</div>

          <!-- <q-input class="ad-info" lazy-rules
            :rules="[ val => val && val.length > 0 || 'Trebuie să introduci un titlu']" 
            standout="bg-teal text-white"  v-model="title" label="Titlul anunțului" />
          <q-select behavior="dialog" standout="bg-teal text-white" class="ad-info" v-model="optionType" :options="adTypes" label="Tipul anunțului" />
         <q-input class="ad-info" standout="bg-teal text-white" v-model="description" label="Descrierea anunțului" />
         <q-input v-if="optionType === 'Îngrijire'" class="ad-info" standout="bg-teal text-white" lazy-rules :rules="[
          val => val > 0 || 'Trebuie să introduci un preț în cifre'
        ]" v-model="price" label="Preț" />
         <q-input v-if="optionType === 'Adopție'" class="ad-info" lazy-rules :rules="[
          val => val !== null && val !== '' || 'Trebuie să introduci vârsta animalului',
          val => val > 0 && val < 100 || 'Trebuie să introduci o vârstă reală'
        ]" standout="bg-teal text-white" v-model="age" label="Vârsta animalului" /> -->
        </div>
        </div>
    </q-page-container>
</template>
<script>
export default {
    components: {
        // AdContainer,
  },
  methods: {
    onItemClick () {
      // console.log('Clicked on an Item')
    },
      onRejected (rejectedEntries) {
      // Notify plugin needs to be installed
      // https://quasar.dev/quasar-plugins/notify#Installation
      this.$q.notify({
        type: 'negative',
        message: `${rejectedEntries.length} file(s) did not pass validation constraints`
      })
    }
  },
  data () {
    return {
      title: '',
      type: '',
      description: '',
      price: '',
      age: '',
      selected: '',
      adTypes: ['Adopție','Îngrijire'],
      optionType: null
    }
  }
}
</script>
<style lang="scss" scoped>
.publish-ad-header {
  font-size: 10vw;
  margin-top: 2vh;
  margin-bottom: 2vh;
  font-weight: 900;
  font-family: Cardo-Bold, Arial, Helvetica, sans-serif;
}
.ad-info {
  margin-top: 5vh;
}
.q-uploader {
  width: initial
}

</style>