<template>
  <section class="bg-hero bg-cover bg-repeat w-full h-screen bg-fixed bg-black">
    <main
      class="pt-40 max-w-7xl mx-auto w-11/12 flex items-center justify-center lg:justify-start"
    >
      <div class="flex flex-col gap-4 items-center justify-center max-w-2xl">
        <img
          src="@/assets/spark.png"
          alt="Revolution the spark,image,spark,revolution,game"
        />
        <button
          class="w-2/3 border-2 text-2xl font-sans border-yelo rounded-full p-2 text-white bg-transparent"
        >
          Add to Wishlist
        </button>
      </div>
    </main>
  </section>
</template>

<script>
export default {
  name: "HeroSection",
};
</script>
