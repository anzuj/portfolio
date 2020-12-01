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
        <h4>Goal</h4>
        <v-row>
          <v-col>
            Site for a magic school larp allowing players to conveniently get
            their customised timetable depending on their path/year instead of
            trying to find themselves in the big timetable for everyone
            (picture). This project is where my heart lies. It offered countless
            facepalms countered with happy "AHA!" moments. Since larping is one
            of my hobbies and Czocha magic school larp very dear to my heart
            (after all, where else can you live out your Harry Potter
            fantasies!), it felt immensely good to build something for my fellow
            players to use during the game.
          </v-col>
          <v-col cols="12" md="6" lg="5">
            <v-img
            class="fade-in"
              contain
              :src="require(`@/assets/images/timetable.jpg`)"
            ></v-img
          ></v-col>
        </v-row>
      </template>

      <template v-slot:learning>
        <ul>
          <li>
            Javascript. It was my first time dwelling deeper in functions, since
            I had to generate the logic for generating lessons. In this project,
            I had to create event listeners that kick in only after 1 button
            from each button group is pressed, and then populate a lesson slot
            according to their answers
          </li>
          <li>
            Bootstrap grid. Lots of more practice with mobile responsiveness,
            especially on the
            <a target="_blank" href="https://czochahelper.site/#songs"
              >songs
            </a>
            section, where the number of cards per row changes depending on
            viewport
          </li>
          <li>
            The tiny touches, color scheme and fonts. This project allowed a lot
            more creativity and I very much enjoyed choosing fonts, background
            patterns and tiny logos to artistically illustrate the button
            options. I also learned about the
            <i style="color: rgb(99, 99, 201)">name="theme-color</i> meta tag ,
            changing mobile browser color: Since the site is meant to be used on
            mobile devices, matching the browser color with the body backround
            color added a nice touch and more of an "app" feel rather than a
            website. I'm now using this tag on every one of my projects for that
            extra thoughtfulness for mobile browsers :)
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

<style>
#ball {
  font-size: 15px;
  display: inline-block;
  animation: moveInRightSmall 0.5s linear;
}
</style>
