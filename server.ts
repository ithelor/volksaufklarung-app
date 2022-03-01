process.env.NTBA_FIX_319 = '1'

import TelegramBot from 'node-telegram-bot-api'
import dotenv from 'dotenv'
dotenv.config()

const token = process.env.API_KEY
const bot = new TelegramBot(token!, { polling: true })

bot.on('message', (message) => {
  if (message.forward_from_chat?.id === -1001413275904)
    bot.deleteMessage(message.chat.id, String(message.message_id)).then(() => {
      bot.sendMessage(message.chat.id, 'Репост с помойки аннигилирован')
    })
})
