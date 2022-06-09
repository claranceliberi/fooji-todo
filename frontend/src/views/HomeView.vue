<script setup lang="ts">
import TodoItem from "../components/TodoItem.vue";
import GroupItem from "../components/Atom/GroupItem.vue";
</script>

<template>
  <main class="flex justify-center mt-20">
    <section class="grid grid-cols-2">
      <aside class="w-[18rem] bg-gray-800 p-4 rounded">
        <form class="w-full max-w-sm">
          <div class="flex items-center border-b border-teal-500 py-2">
            <input
              class="appearance-none bg-transparent border-none w-full text-gray-200 mr-3 py-1 px-2 leading-tight focus:outline-none"
              type="text"
              placeholder="Todo group name"
              aria-label="todo gorup"
            />
            <button
              class="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
              type="button"
            >
              Add
            </button>
          </div>
        </form>
        <div class="mt-5">
          <GroupItem></GroupItem>
          <GroupItem></GroupItem>
          <GroupItem></GroupItem>
          <GroupItem></GroupItem>
          <GroupItem></GroupItem>
        </div>
      </aside>
      <article>
        <h2 class="text-2xl text-gray-300 uppercase mb-10 text-center">
          Fooji Todo App
        </h2>
        <div>
          <TodoItem></TodoItem>
          <TodoItem></TodoItem>
          <TodoItem></TodoItem>
          <TodoItem></TodoItem>
          <TodoItem></TodoItem>
          <TodoItem></TodoItem>
          <TodoItem></TodoItem>
          <TodoItem></TodoItem>
          <TodoItem></TodoItem>
        </div>
      </article>
    </section>
  </main>
</template>
