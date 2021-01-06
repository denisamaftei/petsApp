<template>
    <q-page-container>
        <div class="q-pa-md q-gutter-md">
          <q-list bordered class="rounded-borders">
            <q-item-label class="conv-header" header>Conversații</q-item-label>

            <q-item to="/message" clickable v-ripple>
              <q-item-section avatar>
                <q-avatar>
                  <img src="https://cdn.quasar.dev/img/avatar2.jpg">
                </q-avatar>
              </q-item-section>

                <q-item-section>
                  <q-item-label lines="1">Brunch this weekend?</q-item-label>
                    <q-item-label caption lines="2">
            <span class="text-weight-bold">Janet</span>
            -- I'll be in your neighborhood doing errands this
            weekend. Do you want to grab brunch?
          </q-item-label>
        </q-item-section>

        <q-item-section side top>
          1 min ago
        </q-item-section>
      </q-item>

      <q-separator inset="item" />

      <q-item to="/message" clickable v-ripple>
        <q-item-section avatar>
          <q-avatar>
            <img src="https://cdn.quasar.dev/img/avatar4.jpg">
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label lines="1">Linear Project</q-item-label>
          <q-item-label caption lines="2">
            <span class="text-weight-bold">John</span>
            -- Can we schedule a call for tomorrow?
          </q-item-label>
        </q-item-section>

        <q-item-section side top>
          1 min ago
        </q-item-section>
      </q-item>
    </q-list>
  </div>
    </q-page-container>
</template>
<script>
export default {
    components: {
        // AdContainer,
  },
  data () {
    return {
      tab: 'mails'
    }
  }
}
</script>
<style> 
.rounded-borders .q-list .q-list--bordered {
  max-width: initial;
}
.conv-header {
  font-weight: 900;
  font-family: Cardo-Bold, Arial, Helvetica, sans-serif;
  font-size: 5vw;
}
</style>