const Discord = require("discord.js");
const { MessageButton, MessageActionRow, MessageMenuOption, MessageMenu } = require('discord-buttons');

module.exports.config = {
  name: "taslak",
  aliases: ["sketch", "şablon"]
};

module.exports.execute = async(client, message, args) => {
try {
    message.channel.send("Sarsılmaz Academy <3")
} catch (err) {
message.channel.send("KOMUT HATASI!"+`\`\`\`js
`+err+`\`\`\``)
}
};