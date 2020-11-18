<template>
  <v-container class="pa-10 slide-in">
    <v-row align="center" justify="center">
      <v-col cols="12" md="6" lg="4">
        <v-card flat color="transparent">
          <h2
            :class="{
              'text-right': $vuetify.breakpoint.mdAndUp,
              'mobile-heading': $vuetify.breakpoint.smAndDown,
            }"
            class="slide-in-left"
          >
            {{ $t("home.title") }}
          </h2>
        </v-card>
      </v-col>
      <v-col cols="12" sm="7" md="6" xl="4">
        <v-img :src="require(`@/assets/home1.png`)" contain />
      </v-col>
    </v-row>

    <v-row justify="center" align="center">
      <v-col :order="$vuetify.breakpoint.xs ? 2 : 1" cols="12" md="5" xl="3">
        <v-img :src="require(`@/assets/home2.png`)" contain />
      </v-col>

      <v-col
        cols="12"
        sm="7"
        md="5"
        xl="4"
        :order="$vuetify.breakpoint.xs ? 1 : 2"
        class="text-center slide-in-right"
      >
        <v-img
          style="display: inline-block;"
          :src="require(`@/assets/1.png`)"
          contain
          :height="$vuetify.breakpoint.xs ? 100 : 120"
        />
        <h4>{{ $t("home.award") }}</h4>
        <p>{{ $t("home.awardText") }}</p>
        <v-icon
          small
          color="red darken-2"
          style="padding-bottom: 2px; padding-right: 2px"
          >mdi-play-box</v-icon
        >
        <a
          class="text-decoration-none"
          href="https://www.youtube.com/watch?v=MwDtE_6RNB4"
          target="_blank"
          >Evatherm on Youtube</a
        >
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: [""],
  components: {},
  data: () => ({}),
  methods: {},
  computed: {},
};
</script>

<style>
.mobile-heading {
  font-size: 1.3rem;
  text-align: center;
}
</style>
