import { createPinia, setActivePinia } from "pinia";
import { beforeEach, describe, it, expect } from "vitest";
import { useModalStore } from "../../stores/modal";

describe("Modal store", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it("Modal should start inactive", () => {
    const modalStore = useModalStore();
    expect(modalStore.isActive).toBeFalsy;
  });

  it("Modal should update on toggle", () => {
    const modalStore = useModalStore();

    modalStore.toggleModal();

    expect(modalStore.isActive).toBeTruthy;
  });
});
