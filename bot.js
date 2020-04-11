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
  bot.user.setActivity(".хелп",{type:"WATCHING"});
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
          acoin:20,
          crystalls:0,
          used: false,
          activeItem:"У вас нету активного предмета",
          pearls:0,
          iron_plate:0,
          iron_ore:0,
          gold_plate:0,
          gold_ore:0,
          stump:0,
          wood:0,
          stone:0,
          hp:100,
          atk:20,
          minerals:0,
          steel:0,
          planks:0,
          tools:0,
          etools:false,
          tunnel:false,
          stand:false,
          workbench:false,
          furnace: false,
          printer: false,
          tree: false,
          check:false,
          used2:false,
          typeattack:"не выбрано",
          counter:0,
          class:"Вы не выбрали класс",
          chest:false,
          itemc1:"<пусто>",
          itemc2:"<пусто>",
          itemc3:"<пусто>",
          used3: false,
          ready:false,
          area:"В доме",
          used4:false,
          locksmith:false,
          blessing:false,
          courage:false,
          corpse:false,
          cave:false,
          respect:0,
      }
  }
  let u = profile[uid];
  if(u.area != "Замкнутая пещерка"){
    u.corpse = false;
  }
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

/*bot.on('message', (message) => {
    let user = message.author.username;
});*/


bot.login(token);
