import mongoose from 'mongoose'

import ChatModel from '../models/Chat.model'

const connect = () => {
  try {
    mongoose.connect(process.env.MONGO_URI!).then(() => console.log('Database connected'))
  } catch (error) {
    console.error(`Database connection error: ${error}. Shutting down..`)
    process.exit(1)
  }
}

const addToBlacklist = async (chatId: String, itemToAdd: String) => {
  let query = { id: chatId },
    update = { $addToSet: { blacklist: itemToAdd } },
    options = { upsert: true, new: true, setDefaultsOnInsert: true }

  try {
    await ChatModel.findOneAndUpdate(query, update, options)
    return `Added ${itemToAdd} to blacklist`
  } catch (error) {
    console.error(`An error occured: ${error}`)
  }
}

export default { connect, addToBlacklist }
