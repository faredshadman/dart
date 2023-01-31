<template>
  <header
    :class="{
      black: addBackground,
    }"
    class="bg-transparent z-99 fixed w-full top-0 cursor-pointer"
  >
    <div
      class="max-w-7xl w-11/12 font-poppins mx-auto py-2 flex justify-between items-center"
    >
      <!-- brand -->
      <a href="#" class="flex items-center">
        <img src="@/assets/logo.png" class="w-16 h-16" alt="Dart Games Logo" />
        <h1 class="text-white text-2xl tracking-widest font-medium">
          DARTS GAMES
        </h1>
      </a>
      <!-- mobile menu -->
      <div
        @click="toggleSidear"
        class="inline-block text-2xl text-white lg:hidden"
      >
        <i v-if="!sidebar" class="fa-solid fa-bars"></i>
        <i v-if="sidebar" class="fa-solid fa-xmark text-3xl text-red-300"></i>
      </div>
      <!-- navigation menu -->
      <nav class="text-white hidden lg:block">
        <ul class="flex space-x-10 text-2xl">
          <li
            @click="scrollToTop"
            class="hover:bg-gray-300 transition-all duration-200 ease-in-out hover:text-black rounded"
          >
            <a class="block px-4 py-1" href="#">Home</a>
          </li>
          <li
            class="px-4 py-1 hover:bg-gray-300 transition-all duration-200 ease-in-out hover:text-black rounded"
          >
            Games
          </li>
          <li
            class="py-1 px-4 hover:bg-gray-300 transition-all duration-200 ease-in-out hover:text-black rounded"
          >
            Jobs
          </li>
          <li
            class="hover:bg-gray-300 transition-all duration-200 ease-in-out hover:text-black rounded"
          >
            <a class="block px-4 py-1" href="#about">About</a>
          </li>
          <li
            class="hover:bg-gray-300 transition-all duration-200 ease-in-out hover:text-black rounded"
          >
            <a class="block px-4 py-1" href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
import { computed, onMounted, ref } from "@vue/runtime-core";
import { useStore } from "vuex";
export default {
  name: "NavBar",
  setup() {
    const store = useStore();
    const addBackground = ref(false);
    const toggleSidear = () => {
      store.commit("toggleSideBar");
    };
    const scrollToTop = () => {
      window.scrollTo(0, 0);
    };
    const sidebar = computed(() => {
      return store.state.sidebar;
    });
    const scrollPosition = () => {
      let y = window.scrollY;
      if (y > 200) {
        addBackground.value = true;
      } else {
        addBackground.value = false;
      }
    };
    onMounted(() => {
      window.addEventListener("scroll", scrollPosition);
    });
    return {
      scrollToTop,
      toggleSidear,
      addBackground,
      sidebar,
    };
  },
};
</script>

<style scoped>
.black {
  background: rgba(0, 0, 0, 0.776);
}
</style>
