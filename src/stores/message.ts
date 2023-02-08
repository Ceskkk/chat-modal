import { defineStore } from 'pinia'
import { FileMessage, TextMessage } from '../types/types'
import messagesJson from '../mock/messages.json'
import { getCurrentDateFormated } from '../utils/utils'

const messages: Array<FileMessage | TextMessage> = messagesJson

interface State {
  messageList: Array<FileMessage | TextMessage>
}

export const useMessageStore = defineStore('message', {
  state: (): State => {
    return {
      messageList: messages
    }
  },
  actions: {
    addText (text: string) {
      const newText: TextMessage = {
        // We can increment id like this because we never delete messages
        id: this.messageList.length,
        date: getCurrentDateFormated(),
        profileImage: '',
        body: text
      }
      this.messageList.push(newText)
    }
  }
})
