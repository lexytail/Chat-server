let
  mngs = require('mongoose'),
  Cxema = mngs.Schema

let cxema = new Cxema({ // Сообщение
  recipient: { type: mngs.Schema.Types.ObjectId, required: true }, // Получатель
  sender: { type: mngs.Schema.Types.ObjectId, required: true }, // Отправитель
  text: { type: String, required: true }, // Содержание 
  created: { type: Date, default: Date.now } // Дата создания 
})

module.exports = mngs.model('Message', cxema)