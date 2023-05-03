<template>
  <section class="flex w-full">
    <div class="m-auto">
      <h1 class="text=2xl text-center">Calculator</h1>
      <p
        class="text-3xl h-10 text-right mt-10 w-45 overflow-x-scroll"
        style="direction: rtl"
      >
        {{ currentNumber }}
      </p>
      <div class="h-10">
        <small v-if="selectedOperation"
          >{{ prevNumber }} {{ selectedOperation }} {{ currentNumber }}</small
        >
      </div>
      <div class="grid grid-cols-4 gap-1">
        <button @click="pressed('1')" class="p-2 border rounder w-10 shadow">
          1
        </button>
        <button @click="pressed('2')" class="p-2 border rounder w-10 shadow">
          2
        </button>
        <button @click="pressed('3')" class="p-2 border rounder w-10 shadow">
          3
        </button>
        <button @click="pressed('+')" class="p-2 border rounder w-10 shadow">
          +
        </button>
        <button @click="pressed('4')" class="p-2 border rounder w-10 shadow">
          4
        </button>
        <button @click="pressed('5')" class="p-2 border rounder w-10 shadow">
          5
        </button>
        <button @click="pressed('6')" class="p-2 border rounder w-10 shadow">
          6
        </button>
        <button @click="pressed('-')" class="p-2 border rounder w-10 shadow">
          -
        </button>
        <button @click="pressed('7')" class="p-2 border rounder w-10 shadow">
          7
        </button>
        <button @click="pressed('8')" class="p-2 border rounder w-10 shadow">
          8
        </button>
        <button @click="pressed('9')" class="p-2 border rounder w-10 shadow">
          9
        </button>
        <button @click="pressed('*')" class="p-2 border rounder w-10 shadow">
          *
        </button>
        <button @click="pressed('C')" class="p-2 border rounder h-10 shadow">
          C
        </button>
        <button @click="pressed('0')" class="p-2 border rounder h-10 shadow">
          0
        </button>
        <button @click="pressed('=')" class="p-2 border rounder w-10 shadow">
          =
        </button>
        <button @click="pressed('/')" class="p-2 border rounder w-10 shadow">
          /
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import {ref } from "vue";
import useWindowEvent from "../utilities/composition/useWindowEvent";
export default {
  setup() {
    const operations = ["+", "-", "*", "/"];
    const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
    const currentNumber = ref("");
    const prevNumber = ref("");
    const selectedOperation = ref("");

    function pressed(value) {
      if (value === "=" || value === "Enter") calculate(value);
      else if (value === "C") clear();
      else if (operations.includes(value)) applyOperation(value);
      else if (numbers.includes(value)) appendNumber(value);
    }
    function appendNumber(value) {
      currentNumber.value = currentNumber.value + value;
    }
    function applyOperation(value) {
      calculate();
      prevNumber.value = currentNumber.value;
      currentNumber.value = "";
      selectedOperation.value = value;
    }
    function calculate() {
      if (selectedOperation.value == "*") multiply();
      else if (selectedOperation.value == "/") divide();
      else if (selectedOperation.value == "-") subtract();
      else if (selectedOperation.value == "+") sum();

      prevNumber.value = "";
      selectedOperation.value = "";
      prevNumber.value = "";
    }
    function multiply() {
      currentNumber.value = prevNumber.value * currentNumber.value;
    }
    function divide() {
      currentNumber.value = prevNumber.value / currentNumber.value;
    }
    function subtract() {
      currentNumber.value = prevNumber.value - currentNumber.value;
    }

    function sum() {
      currentNumber.value = +prevNumber.value + +currentNumber.value;
    }
    function clear() {
      currentNumber.value = "";
    }
    const handlerKeydown = (e) => {
      pressed(e.key);
      console.log(e.key);
    };
    useWindowEvent("keydown",handlerKeydown)
    
    return { currentNumber, pressed, prevNumber, selectedOperation };
  },
};
</script>

<style>
</style>