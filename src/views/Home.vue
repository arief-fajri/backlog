<template>
  <div class="home">
    <div class="tabs" v-if="taskItems.length">
      <!--div class="card-grid">
        <TaskCard v-for="task in taskItems" :key="task.id" :task="task" />
      </div-->
      <draggable
        class="card-grid"
        v-model="taskItems"
        item-key="id"
        handle=".card-drag"
        tag="transition-group"
        :component-data="{
          tag: 'div',
          type: 'transition-group',
          name: !drag ? 'flip-list' : null
        }"
        v-bind="dragOptions"
        @start="drag = true"
        @end="drag = false"
      >
        <template #item="{ element }">
          <div class="list-group-item">
            <TaskCard :task="element" />
          </div>
          
        </template>
      </draggable>
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
import draggable from "vuedraggable";
import TaskCard from "../components/TaskCard.vue";
import { useStore } from "vuex";
import { computed, ref } from "vue";

export default {
  name: "Home",
  components: { TaskCard, draggable },
  setup() {
    const store = useStore();

    const drag = ref(false)

    let dragOptions = computed(function(){
      return {animation: 200, ghostClass: "ghost"}
    })

    let taskItems = computed({
      get() {
        return store.state.taskItems;
      },
      set(value) {
        return store.dispatch("moveTask", value)
      }
    });
    
    return { taskItems, drag, dragOptions };
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
.flip-list-move {
  transition: transform 0.5s;
}
.no-move {
  transition: transform 0s;
}
.ghost {
  opacity: 0.5;
  background: #c8ebfb;
}

</style>
