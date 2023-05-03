<template>
  <div class="flex w-full flex-wrap relative">
    <div class="absolute w-full" v-for="(color, index) in sliders" :key="color">
      <transition name="fade">
        <div
          v-if="currentSlide === index"
          :class="color"
          style="height: 350px"
        ></div>
      </transition>
    </div>
    <div class="w-full" style="height: 340px">
      <div class="absolute bottom-0 flex w-full justify-center">
        <div
          v-for="(slider, index) in sliders"
          :key="slider"
          @click="makeActive(index)"
          :class="currentSlide == index ? 'bg-gray-500' : 'bg-gray-300'"
          class="w-4 h-4 mx-2 rounded-full z-20 cursor-pointer shadow-md"
        ></div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      currentSlide: 1,
      interval: null,
      sliders: ["bg-teal-600", "bg-blue-600", "bg-yellow-600"],
      isTitleShowing: false,
    };
  },
  methods:{
    makeActive(index){
      this.currentSlide=index
    }
  },
  mounted() {
    this.interval = setInterval(() => {
     
      if (this.currentSlide == 2) {
        this.currentSlide = 0;
      } else {
        this.currentSlide++;
      }
    }, 2000);
  },
  beforeUnmount() {
    clearInterval(this.interval);
  },
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: all 1s ease;
}

.fade-enter-from {
  opacity: 0;
  transform: translateX(-100%);
}
.fade-leave-to {
  opacity: 0;
  transform: translateX(100%);
}
</style>