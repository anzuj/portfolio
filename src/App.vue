<template>
  <div id="app">
    <v-app>
      <Particles/>

      <v-main fluid fill-height>
        <Navigation />
        <div id="shootingStar" :class="{ 'shoot-star': shoot }"></div>

        <v-container style="max-width:1000px">
          <v-fade-transition :hide-on-leave="true">
            <router-view> </router-view>
          </v-fade-transition>
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
  mounted() {
    this.setShootingStar();
  },
  props: [""],
  components: { Navigation, Particles },
  created() {},
  data: () => ({
    shoot: false,
  }),
  methods: {
    setShootingStar() {
      setInterval(() => {
        this.shoot = true;
      }, 10000);

      setInterval(() => {
        this.shoot = false;
      }, 12000);
    },
  },
  computed: {},
};
</script>

<style>
#shootingStar {
  width: 25px;
  height: 2px;
  right: -50px;
  transform: rotate(145deg);
  border-radius: 50%;
  background-color: rgb(255, 255, 255);
  position: fixed;
}

.shoot-star {
  animation: shoot 0.5s;
  animation-delay: 2s;
}

@keyframes shoot {
  0% {
    transform: translate(-50px, 0) rotate(145deg);
  }

  100% {
    transform: translate(-1550px, 1000px) rotate(145deg);
  }
}
</style>
