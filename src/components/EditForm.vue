<template>
  <form @submit.prevent="handleSubmit">
    <label>Task:</label>
    <input
      type="text"
      placeholder="Some task..."
      v-model="task"
      :class="{warning: task.length > 50}"
    />
    <div class="count">
      <p v-if="validTask">Task must be filled and max 50 character!</p>
      <small>{{ taskLeft }}</small>
    </div>
    <label>Note:</label>
    <textarea
      placeholder="Some text notes..."
      v-model="note"
      :class="{warning: note.length > 150}"
    ></textarea>
    <div class="count">
      <p v-if="validNote">Note filled max 150 character!</p>
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
import { computed, ref } from "@vue/reactivity";
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
export default {
  props: ["isOpen", "taskItem"],
  setup(props, context){
    const store = useStore()
    const router = useRouter()
    const task = ref(props.taskItem.title);
    const note = ref(props.taskItem.note);
    const validTask = ref(false);
    const validNote = ref(false);

    function closeModal() {
      context.emit("update:isOpen", false);
    }

    let taskLeft = computed(function () {
      let char = task.value.length,
        limit = 50;
      return char + " / " + limit;
    });

    let noteLeft = computed(function () {
      let char = note.value.length,
        limit = 150;
      return char + " / " + limit;
    });

    function handleSubmit() {
      validTask.value = false;
      validNote.value = false;

      if (task.value.length && task.value.length<51 && note.value.length<151) {
        let obj = {
          id: props.taskItem.id,
          title: task.value,
          note: note.value,
          dateFinish: "",
        };
        store.commit("updateTask", obj);
        closeModal();
        router.push("/");
      } else {
        if(task.value.length>50 || !task.value.length) validTask.value = true;
        if(note.value.length>150) validNote.value = true;
      }
    }

    return {
      task,
      note,
      validTask,
      validNote,
      closeModal,
      taskLeft,
      noteLeft,
      handleSubmit,
    }
  }
  // data() {
  //   return {
  //     task: this.taskItem.title,
  //     note: this.taskItem.note,
  //     isNoteLimit: false,
  //   };
  // },
  // methods: {
  //   closeModal() {
  //     this.$emit("close");
  //   },
  //   handleSubmit() {
  //     this.$emit("close");
  //   },
  // },
  // computed: {
  //   taskLeft() {
  //     var char = this.task.length,
  //       limit = 50;
  //     return char + " / " + limit;
  //   },
  //   noteLeft() {
  //     var char = this.note.length,
  //       limit = 150;
  //     return char + " / " + limit;
  //   },
  // },
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
.count p {
  float: left;
  color: brown;
  font-weight: bold;
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