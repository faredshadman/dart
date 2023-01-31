<template>
  <footer class="bg-black font-poppins text-white py-20">
    <div class="max-w-7xl w-11/12 mx-auto">
      <h1
        class="py-4 border-b text-xl md:text-3xl max-w-xs mx-auto text-center border-yelo"
      >
        Follow us
      </h1>
      <div class="flex items-center justify-center gap-5 pt-10">
        <a
          class="border-2 group rounded-full w-10 h-10 flex items-center justify-center"
          target="_blank"
          href="https://store.steampowered.com/search/?publisher=Darts%20Games"
        >
          <i
            class="fa-brands fa-steam-symbol transition-all duration-200 ease-in transform group-hover:scale-90"
          ></i>
        </a>
        <a
          target="_blank"
          href="https://www.facebook.com/dart.games"
          class="border-2 group rounded-full w-10 h-10 flex items-center justify-center"
        >
          <i
            class="fa-brands fa-facebook-f transition-all duration-200 ease-in transform group-hover:scale-90"
          ></i>
        </a>
        <a
          href="https://twitter.com/TheSparkGame"
          target="_blank"
          class="border-2 group rounded-full w-10 h-10 flex items-center justify-center"
        >
          <i
            class="fa-brands fa-twitter transition-all duration-200 ease-in transform group-hover:scale-90"
          ></i>
        </a>
        <a
          href="https://www.youtube.com/@revolutionthespark6603"
          target="_blank"
          class="border-2 group rounded-full w-10 h-10 flex items-center justify-center"
        >
          <i
            class="fa-brands fa-youtube transition-all duration-200 ease-in transform group-hover:text-red-700 group-hover:scale-90"
          ></i>
        </a>
        <a
          href="https://www.instagram.com/darts_games/"
          target="_blank"
          class="border-2 group rounded-full w-10 h-10 flex items-center justify-center"
        >
          <i
            class="fa-brands fa-instagram transition-all duration-200 ease-in transform group-hover:scale-90 group-hover:text-blue-400"
          ></i>
        </a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterELement",
};
</script>
