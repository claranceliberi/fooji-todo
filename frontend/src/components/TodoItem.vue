<script setup lang="ts">
import type { Todo } from "@/types";
import { ref } from "vue";
import TheCheckboxVue from "./Atom/TheCheckbox.vue";

const props = defineProps<{ item: Todo }>();

interface events {
  (e: "update", value: Todo): void;
  (e: "delete", value: Todo): void;
}

const emit = defineEmits<events>();

function handleComplete() {
  const item = props.item;
  item.completed = !item.completed;

  emit("update", item);
}

function handleDelete() {
  emit("delete", props.item);
}
</script>
<template>
  <div
    class="item flex items-center space-x-4 my-2 bg-gray-800 w-[25rem] p-2 rounded"
  >
    <div class="opacity-80">
      <TheCheckboxVue :checked="item.completed" @click="handleComplete" />
    </div>
    <div
      class="text-gray-50 text-lg flex-1"
      :class="{ 'line-through text-gray-500': item.completed }"
    >
      {{ item.name }}
    </div>

    <button class="ml-4 close-button" @click="handleDelete">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24"
        height="24"
      >
        <path fill="none" d="M0 0h24v24H0z" />
        <path
          class="fill-red-500 opacity-70"
          d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-9.414l2.828-2.829 1.415 1.415L13.414 12l2.829 2.828-1.415 1.415L12 13.414l-2.828 2.829-1.415-1.415L10.586 12 7.757 9.172l1.415-1.415L12 10.586z"
        />
      </svg>
    </button>
  </div>
</template>

<style lang="scss">
.item {
  button {
    display: none;
    transition: cubic-bezier(0.075, 0.82, 0.165, 1);
  }
  &:hover {
    button {
      display: block;
    }
  }
}
</style>
