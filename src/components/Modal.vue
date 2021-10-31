<template>
  <div class="backdrop" @click.self="closeModal">
    <div class="modal">
      <slot>default content (if no slot passed in)</slot>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    closeModal() {
      this.$emit("close");
    },
  },
};
</script>

<style>
.modal {
  width: 640px;
  padding: 20px;
  margin: 100px auto;
  background: whitesmoke;
  border-radius: 10px;
}
.backdrop {
  top: 0;
  left: 0;
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  z-index: 1000;
}
</style>