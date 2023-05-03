<template>
  <div class="m-auto">
    <h1 class="text-center">Vue Calendar</h1>

    <section class="flex justify-between">
      <h2 class="p-2 font-bold">{{ currentMonthName }}</h2>
      <h2 class="p-2 font-bold">{{ currentYear }}</h2>
    </section>
    <section class="flex">
      <p
        class="p-1 h-10 text-center"
        style="width: 14.28%"
        v-for="day in days"
        :key="day"
      >
        {{ day }}
      </p>
    </section>
    <section class="flex flex-wrap my-2">
      <p
        class="p-1 text-center"
        style="width: 14.28%"
        v-for="num in startDay()"
        :key="num"
      ></p>
      <p
        class="p-1 text-center"
        style="width: 14.28%"
        v-for="num in daysinMonth()"
        :key="num"
        :class="classDay(num)"
      >
        {{ num }}
      </p>
    </section>
    <section class="flex justify-between">
      <button class="px-2 border rounded" @click="prev()">Prev</button>
      <button class="px-2 border rounded" @click="next()">Next</button>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentDate: new Date().getUTCDate(),
      currentMonth: new Date().getMonth(),
      currentYear: new Date().getFullYear(),
      days: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    };
  },
  methods: {
    daysinMonth() {
      return new Date(this.currentYear, this.currentMonth+1, 0).getDate();
    },
    startDay() {
      return new Date(this.currentYear, this.currentMonth, 0).getDay();
    },
    next() {
      this.currentMonth++;
      if(this.currentMonth==12){
        this.currentMonth = 0;
        this.currentYear++;
      }
    },
    prev() {
      this.currentMonth--;
      if(this.currentMonth==0)
        this.currentYear--
        this.currentMonth==11;
    },
    classDay(num){
        const calendarFullDate = new Date(this.currentYear, this.currentMonth,num).toDateString();
        const currentfullDate= new Date().toDateString();
        console.log(calendarFullDate);
        console.log(currentfullDate);
        return calendarFullDate ===currentfullDate?"text-yellow-600":""
    }
  },
  computed: {
    currentMonthName(){
        return new Date(
            this.currentYear,
            this.currentMonth
        ).toLocaleDateString("default", {month: "long"});
    },
  },
};
</script>

<style>
</style>