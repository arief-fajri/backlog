<template>
  <div class="card">
    <div class="card-btn">
      <div class="default-btn"></div>
      <div class="main-btn"></div>
      <div class="default-btn"></div>
    </div>
    <div class="card-item">
      <h3>Lorem ipsum, dolor sit amet consecteturww (max 50)</h3>
      <p class="note">Note:(max 150)</p>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos, nisi modi nulla obcaecati, maxime iste, architecto quibusdam quaerat sed harum</p>
    </div>
    <div class="card-time">
      <h4>Deadline: 30 September 2024</h4>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.card {
  background: #eef4d7;
  border-radius: 20px;
  border: 3px solid #abc837;
  position: relative;
  margin-bottom: 30px;
  padding: 20px 0;
}

.card-btn {
  width: 100%;
  height: 50px;
  position: absolute;
  top: -25px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.card-btn .default-btn {
  width: 35px;
  height: 35px;
  border-radius: 100%;
  border: 3px solid #abc837;
  background: #eef4d7;
}

.card-btn .main-btn {
  width: 50px;
  height: 50px;
  border-radius: 100%;
  background: #abc837;
  margin: 0 5px;
}

.card-item {
  padding: 20px 10px 10px;
}

.card h3 {
  text-align: center;
  margin-bottom: 10px;
}

.card p {
  line-height: 1.5;
}

.card p.note {
  font-weight: bold;
  font-style: italic;
  line-height: 1;
  border-bottom: 2px solid black;
  display: inline-block;
  padding: 0 15px 0 5px;
  margin-bottom: 5px;
}

.card-time {
  max-width: 280px;
  width: max-content;
  height: 25px;
  border-radius: 20px;
  padding: 0 15px;
  background: #abc837;
  position: absolute;
  bottom: -12.5px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
}
.card-time h4 {
    margin-top: 1px;
}

</style>