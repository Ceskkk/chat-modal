import { createPinia, setActivePinia } from "pinia";
import { beforeEach, describe, it, expect } from "vitest";
import { useMessageStore } from "../../stores/message";

describe("Message store", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it("Messages list should starts fullfilled", () => {
    const messages = useMessageStore();

    expect(messages.messageList.length).toBeGreaterThan(0);
  });

  it("Messages list should update on add message", () => {
    const messages = useMessageStore();
    const messagesCount = messages.messageList.length;

    messages.addText("test");

    expect(messages.messageList.length).toBeGreaterThan(messagesCount);
  });
});
