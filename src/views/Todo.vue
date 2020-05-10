<template>
  <br />
  <button @click="push('/counter')">counter</button>
  <input type="text" v-model="newTodo" /> <button @click="add">添加</button>
  <ul>
    <li v-for="todo in toDoList" :key="todo.id">
      <input type="checkbox" :checked="todo.status" @change="updateToDoStatus(todo.id)" />
      <span>{{ todo.content }} - {{ todo.status }} </span>
      <button @click="removeToDoList(todo.id)">删除</button>
    </li>
  </ul>
</template>

<script lang="ts">
// import uuid from 'uuid'
import { onMounted, computed, ref } from "vue";
import { useRouter } from "vue-router";

// eslint-disable-next-line no-unused-vars
import { useStore, Store, mapMutations, mapActions } from "vuex";
// eslint-disable-next-line no-unused-vars
import { State } from "../store";
import { useRequest } from "../axios";
// eslint-disable-next-line no-unused-vars
import { ToDo } from "../store";
export default {
  setup() {
    const newTodo = ref("");
    const store: Store<State> = useStore();
    const { push } = useRouter();
    const toDoList = computed(() => store.getters.getToDoList);

    onMounted(async () => {
      const todoListRequest = useRequest<any, ToDo[]>("/", {}, "get");
      try {
        const list = (await todoListRequest).data;
        store.commit("addToDoList", list);
      } catch (e) {
        console.log(e);
      }
    });

    function add() {
      if (!newTodo.value) {
        return;
      }
      const td: ToDo = {
        id: require("uuid").v4(),
        content: newTodo.value,
        status: false,
      };
      store.commit("addToDo", td);
      newTodo.value = "";
    }
    return {
      push,
      toDoList,
      newTodo,
      add,
      ...mapMutations(["removeToDoList", "updateToDoStatus"]),
      // ...mapActions(["asyncAddCount"]),
    };
  },
};
</script>

<style></style>
