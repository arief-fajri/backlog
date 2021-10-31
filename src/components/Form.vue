<template>
  <label for="">Task:</label>
  <input type="text" placeholder="Some task..." v-model="task" />
  <div class="count">
    <small>{{ taskLeft }}</small>
  </div>
  <label for="">Note:</label>
  <textarea placeholder="Some text notes..." v-model="note"></textarea>
  <div class="count">
    <small>{{ noteLeft }}</small>
  </div>

  <div class="actions">
    <button @click="closeModal">Cancel</button>
    <button class="main" @click="handleSubmit">Save</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      task: "",
      note: "",
    };
  },
  methods: {
    closeModal() {
      this.$emit("close");
    },
    handleSubmit() {
      console.log("cek");
    },
  },
  computed: {
    taskLeft() {
      var char = this.task.length,
        limit = 50;
      return char + " / " + limit;
    },
    noteLeft() {
      var char = this.note.length,
        limit = 150;
      return char + " / " + limit;
    },
  },
};
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

.modal .actions {
  text-align: center;
  margin-top: 10px;
  color: #333;
  border-top: 2px solid lightgray;
}
.modal .actions button {
  color: #333;
  padding: 4px 8px;
  border: 2px solid #333;
  border-radius: 10px;
  text-decoration: none;
  margin: 10px 10px 0;
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;
}

.modal .actions button.main {
  background: #333;
  color: white;
}
</style>>