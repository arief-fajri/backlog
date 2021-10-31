<template>
  <form @submit.prevent="handleSubmit">
    <label>Task:</label>
    <input
      type="text"
      placeholder="Some task..."
      v-model="task"
      :class="{warning: task.length > 50}"
      required
    />
    <div class="count">
      <small>{{ taskLeft }}</small>
    </div>
    <label>Note:</label>
    <textarea
      placeholder="Some text notes..."
      v-model="note"
      :class="{warning: note.length > 50}"
    ></textarea>
    <div class="count">
      <small>{{ noteLeft }}</small>
    </div>

    <div class="actions">
      <button
        type="button"
        @click="closeModal"
      >Cancel</button>
      <button
        type="submit"
        class="main"
      >Save</button>
    </div>
  </form>
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
      this.task = "";
      this.note = "";
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

.warning {
    background-color: #ffd5d5;
    border: 2px solid #aa0000;
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