<template>
  <label for="">Task:</label>
  <input type="text" placeholder="Some task..." />
  <div class="count">
      <small>0/50</small>
  </div>
  <label for="">Note:</label>
  <textarea placeholder="Some text notes..."></textarea>
  <div class="count">
      <small>0/150</small>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
input {
  width: 100%;
  padding: 8px;
  border-radius: 8px;
  font-family: monospace;
  border: 2px solid #ccc;
  background-color: #f8f8f8;
}

.count {
    margin-bottom: 10px;
    text-align: right;
    padding: 0 10px;
}

label {
  font-weight: bold;
  font-size: 16px;
}

textarea {
  width: 100%;
  height: 150px;
  padding: 8px;
  border: 2px solid #ccc;
  border-radius: 8px;
  background-color: #f8f8f8;
  resize: none;
}
</style>>