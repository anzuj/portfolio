<template>
  <div>
    <ProjectBrief :screenshot="'kuusetaimed'" :demo="'https://anzudev.com/kuusetaimed'" :code="'https://github.com/anzuj/kuusetaimed'" :tech="['Bootstrap', 'jQuery', 'CSS']">
      <template v-slot:title>
        Sapling business homepage
        <span class="pos-relative">
          <span id="tree1" class="slide-in-left">&#127794;</span>
          <span id="tree2">&#127794;</span><span id="tree3">&#127794;</span>
        </span>
      </template>

      <template v-slot:brief>
        Make an updated version of the sapling homepage
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
#tree1 {
  font-size: 15px;
  display: inline-block;
  animation: slideLeft 0.5s ease-in;
}
#tree2 {
  font-size: 20px;
  display: inline-block;
  animation: slideLeft 0.7s ease-in;
}

#tree3 {
  display: inline-block;
  animation: slideLeft 0.9s ease-in;
}

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
