// @vitest-environment jsdom

import { describe, it, expect, beforeEach } from "vitest";
import { setActivePinia, createPinia } from "pinia";
import { mount } from "@vue/test-utils";
import Modal from "../../components/Modal.vue";
import { useModalStore } from "../../stores/modal";

describe("Modal Component", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it("Should render", () => {
    const wrapper = mount(Modal);
    expect(wrapper.find("h1").exists()).toBeTruthy();
  });

  it("Should toggle modal state on close click", async () => {
    const wrapper = mount(Modal);
    const modalStore = useModalStore();

    await wrapper.find("header > img").trigger("click");

    expect(modalStore.isActive).toBeFalsy;
  });

  it("Should reset input on send message", async () => {
    const wrapper = mount(Modal);

    await wrapper.find("input").setValue("test");
    await wrapper.find("button").trigger("click");

    expect(wrapper.find("input").element.value).toBe("");
  });
});
