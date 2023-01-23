<template>
  <div>
    <ProjectBrief
      :screenshot="'discussion'"
      :demo="'https://youtu.be/Egp9y5RcQjM'"
      :tech="[
        'VueJS',
        'Vuetify',
        'CSS',
        'Webpack',
        'REST API',
        'TypeScript',
        'i18n',
        'Javascript',
      ]"
    >
      <template v-slot:title>
        Teambarometer
        <span class="emoji-block slide-in-right-small"
          >&#128587;&#127995;<small
            style="position: relative; top: -10px; left: -4px"
            >&#128172;</small
          ></span
        >
      </template>

      <template v-slot:brief>
        <h4>Goal</h4>
        Build an interactive employee survey tool to aid companies with their culture change.
        <h4>Summary</h4>
        <p>
         I started working on this project during my internship at Joineer AG about which you can read more in my dev.to post here:
          <a
            href="https://dev.to/anzelika/8-things-i-learned-during-my-internship-59ma"
            target="_blank"
            >"8 things I learned as an intern"</a
          >. After my internship I stayed at Joineer AG and maintained the app for 3 years, eventually as a front end lead. I implemented new features ground-up from wireframes, conducted user testing and migrated pages over from legacy codebase with new APIs.
        </p></template
      >

      <template v-slot:learning>
        <ul>
          <li>
            VueJS. During this project I got a lot of experience with it, especially from the reusability part. I implemented class-based syntax on larger components allowing to add a layer of TypeScript and a more logical grouping of methods/variables.
          </li>
          <li>
            TypeScript. While maintaining the codebase I started learning TypeScript. I implemented it gradually to the app as well, typecasting most common objects that are rendered in the interface, making the code more self-explanatory.
          </li>
          <li>
          Legacy code maintenance. One of the trickiest parts of maintaining this app was the fact that there were in fact 2 apps which had to be in sync with each other with the logged in user. This brought along its caveats for routing and refreshing cache to make it look seamless in the GUI even though in the background the browser switches between 2 webapps.
          </li>
          <li>
     Agile workflow. In our small development team we worked in 2-week sprints to make sure our time is spent working towards product goals.
          </li>
          <li>
            Deep-dive to CSS. While most of the UI "legwork" was done by
            Vuetify, I did not want our site to look like it came straight out
            of the box. Overwriting default styling or JS behaviour required
            quite a few research hours and it was gratifying to learn how to
            "mold" a framework exactly to your needs.
          </li>
          <li>
Dynamic content. Most of the content relies on user roles, company features and survey feedback statistics. This meant that the interface had to visually distinguish all scenarios: different metrics, insufficient data, incorrect data, errors etc. A lot of care also went into refreshing content correctly upon changing the selected team/user (Vue reactivity is tricky sometimes!).
          </li>

          <li>
           Design. While the overall feel of the app had to remain rather conservative due to our specific client base, I added a personal touch here and there with company brand illustrations and animated login-screens. 
          </li>
       
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

<style></style>
