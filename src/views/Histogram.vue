<template>
  <div class="histogram">
    <TimeLine />
  </div>
</template>

<script>
import Card from '../components/CompleteCard.vue'
import TimeLine from './histogram/TimeLine.vue'

export default {
  components: { Card, TimeLine }
}
</script>

<style>
.histogram {
  width: 100%;
  margin-top: 40px;
}
</style>