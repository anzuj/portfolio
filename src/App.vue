<template>
  <div id="app">
    <v-app>
      <v-main fluid fill-height>
          <Navigation />
        <v-container>
          <router-view class=""> </router-view>
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
export default {
  props: [""],
  components: { Navigation },
  created() {},
  data: () => ({
    contactInfo: [
      { icon: "phone", text: "Tel +41 62 889 79 00" },
      { icon: "mdi-fax", text: "Fax +41 62 889 79 01" },
      { icon: "mail", text: "info@evatherm.com" },
    ],
  }),
  methods: {},
  computed: {},
};
</script>

<style></style>
