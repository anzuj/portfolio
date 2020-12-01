<template>
  <div>
    <ProjectBrief :screenshot="'discussion'" :demo="'https://discussion-demo.herokuapp.com/'" :tech="['VueJS', 'Vuetify', 'CSS','Webpack', 'REST API', 'Javascript']">
      <template v-slot:title>
        Survey results discussion mode
          <span class="slide-in-left">&#128172;</span>
      </template>

      <template v-slot:brief>
        Discussion mode for a survey tool
      </template>

      <template v-slot:learning>
       Render dynamic data via API
      </template>
    </ProjectBrief>
  </div>
</template>

<script>
import ProjectBrief from "@/components/ProjectBrief.vue";
export default {
  props: [""],
  components: { ProjectBrief },
  data: () => ({}),
  methods: {},
  computed: {},
};
</script>

<style>


@keyframes slideLeft {
  0% {
    opacity: 0;
    transform: translateX(-7px) scaleY(1);
  }

    50% {
    transform: scaleY(1.3);
  }

  100% {
    opacity: 1;
    transform: translateX(0px) scaleY(1);
  }
}
</style>
