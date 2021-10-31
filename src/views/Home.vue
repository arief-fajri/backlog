<template>
  <div class="home">
    <div class="tabs" v-if="taskItems.length">
      <div class="card-grid">
        <div v-for="task in taskItems" :key="task.id">
        <TaskCard :task="task" />
        </div>
      </div>
    </div>
    <div class="no-task" v-else>
      <h1>Whoooaaaa . . . . <br/> You don't have any task yet</h1>
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
      taskItems: [
        {
            "id": 1,
            "title": "Create Web Design ",
            "note": "It must be match with brand guidline",
            "dateFinish": ""
        },
        {
            "id": 2,
            "title": "Create new homepage banner Create new homepagipsum",
            "note": "Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsumd",
            "dateFinish": ""
        },
        {
            "id": 3,
            "title": "Make marketing email",
            "note": "Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ",
            "dateFinish": ""
        },
        {
            "id": 4,
            "title": "Update the Promo Links",
            "note": "Make sure all the promo links and coupon codes are up to date!!!!!",
            "dateFinish": "09-Oktober-2021"
        }
      ]
    }
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
</style>
