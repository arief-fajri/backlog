<template>
  <div class="home">
    <div class="tabs" v-if="filteredTask.length">
      <div class="card-grid">
        <div v-for="task in filteredTask" :key="task.id">
          <TaskCard :task="task" />
        </div>
      </div>
    </div>
    <div class="no-task" v-else>
      <h1>
        Whoooaaaa . . . . <br />
        You don't have any task yet
      </h1>
    </div>
  </div>
</template>

<script>
import TaskCard from "../components/TaskCard.vue";

export default {
  name: "Home",
  components: { TaskCard },
  data() {
    return {
      taskItems: [],
    };
  },
  computed: {
    filteredTask() {
      return this.taskItems.filter((task) => !task.dateFinish);
    },
  },
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
