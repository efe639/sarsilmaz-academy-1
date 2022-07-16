const Discord = require("discord.js");
const { MessageButton, MessageActionRow, MessageMenuOption, MessageMenu } = require('discord-buttons');

module.exports.config = {
  name: "takım",
  aliases: ["team", "takımım", "myteam"]
};

module.exports.execute = async(client, message, args) => {
try {
    message.channel.send("takım deneme")
} catch (err) {
message.channel.send("KOMUT HATASI!"+`\`\`\`js
`+err+`\`\`\``)
}
};