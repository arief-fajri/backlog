<template>
  <div class="histogram">
    <TimeLine :items="completeItems" />
  </div>
</template>

<script>
import Card from "../components/CompleteCard.vue";
import TimeLine from "./histogram/TimeLine.vue";
import {useStore} from "vuex";
import {computed} from 'vue';

export default {
  components: { Card, TimeLine },
  setup() {
    const store = useStore();

    let completeItems = computed(function(){
      return store.state.completeItems
    });

    return {completeItems}
  }
};
</script>

<style>
.histogram {
  width: 100%;
  margin-top: 40px;
}
</style>
