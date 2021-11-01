<template>
  <div class="complete-card">
    <div class="complete-time">
      <div class="complete-date">16</div>
      <div class="complete-day">
        <div class="complete-weekday">Wednesday</div>
        <div class="complete-month">September 2024</div>
      </div>
      <div class="complete-hour">10:32</div>
    </div>
    <div class="complete-item">
      <h2>Finished Task Jobs</h2>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.complete-card {
  border-radius: 20px;
  background: lightyellow;
  border: 4px solid #506070;
  max-width: 400px;
}
.complete-time {
  background: #506070;
  border-radius: 20px 20px 0 0;
  padding: 10px 10px 5px;
  display: flex;
  align-items: center;
  color: #fff;
  position: relative;
}
.complete-time::after {
  content: "";
  position: absolute;
  right: -13px;
  width: 20px;
  height: 20px;
  transform: rotate(-45deg);
  background: #506070;
}
.complete-date {
  font-weight: bold;
  font-size: 48px;
  margin-right: 5px;
}
.complete-day {
  padding-right: 10px;
  border-right: 3px solid #fff;
}
.complete-weekday {
  font-weight: bold;
}
.complete-month {
  font-size: 14px;
}
.complete-hour {
  padding-left: 5px;
  font-size: 32px;
  color: #fff;
}
.complete-item {
  padding: 20px;
}
</style>