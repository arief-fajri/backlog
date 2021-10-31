<template>
  <div class="home">
    <ul class="filter">
      <li class="filter-active">ALL</li>
      <li>Tightest</li>
      <li>Priority</li>
      <li>Normal</li>
      <li>Unregulated</li>
    </ul>
    <div class="card-grid">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  </div>
</template>

<script>
import Card from "../components/TaskCard.vue";
export default {
  name: "Home",
  components: { Card },
};
</script>

<style>
.home {
  width: 100%;
  margin-top: 40px;
}

.filter {
  text-align: center;
}

.filter li {
  display: inline-block;
  padding: 5px 20px;
  border-radius: 20px;
  font-weight: bold;
  font-size: 16px;
  border: 3px solid #5a2ca0;
  cursor: pointer;
}

.filter li:not(:last-child){
  margin-right: 10px;
}

.filter-active {
  background: #5a2ca0;
  color: white;
}

.card-grid {
  width: 90%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 30px;
  margin: 40px auto;
}
</style>
