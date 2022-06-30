<template>
  <section class="bg-hero bg-cover bg-repeat w-full h-screen bg-black">
    <main
      class="pt-40 max-w-7xl mx-auto w-11/12 flex items-center justify-center lg:justify-start"
    >
      <div class="flex flex-col gap-4 items-center justify-center max-w-2xl">
        <img
          src="@/assets/spark.png"
          alt="Revolution the spark,image,spark,revolution,game"
        />
        <div class="w-full relative font-sans bg-steam px-4 rounded-md py-2">
          <!-- header -->
          <div class="flex items-center text-white justify-between">
            <h1 class="text-xl">
              Revolution: The Spark
              <a
                target="_blank"
                class="text-slate-400"
                href="https://store.steampowered.com/app/1334230/Revolution_The_Spark/"
                >on Steam
              </a>
            </h1>
            <span
              ><i class="fa-brands text-slate-400 fa-steam text-4xl"></i
            ></span>
          </div>
          <!-- content  -->
          <div class="flex gap-2">
            <img class="w-1/3 h-20" src="@/assets/alex.jpg" alt="Game" />
            <p class="text-slate-200 text-xs tracking-wide w-2/3">
              Embark on a perilous journey through a corrupt government in
              story-driven steampunk RPG Revolution: The Spark. Explore nine
              distinct areas, assemble a team of fearless allies, and decide if
              you want to foster peace or lead everyone towards a violent
              uprising.
            </p>
          </div>
          <!-- windows icon -->
          <div
            class="w-6 h-6 mt-4 bg-slate-600 flex items-center justify-center"
          >
            <i class="fa-brands text-white fa-windows"></i>
          </div>
          <div
            class="w-5/6 rounded-md flex flex-col sm:flex-row items-center -mb-3 ml-auto px-2 py-1 bg-green-800 justify-between"
          >
            <h2
              class="text-slate-300 transition-all duration-100 ease-in hover:text-slate-100 text-md"
            >
              Available: Late 2022 - Wishlist now!
            </h2>
            <button
              class="bg-green-600 text-white transition-all duration-100 ease-in text-sm rounded-md hover:bg-green-500 p-2"
            >
              Add to Wishlist on Steam
            </button>
          </div>
        </div>
      </div>
    </main>
  </section>
</template>

<script>
export default {
  name: "HeroSection",
};
</script>
