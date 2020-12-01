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
        >
          <div
            class="project-screenshot"
            @click="$router.push({ name: project.link })"
          >
            <!--        <v-card
          height="220"
            :ripple="false"
            link
            @click="$router.push({ name: project.link })"
            style="overflow: hidden"
          >
            <v-img
              class="project-screenshot transitioned"
              :src="require(`@/assets/images/${project.image}.jpg`)"
              height="100%"
              width="100%"

            >
            </v-img>
          </v-card> -->
          
            <v-img
              height="220"
              class="transitioned"
              :src="require(`@/assets/images/portfolio/${project.image}.png`)"
              contain
            >
            </v-img>
            <h3>{{ project.title }}</h3>
          </div>
        </v-col>
      </v-row>
    </div>
    <!-- /thumbnails of projects -->

    <!-- project info page -->
    <div v-else>
      <v-btn text color="secondary" @click="$router.push({ name: 'portfolio' })"
        ><v-icon left>mdi-arrow-left-bold</v-icon
        ><span style="font-weight: 800">back</span></v-btn
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
        link: "sapling",
        image: "kuusetaimed",
      },
      {
        title: "Magic school timetable",
        link: "czocha",
        image: "czocha",
      },
      {
        title: "Survey result discussion tool",
        link: "discussion",
        image: "discussion",
      },
    ],
  }),
  methods: {},
  computed: {},
};
</script>

<style>
.project-screenshot {
  text-align: center;
}


.project-screenshot:hover {
  cursor: pointer;
}

.project-screenshot:hover .v-image {
  transform: scale(1.05);
}



</style>
