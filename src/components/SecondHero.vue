<template>
  <section
    id="salam"
    class="bg-black py-20 font-poppins flex items-center justify-center"
  >
    <main
      class="lg:w-1/2 w-5/6 mx-auto px-10 py-6 border-2 space-y-4 text-white rounded-md border-yelo"
    >
      <div class="py-4">
        <h1 class="text-center text-3xl pb-6 uppercase">Connect with us</h1>
        <div class="text-lg md:text-2xl">
          <p>
            Never miss an update from us! <br />
            Sign up to Darts Games email list and as a thank you, receive a
            wallpaper! (WIP)
          </p>
        </div>
      </div>
      <div
        class="mt-4 w-full flex flex-col items-center gap-4 sm:gap-0 sm:flex-row sm:items-stretch"
      >
        <input
          class="w-full pl-4 bg-white text-black outline-none bg-transparent border border-yelo rounded p-1"
          type="email"
          v-model="email"
          placeholder="Your Email *"
        />
        <button
          @click="handleSubmit"
          class="z-50 -ml-2 rounded md:rounded-none md:rounded-r text-white bg-yelo px-3 py-1"
        >
          Subscribe
        </button>
      </div>
    </main>
  </section>
</template>

<script>
import { ref } from "vue";
// import emailjs from "@emailjs/browser";
export default {
  name: "SecondHero",
  setup() {
    const email = ref("");
    const handleSubmit = () => {
      if (email.value !== "") {
        alert(email.value);
      }
    };
    return {
      email,
      handleSubmit,
    };
  },
};
</script>

<style scoped></style>
