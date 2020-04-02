const Discord = require('discord.js');
const { Client, MessageEmbed } = require('discord.js');
const bot = new Discord.Client();
bot.commands = new Discord.Collection();
const fs = require('fs');
let config = require('./botconfig.json');
let token = config.token;
let prefix = config.prefix;
let profile = require("./profile.json");
let note = require("./note.json");

fs.readdir('./cmds/',(err,files)=>{
    if(err) console.log(err);
    let jsfiles = files.filter(f => f.split(".").pop() === "js");
    if(jsfiles.length <= 0) console.log("Нет комманд загрузки!");
    console.log(`Загружено ${jsfiles.length} комманд`);
    jsfiles.forEach((f,i) =>{
        let props = require(`./cmds/${f}`);
        console.log(`${i+1}.${f} Загружен!`);
        bot.commands.set(props.help.name,props)
    }) 
})

bot.on('ready', () => {
  console.log(`Приготовтесь к поединку, включен ${bot.user.username}!`);
  bot.generateInvite(["ADMINISTRATOR"]).then(link =>{
      console.log(link);
  })
});

bot.on('message', async message => {
  if(message.author.bot) return;
  if(message.channel.type == "dm") return;
  let uid = message.author.id;
  let user = message.author.username;
  if(!profile[uid]){
      profile[uid] = {
          battles:0,
          xp:0,
          lvl:0,
          mcoin:0,
      }
  }
  let u = profile[uid];
  u.xp++;
  if(u.xp >= u.lvl*10){
      u.xp = 0;
      u.lvl++;
  }

  if(!note[uid]){
      note[uid] = {
          note1:"<здесь будет ваша заметка>",
          note2:"<здесь будет ваша заметка>",
          note3:"<здесь будет ваша заметка>",
          note4:"<здесь будет ваша заметка>",
          note5:"<здесь будет ваша заметка>",
      }
  }

  fs.writeFile('./profile.json',JSON.stringify(profile),(err) =>{
      if(err) console.log(err);
  })
  fs.writeFile('./note.json',JSON.stringify(note), (err) =>{
      if(err) console.log(err);
  })
  let messageArray = message.content.split(" ");
  let command = messageArray[0].toLowerCase();
  let args = messageArray.slice(1);
  if(!message.content.startsWith(prefix)) return;
  let cmd = bot.commands.get(command.slice(prefix.length));
  if(cmd) cmd.run(bot, message, args, profile, note);
});

bot.on('message', (message) => {
    let user = message.author.username;
    if (message.content == "бот") {
        message.channel.send("Я тут! Привет, "+user+"!");
    };
    if (message.content == "+") {
        confrontation();
    };
    if (message.content == "Соси хуй") {
        message.channel.send("Ок, подставляй.");
    };
    if (message.content == "Кто из нас лох, Pris3Rag3 иль я?") {
        message.channel.send("Довольно сложный выбор, скорее всего Pris3Rag3, да, определённо он.");
    };
    if (message.content == "ну пж") {
        message.channel.send("Ну ок, ща сделаю, подожди минуту.");
    };
    if (message.content == "минута прошла, где калькулятор") {
        message.channel.send("Нету, АЗЗАЗАЗАЗАЗАЗАЗЗАЗА ВОТ Э НУУУУБ ЛМАОООООООООООООООО.");
    };
    if (message.content == "тест") {
        message.channel.send(NaN);
    };
    if (message.content.startsWith(":mc:")) {
        message.channel.send(":mc:");
    };
    function confrontation(){
        message.channel.send("Варификация пройдена.");
    }
});


bot.login(token);
