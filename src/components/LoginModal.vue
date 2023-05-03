<template>
  <div>
    <section
      @click="$emit('close-login')"
      class="z-20 h-screen w-screen bg-gray-500 fixed top-0 opacity-50"
    ></section>
    <div class="absolute inset-0">
      <div class="flex h-full">
        <div class="z-30 m-auto bg-white p-2 rounded shadow">
          <div class="p-2 border rounded">
            <h1>Login</h1>
            <GoogleLogin @close-login-from-google="close"></GoogleLogin>
            <form class="p-2 my-2" @submit.prevent="submit">
              <div class="my-4">
                <label> Email or UserName</label>
                <input
                  class="rounded shadow p-2 w-full"
                  placeholder="Enter your name"
                  v-model="email"
                  ref="emailRef"
                />
              </div>
              <div class="my-4">
                <label>Password</label>
                <input
                  class="rounded shadow p-2 w-full"
                  type="password"
                  placeholder="Enter your password"
                  v-model="password"
                />
              </div>
              <div class="my-4">
                <button
                  type="submit"
                  class="w-full p-2 bg-gradient-to-r from-red-700 to-pink-700 text-white"
                >
                  <span v-if="!isLoading">Login</span>
                  <span v-else>Please wait</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template> 

<script>
import {
  signInWithEmailAndPassword,
  getAuth,
} from "firebase/auth";
import GoogleLogin from "../components/Login/GoogleLogin.vue";

export default {
  components: { GoogleLogin },
  data() {
    return {
      email: "lampx@neu.edu.vn",
      password: "123456",
      isLoading: false,
    };
  },
  mounted() {
    this.$refs.emailRef.focus();
  },
  methods: {
    submit() {
      this.isLoading = true;
      signInWithEmailAndPassword(getAuth(), this.email, this.password)
        .then((res) => {
          // Signed in
          this.email = "";
          this.password = "";
          this.isLoading = false;
          console.log(res.user);
          this.close();
        })
        .catch((error) => {
          console.log(error);
          this.isLoading = false;
        });
    },
    close() {
      this.$emit("close-login");
    },
    
  },
};
</script>

<style>
</style>