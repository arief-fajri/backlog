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
  height: 500px;
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
}
.item-section {
  width: 100%;
  max-width: 920px;
  margin: 0 auto 20px;
  position: relative;
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
  width: 40px;
  height: 40px;
  position: absolute;
  top: 0;
  left: 50%;
  margin: 27px 0 0 -18px;
  border-radius: 100%;
  background: #fff;
  border: 5px solid #25303b;
}
</style>