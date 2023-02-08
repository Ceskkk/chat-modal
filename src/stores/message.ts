import { defineStore } from 'pinia'
import { File, Text } from '../types/types'
import messagesJson from '../mock/messages.json'

const messages: Array<File | Text> = messagesJson

interface State {
  messageList: Array<File | Text>
}

export const useMessageStore = defineStore('message', {
  state: (): State => {
    return {
      messageList: messages
    }
  },
  actions: {
    addMessage (message: File | Text) {
      this.messageList.push(message)
    }
  }
})
