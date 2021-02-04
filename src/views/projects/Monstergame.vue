<template>
  <div>
    <ProjectBrief :screenshot="'monster'" :live="'https://anzuj.github.io/monstergame'" :code="'https://github.com/anzuj/monstergame'" :tech="['VueJS', 'Vuetify', 'CSS','Webpack', 'Javascript', 'Procreate']">
      <template v-slot:title>
       Little monster game
          <span class="emoji-block slide-in-right-small">&#127993;</span>
      </template>

      <template v-slot:brief>
        A Passion project of mine to practice dynamic styling, Javascript and illustrations. It's a basic game of you versus a big ugly spider coupled with a randomly generated (and often humorous) loot.
      </template>

      <template v-slot:learning>
       Got good practice with JS array methods, randomising and how to make conditional styling work. Original inspiration came from a very simplistic game made during Maximilian Schwarzmüller's <a href="https://www.udemy.com/course/vuejs-2-the-complete-guide/" target="_blank" rel="noopener noreferrer">Vue course</a> and I started adding more layers of complexity to it.
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
