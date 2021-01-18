<template>
  <div>
    <ProjectBrief :screenshot="'hireme'" :live="'https://anzudev.com/hireme'" :code="'https://github.com/anzuj/hireme'" :tech="['VueJS', 'Vuetify', 'CSS','Webpack', 'Javascript']">
      <template v-slot:title>
       Self promotion page
          <span class="emoji-block slide-in-right-small">&#x1F469;&#x1F3FB;&#x200D;&#x1F4BB;</span>
      </template>

      <template v-slot:brief>
        Passion project to enlist reasons why I'd be an awesome hire :) Used the opportunity here to practice illustrations and CSS animations with the moving cat at the top of the page.
      </template>

      <template v-slot:learning>
        <ul>
          <li>Global dynamic components. I wanted to create code that followed as much of the DRY coding practice as possible and also something that's easy to maintain and add content to. The code reads and renders all files from the designated directory with me not having to adjust anything manually</li>
             <li>CSS. Got some good practice on typography and gradient backgrounds here</li>
        </ul>
      
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
