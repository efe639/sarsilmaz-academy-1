const {Discord,Client,MessageEmbed,Collection} = require('discord.js');
const client = global.client = new Client({ fetchAllMembers: true });
require('discord-buttons')(client);
require('discord-reply');
const Veritabani = require("fresh.db");
let clientdb = global.clientdb = new Veritabani({name:"clientdb", prettySave: true, folderPath:__dirname + "/src/Setup/Models"});
const conf = global.conf = require("./src/Configs/Config.json");
client.login(conf.token).catch(async(err)=> await console.log("token hatalı knk"))

const fs = require("fs");
const commands = new Map();
global.commands = commands;
const aliases = new Map();
global.aliases = aliases;

if(clientdb.get("mode") === "crew") {
require("./src/Crew/sarsilmaz.js");

client.on("message", (message) => {
    if (message.author.bot ||!message.content.startsWith(conf.prefix) || !message.channel || message.channel.type == "dm") return;
    let args = message.content
        .substring(conf.prefix.length)
        .split(" ");
    let command = args[0];
    let bot = message.client;
    args = args.splice(1);
    let calistirici;
    if(message.guild.id !== conf.server) return;
    if (commands.has(command)) {
      calistirici = commands.get(command);
      calistirici.execute(bot, message, args);
    } else if (aliases.has(command)) {
      calistirici = aliases.get(command);
      calistirici.execute(bot, message, args);
    }
})

fs.readdir("./src/Crew/Commands", (err, files) => {
    if(err) return console.error(err);
      files = files.filter(file => file.endsWith(".js"));
      console.log('\x1b[34m%s\x1b[0m', `Sistem Crew modunda başlatıldı!`);
      console.log('\x1b[36m%s\x1b[0m', `[ ${files.length} Komut Yüklendi ]`);
      files.forEach(file => {
  let prop = require(`./src/Crew/Commands/${file}`);
    if(!prop.config) return;
    if(typeof prop.onLoad === "function") prop.onLoad(client);
      commands.set(prop.config.name, prop);
    if(prop.config.aliases) prop.config.aliases.forEach(aliase => aliases.set(aliase, prop));
    });
});
  
fs.readdir("./src/Crew/Events", (err, files) => {
    if(err) return console.error(err);
    console.log('\x1b[36m%s\x1b[0m', `[ ${files.length} Aktivite Yüklendi ]`);
      files.filter(file => file.endsWith(".js")).forEach(file => {
    let prop = require(`./src/Crew/Events/${file}`);
    if(!prop.config) return;
        client.on(prop.config.name, prop);
        });
});
} else if(clientdb.get("mode") === "public") {
require("./src/Public/sarsilmaz.js");

client.on("message", (message) => {
    if (message.author.bot ||!message.content.startsWith(conf.prefix) || !message.channel || message.channel.type == "dm") return;
    let args = message.content
        .substring(conf.prefix.length)
        .split(" ");
    let command = args[0];
    let bot = message.client;
    args = args.splice(1);
    let calistirici;
    if(message.guild.id !== conf.server) return;
    if (commands.has(command)) {
      calistirici = commands.get(command);
      calistirici.execute(bot, message, args);
    } else if (aliases.has(command)) {
      calistirici = aliases.get(command);
      calistirici.execute(bot, message, args);
    }
})

fs.readdir("./src/Public/Commands", (err, files) => {
    if(err) return console.error(err);
      files = files.filter(file => file.endsWith(".js"));
      console.log('\x1b[34m%s\x1b[0m', `Sistem Public modunda başlatıldı!`);
      console.log('\x1b[36m%s\x1b[0m', `[ ${files.length} Komut Yüklendi ]`);
      files.forEach(file => {
  let prop = require(`./src/Public/Commands/${file}`);
    if(!prop.config) return;
    if(typeof prop.onLoad === "function") prop.onLoad(client);
      commands.set(prop.config.name, prop);
    if(prop.config.aliases) prop.config.aliases.forEach(aliase => aliases.set(aliase, prop));
    });
});
  
fs.readdir("./src/Public/Events", (err, files) => {
    if(err) return console.error(err);
    console.log('\x1b[36m%s\x1b[0m', `[ ${files.length} Aktivite Yüklendi ]`);
      files.filter(file => file.endsWith(".js")).forEach(file => {
    let prop = require(`./src/Public/Events/${file}`);
    if(!prop.config) return;
        client.on(prop.config.name, prop);
        });
});
} else {
require("./src/Setup/sarsilmaz.js");

client.on("message", (message) => {
    if (message.author.bot ||!message.content.startsWith(conf.prefix) || !message.channel || message.channel.type == "dm") return;
    let args = message.content
        .substring(conf.prefix.length)
        .split(" ");
    let command = args[0];
    let bot = message.client;
    args = args.splice(1);
    let calistirici;
    if(message.guild.id !== conf.server) return;
    if (commands.has(command)) {
      calistirici = commands.get(command);
      calistirici.execute(bot, message, args);
    } else if (aliases.has(command)) {
      calistirici = aliases.get(command);
      calistirici.execute(bot, message, args);
    }
})

fs.readdir("./src/Setup/Commands", (err, files) => {
    if(err) return console.error(err);
      files = files.filter(file => file.endsWith(".js"));
      console.log('\x1b[36m%s\x1b[0m', `Bot Başarıyla Çalıştırıldı`);
      files.forEach(file => {
  let prop = require(`./src/Setup/Commands/${file}`);
    if(!prop.config) return;
    if(typeof prop.onLoad === "function") prop.onLoad(client);
      commands.set(prop.config.name, prop);
    if(prop.config.aliases) prop.config.aliases.forEach(aliase => aliases.set(aliase, prop));
    });
});
  
fs.readdir("./src/Setup/Events", (err, files) => {
    if(err) return console.error(err);
    console.log('\x1b[36m%s\x1b[0m', `Mod seçimini yapmalısınız, ${conf.prefix}mode komutu ile yapabilirsiniz.`);
      files.filter(file => file.endsWith(".js")).forEach(file => {
    let prop = require(`./src/Setup/Events/${file}`);
    if(!prop.config) return;
        client.on(prop.config.name, prop);
        });
});
} 