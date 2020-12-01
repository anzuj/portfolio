<template>
  <div>
    <ProjectBrief
      :screenshot="'czocha'"
      :live="'https://czochahelper.site'"
      :code="'https://github.com/anzuj/czocha'"
      :tech="['Bootstrap', 'jQuery', 'CSS']"
    >
      <template v-slot:title>
        Czocha Magic School timetable
        <span class="emoji-block"
          >&#129497;<span id="ball">&#128302;</span></span
        >
      </template>

      <template v-slot:brief>
        Passion project for a magic school larp with an intricate timetable.
        Goal was to create a site allowing players to quickly see their classes
        instead of tracing their path/year from the large timetable.
      </template>

      <template v-slot:learning>
        Learned bootstrap
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
#ball {
  font-size: 15px;
  display: inline-block;
  animation: moveInRightSmall 0.5s linear;
}
</style>
