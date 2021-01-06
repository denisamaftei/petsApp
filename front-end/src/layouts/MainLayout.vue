<template>
  <q-layout view="lHh Lpr lFf">
   <q-page-container> 
     <router-view />
     </q-page-container>
      <!-- <SearchBar></SearchBar>   -->
 <q-footer elevated >
          <q-tabs
        v-model="tab"
      >
        <q-route-tab  to="/" name="adoption" icon="fas fa-cat"  />
        <q-route-tab to="/caring" name="caring" icon="fas fa-hands-helping"  />
        <q-route-tab to="/add" class="add" name="add" icon="fas fa-plus-circle" />
        <q-route-tab to="/conversations" alert="white" name="conversations" icon="fas fa-comment" />
        <q-route-tab  to="/profile" name="profile" icon="fas fa-user" />
      </q-tabs>
    </q-footer>
  </q-layout>
</template>

<script>
// import SearchBar from 'components/SearchBar.vue'

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
  // components: {
  //   SearchBar
  // },
  name: 'MainLayout',
  data () {
    return {
      tab: 'mails'
    }
  }
}
</script>
<style>

.q-tab__alert {
    top: 10px;
    right: 4px;
}
.q-tab__icon{
  color: #F6B042
}
.add .q-tab__icon{
background-color: white;
border-radius: 100%;
font-size: 40px;
}
#q-app {
      overflow-x: hidden;
      font-family: JosefinSans, Arial, Helvetica, sans-serif;
}
</style>
