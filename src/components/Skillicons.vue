<template>
  <div>
    <!-- BASICS -->
    <section>
  <h3>Basics</h3>
      <v-row justify="center">
        <div v-for="item in basics" :key="item.text">
          <v-tooltip top max-width="300" color="transparent">
            <template v-slot:activator="{ on, attrs }">
              <div class="skillicon-box" v-bind="attrs" v-on="on">
                <i v-if="item.icon" :class="item.icon" class="skillicon"></i>
                <v-img
                  v-else
                  :src="require(`@/assets/devicons/${item.img}.png`)"
                  alt="skill icon"
                  class="skillimage"
                  contain
                ></v-img>
                <p>{{ item.text }}</p>
              </div>
            </template>
            <v-card class="skilltooltip">
              <span>{{ item.description }}</span>
            </v-card>
          </v-tooltip>
        </div>
      </v-row>

      <!-- <Divider /> -->
    </section>

    <!-- WIREFRAMING-->
    <section>
      <h3>Prototyping</h3>
      <v-row justify="center">
        <div v-for="item in wireframing" :key="item.text">
          <v-tooltip top max-width="300" color="transparent">
            <template v-slot:activator="{ on, attrs }">
              <div class="skillicon-box" v-bind="attrs" v-on="on">
                <i v-if="item.icon" :class="item.icon" class="skillicon"></i>
                <v-img
                  v-else
                  :src="require(`@/assets/devicons/${item.img}.png`)"
                  alt="skill icon"
                  class="skillimage"
                  contain
                ></v-img>
                <p>{{ item.text }}</p>
              </div>
            </template>
            <v-card class="skilltooltip">
              <span>{{ item.description }}</span>
            </v-card>
          </v-tooltip>
        </div>
      </v-row>

      <!-- <Divider /> -->
    </section>

    <!-- FRONTEND-->
    <section>
      <h3>Frontend</h3>
      <v-row justify="center">
        <div v-for="item in frontend" :key="item.text">
          <v-tooltip top max-width="300" color="transparent">
            <template v-slot:activator="{ on, attrs }">
              <div class="skillicon-box" v-bind="attrs" v-on="on">
                <i v-if="item.icon" :class="item.icon" class="skillicon"></i>
                <v-img
                  v-else
                  :src="require(`@/assets/devicons/${item.img}.png`)"
                  alt="skill icon"
                  class="skillimage"
                  contain
                ></v-img>
                <p>{{ item.text }}</p>
              </div>
            </template>
            <v-card class="skilltooltip">
              <span>{{ item.description }}</span>
            </v-card>
          </v-tooltip>
        </div>
      </v-row>

      <!-- <Divider /> -->
    </section>

    <!-- learning-->
    <section>
      <h3>Learning</h3>
      <v-row justify="center">
        <div v-for="item in learning" :key="item.text">
          <v-tooltip top max-width="300" color="transparent">
            <template v-slot:activator="{ on, attrs }">
              <div class="skillicon-box" v-bind="attrs" v-on="on">
                <i v-if="item.icon" :class="item.icon" class="skillicon"></i>
                <v-img
                  v-else
                  :src="require(`@/assets/devicons/${item.img}.png`)"
                  alt="skill icon"
                  class="skillimage"
                  contain
                ></v-img>
                <p>{{ item.text }}</p>
              </div>
            </template>
            <v-card class="skilltooltip">
              <span>{{ item.description }}</span>
            </v-card>
          </v-tooltip>
        </div>
      </v-row>
    </section>
  </div>
</template>

