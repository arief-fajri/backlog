<template>
  <div class="histogram">
    <TimeLine :items="taskItems" />
  </div>
</template>

<script>
import Card from "../components/CompleteCard.vue";
import TimeLine from "./histogram/TimeLine.vue";

export default {
  components: { Card, TimeLine },
  data() {
    return {
      taskItems: [],
    };
  },
  computed: {
    filteredItem() {
      return this.taskItems.filter((task) => task.dateFinish);
    },
  },
  mounted () {
   this.taskItems = this.$store.getters.complete;
},
};
</script>

<style>
.histogram {
  width: 100%;
  margin-top: 40px;
}
</style>
