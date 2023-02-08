export interface Message {
  id: number
  date: string
  profileImage: string
}

export interface File extends Message {
  version: number
  title: string
  fileType: string
  fileWeight: number
  link: string
}

export interface Text extends Message {
  body: string
}
