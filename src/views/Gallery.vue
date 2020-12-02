<template>
  <!--  This gallery setup assumes that images are in one folder and named with incrementing integrers:  1.jpg, 2.jpg etc.-->
  <div class="pa-10 slide-in-top">
    <h1 class="gradient-h1">
      Gallery
    </h1>
    <v-card-text>
      Digital illustrations, cartoons and mug designs I've done over the years
    </v-card-text>
    <v-row v-if="images">
      <v-col v-for="img in images" :key="img" cols="12" sm="6" md="4" lg="3">
        <div class="gallery-image">
          <v-img
            @click="viewImage(img)"
            class="transitioned"
            alt="gallery picture"
            aspect-ratio="1.2"
            :src="require(`@/assets/images/gallery/${img}.jpg`)"
          ></v-img>
        </div>
      </v-col>
    </v-row>

    <v-dialog v-model="viewDialog" fullscreen>
      <v-card class="pa-6" style="background-color: rgba(0, 0, 0, 0.85)">
        <v-container>
          <v-row>
            <v-spacer></v-spacer>
            <v-btn color="grey lighten-1" large icon @click="viewDialog = false"
              ><v-icon>mdi-close-circle-outline</v-icon>
            </v-btn></v-row
          >
          <v-row justify="center" align="center">
            <v-btn color="primary" large icon @click="prevImage"
              ><v-icon>mdi-arrow-left-thick</v-icon>
            </v-btn>
            <span class="imageIndicator"
              >{{ currentImage }}/{{ nrOfImages }}</span
            >
            <v-btn color="primary" large icon @click="nextImage"
              ><v-icon>mdi-arrow-right-thick</v-icon>
            </v-btn>
          </v-row>
          <div class="pa-6">
            <v-img
              v-if="currentImage"
              class="fade-in"
              :key="currentImage"
              height="70vh"
              alt="gallery picture"
              contain
              :src="require(`@/assets/images/gallery/${currentImage}.jpg`)"
            ></v-img>
          </div>
        </v-container>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  mounted() {
    //This creates a helper array to render images. If nr of images changes, just modify nrOfImages accordingly and everything else is automatic.
    this.images = [...Array(this.nrOfImages + 1).keys()].slice(1);
  },
  data: () => ({
    images: null, //on mount will be updated to [1,2,3,4... up until nrOfImages]
    nrOfImages: 20,
    viewDialog: false,
    currentImage: null,
  }),
  methods: {
    viewImage(img) {
      // triggered when clicking on a thumbnail image
      this.currentImage = img;
      this.viewDialog = true;
    },
    prevImage() {
      if (this.currentImage === 1) {
        // if going backwards from 1st image in gallery, show last image
        this.currentImage = this.nrOfImages;
      } else {
        // go to previous image on gallery
        this.currentImage -= 1;
      }
    },
    nextImage() {
      if (this.currentImage === this.nrOfImages) {
        // if going forwards from last image in gallery, show 1st image
        this.currentImage = 1;
      } else {
        // go to next image on gallery
        this.currentImage += 1;
      }
    },
  },
  computed: {},
};
</script>

<style>
.gallery-image:hover {
  cursor: pointer;
}

.gallery-image:hover .v-image {
  transform: scale(1.05);
}

.imageIndicator {
  font-family: "Blinker", sans-serif;
  font-weight: 600;
  letter-spacing: 1px;
  margin: 5px 0px;
  color: rgb(189, 189, 189);
}
</style>
