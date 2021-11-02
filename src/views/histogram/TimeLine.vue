<template>
  
    <div v-if="items.length" class="timeline">
        <div v-for="item in items" :key="item.id" class="item-section">
          <div class="item-inner">
            <span class="node"></span>
            <Card :item="item" />
          </div>
        </div>
    </div>
  <div class="no-task" v-else>
      <h1>
        Oooohhhhhh . . . . <br />
        You haven't finished any task yet
      </h1>
    </div>
</template>

<script>
import Card from "../../components/CompleteCard.vue";
export default {
  props: ["items"],
  components: { Card },
};
</script>

<style>
.timeline {
  width: 80%;
  margin: 0 auto;
  position: relative;
  padding: 50px 0;
}
.timeline::before {
  content: "";
  display: block;
  position: absolute;
  left: 50%;
  top: 0;
  margin: 0 0 0 -1px;
  width: 5px;
  min-height: calc(100vh - 140px);
  height: 100%;
  background: #581845;
  border-radius: 20px;
}
.timeline::after {
  content: "";
  position: absolute;
  top: -10px;
  left: 50%;
  width: 20px;
  height: 20px;
  background: #581845;
  margin-left: -8.2px;
  transform: rotate(-45deg);
}
.item-section {
  width: 100%;
  max-width: 920px;
  margin: 0 auto 10px;
  position: relative;
}
.item-section::after {
  content: "";
  display: block;
  clear: both;
}
.item-inner {
  float: left;
  width: 45%;
}
.item-section:nth-child(2n + 2) .item-inner {
  float: right;
  padding-left: 20px;
}
.item-section:nth-child(2n + 2) .complete-time::after {
  left: -14px;
}
.node {
  display: block;
  width: 30px;
  height: 30px;
  position: absolute;
  top: 0;
  left: calc(50% - 13px);
  margin: 28px 0 0 0;
  border-radius: 100%;
  background: #506070;
  border: 8px solid #ffeaf2;
  box-shadow: 0 0 0 5px #581845;
}
.node:hover {
  border: 8px solid #5555ff;
  background: #fff;
  box-shadow: 0 0 0 5px #5555ff;
}
.node:hover ~ .complete-card {
  border: 4px solid #5555ff;
}
.node:hover ~ .complete-card .complete-time,
.node:hover ~ .complete-card .complete-time::after {
  background: #5555ff;
}
.node:hover ~ .complete-card .complete-card-btn div {
  border: 3px solid #5555ff;
}
</style>