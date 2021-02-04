<template>
  <div class="pa-10 slide-in-top">
    <!-- <h1>Personal</h1> -->
       <h1 class="gradient-h1">
          Personal
          </h1>

        <v-img
            class="mb-10"
            max-width="300"
            :src="require(`@/assets/images/plane.png`)"
            contain
          />
    <p>My roots are actually from a tiny, yet proudly tech-savy country of Estonia. It's a land of Skype, TransferWise, e-voting from a cold tub and best rye bread.

In 2019 I followed my heart to Switzerland. I live here now with my husband and our two felines. I try to explore my new home country with wondrous landscape as often as I can and coming from a relatively flat country it never ceases to amaze me.</p>

<v-row justify="center">
  <v-col v-for="pic in photos" :key="pic.path" style="max-width: 200px">
    <v-img class="rounded-lg"
          :alt="pic.path" contain
          :src="require(`@/assets/images/${pic.path}.jpg`)"
        ></v-img
      >
      <div class="text-caption grey--text">{{pic.description}}</div>
  </v-col>
</v-row>

   
<p>Before Covid-19 restricted travel you could sometimes find me in Poland, in a castle of Czocha with a hundred other LARPing enthusiasts.Running around in pointy hats and shouting spells is undoubtedly a great way to escape the routine and inject some magic in your life. You need only ask and I can talk for hours about the mayhem that has taken place in that castle.</p>

<h3>Some random facts:</h3>

<ul>
  <li>I named one of our cats Leeroy Jenkins as a tribute to my World of Warcraft raiding days.</li>
  <li>Harry Potter and Witcher franchises have my heart.</li>
  <li>I'm at my happiest when I'm elbow deep in some DIY project or a good book.</li>
  <li>Nerdy side in me adores boardgames. Current favourite is Everdell. I could sit up for hours crafting tiny components and painting miniatures.</li>
  </ul>



  </div>
</template>

<script>
export default {
    props: [""],
    components: {  },
    data: () => ({
      photos: [
        {
 path:"larp",
 description: "My larp character - the bigger the hat the better the wizard!"
        },
          {
 path:"picnic",
 description: "Picnic on mount Pilatus enjoying the Swiss landscape"
        },
          {
 path:"cats",
 description: "My 2 homeoffice coding assistants"
        }
       

      ]
    }),
    methods: {},
    computed: {}
};
</script>

<style>


</style>