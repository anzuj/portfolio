<template>
  <div>
    <ProjectBrief
      :screenshot="'signup'"
      :live="'https://register.joineer.com/'"
      :tech="[
        'VueJS',
        'Vuetify',
        'CSS',
        'Webpack',
        'REST API',
        'i18n',
        'Javascript',
        'Procreate',
      ]"
      :confidential="true"
    >
      <template v-slot:title>
        Signup flow for Joineer AG
        <span class="emoji-block">&#128075;&#127996;</span>
      </template>

      <template v-slot:brief>
       <h4>Goal</h4>
        A modernised signup process for company Joineer AG which provides employee surveys.

        <h4 class="mt-3">Front end requirements</h4>
        <ul>
            <li>Mobile-responsiveness</li>
            <li>User input validation</li>
            <li>Multilingual</li>
            <li>User friendly informal style</li>
            <li>Custom illustrations</li>
            <li>Interactive question catalog</li>
        </ul>

         <h4 class="mt-3">Summary</h4>
       This project was built under my wing from ground up. A modernised signup proved necessary to automate more processes (namely custom survey creation) and to also provide a bit more user friendly experience in general. Illustrations for question sets that you see on the landing page are drawn by me and so is all the logic behind the interactive <a target="_blank" href="https://register.joineer.com/en/step/questions-build">question catalog</a>.
      </template>

      <template v-slot:learning>
        <ul>
          <li>Retrieving data via API. In this case the question sets on the registration landing page which are subject to change in backend</li>
          <li>Internalisation. Registration had to be accessible both in German and English which meant that greater care went to UI design and date formatting</li>
          <li>User input validation to prevent users from registering with empty or invalid data</li>
          <li>Continuous state tracking & completion indicator (1, 2, 3) to avoid user skipping steps</li>
          <li>Illustration. Was great to practice my artistic skills to create inclusive and polished icons throughout the sign-up process</li>
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
