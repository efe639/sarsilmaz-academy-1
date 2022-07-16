const Discord = require("discord.js");
const { MessageButton, MessageActionRow, MessageMenuOption, MessageMenu } = require('discord-buttons');

module.exports.config = {
  name: "mod",
  aliases: ["mode", "seçim"]
};

module.exports.execute = async(client, message, args) => {
try {
  if(!message.author.id == conf.owner) return;
  let Button1 = new MessageButton()
  .setStyle("green")
  .setLabel("Public Modu")
  .setID("public");

  let Button2 = new MessageButton()
  .setStyle("red")
  .setLabel("Ekip Modu")
  .setID("crew");

  let Button3 = new MessageButton()
  .setStyle("gray")
  .setLabel("Sistem Temizliği")
  .setID("X");

  let embed = new Discord.MessageEmbed().setAuthor(message.author.tag, message.author.avatarURL({dynamic:true}))
  const MenuMessage = await message.channel.send({embed: embed.setDescription(`Projenin kurulumu için aşağıdaki menülerden birisini seçebilirsin :)`), buttons: [Button1,Button2,Button3]})

  const filter = (button) => button.clicker.user.id === message.author.id;
  const Collector = MenuMessage.createButtonCollector(filter, { time: 150000 });

Collector.on("collect", async (button) => {
  button.reply.defer();
            
if(button.id == "X") {
  let Button1 = new MessageButton()
  .setStyle("green")
  .setLabel("Public Modu")
  .setID("public");

  let Button2 = new MessageButton()
  .setStyle("red")
  .setLabel("Ekip Modu")
  .setID("crew");

  let Button3 = new MessageButton()
  .setStyle("gray")
  .setLabel("Sistem Temizliği")
  .setID("X")
  .setDisabled(true);  
  MenuMessage.edit({embed: embed.setDescription(`Proje içerisindeki bütün veri tabanı başarıyla sıfırlandı, aşağıda bulunan butonlardan modu seçebilirsiniz.`), buttons: [Button1,Button2,Button3]})
}

if(button.id == "crew") {
  let Button1 = new MessageButton()
  .setStyle("green")
  .setLabel("Public Modu")
  .setID("public")
  .setDisabled(true);

  let Button2 = new MessageButton()
  .setStyle("red")
  .setLabel("Ekip Modu")
  .setID("crew")
  .setDisabled(true);

  let Button3 = new MessageButton()
  .setStyle("gray")
  .setLabel("Sistem Temizliği")
  .setID("X");  
  clientdb.set("mode", "crew");
  MenuMessage.edit({embed: embed.setDescription(`Proje Ekip sistemi olarak ayarlandı tek yapman gereken botu kapatıp açmak, proje doğrudan ekip sisteminde çalışacaktır.

**NOT:** Eğer ki Proje içerisindeki bütün verileri silmek istersen \`Sistem Temizliği\` butonuna tıklayabilirsin.`), buttons: [Button1,Button2,Button3]})
}
  
if(button.id == "public") {
  let Button1 = new MessageButton()
  .setStyle("green")
  .setLabel("Public Modu")
  .setID("public")
  .setDisabled(true);

  let Button2 = new MessageButton()
  .setStyle("red")
  .setLabel("Ekip Modu")
  .setID("crew")
  .setDisabled(true);

  let Button3 = new MessageButton()
  .setStyle("gray")
  .setLabel("Sistem Temizliği")
  .setID("X");  
  clientdb.set("mode", "public");
  MenuMessage.edit({embed: embed.setDescription(`Proje Public sistemi olarak ayarlandı tek yapman gereken botu kapatıp açmak, proje doğrudan public sisteminde çalışacaktır.

**NOT:** Eğer ki Proje içerisindeki bütün verileri silmek istersen \`Sistem Temizliği\` butonuna tıklayabilirsin.`), buttons: [Button1,Button2,Button3]})
}
})
} catch (err) {
message.channel.send("KOMUT HATASI!"+`\`\`\`js
`+err+`\`\`\``)
}
};