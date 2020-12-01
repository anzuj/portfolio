<template>
  <div>
    <ProjectBrief :screenshot="'hireme'" :live="'https://anzudev.com/hireme'" :code="'https://github.com/anzuj/hireme'" :tech="['VueJS', 'Vuetify', 'CSS','Webpack', 'Javascript']">
      <template v-slot:title>
       Self promotion page
          <span class="emoji-block slide-in-right-small">&#x1F469;&#x1F3FB;&#x200D;&#x1F4BB;</span>
      </template>

      <template v-slot:brief>
        Passion project to practice JS and illustrations
      </template>

      <template v-slot:learning>
       Global dynamic components
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


</style>
