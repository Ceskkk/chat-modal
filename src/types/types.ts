export interface Message {
  id: number
  date: string
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
  profileImage: string
  userId: number
}
