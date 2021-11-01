<template>
  <div class="histogram">
    <TimeLine :items="filteredItem" />
  </div>
</template>

<script>
import Card from "../components/CompleteCard.vue";
import TimeLine from "./histogram/TimeLine.vue";

export default {
  components: { Card, TimeLine },
  data() {
    return {
      taskItems: [
        {
          id: 1,
          title: "Create Web Design",
          note: "It must be match with brand guidline",
          dateFinish: "",
        },
        {
          id: 2,
          title: "Create new homepage banner",
          note: "Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ",
          dateFinish: {
            date: "04",
            day: "Monday",
            month: "Oktober 2021",
            hour: "09:33",
          },
        },
        {
          id: 3,
          title: "Make marketing email",
          note: "Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ",
          dateFinish: {
            date: "22",
            day: "Wednesday",
            month: "September 2021",
            hour: "12:33",
          },
        },
        {
          id: 4,
          title: "Update the Promo Links",
          note: "Make sure all the promo links and coupon codes are up to date!!!!!",
          dateFinish: {
            date: "09",
            day: "Thursday",
            month: "September 2021",
            hour: "10:33",
          },
        },
      ],
    };
  },
  computed: {
    filteredItem() {
      return this.taskItems.filter((task) => task.dateFinish);
    },
  },
  // mounted() {
  //   fetch('http://localhost:3000/tasks')
  //     .then(res => res.json())
  //     .then(data => this.taskItems = data)
  //     .catch(err => console.log(err))
  // },
};
</script>

<style>
.histogram {
  width: 100%;
  margin-top: 40px;
}
</style>
