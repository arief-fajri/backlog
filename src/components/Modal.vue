<template>
  <div class="backdrop" @click.self="closeModal">
    <div class="modal">
      <slot>default content (if no slot passed in)</slot>
      <div class="actions">
        <slot name="links"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    closeModal() {
      this.$emit('close')
    }
  }
}
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
    background: rgba(0,0,0,0.5);
    width: 100%;
    height: 100%;
    z-index: 1000;
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
</style>