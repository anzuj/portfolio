<template>
  <div id="app">
    <v-app>
      <!-- :options="particlesOptions" -->
      <Particles
            id="tsparticles"
            :particlesInit="particlesInit"
            :options="particlesOptions"
      
        />

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
import { loadFull } from "tsparticles";
export default {
  mounted() {
    this.setShootingStar();
  },
  props: [""],
  components: { Navigation },
  created() {},
  data: () => ({
    shoot: false,
    particlesOptions:{
        particles: {
          number: {
            value: 355,
            density: {
              enable: true,
              value_area: 789.1476416322727,
            },
          },
          color: {
            value: "#A4A0FF",
          },
          shape: {
            type: "circle",
            stroke: {
              width: 0,
              color: "#000000",
            },
            polygon: {
              nb_sides: 5,
            },
            image: {
              src: "img/github.svg",
              width: 100,
              height: 100,
            },
          },
          opacity: {
            value: 0.78927153781200905,
            random: true,
            anim: {
              enable: true,
              speed: 0.25,
              opacity_min: 0.1,
              sync: false,
            },
          },
          size: {
            value: 2,
            random: true,
            anim: {
              enable: true,
              speed: 2,
              size_min: 0,
              sync: false,
            },
          },
          line_linked: {
            enable: false,
            distance: 150,
            color: "#ffffff",
            opacity: 0.4,
            width: 1,
          },
          move: {
            enable: true,
            speed: 0.3,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200,
            },
          },
        },

        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: {
              enable: true,
              mode: "bubble",
            },
            onclick: {
              enable: true,
              mode: "push",
            },
            resize: true,
          },
          modes: {
            grab: {
              distance: 400,
              line_linked: {
                opacity: 1,
              },
            },
            bubble: {
              distance: 83.91608391608392,
              size: 1,
              duration: 3,
              opacity: 1,
              speed: 3,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
            push: {
              particles_nb: 4,
            },
            remove: {
              particles_nb: 2,
            },
          },
        },
        retina_detect: true,
      }
  }),
  methods: {
   async particlesInit(engine) {
    await loadFull(engine);
},
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
