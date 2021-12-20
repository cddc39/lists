import { defineStore } from "pinia";
import { v4 as uuid } from "uuid";
import { toRef } from "vue";

export const useItemsStore = defineStore({
  id: "items",
  persist: {
    enabled: true,
    strategies: [{ storage: localStorage }],
  },
  state: () => ({ items: {} }),
  getters: {
    getItemsByList: (state) => {
      return (listName) => {
        return Object.values(state.items).filter((item) => {
          return item.listName === listName;
        });
      };
    },
    getActiveItemsByList: (state) => {
      return (listName) => {
        return Object.values(state.getItemsByList(listName)).filter((item) => {
          return item.active;
        });
      };
    },
    getInactiveItemsByList: (state) => {
      return (listName) => {
        return Object.values(state.getItemsByList(listName)).filter((item) => {
          return !item.active;
        });
      };
    },
  },
  actions: {
    itemActivate: (item) => {
      item.active = true;
    },
    itemCreate: (item) => {
      item.id = uuid();
      this.items[item.id] = item;
    },
    itemDelete: (item) => {
      console.log("deleting");
      delete this.items[item.id];
    },
    itemInactivate: (item) => {
      item.active = false;
    },
  },
});
