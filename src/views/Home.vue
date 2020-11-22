<template>

    <v-container class="slide-in text-center">
      <v-row align="center" justify="center">
        <v-col cols="12" sm="4" xl="3">
          <v-img
            style="border-radius: 60%"
            class="slide-in-left mx-auto"
            max-width="300"
            :src="require(`@/assets/images/larp.jpg`)"
            contain
          />
        </v-col>

        <v-col cols="12" style="max-width:500px">
          <h1 class="slide-in-right">
            Anzelika Häberli
          </h1>
          <p class="caption">FRONT END WEB DEVELOPER</p>

          <p>
            Front end web developer. Practicing the art of bending the will of
            pixels for 2 years. Every day in this field is an adventure and it
            continues to marvel me how a good font and color choice or a few
            lines of code turn bland into brilliant. I find that just a
            functional website is not enough - it needs to visually appeal and
            harmoniously live with the content it has been trusted to present.
          </p>

          <div class="d-flex justify-center">
            <div
              v-for="item in socialItems"
              :key="item.link"
              class="mx-1 social-link"
            >
              <a :href="item.link" target="_blank">
                <v-icon x-large>{{ item.icon }}</v-icon>
              </a>
            </div>
          </div>
        </v-col>
      </v-row>

      
       <v-row justify="center">
          <v-icon x-large>mdi-chevron-down</v-icon>
      </v-row>

  <Skillcards />
    <Skillicons />
    </v-container>
   

</template>

<script>
import Skillcards from "@/components/Skillcards.vue";
import Skillicons from "@/components/Skillicons.vue";
export default {
  props: [""],
  components: { Skillcards, Skillicons },
  data: () => ({
    socialItems: [
      { link: "https://www.facebook.com/anzelika91", icon: "mdi-facebook" },
      {
        link: "https://www.linkedin.com/in/anzelika-haeberli",
        icon: "mdi-linkedin",
      },
      { link: "https://dev.to/anzelika", icon: "mdi-dev-to" },
      { link: "https://github.com/anzuj", icon: "mdi-github" },
    ],
  }),
  methods: {},
  computed: {},
};
</script>

<style>
.social-link a {
  text-decoration: none;
  /* border-radius: 15px; */
}

.social-link a i:hover {
  transform: scale(1.05);
  /* color: pink; */
  /* box-shadow: 2px 5px 16px 0px #296dbb, 5px -4px 15px 5px rgba(0,0,0,0); */
}
</style>
