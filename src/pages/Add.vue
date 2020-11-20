<template>
    <q-page-container>
      <div class="q-pa-md">
        <div class="text-center publish-ad-header">Publică propriul anunț</div>
          <q-input class="ad-info" lazy-rules
            :rules="[ val => val && val.length > 0 || 'Trebuie să introduci un titlu']" 
            standout="bg-teal text-white" v-model="title" label="Titlul anunțului" />
          <q-btn-dropdown color="primary" label="Tipul anunțului">
            <q-list>
              <q-item clickable v-close-popup @click="onItemClick">
                <q-item-section>
                  <q-item-label>Adopție</q-item-label>
                </q-item-section>
              </q-item>

              <q-item clickable v-close-popup @click="onItemClick">
                <q-item-section>
                  <q-item-label>Îngrijire</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-btn-dropdown>
         <q-input class="ad-info" standout="bg-teal text-white" v-model="description" label="Descriere" />
         <q-input v-if="adType === 'caring'" class="ad-info" standout="bg-teal text-white" v-model="price" label="Preț" />
         <q-input v-if="adType === 'adoption'" class="ad-info"  :rules="[
          val => val !== null && val !== '' || 'Please type your age',
          val => val > 0 && val < 100 || 'Please type a real age'
        ]" standout="bg-teal text-white" v-model="age" label="Vârsta animalului" />
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
    }
  },
  data () {
    return {
      title: '',
      type: '',
      description: '',
      price: '',
      age: '',
      adType: 'adoption'
    }
  }
}
</script>
<style >
.publish-ad-header {
  font-size: 3rem;
  margin-top: 2vh;
  margin-bottom: 2vh;
}
.ad-info {
  margin-top: 4vh;
}
</style>