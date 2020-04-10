const Discord = module.require("discord.js");
const fs = require("fs");
const { Client, MessageEmbed } = require('discord.js');
module.exports.run = async (bot, message, args, profile)=>{
    let uid = message.author.id;
    let u = profile[uid];
    let pUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[1]);
    let sResourse; //Ресурсы отправителя
    let sValue;
    let pResourse; //Ресурсы получателя.
    let pValue
    let pu = profile[pUser.id];
    if(args[0] == "предложить"){
        if(profile[pUser.id] == u){
            let embed = new MessageEmbed()
             .setTitle("Exchange.ly")
             .setColor(0xffffff)
             .setDescription("Вы не можете предложить обмен себе");
            return message.channel.send(embed);
          }
        if(isNaN(parseInt(args[2])) || isNaN(parseInt(args[5]))){
            let embed = new MessageEmbed()
            .setTitle("Exchange.ly")
            .setColor(0xffffff)
            .setDescription("Произошла ошибка, повторите попытку");
            return message.channel.send(embed);
        }
        
        let embed = new MessageEmbed()
        .setTitle("Exchange.ly")
        .setColor(0xffffff)
        .setDescription("У пользователя есть 1 минута для того чтобы принять обмен");
        message.channel.send(embed);

        setTimeout(function(){
            if(pu.ready == true){
                
                if(args[3] == "камень" || args[6] == "камень"){
                    if(args[3] == "камень"){
                        if(u.stone >= parseInt(args[2])){
                            u.stone -= parseInt(args[2]);
                            pu.stone += parseInt(args[2]);
                        }
                    }
                    else if(args[6] == "камень"){
                        if(pu.stone >= parseInt(args[5])){
                            pu.stone -= parseInt(args[5]);
                            u.stone += parseInt(args[5]);
                        }
                    }
                }
        
        
                if(args[3] == "дерево" || args[6] == "дерево"){
                    if(args[3] == "дерево"){
                        if(u.wood >= parseInt(args[2])){
                            u.wood -= parseInt(args[2]);
                            pu.wood += parseInt(args[2]);
                        }
                    }
                    else if(args[6] == "дерево"){
                        if(pu.wood >= parseInt(args[5])){
                            pu.wood -= parseInt(args[5]);
                            u.wood +=parseInt(args[5]);
                        }
                    }
                }


                if(args[3] == "сталь" || args[6] == "сталь"){
                    if(args[3] == "сталь"){
                        if(u.steel >= parseInt(args[2])){
                            u.steel -= parseInt(args[2]);
                            pu.steel += parseInt(args[2]);
                        }
                    }
                    else if(args[6] == "сталь"){
                        if(pu.steel >= parseInt(args[5])){
                            pu.steel -= parseInt(args[5]);
                            u.steel += parseInt(args[5]);
                        }
                    }
                }


                if(args[3] == "доски" || args[6] == "доски"){
                    if(args[3] == "доски"){
                        if(u.planks >= parseInt(args[2])){
                            u.planks -= parseInt(args[2]);
                            pu.planks += parseInt(args[2]);
                        }
                    }
                    else if(args[6] == "доски"){
                        if(pu.planks >= parseInt(args[5])){
                            pu.planks -= parseInt(args[5]);
                            u.planks +=parseInt(args[5]);
                        }
                    }
                }
        
        
                if(args[3] == "жруда" || args[6] == "жруда"){
                    if(args[3] == "жруда"){
                        if(u.iron_ore >= parseInt(args[2])){
                            u.iron_ore -= parseInt(args[2]);
                            pu.iron_ore += parseInt(args[2]);
                        }
                    }
                    else if(args[6] == "жруда"){
                        if(pu.iron_ore >= parseInt(args[5])){
                            pu.iron_ore -= parseInt(args[5]);
                            u.iron_ore += parseInt(args[5]);
                        }
                    }
                }
        
        
                if(args[3] == "железо" || args[6] == "железо"){
                    if(args[3] == "железо"){
                        if(u.iron_plate >= parseInt(args[2])){
                            u.iron_plate -= parseInt(args[2]);
                            pu.iron_plate +=parseInt(args[2]);
                        }
                    }
                    else if(args[6] == "железо"){
                        if(pu.iron_plate >= parseInt(args[5])){
                            pu.iron_plate -= parseInt(args[5]);
                            u.iron_plate += parseInt(args[5]);
                        }
                    }
                }
        
        
                if(args[3] == "зруда" || args[6] == "зруда"){
                    if(args[3] == "зруда"){
                        if(u.gold_ore >= parseInt(args[2])){
                            u.gold_ore -= parseInt(args[2]);
                            pu.gold_ore += parseInt(args[2]);
                        }
                    }
                    else if(args[6] == "зруда"){
                        if(pu.gold_ore >= parseInt(args[5])){
                            pu.gold_ore -= parseInt(args[5]);
                            u.gold_ore +=parseInt(args[5]);
                        }
                    }
                }
        
        
                if(args[3] == "золото" || args[6] == "золото"){
                    if(args[3] == "золото"){
                        if(u.gold_plate >= parseInt(args[2])){
                            u.gold_plate -= parseInt(args[2]);
                            pu.gold_plate += parseInt(args[2])
                        }
                    }
                    else if(args[6] == "золото"){
                        if(pu.gold_plate >= parseInt(args[5])){
                            pu.gold_plate -= parseInt(args[5]);
                            u.gold_plate +=parseInt(args[5]);
                        }
                    }
                }
        
        
                if(args[3] == "кристаллы" || args[6] == "кристаллы"){
                    if(args[3] == "кристаллы"){
                        if(u.crystalls >= parseInt(args[2])){
                            u.crystalls -= parseInt(args[2]);
                            pu.crystalls += parseInt(args[2]);
                        }
                    }
                    else if(args[6] == "кристаллы"){
                        if(pu.crystalls >= parseInt(args[5])){
                            pu.crystalls -= parseInt(args[5]);
                            u.crystalls += parseInt(args[5])
                        }
                    }
                }
                if(args[3] == "жемчуг" || args[6] == "жемчуг"){
                    if(args[3] == "жемчуг"){
                        if(u.pearls >= parseInt(args[2])){
                            u.pearls -= parseInt(args[2]);
                            pu.pearls += parseInt(args[2]);
                        }
                    }
                    else if(args[6] == "жемчуг"){
                        if(pu.pearls >= parseInt(args[5])){
                            pu.pearls -= parseInt(args[5]);
                            u.pearls += parseInt(args[5]);
                        }
                    }
                }
                let embed = new MessageEmbed()
                    .setTitle("Exchange.ly")
                    .setColor(0xffffff)
                    .setDescription("Обмен прошёл успешно");
                pu.ready = false;
                return message.channel.send(embed);
            }
            else{
                let embed = new MessageEmbed()
                .setTitle("Exchange.ly")
                .setColor(0xffffff)
                .setDescription("Пользователь не принял обмен");
                return message.channel.send(embed);
            }
        },1000*1*60)
    }
};
module.exports.help = {
    name: "обмен"
}