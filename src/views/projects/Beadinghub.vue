<template>

  <div>

    <ProjectBrief
      :screenshot="'beadinghub'"
      :live="'https://beadhub-react.web.app/'"
      :tech="['ReactJS','Material UI','Firebase', 'TypeScript','CSS']"
    >

      <template v-slot:title>
         Beading hub
        <span class="pos-relative">

          <span id="tree1" class="slide-in-left">💎</span>

        </span>

      </template>

      <template v-slot:brief>

        <h4>Goal</h4>
         Create an app to easily sort and manage beading patterns instead of a huge Google Drive folder that doesn't offer sufficient organising methods. Should be usable on the phone so that the user could upload photos from their gallery.
      </template>

      <template v-slot:learning>

        <ul>

          <li>
             Firebase. I wanted to offer an easy sign-on with Google authentication and also the ability to upload files when needed. A lot of async practice here! Since the data is actually coming from Firebase storage, it was necessary to create good util functions that handle multiple API calls allowing certain operations only once the preliminary tasks are done.
          </li>
          
          <li>
             ReactJS. Before I've primarily worked with VueJS, so this was a chance to get comfortable
            with ReactJS. It took a bit of time to get used to a more verbose syntax and controlled forms, but a few weeks into the project it felt more and more natural.
          </li>

          <li>
            Material UI. It's good to have multiple frontend libraries under one's belt! This project involves a lot of practice with the sx prop and making reusable custom styled Material UI components. 
          </li>


 
          <li>Image compression. Database storage is costly, therefore I wanted to make sure that user uploads are properly compressed, taking up no more space than a thumbnail needs. I used compressorjs library for this.</li>
          <li>TypeScript. Lots of learning points here, especially when it comes to React component prop typing. It's become second nature now to declare a type to a variable as soon as I create one which is a nice feeling!</li>

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

