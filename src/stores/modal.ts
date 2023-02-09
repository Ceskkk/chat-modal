import { defineStore } from "pinia";

interface State {
  isActive: boolean;
}

export const useModalStore = defineStore("modal", {
  state: (): State => {
    return {
      isActive: false,
    };
  },
  actions: {
    toggleModal() {
      this.isActive = !this.isActive;
    },
  },
});
