<template>
  <nav class="w-full bg-gradient-to-r from-blue-800 to-blue-600 text-white p-4">
    <router-link
      v-for="item in list"
      :to="item.to"
      class="px-4"
      :key="item.to"
      >{{ item.title }}
      </router-link>

    <button v-if="isLoggedIn" class="mx-2" @click="logout">Logout</button>
    <button v-else class="mx-2" @click="$emit('open-login-modal')">
      Login
    </button>
  </nav>
</template>

<script>
import { getAuth, signOut } from "firebase/auth";
export default {
  props: { isLoggedIn: { type: Boolean, required: true } },
  data() {
    return {
      list: [
        { title: "Home", to: "/" },
        { title: "DC Heros", to: "/dc-heros" },
        { title: "Calendar", to: "/calendar" },
        { title: "MarkDown", to: "/markdown" },
        { title: "Slider", to: "/slider-carousel" },
        { title: "Calculator", to: "/calculator" },
        { title: "Modal", to: "/reuseable-modal" },
      ],
    };
  },
  methods: {
    logout() {
      const auth = getAuth();
      signOut(auth)
        .then(() => {
          // Sign-out successful.
        })
        .catch(() => {
          // An error happened.
        });
    },
  },
};
</script>

<style>
</style>