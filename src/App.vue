<template>
  <div class="relative">
    <SideBar />
    <NavBar />
    <HeroSection />
    <SecondHero />
    <AboutUs />
    <ContactUs />
    <Footer />
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import SideBar from "./components/SideBar.vue";
import HeroSection from "./components/HeroSection.vue";
import SecondHero from "./components/SecondHero.vue";
import AboutUs from "./components/AboutUs.vue";
import ContactUs from "./components/ContactUs.vue";
import Footer from "./components/Footer.vue";
import { useStore } from "vuex";
import { onBeforeMount, onMounted } from "@vue/runtime-core";
export default {
  name: "App",
  components: {
    NavBar,
    SideBar,
    HeroSection,
    SecondHero,
    AboutUs,
    ContactUs,
    Footer,
  },
  setup() {
    const store = useStore();
    const closeSideBar = () => {
      store.commit("closeSideBar");
    };
    onBeforeMount(() => {
      window.removeEventListener("resize", closeSideBar);
    });
    onMounted(() => {
      window.addEventListener("scroll", closeSideBar);
      window.addEventListener("resize", closeSideBar);
    });

    return { closeSideBar };
  },
};
</script>
