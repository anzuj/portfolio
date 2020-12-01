<template>
  <div>
    <ProjectBrief
      :screenshot="'discussion'"
      :demo="'https://discussion-demo.herokuapp.com/'"
      :tech="[
        'VueJS',
        'Vuetify',
        'CSS',
        'Webpack',
        'REST API',
        'i18n',
        'Javascript',
      ]"
      :confidential="true"
    >
      <template v-slot:title>
        Feedback manager
        <span class="emoji-block slide-in-right-small"
          >&#128587;&#127995;<small
            style="position: relative; top: -10px; left: -4px"
            >&#128172;</small
          ></span
        >
      </template>

      <template v-slot:brief>
        <h4>Goal</h4>
        Build an interactive feedback presentation tool and manager for team
        leads.
        <h4>Summary</h4>
        <p>
          This project was my first "hands-on" experience to develop something
          in a team, during my internship at Joineer AG (Swiss startup for
          employee surveys). Developing this from scratch was an amazing
          learning experience where my role as a front end developer was in
          beautiful synergy with the rest of the team. Inspired by my learnings,
          I wrote a post on dev.to:
          <a
            href="https://dev.to/anzelika/8-things-i-learned-during-my-internship-59ma"
            target="_blank"
            >"8 things I learned as an intern"</a
          >.
        </p></template
      >

      <template v-slot:learning>
        <ul>
          <li>
            Getting comfortable developing with a JS framework. This porfolio
            site is built with vanilla JS/CSS and everything written on one HTML
            page. It's been incredibly eye opening to spend a few months with
            components, props and 2-way data binding to build more complex
            project.
          </li>
          <li>
            Refining workflow within the team. We set up a Kanban board and 2
            week sprints for realistic development goals working towards the
            release date. It gave structure to my work and allowed to discuss in
            advance what parts of the project need co-operating.
          </li>
          <li>
            Deep-dive to CSS. While most of the UI "legwork" was done by
            Vuetify, I did not want our site to look like it came straight out
            of the box. Overwriting default styling or JS behaviour required
            quite a few research hours and it was gratifying to learn how to
            "mold" a framework exactly to your needs.
          </li>
          <li>
            Data normalisation. In the demo app and repository you may see that
            I loop through a local dataset to render content. It's kept this way
            for the dummy data prototype (client demos etc), but the in the
            production version it's been thoroughly reworked to accommodate API
            calls that retrieve normalised data. This allows splitting up the
            code in components more conveniently, since the whole thing no
            longer depends on the giant "mother array".
          </li>
          <li>
            Lifecycle hooks. Something I didn't have a chance to practice prior
            my internship, but as I worked on a project where component data was
            retrieved via API calls, asyncronous tasks and mounted() hook became
            my best friends!
          </li>
          <li>
            Cute login screen. Practiced my asyncronous skills and sequencing by
            making a more personalised login UX for our project.
          </li>
          <img style="width: 600px" src="@/assets/images/login.gif">
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
