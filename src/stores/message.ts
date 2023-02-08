import { defineStore } from 'pinia'
import { File, Text } from '../types/types'
import messagesJson from '../mock/messages.json'
import { getCurrentDateFormated } from '../utils/utils'

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
    addText (text: string) {
      const newText: Text = {
        // We can increment id like this because we never delete messages
        id: this.messageList.length,
        date: getCurrentDateFormated(),
        body: text
      }
      this.messageList.push(newText)
    }
  }
})
