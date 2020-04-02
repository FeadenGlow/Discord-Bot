const Discord = module.require("discord.js");
const { Client, MessageEmbed } = require('discord.js');
const fs = require("fs");
module.exports.run = async (bot, message, args)=>{
    const embed = new MessageEmbed()
      .setTitle('HELP!')
      .setColor(0xff0000)
      .setDescription("В боте присутствуют такие комманды на данный момент, это:\n.пинг - бот отвечает 'pong!'\n.кал - однострочный калькулятор\n.хелп - помощь с коммандами\n.чис <значение> - удалить сообщения\n.инфа - информация о сервере\n.нап <число s|m|h> <сообщение> - бот скажет сообщение через определённое время\n.зам - заметки\n.зап <обращение к пользователю> <число> - заплатить определённую сумму\n.авто - автогайд по Противостоянию\n.бал - проверить свой кошелёк");

   message.channel.send(embed);
};
module.exports.help = {
    name: "хелп"
}