<template>
  <div id="particles-bg">
    <div id="particles-js"></div>
  </div>
</template>

<script>
export default {
  name: "ParticlesJS",

  mounted() {
    require("particles.js");
    this.$nextTick(() => {
      this.initParticlesJS();
    });
  },

  methods: {
    initParticlesJS() {
      /* eslint-disable */
      particlesJS("particles-js", {
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
      });
    },
  },
};
</script>

<style>
#particles-js canvas {
  display: block;
  -webkit-transform: scale(1);
  -ms-transform: scale(1);
  transform: scale(1);
  opacity: 1;
  -webkit-transition: opacity 0.8s ease, -webkit-transform 1.4s ease;
  transition: opacity 0.8s ease, transform 1.4s ease;
}
#particles-js {
  width: 100%;
  height: 100%;
  position: fixed;
  background: rgb(23, 49, 125);
  background: linear-gradient(142deg, rgb(4, 26, 90) 0%, rgb(25, 4, 37) 100%);
  z-index: 1;
  top: 0;
  left: 0;
}

</style>
