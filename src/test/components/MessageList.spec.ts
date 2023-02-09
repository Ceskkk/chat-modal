// @vitest-environment jsdom

import { describe, it, expect, beforeEach } from "vitest";
import { setActivePinia, createPinia } from "pinia";
import { mount } from "@vue/test-utils";
import MessageList from "../../components/MessageList.vue";
import { useMessageStore } from "../../stores/message";

describe("MessageList Component", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it("Should render", () => {
    const wrapper = mount(MessageList);
    expect(wrapper.find("#message-list").exists()).toBeTruthy();
  });

  it("Should render messages", () => {
    const wrapper = mount(MessageList);
    expect(wrapper.find("article").exists()).toBeTruthy();
  });
});
