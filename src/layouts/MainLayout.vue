<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>

       <div class="q-pa-md" >
        <div class="q-gutter-md" >
      <q-input
        v-model="search"
        color="accent"
        debounce="500"
        filled
        placeholder="What are you looking for?"
       
      >
        <template v-slot:append>
          <q-icon name="search" color="secondary" />
        </template>
      </q-input>
        </div>
       </div>
    </q-page-container>
  </q-layout>
</template>

<script>
//import EssentialLink from 'components/EssentialLink.vue'

// const linksData = [
//   {
//     title: 'Docs',
//     caption: 'quasar.dev',
//     icon: 'school',
//     link: 'https://quasar.dev'
//   },
//   {
//     title: 'Github',
//     caption: 'github.com/quasarframework',
//     icon: 'code',
//     link: 'https://github.com/quasarframework'
//   },
//   {
//     title: 'Discord Chat Channel',
//     caption: 'chat.quasar.dev',
//     icon: 'chat',
//     link: 'https://chat.quasar.dev'
//   },
//   {
//     title: 'Forum',
//     caption: 'forum.quasar.dev',
//     icon: 'record_voice_over',
//     link: 'https://forum.quasar.dev'
//   },
//   {
//     title: 'Twitter',
//     caption: '@quasarframework',
//     icon: 'rss_feed',
//     link: 'https://twitter.quasar.dev'
//   },
//   {
//     title: 'Facebook',
//     caption: '@QuasarFramework',
//     icon: 'public',
//     link: 'https://facebook.quasar.dev'
//   },
//   {
//     title: 'Quasar Awesome',
//     caption: 'Community Quasar projects',
//     icon: 'favorite',
//     link: 'https://awesome.quasar.dev'
//   }
// ];

export default {
  data () {
    return {
      search: ''
    }
  }
}
</script>
<style >
.q-field{
  background-color: #533549ec;
   border-radius: 10px;
}
.q-input::placeholder{
 color: #fff !important
}
/* #f_c8ca18f0-e686-4869-9007-ec067ce94820{
   color: #fff !important
} */
.q-field__native, .q-field__prefix, .q-field__suffix, .q-field__input {
  color: #fff !important
}
.q-field--filled .q-field__control{
  border-radius: 10px;
}
.text-accent{
  /* width: 10px; */
  border-radius: 10px;
}
.q-field--filled .q-field__control::after{
  margin-left: 2vw;
margin-right: 2vw;
}
</style>