<template>
  <div class="" style="max-width: 80px">
    <v-select
      class=""
      background-color="transparent"
      hide-details
      solo
      flat
      v-model="$i18n.locale"
      :items="languages"
    >
      <template v-slot:item="data">
        <v-img
          style="display: inline-block"
          :src="require(`../assets/flags/${data.item}.png`)"
          contain
          height="18"
        />
      </template>

      <template v-slot:selection="data">
        <v-img
          :src="require(`../assets/flags/${data.item}.png`)"
          height="18"
          contain
          style="display: inline-block"
        />
      </template>
    </v-select>
  </div>
</template>

<script>
export default {
  props: [""],
  components: {},
  data: () => ({
    languages: ["en", "de"],
  }),
  methods: {},
  computed: {},
};
</script>

<style scoped></style>
