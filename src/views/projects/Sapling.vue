<template>
  <div>
    <ProjectBrief
      :screenshot="'kuusetaimed'"
      :demo="'https://anzudev.com/kuusetaimed'"
      :code="'https://github.com/anzuj/kuusetaimed'"
      :tech="['Bootstrap', 'jQuery', 'CSS']"
    >
      <template v-slot:title>
        Sapling business homepage
        <span class="pos-relative">
          <span id="tree1" class="slide-in-left">&#127794;</span>
          <span id="tree2">&#127794;</span><span id="tree3">&#127794;</span>
        </span>
      </template>

      <template v-slot:brief>
        <h4>Goal</h4>
        Make a lightweight website for a family business to replace their
        out-dated and non-responsive homepage
        <a target="_blank" href="http://kuusetaimed.ee">here</a>. The old site
        pictured below was made by a "professional" local web developer. It
        boggled my mind that he charged 800 EUR to put together a site which
        hurts your eyes with the color scheme and has not thought about mobile
        responsiveness at all.
 <!--        <v-img
          class="mx-auto my-2 fade-in"
          max-width="600"
          contain
          src="@/assets/images/kuusetaimed-old.jpg"
        ></v-img> -->
        So I decided to give this family business a bit of a more deserving
        web-home pro bono, especially considering that growing trees is a very
        worthwhile cause.
      </template>

      <template v-slot:learning>
        <ul>
          <li>
            Migrating from 5 HTML files to a one page solution. I started with
            vanilla CSS and HTML, and halfway switched to Bootstrap due to their
            convenient tab-menu system allowing the site to be a one-pager as
            opposed to making the user load 5 different HTML files (+background
            image!) when browsing the site. Due to the minimal content, one-page
            solution really was best here.
          </li>
          <li>
            Overwriting Bootstrap default styles. I learned a lot about the
            importance of !important (he-he-he) and ended up in StackOverflow
            plenty times to see how to disable some of Bootstrap's native
            behaviour.
          </li>
          <li>
            Mobile responsiveness. At first I handled it with flexbox, but
            during this project I finally got to first name basis with Bootstrap
            grid system too. Differences between BS3 and BS4 sometimes caused
            problem, since you use the screen size prefix -sm- or -lg-
            differently, but once you get a hang of it, it flies like a dream!
          </li>
          <li>
            Less is more. The old site planted text above pictures and gradients
            everywhere in the background. All in all, it cluttered everything
            and made it hard to focus on the actual important information:
            pricing and address. So I decided to go for a simple approach
            font-wise here, making sure that the background does not compete
            with the content and text is easily legible.
          </li>
        </ul>
      </template>
    </ProjectBrief>
  </div>
</template>

<script>
import ProjectBrief from "@/components/ProjectBrief.vue";
export default {
  props: [""],
  components: { ProjectBrief },
  data: () => ({}),
  methods: {},
  computed: {},
};
</script>

<style>
#tree1 {
  font-size: 15px;
  display: inline-block;
  animation: slideLeft 0.5s ease-in;
}
#tree2 {
  font-size: 20px;
  display: inline-block;
  animation: slideLeft 0.7s ease-in;
}

#tree3 {
  display: inline-block;
  animation: slideLeft 0.9s ease-in;
}

@keyframes slideLeft {
  0% {
    opacity: 0;
    transform: translateX(-7px) scaleY(1);
  }

  50% {
    transform: scaleY(1.3);
  }

  100% {
    opacity: 1;
    transform: translateX(0px) scaleY(1);
  }
}
</style>
