<template>
  <div id="app">
    <v-app>
      <Particles v-if="$vuetify.theme.dark" />
      <v-main fluid fill-height>
        <Navigation />
       
        <v-container>
          <router-view> </router-view>
        </v-container>

     

        <v-footer class="mt-14 d-none" padless dark color="black">
          <v-row justify="center">
            © Anzelika Häberli - {{ new Date().getFullYear() }}
          </v-row>
        </v-footer>
      </v-main>
    </v-app>
  </div>
</template>

<script>
import Navigation from "@/components/Navigation.vue";
import Particles from "@/components/Particles.vue";
export default {
  props: [""],
  components: { Navigation, Particles },
  created() {},
  data: () => ({
  }),
  methods: {
 
  },
  computed: {},
};
</script>

<style>

</style>
