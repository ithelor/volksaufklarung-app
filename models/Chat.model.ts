import mongoose from 'mongoose'

const ChatSchema = new mongoose.Schema(
  {
    id: Number,
    blacklist: [{ type: String }]
  },
  {
    collection: 'chats'
  }
)

export default mongoose.model('ChatModel', ChatSchema)
