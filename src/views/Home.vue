<template>
  <v-container class="slide-in-top text-center">
    <section>
      <v-row id="landing" align="center" justify="center">
        <v-col cols="12" sm="4" xl="3" class="pos-relative">
          <v-img
            style="border-radius: 60%"
            class="slide-in-left mx-auto"
            max-width="300"
            :src="require(`@/assets/images/profile.jpg`)"
            contain
          />
   <!--            <v-img
              height="30"
            id="star1"
            :src="require(`@/assets/images/star.png`)"
            contain
          /> -->
        </v-col>

        <v-col cols="12" style="max-width:500px">
          <h1 class="slide-in-right gradient-h1">
            Anzelika Häberli
          </h1>

          <p class="dev-caption">FRONT END WEB DEVELOPER</p>

          <p>
           Pixel fairy turning bland into
            beautiful &#x1F469;&#x1F3FB;&#x200D;&#x1F4BB;
          </p>
          <!--  Merely a
            functional website is not enough. It needs to visually appeal with the content it has been trusted to present. On all screen sizes. -->

          <div class="mt-7 d-flex justify-center">
            <div
              v-for="item in socialItems"
              :key="item.link"
              class="mx-1 social-link"
            >
              <a :href="item.link" target="_blank">
                <v-icon>{{ item.icon }}</v-icon>
              </a>
            </div>
          </div>
        </v-col>
      </v-row>
    </section>

    <!-- class="border-pulse" -->
    <v-row justify="center" v-show="$vuetify.breakpoint.smAndUp">
      <i class="pulse-down fas fa-chevron-down downArrow"></i>
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
      {
        link: "https://www.facebook.com/anzelika91",
        icon: "mdi-facebook",
        color: "#A3CEFF",
      },
      { link: "https://dev.to/anzelika", icon: "mdi-dev-to", color: "#EBF0FE" },
      {
        link: "https://github.com/anzuj",
        icon: "mdi-github",
        color: "#BDC0C8",
      },
      {
        link: "https://www.linkedin.com/in/anzelika-haeberli",
        icon: "mdi-linkedin",
        color: "#A3CEFF",
      },
    ],
  }),
  methods: {},
  computed: {},
};
</script>

<style>
#landing {
  min-height: calc(100vh - 150px);
}

.social-link {
  transition: 0.15s all;
}

.social-link:hover {
  transform: scale(1.08) translateY(-3px);
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



.dev-caption{
  letter-spacing: 2px;
  font-size: 0.8rem;
}

.downArrow {
  font-size: 45px;
  color: #7757ac;
}

#star1{
position: absolute;
bottom: -30px;
left: -40px;
animation: twinkle 25s infinite linear;
}


@keyframes twinkle {
  0% {
    transform:  rotate(0deg);
  }

  100% {
    transform:  rotate(360deg);
  }
}

</style>
