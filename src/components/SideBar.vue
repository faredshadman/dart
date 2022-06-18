<template>
  <transition name="sidebar">
    <aside
      v-show="sidebar"
      class="fixed cursor-pointer top-0 left-0 z-100 min-h-full max-w-xs w-2/3 p-10 bg-black"
    >
      <div
        @click="closeSideBar()"
        class="absolute top-6 right-6 text-2xl text-white"
      >
        <i class="fa-solid fa-xmark"></i>
      </div>
      <div class="space-y-10 text-center">
        <div class="flex flex-col items-center gap-2 justify-center">
          <div class="w-20 h-20">
            <img src="@/assets/logo.png" alt="Logo" />
          </div>
          <h1 class="text-3xl text-white font-serif select-none">DART GAMES</h1>
        </div>
        <!-- sidebar menu -->
        <nav class="text-white">
          <ul class="text-2xl space-y-10">
            <li
              @click="scrollToTop"
              class="hover:bg-slate-200 hover:text-black rounded-lg py-2 transition-all duration-200 ease-in-out"
            >
              Home
            </li>
            <li
              class="hover:bg-slate-200 hover:text-black rounded-lg py-2 transition-all duration-200 ease-in-out"
            >
              Games
            </li>
            <li
              class="hover:bg-slate-200 hover:text-black rounded-lg py-2 transition-all duration-200 ease-in-out"
            >
              Jobs
            </li>
            <li
              class="hover:bg-slate-200 hover:text-black rounded-lg py-2 transition-all duration-200 ease-in-out"
            >
              <a href="#about"> About </a>
            </li>
            <li
              class="hover:bg-slate-200 hover:text-black rounded-lg py-2 transition-all duration-200 ease-in-out"
            >
              <a href="#contact"> Contact </a>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  </transition>
</template>

<script>
import { computed } from "@vue/runtime-core";
import { useStore } from "vuex";
export default {
  name: "SideBar",
  setup() {
    const store = useStore();
    const sidebar = computed(() => {
      return store.state.sidebar;
    });
    const closeSideBar = () => {
      store.commit("closeSideBar");
    };
    const scrollToTop = () => {
      window.scrollTo(0, 0);
    };

    return {
      sidebar,
      closeSideBar,
      scrollToTop,
    };
  },
};
</script>

<style>
.sidebar-enter-active,
.sidebar-leave-active {
  transition: 1s ease-in-out all;
}
.sidebar-enter-from,
.sidebar-leave-to {
  transform: translateX(-320px);
}
.sidebar-enter-to,
.sidebar-leave-from {
  transform: translateX(0);
}
</style>
