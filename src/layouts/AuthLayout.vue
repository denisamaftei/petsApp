<template>
    <q-layout  view="lHh Lpr lFf">
       
      <q-icon name="fas fa-paw"  style="font-size: 70px;" color="accent" class="absolute-center image" />
      <div class="text-center absolute-center text">Pet A&C</div>
       <q-page-container>
           <router-view/>
        </q-page-container>
    </q-layout>
</template>
<script>
export default {
    name: 'AuthLayout'

}
</script>
<style >
.image{
    top: 20%;
}
.text {
    top: 30%;
    font-size: 25px;
    font-family: cardo;
    font-weight: 900;
}
</style>