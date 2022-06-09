<script setup lang="ts">
import TodoItem from "../components/TodoItem.vue";
import GroupItem from "../components/Atom/GroupItem.vue";
import { useTodoStore } from "@/stores/todo";
import { onMounted, ref, watch } from "vue";
import { useGroupStore } from "@/stores/group";

const groupName = ref("");
const todoItemName = ref("");
const activeGroup = ref(0);

const todoStore = useTodoStore();
const groupStore = useGroupStore();

async function addGruopItem() {
  await groupStore.addGroup({ name: groupName.value });
  await getTodoItems();
  groupName.value = "";
}

async function addTodoItem() {
  if (!activeGroup.value) await todoStore.addTodo({ name: todoItemName.value });
  else
    await todoStore.addTodo({
      name: todoItemName.value,
      groupId: activeGroup.value,
    });

  await getTodoItems();
  todoItemName.value = "";
}

async function deleteTodoItem(id: number) {
  await todoStore.deleteTodo(id);
  await getTodoItems();
}

async function toggleTodoItem(id: number) {
  await todoStore.toggleTodo(id);
  await getTodoItems();
}

async function getTodoItems() {
  await todoStore.getAllTodoItemsByGroup(activeGroup.value);
}

watch(activeGroup, async () => {
  await getTodoItems();
});

onMounted(async () => {
  await getTodoItems();
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
            @click="activeGroup = 0"
            :active="activeGroup === 0"
            :item="{ name: 'Uncategorized', id: 0, todos: [] }"
          />
          <GroupItem
            :active="activeGroup === group.id"
            @click="activeGroup = group.id"
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
            @update="() => toggleTodoItem(todo.id)"
            @delete="() => deleteTodoItem(todo.id)"
          />
          <p
            v-if="todoStore.todos.length < 1"
            class="text-gray-300 p-2 w-[25rem] my-2"
          >
            No todo item in this group
          </p>
        </div>
      </article>
    </section>
  </main>
</template>
