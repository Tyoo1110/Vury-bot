let handler = function (m) {
  // this.sendContact(m.chat, '6281357302007', 'Drawl Nag Admin', m)
  this.sendContact(m.chat, '6283806344515', 'Admin Vury BOT', m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
