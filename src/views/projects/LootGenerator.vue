<template>
  <div>
    <ProjectBrief :screenshot="'discussion'" :demo="'https://discussion-demo.herokuapp.com/'" :tech="['VueJS', 'Vuetify', 'CSS','Webpack', 'Javascript']">
      <template v-slot:title>
       Fantasy RPG loot generator
          <span class="emoji-block slide-in-right-small">&#127993;</span>
      </template>

      <template v-slot:brief>
        Passion project to practice JS and illustrations
      </template>

      <template v-slot:learning>
       JS randomising
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
