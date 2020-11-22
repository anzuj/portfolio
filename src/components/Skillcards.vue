<template>
<div>
    <h1 class="mt-10 mb-5 text-center">SKILLS</h1>

  <v-row justify="center">
    <v-col class="skill" v-for="skill in skills" :key="skill.title">
      <div class="icon-container">
        <i :class="skill.icon"></i>
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
        text:
          "Aesthetically pleasing website is more than just pixelated information, right? In my hands, every project deserves going for the extra mile finding the exact right color scheme, layout and font.",
      },
      {
        title: "WEB DEVELOPMENT",
        icon: "fas fa-laptop-code",
        text:
          "Lately I prefer to build web with Vue, utilising Vuetify library to create polished UIs. Vue has become my favourite framework since it optimises performance (no one likes laggy apps!) and makes dynamic content rendering a breeze.",
      },
      {
        title: "GRAPHIC DESIGN",
        icon: "fas fa-paint-brush",
        text:
          "Illustrative design has been one of my creative hobbies for years. I'm no stranger to fiddling around in Photoshop layers, drawing cartoons or making mockups of a website.",
      },
    ],
  }),
  methods: {},
  computed: {},
};
</script>

<style scoped>
.skill {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
}

.icon-container {
  width: 10rem;
  height: 10rem;
  border: 1px solid #6c4a88;
  background-color: #a8a5a81a;
  margin-bottom: 3rem;
  display: flex;
  transform: rotate(45deg);
}

.icon-container i {
  color: white;
  font-size: 5rem;
  margin: auto;
  transform: rotate(-45deg);
}
</style>
