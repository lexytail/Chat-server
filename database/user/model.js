let
  mngs = require('mongoose'),
  Cxema = mngs.Schema,
	md5 = require('md5')
	//bcrypt = require('bcrypt-nodejs')

let genToken = (token = this.token) => token = md5(this.password)

let cxema = new Cxema({
	name: { type: String, required: true }, // Имя *
	subname: String, // Фамилия
	password: { type: String, required: true }, // Пароль *
	email: { type: String, required: true }, // Почта *
	avatar: { type: String, default: 'https://goo.gl/5IAZRS' }, // Url Аватар
	created: { type: Date, default: Date.now }, // Дата создания ~
	token: { type: String, default: genToken, set: genToken } // Токен md5
})

cxema.methods.genToken = genToken

cxema.methods.checkAccess = password => md5(password) == this.token ? true : false

// cxema.methods.encryptPassword = password => bcrypt.hashSync(password, bcrypt.getSaltSync(5), null)

// cxema.methods.decryptPassword = password => bcrypt.compareSync(password. this.password)

module.exports = mngs.model('User', cxema)