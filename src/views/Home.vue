<template>

    <v-container class="slide-in-top text-center">
      <section > 
      <v-row id="landing" align="center" justify="center">
        <v-col cols="12" sm="4" xl="3">
          <v-img
            style="border-radius: 60%"
            class="slide-in-left mx-auto"
            max-width="300"
            :src="require(`@/assets/images/profile.jpg`)"
            contain
          />
        </v-col>

        <v-col cols="12" style="max-width:500px">
          <h1 class="slide-in-right name">
            Anzelika Häberli
          </h1>
          <p class="caption">FRONT END WEB DEVELOPER</p>

          <p>
            Bending the will of pixels for 3 years. Every day in this field is an adventure and it
            continues to marvel me how a good font and color choice or a few
            lines of code turn bland into brilliant. I find that just a
            functional website is not enough - it needs to visually appeal with the content it has been trusted to present.
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
      </section>

      <!-- class="border-pulse" -->
       <v-row justify="center" v-show="$vuetify.breakpoint.smAndUp">

         <i class="pulse-down fas fa-chevron-down" style="font-size: 45px; color: #523E73"></i>
         <!-- <v-btn fab icon > <v-icon x-large class="pulse-down" color="secondary">mdi-chevron-down</v-icon></v-btn>      -->
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
      { link: "https://dev.to/anzelika", icon: "mdi-dev-to" },
      { link: "https://github.com/anzuj", icon: "mdi-github" },
        {
        link: "https://www.linkedin.com/in/anzelika-haeberli",
        icon: "mdi-linkedin",
      },
    ],
  }),
  methods: {},
  computed: {},
};
</script>

<style>

#landing{
  min-height: calc(100vh - 150px);
}
.social-link a {
  text-decoration: none;
  /* border-radius: 15px; */
}

.social-link a i:hover {
  transform: scale(1.05);
  /* color: pink; */
  /* box-shadow: 2px 5px 16px 0px #296dbb, 5px -4px 15px 5px rgba(0,0,0,0); */
}

.name {
  font-size: 4rem;
  font-weight: 500;
  font-family: "Kaushan Script", sans-serif;
  background: linear-gradient(50deg, rgb(99, 250, 242), #3181c2, #9d33bb);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  padding: 1rem;
  user-select: none;
  line-height: 1.1;
}
</style>
