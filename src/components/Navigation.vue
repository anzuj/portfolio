<template>
  <nav>
    <v-app-bar app :color="navColor" flat v-scroll="onScroll">
      <v-tabs v-model="tab" background-color="transparent">
        <v-tabs-slider color="teal"></v-tabs-slider>

        <v-tab
        class="font-weight-bold"
          :ripple="false"
          v-for="item in navItems"
          :key="item.text"
          @click="handleNav(item)"
        >
          {{ item.text }} <v-icon small class="ml-1" v-if="item.icon">{{item.icon}}</v-icon>
        </v-tab>
      </v-tabs>
      <v-switch :ripple="false" v-model="$vuetify.theme.dark">
        <template v-slot:label>
          <v-icon>{{
            $vuetify.theme.dark ? "mdi-weather-night" : "mdi-white-balance-sunny"
          }}</v-icon>
        </template>
      </v-switch>
      <v-app-bar-nav-icon class="d-none"></v-app-bar-nav-icon>
    </v-app-bar>
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
      { text: "GALLERY", link: "/gallery", icon: null },
      { text: "PERSONAL", link: "/personal", icon: null },
      {
        text: "BLOG",
        link: "https://dev.to/anzelika",
        icon: "mdi-open-in-new",
      },

      /*       { text: "nav.jobs", link: "/jobs", icon: "business_center" },
      { text: "nav.contact", link: "/contact", icon: "mail_outline" }, */
    ],
  }),
  methods: {
    handleNav(nav) {
      if (nav.link === this.$route.path) {
        return;
      } else if (nav.text === "BLOG") {
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
.border-right {
  border-right: 1px solid lightgrey;
}
.active-nav {
  font-weight: 600;
}
.navItem:hover {
  background-color: rgba(55, 85, 185, 0.048);
}

.navText {
  white-space: nowrap;
  font-size: 0.85rem;
}

@media only screen and (max-width: 1200px) {
  .navText {
    font-size: 0.7rem;
  }
}

@media only screen and (max-width: 1050px) {
  .navText {
    font-size: 0.65rem;
  }
}
</style>
