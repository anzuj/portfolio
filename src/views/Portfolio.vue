<template>
  <div class="pa-10 slide-in-top">
    <!-- thumbnails of projects -->
    <div v-if="$route.name === 'portfolio'">
      <h1>Portfolio</h1>
      <p>Check out my coding projects</p>
      <v-row justify="center" justify-sm="start">
        <v-col
          cols="12"
          md="6"
          v-for="project in projects"
          :key="project.title"
          class="text-center"
        >
          <v-card
            :ripple="false"
            link
            @click="$router.push({ name: project.link })"
            style="overflow: hidden"
          >
            <v-img
              class="project-screenshot transitioned"
              :src="require(`@/assets/images/${project.image}.jpg`)"
              contain
            >
            </v-img>
          </v-card>
          <h3>{{ project.title }}</h3>
        </v-col>
      </v-row>
    </div>
    <!-- /thumbnails of projects -->

    <!-- project info page -->
    <div v-else>
      <v-btn
        text
        color="secondary"
        @click="$router.push({ name: 'portfolio' })"
        ><v-icon left>mdi-arrow-left-bold</v-icon><span style="font-weight: 800">back</span></v-btn
      >
      <v-fade-transition :hide-on-leave="true">
        <router-view> </router-view>
      </v-fade-transition>
    </div>
    <!-- project info page -->
  </div>
</template>

<script>
export default {
  props: [""],
  components: {},
  data: () => ({
    projects: [
      {
        title: "Sapling business homepage",
        id: 1,
        link: "sapling",
        image: "kuusetaimed",
        tech: [
          {
            icon: "devicon-bootstrap-plain colored",
            img: null,
            text: "Bootstrap",
            description:
              "Used more in the early years of my web development. Can maintain Bootstrap applications if needed, but it's not my 1st choice of a front end library due to its bloated syntax (prefer Vuetify/Material Design).",
          },
          {
            icon: "devicon-jquery-plain colored",
            img: null,
            text: "jQuery",
            description:
              "Learned along with Bootstrap back when it was still built on jQuery. Not coding with jQuery anymore since my vanilla JS skills have increased and I've moved on to use frameworks that have in-built solutions for jQuery methods.",
          },
        ],
      },
      {
        title: "Magic school timetable",
        id: 2,
        link: "czocha",
        image: "czocha",
        tech: [
          {
            icon: "devicon-bootstrap-plain colored",
            img: null,
            text: "Bootstrap",
            description:
              "Used more in the early years of my web development. Can maintain Bootstrap applications if needed, but it's not my 1st choice of a front end library due to its bloated syntax (prefer Vuetify/Material Design).",
          },
          {
            icon: "devicon-jquery-plain colored",
            img: null,
            text: "jQuery",
            description:
              "Learned along with Bootstrap back when it was still built on jQuery. Not coding with jQuery anymore since my vanilla JS skills have increased and I've moved on to use frameworks that have in-built solutions for jQuery methods.",
          },
        ],
      },
    ],
  }),
  methods: {},
  computed: {},
};
</script>

<style>
.project-screenshot:hover {
  transform: scale(1.1);
}
</style>
