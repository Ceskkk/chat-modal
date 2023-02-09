// @vitest-environment jsdom

import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Message from "../../components/Message.vue";

describe("Message Component", () => {
  it("Should render", () => {
    const wrapper = mount(Message, {
      props: {
        message: {
          id: 1,
          date: "28 Dec 2018 / 14:45",
          profileImage: "./src/assets/user1.jpg",
          body: "Buenas tardes, acabo de subir el primer archivo con el primer caso práctico, espero revisión.",
          userId: 0,
        },
      },
    });
    expect(wrapper.find("article").exists()).toBeTruthy();
  });
});
