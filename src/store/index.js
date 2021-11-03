import {
    createStore
} from "vuex";

export default createStore({
    state: {
        taskItems: [{
                id: 1,
                title: "Create Web Design",
                note: "It must be match with brand guidline",
                dateFinish: "",
            },
            {
                id: 2,
                title: "Create new homepage banner",
                note: "Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ",
                dateFinish: "",
            },
            {
                id: 3,
                title: "Make marketing email",
                note: "Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ",
                dateFinish: "",
            },
        ],
        completeItems: [{
            id: 4,
            title: "Update the Promo Links",
            note: "Make sure all the promo links and coupon codes are up to date!!!!!",
            dateFinish: {
                date: "09",
                day: "Wednesday",
                month: "September 2021",
                hour: "10:33",
            },
        }, ],
    },
    mutations: {
        addTask(state, item) {
            state.taskItems.unshift(item);
        },
        moveTask(state, items) {
            //state.taskItems.splice(to, 0, state.taskItems.splice(from, 1)[0])
            state.taskItems = items;
        },
        updateTask(state, item) {
            state.taskItems = state.taskItems.map((task) => {
                if (task.id == item.id) {
                    return item;
                }
                return task;
            });
        },
        removeTask(state, item) {
            state.taskItems = state.taskItems.filter((task) => {
                return task.id != item.id;
            });
        },
        addComplete(state, item) {
            state.completeItems.unshift(item);
            state.taskItems = state.taskItems.filter((task) => {
                return task.id != item.id;
            });
        },
        removeComplete(state, item) {
            state.completeItems = state.completeItems.filter((task) => {
                return task.id != item.id;
            });
        },
    },
    actions: {
        moveTask({
            commit
        }, items) {
            commit("moveTask", items);
        },
    },
    modules: {},
});