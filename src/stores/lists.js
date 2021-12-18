import { defineStore } from "pinia";

export const useListsStore = defineStore({
  id: "lists",
  persist: {
    enabled: true,
    strategies: [{ storage: localStorage }],
  },
  state: () => ({ lists: ["groceries", "cosmetics", "home"] }),
  getters: {},
  actions: {
    createList(list) {
      this.lists.push(list);
    },
    deleteList(list) {
      this.lists.splice(this.lists.indexOf(list), 1);
    },
  },
});
