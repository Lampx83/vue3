<template>
  <section class="my-5 text-center">
    <button @click="loginWithGoogle()" class="border px-3 rounded">
      Login with Google
    </button>
  </section>
</template>

<script>
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

export default {
  methods: {
    loginWithGoogle() {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      signInWithPopup(auth, provider)
        .then((result) => {
          const user = result.user;
          console.log(user);
          this.email = "";
          this.password = "";
          this.isLoading = false;
          this.$emit("close-login-from-google");
        })
        .catch((error) => {
          console.log(error);
          this.isLoading = false;
         
        });
    },
  },
};
</script>

<style>
</style>