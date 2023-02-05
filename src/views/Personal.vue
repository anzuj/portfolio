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

   
<p class="mt-3">Sometimes I run around in a pointy hat and shout spells. Why? Because LARPing (live action roleplaying) is a great way to escape the routine and inject some magic in your life. You need only ask and I can talk for hours about the mayhem that has taken place in some Polish castles.</p>

<p>At home I like to spend time with creative arts, mostly creating jewelry with beadweaving. I'm at my happiest when I can create some pretty pixels during the day and some pretty pendants at night :)</p>

<h3>Some random facts:</h3>

<ul>
  <li>I named one of our cats Leeroy Jenkins as a tribute to my World of Warcraft raiding days.</li>
  <li>Harry Potter and Witcher franchises have my heart.</li>
  <li>Boardgame enthusiast! Current favourite is Everdell for which I've handcrafted custom components.</li>
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