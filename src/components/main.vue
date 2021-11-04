<template>
  <div class="main-app">
      <router-view/>
  </div>
</template>

<script>

//import footerApp from '@/components/footer.vue';
//import { requestApi } from "@/api/index.js"
//import headeApp from '@/views/header/headeApp.vue';

export default {
  name: 'App',

  components: {
  //  footerApp,
  //  headeApp
  },

  data: () => ({
    scrollTop:window.scrollY,
  }),

  computed:{
    
  },
  methods: {
   
  },
 async mounted() {
  
  }, 
};
</script>
<style>
  .main-ecommerce{
    background: #F1F1F1 !important;
  }
  .v-icon-flotante{
    background: #F0F0F0 !important;
  }
</style>