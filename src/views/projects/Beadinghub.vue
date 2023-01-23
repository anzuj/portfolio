<template>

  <div>

    <ProjectBrief
      :screenshot="'beadinghub'"
      :demo="'https://youtu.be/Bnlbswk-_ME'"
      :tech="['VueJS 3','Quasar', 'Firebase', 'CSS', 'Vite']"
    >

      <template v-slot:title>
         Beading hub
        <span class="pos-relative">

          <span id="tree1" class="slide-in-left">💎</span>

        </span>

      </template>

      <template v-slot:brief>

        <h4>Goal</h4>
       Create an app to easily sort and manage beading
        patterns instead of a huge Google Drive folder that didn't offer enough organising methods.
      </template>

      <template v-slot:learning>

        <ul>
          <li>
             Firebase. I wanted easy sign-on with Google authentication and also to upload PDFs and images
            when needed.
          </li>

          <li>
            Quasar. It's good to have multiple JS frameworks under one's belt! I chose to build this
            app with Quasar + Vite to reduce the bundle size and enhance compiling speed compared to
            webpack.
          </li>
          <li>VueJS 3. Before I've primarily maintained VueJS 2 apps, so this was a chance to get comfortable with Vue 3 class component syntax. It took a bit of time to get used to, but by the end of the project I definitely saw the benefits of being able to organize component code in a more logical sequence.</li>

          <li>
            JS Promises. It was important to check multiple things when creating a new pattern that
            may also include multiple uploads. It was necessary to create a good util function that
            handles multiple API calls allowing me to only upload once the preliminary tasks are
            done.
          </li>

        </ul>

      </template>

    </ProjectBrief>

  </div>

</template>

<script>
 import ProjectBrief from "@/components/ProjectBrief.vue"; export default { props: [""], components:
{ ProjectBrief }, data: () => ({}), methods: {}, computed: {}, };
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

