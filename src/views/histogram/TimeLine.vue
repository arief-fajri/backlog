<template>
  <div class="timeline">
    <div class="item-section">
      <div class="item-inner">
        <span class="node"></span>
        <Card />
      </div>
    </div>
    <div class="item-section">
      <div class="item-inner">
        <span class="node"></span>
        <Card />
      </div>
    </div>
    <div class="item-section">
      <div class="item-inner">
        <span class="node"></span>
        <Card />
      </div>
    </div>
    <div class="item-section">
      <div class="item-inner">
        <span class="node"></span>
        <Card />
      </div>
    </div>
    <div class="item-section">
      <div class="item-inner">
        <span class="node"></span>
        <Card />
      </div>
    </div>
    <div class="item-section">
      <div class="item-inner">
        <span class="node"></span>
        <Card />
      </div>
    </div>
  </div>
</template>

<script>
import Card from "../../components/CompleteCard.vue";
export default {
  components: { Card },
};
</script>

<style>
.timeline {
  width: 80%;
  margin: 0 auto;
  position: relative;
  top: 100px;
  padding-bottom: 10px;
}
.timeline::before {
  content: "";
  display: block;
  position: absolute;
  left: 50%;
  top: 0;
  margin: 0 0 0 -1px;
  width: 5px;
  height: 100%;
  background: #25303b;
  border-radius: 20px;
}
.timeline::after {
  content: "";
  position: absolute;
  top: -10px;
  left: 50%;
  width: 20px;
  height: 20px;
  background: #25303b;
  margin-left: -8.2px;
  transform: rotate(-45deg);
}
.item-section {
  width: 100%;
  max-width: 920px;
  margin: -100px auto 20px;
  position: relative;
  padding-top: 20px;
}
.item-section::after {
  content: "";
  display: block;
  clear: both;
}
.item-inner {
  float: left;
  margin: 5px 0 0 20px;
  width: 45%;
}
.item-section:nth-child(2n + 2) .item-inner {
  float: right;
}
.item-section:nth-child(2n + 2) .complete-time::after {
  left: -13px;
}
.node {
  display: block;
  width: 30px;
  height: 30px;
  position: absolute;
  top: 0;
  left: 50%;
  margin: 52px 0 0 -13px;
  border-radius: 100%;
  background: #888;
  border: 8px solid #fff;
  box-shadow: 0 0 0 5px #25303b;
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
</style>