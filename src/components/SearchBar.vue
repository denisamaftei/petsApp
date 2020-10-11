<template>
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
          <q-icon class="search" name="search" color="secondary" />
        </template>
      </q-input>
            </div>
       </div>
</template>

<script>
export default {
    name: "SearchBar",
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
.q-field__native, .q-field__prefix, .q-field__suffix, .q-field__input {
  color: #fff;
}
.q-field--filled .q-field__control{
  border-radius: 10px;
  flex-direction: row-reverse;
}
.text-accent{
  border-radius: 10px;
}
.q-field--filled .q-field__control::after{
  margin-left: 2vw;
margin-right: 2vw;
}

.search {
  padding-right: 15px;
  opacity: .8;
}
.q-field__append {
  padding-left: 0;
}
</style>

