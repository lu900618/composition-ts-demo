<template>
  <div>{{ count }}</div>
  <button @click="addCount(2)">mapMutations add</button>
  <button @click="asyncAddCount(2)">mapActions add</button>
  <button @click="asyncAdd">dispatch asyncAddCount</button>
  <button @click="reduceSync">commit reduce</button>
</template>

<script lang="ts">
// eslint-disable-next-line no-unused-vars
import { useStore, Store, mapMutations, mapActions } from "vuex";
// eslint-disable-next-line no-unused-vars
import { State } from "../store";
import { computed } from "vue";
export default {
  setup() {
    const store: Store<State> = useStore();
    const count = computed(() => store.getters.getCount);

    function reduceSync() {
      store.commit("reduceCount", 4);
    }
    function asyncAdd() {
      store.dispatch("asyncAddCount", 4);
    }
    return {
      count,
      reduceSync,
      asyncAdd,
      ...mapMutations(["addCount"]),
      ...mapActions(["asyncAddCount"]),
    };
  },
};
</script>

<style></style>
