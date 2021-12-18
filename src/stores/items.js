import { defineStore } from "pinia";
import { v4 as uuid } from "uuid";

export const useItemsStore = defineStore({
  id: "items",
  persist: {
    enabled: true,
    strategies: [{ storage: localStorage }],
  },
  state: () => ({ items: {} }),
  getters: {},
  actions: {
    createItem(item) {
      item.id = uuid();
      this.items[item.id] = item;
    },
    deleteItem(item) {
      this.items.splice(this.items.indexOf(item), 1);
    },
  },
});