<script>
// import Divider from "@/components/Divider.vue";
export default {
  props: [""],
  components: { },
  data: () => ({
    basics: [
      {
        img: "vscode",
        icon: null,
        text: "VS Code",
        description: "Where the magic happens",
      },
      {
        img: null,
        icon: "devicon-git-plain colored",
        text: "Git",
        description:
          "Version control. Remotely comfortable both with Github and Bitbucket",
      },
      {
        img: "confluence",
        icon: null,
        text: "Confluence",
        description: "Internal docs/guidelines",
      },
    ],
    wireframing: [
      {
        img: "balsamiq",
        icon: null,
        text: "Balsamiq",
        description: "My tool of choice for basic interactive wireframing",
      },
      {
        img: "proto",
        icon: null,
        text: "Proto.io",
        description:
          "When a more polished and stylised clickable prototype is needed, I use Proto.io.",
      },
    ],
    frontend: [
      {
        icon: null,
        img: "vue",
        text: "VueJS",
        description:
          "My JS framework of choice. Working on 2.3, but upgrading to latest version 3 is in the books for the near future.",
      },
      {
        img: "vuetify",
        icon: null,
        text: "Vuetify",
        description: "A natural companion for VueJS applications.",
      },
      {
        icon: "devicon-css3-plain colored",
        img: null,
        text: "CSS",
        description: "A fan of CSS micro animations to make UIs feel great.",
      },
      {
        icon: null,
        img: "sass",
        text: "SASS",
        description:
          "When I'm not using a front end library that manages most micro-animations and styling, I implement my own CSS with the convenient syntax that SASS offers.",
      },
      {
        icon: "devicon-bootstrap-plain colored",
        img: null,
        text: "Bootstrap",
        description:
          "Used more in the early years of my web development. Can maintain Bootstrap applications if needed, but it's not my 1st choice of a front end library due to its bloated syntax (prefer Vuetify/Material Design).",
      },
      {
        icon: "devicon-javascript-plain colored",
        img: null,
        text: "Javascript",
        description: "A great ally to make smart UIs as dry as possible.",
      },
      {
        icon: "devicon-jquery-plain colored",
        img: null,
        text: "jQuery",
        description:
          "Learned along with Bootstrap back when it was still built on jQuery. Not coding with jQuery anymore since my vanilla JS skills have increased and I've moved on to use frameworks that have in-built solutions for jQuery methods.",
      },
      {
        icon: null,
        img: "api",
        text: "REST API",
        description: "Building applications hand in hand with API requests.",
      },
      {
        icon: null,
        img: "jest",
        text: "Unit testing",
        description: "Using Jest to build unit tests for my interfaces.",
      },
    ],
    illustration: [
      {
        img: "photoshop",
        icon: null,
        text: "Photoshop",
        description:
          "If needed, I touch up my artistic work on a computer using Photoshop. It's often used in my workflow as a developer as well to illustrate propositions for UI changes to the team.",
      },
      {
        img: "procreate",
        icon: null,
        text: "Procreate",
        description:
          "I ditched big clumsy drawing boards in favor of an iPad Pro. It's an absolute joy to create designs and illustrations using Procreate.",
      },
    ],
    learning: [
      {
        img: null,
        icon: "devicon-react-original colored",
        text: "ReactJS",
        description:
          "In the middle of an online ReactJS bootcamp. I've built basic to-do apps to get the grasp on React state management and how it differs from Vue",
      },
      {
        img: "jest",
        icon: null,
        text: "Unit testing",
        description:
          "Topic I always keep at the back of my mind to try and make my codebase as easily maintainable as possible.",
      },
    ],
  }),
  methods: {},
  computed: {},
};
</script>

<style scoped>
h3 {
  color: teal;
  display: inline-block;
  padding: 5px 15px;
  border-radius: 7px;
  position: relative;
  top: -25px;
  margin-bottom: 5px;
  background-color: rgb(27, 16, 43);
}

section{
 margin: 20px auto;
 padding: 10px;
  border-radius: 15px;
  /* border: 1px solid #6c4a88b4; */
  background-color: rgba(255, 255, 255, 0.048);
  max-width: 700px;
}

.skillicon-box {
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  width: 100px;
}

.skillicon-box p {
  color: rgb(174, 149, 190);
}

.skillicon,
.skillimage {
  width: 32px;
  height: 32px;
  font-size: 32px;
  transition: 0.15s all;
}

.skillicon-box:hover .skillicon,
.skillicon-box:hover .skillimage {
  transform: scale(1.2) translateY(-3px);
}
.skillicon-box:hover p {
     color: rgb(255, 255, 255);

}

.skilltooltip {
  background-color: #140729 !important;
  padding: 10px;
  border: 1px solid rgba(81, 47, 83, 0.425) !important; 
}
</style>