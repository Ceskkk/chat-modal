export interface Message {
  id: number
  date: string
  profileImage: string
}

export interface FileMessage extends Message {
  version: number
  title: string
  fileType: string
  fileWeight: number
  link: string
}

export interface TextMessage extends Message {
  body: string
  userId: number
}
