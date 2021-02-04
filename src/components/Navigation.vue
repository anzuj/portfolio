<template>
  <nav>
    <v-app-bar
      app
      :color="navColor"
      flat
      v-scroll="onScroll"
      v-if="$vuetify.breakpoint.smAndUp"
    >
      <v-tabs v-model="tab" background-color="transparent">
        <v-tabs-slider color="teal"></v-tabs-slider>

        <v-tab
          :ripple="false"
          v-for="item in navItems"
          :key="item.text"
          @click="handleNav(item)"
          active-class="active-nav"
        >
          <span class="px-1"> {{ item.text }}</span>
          <v-icon small class="ml-1" v-if="item.icon">{{ item.icon }}</v-icon>
        </v-tab>
      </v-tabs>
      <v-switch class="d-none" :ripple="false" v-model="$vuetify.theme.dark">
        <template v-slot:label>
          <v-icon>{{
            $vuetify.theme.dark
              ? "mdi-weather-night"
              : "mdi-white-balance-sunny"
          }}</v-icon>
        </template>
      </v-switch>
    </v-app-bar>

    <v-app-bar-nav-icon
      large
      v-if="$vuetify.breakpoint.xs"
      @click="drawer = !drawer"
      class=""
    ></v-app-bar-nav-icon>

    <v-navigation-drawer
      v-model="drawer"
      app
      width="100%"
      id="navDrawer"
      v-show="!$vuetify.breakpoint.smAndUp"
    >
      <v-container fluid fill-height class="pos-relative">
        <v-row justify="center">
          <v-btn
            x-large
            icon
            @click="drawer = false"
            class="pos-absolute"
            style="top: 20px; right: 20px"
          >
            <v-icon large>close</v-icon>
          </v-btn>

          <v-list class="text-center">
            <template v-for="item in navItems">
              <!-- @click="handleNav(item)" -->
              <v-list-item :key="item.text" link @click="handleNav(item)">
                <v-list-item-content>
                  <v-list-item-title class="drawerLink primary--text"
                    >{{ item.text }}
                    <v-icon
                      class="ml-1 pb-1"
                      v-if="item.icon"
                      color="primary lighten-1"
                      >{{ item.icon }}</v-icon
                    >
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </template>
          </v-list>
        </v-row>
      </v-container>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  props: [""],
  components: {},
  data: () => ({
    scrolledDown: false,
    tab: null,
    drawer: false,
    navItems: [
      { text: "HOME", link: "/", icon: null },
      { text: "PORTFOLIO", link: "/portfolio", icon: null },
      {
        text: "CV",
        link: "https://www.anzudev.com/cv.pdf",
        icon: null,
      },
      { text: "GALLERY", link: "/gallery", icon: null },
      { text: "PERSONAL", link: "/personal", icon: null },

      {
        text: "BLOG",
        link: "https://dev.to/anzelika",
        icon: null,
      },
    ],
  }),
  methods: {
    handleNav(nav) {
      if (nav.link === this.$route.path) {
        return;
      } else if (nav.text === "BLOG" || nav.text === "CV") {
        window.open(nav.link, "_blank");
      } else {
        this.$router.push({ path: nav.link });
      }
    },
    onScroll(e) {
      if (typeof window === "undefined") return;
      const top = window.pageYOffset || e.target.scrollTop || 0;
      this.scrolledDown = top > 80;
    },
  },
  computed: {
    navColor() {
      if (this.scrolledDown && this.$vuetify.theme.dark) {
        return "#05113E";
      } else if (this.scrolledDown && !this.$vuetify.theme.dark) {
        return "#f5f5fd";
      } else {
        return "transparent";
      }
    },
  },
};
</script>

<style>
.active-nav {
  font-weight: 600 !important;
}
.navItem:hover {
  background-color: rgba(55, 85, 185, 0.048);
}

#navDrawer {
  background-image: linear-gradient(
    142deg,
    rgb(4, 21, 71) 0%,
    rgb(16, 1, 24) 100%
  ) !important;
}

.drawerLink {
  font-size: 2.2rem !important;
}
</style>
