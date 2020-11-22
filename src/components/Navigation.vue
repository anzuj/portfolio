<template>
  <nav>
    <v-app-bar dense app color="transparent" flat>
      <v-tabs v-model="tab" background-color="transparent">
        <v-tabs-slider color="teal"></v-tabs-slider>

        <v-tab :ripple="false" v-for="item in navItems" :key="item.text" @click="handleNav(item)">
          {{ item.text }}
        </v-tab>
      </v-tabs>
      <v-app-bar-nav-icon class="d-none"></v-app-bar-nav-icon>
    </v-app-bar>
  </nav>
</template>

<script>
export default {
  props: [""],
  components: {},
  data: () => ({
    tab: null,
    drawer: false,
    navItems: [
      { text: "HOME", link: "/", icon: "home" },
      { text: "PORTFOLIO", link: "/portfolio", icon: "groups" },
         { text: "GALLERY", link: "/gallery", icon: "cloud_download" },
      { text: "PERSONAL", link: "/personal", icon: "engineering" },
      {
        text: "BLOG",
        link: "https://dev.to/anzelika",
        icon: "corporate_fare",
      },
   
      /*       { text: "nav.jobs", link: "/jobs", icon: "business_center" },
      { text: "nav.contact", link: "/contact", icon: "mail_outline" }, */
    ],
  }),
  methods: {
    handleNav(nav) {
      if (nav.link === this.$route.path) {
        return;
      } else if (nav.text === "BLOG"){
        window.open(nav.link, "_blank"); 
      }
      else {
        this.$router.push({ path: nav.link });
      }
    },
  },
  computed: {},
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
