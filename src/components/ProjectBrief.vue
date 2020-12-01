<template>
  <v-container :class="{ 'px-0': $vuetify.breakpoint.xs }">
    <h2><slot name="title"></slot></h2>
    <v-img
    v-if="screenshot"
    max-width="550"
      class="project-img fade-in"
      alt="project screenshot"
      contain
      :src="require(`@/assets/images/portfolio/${screenshot}.png`)"
    ></v-img>
    <v-row>
      <v-col :class="{ 'px-0': $vuetify.breakpoint.xs }">
        <v-card>
          <h3>&#128640; Project brief</h3>
          <v-card-text>
            <slot name="brief"></slot>
          </v-card-text>
        </v-card>
        <v-card>
          <h3>&#127775; Learning points</h3>
          <v-card-text>
            <slot name="learning"></slot>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col
        style="max-width: 230px"
        :class="{ 'px-0': $vuetify.breakpoint.xs }"
      >
        <v-card>
          <h3>&#128279; Links</h3>
          <v-card-text class="pt-0">
            <div v-if="code">
              <a :href="code" target="_blank"
                ><v-btn>See code <v-icon right>mdi-xml</v-icon></v-btn></a
              >
            </div>

            <div v-if="live">
              <a :href="live" target="_blank"
                ><v-btn
                  >Visit site<v-icon right>mdi-open-in-new</v-icon></v-btn
                ></a
              >
            </div>

            <div v-if="demo">
              <a :href="demo" target="_blank"
                ><v-btn
                  >See demo<v-icon right>mdi-eye-outline</v-icon></v-btn
                ></a
              >
            </div>
          </v-card-text>
        </v-card>

        <v-card>
          <h3>&#128295; Technologies</h3>
          <v-row class="mt-2" justify="center">
            <div
              class="skillicon-box"
              v-for="item in projectTech"
              :key="item.text"
            >
              <i v-if="item.icon" :class="item.icon" class="skillicon"></i>
              <v-img
                v-if="item.img"
                alt="skill icon"
                class="skillimage"
                contain
                :src="require(`@/assets/devicons/${item.img}.png`)"
              ></v-img>
              <p>{{ item.text }}</p>
            </div>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: {
    screenshot: String,
    tech: Array, //expecting an array of text values from techItems, eg ['Vuetify', 'VueJS']
    live: String,
    code: String,
    demo: String,
  },
  components: {},
  data: () => ({
    techItems: [
      {
        img: null,
        icon: "devicon-nodejs-plain colored",
        text: "NodeJS",
      },
      {
        img: null,
        icon: "devicon-webpack-plain colored",
        text: "Webpack",
      },
      { icon: null, img: "vue", text: "VueJS" },
      {
        img: "vuetify",
        icon: null,
        text: "Vuetify",
      },
      {
        icon: "devicon-css3-plain colored",
        img: null,
        text: "CSS",
      },
      {
        icon: null,
        img: "sass",
        text: "SASS",
      },
      {
        icon: "devicon-bootstrap-plain colored",
        img: null,
        text: "Bootstrap",
      },
      {
        icon: "devicon-javascript-plain colored",
        img: null,
        text: "Javascript",
      },
      {
        icon: "devicon-jquery-plain colored",
        img: null,
        text: "jQuery",
      },
      {
        icon: null,
        img: "api",
        text: "REST API",
      },
      {
        icon: null,
        img: "jest",
        text: "Unit testing",
      },
      {
        img: "procreate",
        icon: null,
        text: "Procreate",
      },
      {
        img: "photoshop",
        icon: null,
        text: "Photoshop",
      },
      {
        img: null,
        icon: "devicon-react-original colored",
        text: "ReactJS",
      },
    ],
  }),
  methods: {},
  computed: {
    projectTech() {
      let items = [];
      this.tech.forEach((element) => {
        items.push(this.techItems.filter((item) => item.text === element)[0]);
      });
      return items;
    },
  },
};
</script>

<style scoped>
.project-img {
  margin-top: 8px;
}
h3 {
  font-family: "Blinker", sans-serif;
  font-weight: 400;
  letter-spacing: 1px;
  color: rgb(12, 161, 161);
  padding: 5px 15px;
  text-shadow: 1px 1px 0px black;
  /* border-radius: 15px 15px 0px 0px !important; */
  /* background-color: rgba(12, 5, 39, 0.925); */
}
.v-card {
  margin-bottom: 20px;
  border-radius: 15px;
  background-color: rgba(255, 255, 255, 0.062);
  /* border: 0.5px solid rgba(126, 158, 226, 0.068); */
}

hr.v-divider {
  background-color: rgb(30, 145, 145);
}

.v-btn {
  display: block;
  margin: 4px auto;
  width: 160px;
  background: #6a4bb9 !important;
}

a {
  text-decoration: none;
}

.v-icon {
  transition: all 0.15s linear;
}

.v-btn:hover .v-icon {
  transform: scale(1.15);
}

.skillicon-box {
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  width: 80px;
}

.skillicon-box p {
  color: rgb(174, 149, 190);
}

.skillicon,
.skillimage {
  width: 32px;
  height: 32px;
  font-size: 32px;
}
</style>
