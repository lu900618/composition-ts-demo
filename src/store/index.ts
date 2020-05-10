import { createStore, GetterTree, MutationTree, ActionTree } from "vuex";

export interface ToDo {
  id: string;
  content: string;
  status: boolean;
}
export interface State {
  count: number;
  todoList: ToDo[];
}

const state: State = {
  count: 10,
  todoList: [],
};
const getters: GetterTree<State, State> = {
  getCount(state) {
    return state.count;
  },
  getToDoList(state) {
    return state.todoList;
  },
};

const mutations: MutationTree<State> = {
  addCount(state, payload: number = 1) {
    state.count += payload;
  },
  reduceCount(state, payload: number = 1) {
    state.count -= payload;
  },
  addToDo(state, payload: ToDo) {
    state.todoList.push(payload);
  },
  addToDoList(state, payload: ToDo[]) {
    state.todoList = payload;
  },
  removeToDoList(state, payload: string) {
    state.todoList = state.todoList.filter((todo) => todo.id !== payload);
  },
  updateToDoStatus(state, payload: string) {
    state.todoList.map((todo) => {
      if (todo.id === payload) {
        todo.status = !todo.status;
      }
      return todo;
    });
  },
};

const actions: ActionTree<State, State> = {
  asyncAddCount({ commit }, payload: number) {
    setTimeout(() => {
      commit("addCount", payload);
    }, 1000);
  },
};

export default createStore({
  state,
  getters,
  mutations,
  actions,
});
