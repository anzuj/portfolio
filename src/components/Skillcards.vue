<template>
  <div style="margin-top: 100px">
    <h1 class="mb-5 text-center">SKILLS</h1>

    <v-row justify="center">
      <v-col class="skill" v-for="skill in skills" :key="skill.title">
        <div class="icon-container">
          <v-img
            height="70"
            class="skill-1 fade-in"
            :src="require(`@/assets/images/${skill.img}-${theme}.png`)"
            alt="skill icon"
            contain
          ></v-img>
          <!-- <i :class="skill.icon"></i> -->
        </div>
        <h3>{{ skill.title }}</h3>
        <p>
          {{ skill.text }}
        </p>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  props: [""],
  components: {},
  data: () => ({
    skills: [
      {
        title: "WEB DESIGN",
        icon: "fas fa-pencil-ruler",
        img: "design",
        text:
          "Aesthetically pleasing website is more than just pixelated information, right? In my hands, every project deserves going for the extra mile finding the exact right color scheme, layout and font.",
      },
      {
        title: "WEB DEVELOPMENT",
        icon: "fas fa-laptop-code",
        img: "code",
        text:
          "Lately I prefer to build web with Vue, utilising Vuetify library to create polished UIs. Vue has become my favourite framework since it optimises performance (no one likes laggy apps!) and makes dynamic content rendering a breeze.",
      },
      {
        title: "ILLUSTRATION",
        icon: "fas fa-paint-brush",
        img: "illustration",
        text:
          "Illustrative design has been one of my creative hobbies for years. I'm no stranger to fiddling around in Photoshop layers, drawing cartoons or making mockups of a website.",
      },
    ],
  }),
  methods: {},
  computed: {
    theme() {
      return this.$vuetify.theme.dark ? "light" : "dark";
    },
  },
};
</script>

<style scoped>

h1{
   font-family: "Blinker", sans-serif;
   letter-spacing: 1px;
   font-size: 3rem;
}
h3 {
  /* color: rgb(187, 138, 247); */
  letter-spacing: 0.1rem;
  margin-bottom: 5px;
}

.skill {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
}

.icon-container {
  width: 8rem;
  height: 8rem;
  border-radius: 15px;
  background-color: rgba(255, 255, 255, 0.048);
  margin-bottom: 3rem;
  display: flex;
  transform: rotate(45deg);
}

/* .icon-container i {
  color: rgba(255, 255, 255, 0.685);
  font-size: 4rem;
  margin: auto;
  transform: rotate(-45deg);
} */

.skill-1 {
  margin: auto;
  transform: rotate(-45deg);
}
</style>
