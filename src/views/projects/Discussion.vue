<template>
  <div>
    <ProjectBrief
      :screenshot="'discussion'"
      :demo="'https://discussion-demo.herokuapp.com/'"
      :tech="['VueJS', 'Vuetify', 'CSS', 'Webpack', 'REST API', 'i18n','Javascript']" :confidential="true"
    >
      <template v-slot:title>
        Survey results discussion mode
        <span class="emoji-block slide-in-right-small"
          >&#128587;&#127995;<small style="position: relative; top: -10px; left: -4px"
            >&#128172;</small
          ></span
        >
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

</style>
