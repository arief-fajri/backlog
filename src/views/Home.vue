<template>
  <div class="home">
    <div
      class="tabs"
      v-if="taskItems.length"
    >
      <div class="card-grid">
        <TaskCard
          :task="task"
          v-for="task in taskItems"
          :key="task.id"
        />
      </div>
    </div>
    <div
      class="no-task"
      v-else
    >
      <h1>
        Whoooaaaa . . . . <br />
        You don't have any task yet
      </h1>
    </div>
  </div>
</template>

<script>
import TaskCard from "../components/TaskCard.vue";
import {useStore} from "vuex";
import {computed} from 'vue';

export default {
  name: "Home",
  components: { TaskCard },
  setup() {
    const store = useStore();

    let taskItems = computed(function(){
      return store.getters.ongoing
    });
    return {taskItems}
  }
};
</script>

<style>
.home {
  width: 100%;
  margin-top: 40px;
}

.tabs {
  width: 90%;
  margin: 30px auto 40px;
}

.card-grid {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 30px;
}

.no-task {
  width: 100%;
  height: calc(100vh - 300px);
  color: lightslategray;
  display: flex;
  justify-content: center;
  align-items: center;
}

.ghost {
  opacity: 0.5;
  background: #c8ebfb;
}
</style>
