<script setup lang="ts">
import TodoItem from "../components/TodoItem.vue";
import GroupItem from "../components/Atom/GroupItem.vue";
import { useTodoStore } from "@/stores/todo";
import { onMounted, ref } from "vue";
import { useGroupStore } from "@/stores/group";

const groupName = ref("");
const todoItemName = ref("");

const todoStore = useTodoStore();
const groupStore = useGroupStore();

async function addGruopItem() {
  await groupStore.addGroup({ name: groupName.value });
  await groupStore.getAllGroupItems();
}

async function addTodoItem() {
  await todoStore.addTodo({ name: todoItemName.value });
  await todoStore.getAllTodoItems();
}

onMounted(async () => {
  await todoStore.getAllTodoItems();
  await groupStore.getAllGroupItems();
});
</script>

<template>
  <main class="flex justify-center mt-20">
    <section class="grid grid-cols-2">
      <aside class="w-[18rem] bg-gray-800 p-4 rounded">
        <form @submit.prevent="addGruopItem" class="w-full max-w-sm">
          <div class="flex items-center border-b border-teal-500 py-2">
            <input
              class="appearance-none bg-transparent border-none w-full text-gray-200 mr-3 py-1 px-2 leading-tight focus:outline-none"
              type="text"
              placeholder="Todo group name"
              aria-label="todo gorup"
              v-model="groupName"
            />
            <button
              class="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
              type="submit"
            >
              Add
            </button>
          </div>
        </form>
        <div class="mt-5">
          <GroupItem
            v-for="group in groupStore.groups"
            :key="group.id"
            :item="group"
          />
        </div>
      </aside>
      <article>
        <h2 class="text-2xl text-gray-300 uppercase mb-10 text-center">
          Fooji Todo App
        </h2>
        <div>
          <form @submit.prevent="addTodoItem" class="w-full mb-4 max-w-sm">
            <div class="flex items-center border-b border-teal-500 py-2">
              <input
                class="appearance-none bg-transparent border-none w-full text-gray-200 mr-3 py-1 px-2 leading-tight focus:outline-none"
                type="text"
                placeholder="Todo item name"
                aria-label="todo item"
                v-model="todoItemName"
              />
              <button
                class="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
                type="submit"
              >
                Add
              </button>
            </div>
          </form>
          <TodoItem
            v-for="todo in todoStore.todos"
            :key="todo.id"
            :item="todo"
          />
        </div>
      </article>
    </section>
  </main>
</template>
