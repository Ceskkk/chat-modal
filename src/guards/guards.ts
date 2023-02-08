import { TextMessage, FileMessage } from '../types/types'

// Check if Message is Text
export const isText = (props: TextMessage | FileMessage): props is TextMessage => {
  return 'body' in props
}

// Check if Message is File
export const isFile = (props: TextMessage | FileMessage): props is FileMessage => {
  return 'version' in props
}
