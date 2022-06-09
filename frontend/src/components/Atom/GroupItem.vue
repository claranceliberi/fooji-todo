<script lang="ts" setup>
import type { Group } from "@/types";

const props = defineProps<{ item: Group; active: boolean }>();
</script>

<template>
  <div
    class="hover:bg-gray-900 cursor-pointer rounded p-1 my-1 pl-2 capitalize text-gray-400"
    :class="{ 'bg-gray-900': props.active }"
  >
    {{ props.item.name }}
  </div>
</template>
