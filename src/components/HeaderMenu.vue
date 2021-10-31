<template>
  <div class="menu-item" @click="toggleModal">
    <svg
      width="50"
      height="50"
      viewBox="0 0 13.229166 13.229167"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g inkscape:label="Layer 1" inkscape:groupmode="layer">
        <g transform="translate(-200.72096,-7.9337537)">
          <circle
            style="
              fill: #5a2ca0;
              stroke-width: 0.113797;
              paint-order: stroke fill markers;
              stop-color: #000000;
            "
            id="path62198"
            cx="207.33554"
            cy="14.548337"
            r="6.614583"
          />
          <path
            d="m 210.85027,13.414863 h -2.38125 v -2.382046 c 0,-0.249237 -0.20399,-0.453231 -0.45323,-0.453231 h -1.36049 c -0.24924,0 -0.45403,0.203994 -0.45403,0.453231 v 2.382046 h -2.38125 c -0.24924,0 -0.45323,0.203993 -0.45323,0.453231 v 1.360488 c 0,0.249237 0.20399,0.453231 0.45323,0.453231 h 2.38125 v 2.382044 c 0,0.248444 0.20479,0.453231 0.45403,0.453231 h 1.36049 c 0.24924,0 0.45323,-0.204787 0.45323,-0.453231 v -2.382044 h 2.38125 c 0.25003,0 0.45402,-0.203994 0.45402,-0.453231 v -1.360488 c 0,-0.249238 -0.20399,-0.453231 -0.45402,-0.453231 z"
            style="fill: #f4e3d7; stroke-width: 0.00793748"
          />
        </g>
      </g>
    </svg>
  </div>
  <div v-if="showModal">
    <Modal @close="toggleModal">
      <template v-slot>
        <Form @close="toggleModal" />
      </template>
    </Modal>
  </div>
</template>

<script>
import Modal from "./Modal.vue";
import Form from "./Form.vue";

export default {
  components: { Modal, Form },
  data() {
    return {
      showModal: false,
    };
  },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal;
    },
  },
};
</script>

<style>
.menu-item {
  cursor: pointer;
}
</style>>