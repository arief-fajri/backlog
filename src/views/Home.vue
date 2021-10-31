<template>
  <div class="home">
    <ul class="filter">
      <li>
        <a
          href="#progress"
          @click.prevent="setActive('progress')"
          :class="{ active: isActive('progress') }"
          >In Progress</a
        >
      </li>
      <li>
        <a
          href="#completed"
          @click.prevent="setActive('completed')"
          :class="{ active: isActive('completed') }"
          >Completed</a
        >
      </li>
    </ul>
    <div class="tabs">
      <div
        class="tab"
        id="progress"
        :class="{ tab_active: isActive('progress') }"
      >
        <div class="card-grid">
          <Card />
        </div>
      </div>

      <div
        class="tab"
        id="completed"
        :class="{ tab_active: isActive('completed') }"
      >
        TESSS
      </div>
    </div>
  </div>
</template>

<script>
import Card from "../components/TaskCard.vue";
export default {
  name: "Home",
  components: { Card },
  data() {
    return {
      activeTab: "progress",
    };
  },
  methods: {
    isActive(menuTab) {
      return this.activeTab === menuTab;
    },
    setActive(menuTab) {
      this.activeTab = menuTab;
    },
  },
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
}
.filter li a {
padding: 5px 20px;
  border-radius: 20px;
  font-weight: bold;
  font-size: 16px;
  border: 3px solid #917c6f;
  color: #917c6f;
  text-decoration: none;
}

.filter li:not(:last-child) {
  margin-right: 10px;
}

.filter li a.active {
  background: #917c6f;
  color: white;
}

.tabs {
  width: 90%;
  margin: 30px auto 40px;
}

.tab {
  display: none;
}

.tab_active {
  display: block;
}

.card-grid {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 30px;
}
</style>
