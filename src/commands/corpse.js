const Discord = module.require("discord.js");
const fs = require("fs");
const { Client, MessageEmbed } = require('discord.js');
module.exports.run = async (bot, message, args,profile)=>{
    let uid = message.author.id;
    let u = profile[uid];
    if(u.respect == undefined){
        u.respect = 0;
    }
    if(args[0] == "пожертвовать"){
        if(u.area = "Замкнутая пещерка"){
            if(u.corpse == true){
            if(args[1] == "камни"){
                if(u.stone < 500){
                    let embed = new MessageEmbed()
                        .setTitle("MysteryCave.ly")
                        .setColor(0xffffff)
                        .setDescription("Вы поднесли богоискателю весь ваш камень, но он его отторгнул! Весь камень разлетелся по пещере, да вскоре вы его собрали снова.");
                    return message.channel.send(embed);
                }
                let embed = new MessageEmbed()
                    .setTitle("MysteryCave.ly")
                    .setColor(0xffffff)
                    .setDescription("Вы пожертвовали 500 камня Богоискателю, он вас благословил за этот дар!");
                u.stone -= 500;
                u.respect += 1;
                return message.channel.send(embed);
            }


            if(args[1] == "сталь"){
                if(u.steel < 15){
                    let embed = new MessageEmbed()
                        .setTitle("MysteryCave.ly")
                        .setColor(0xffffff)
                        .setDescription("Вы поднесли богоискателю всю вашу <:steel:697162647589748816>, но он её отторгнул! Вся <:steel:697162647589748816> разлетелась по пещере, да вскоре вы её собрали снова.");
                    return message.channel.send(embed);
                }
                let embed = new MessageEmbed()
                    .setTitle("MysteryCave.ly")
                    .setColor(0xffffff)
                    .setDescription("Вы пожертвовали 15 <:steel:697162647589748816> Богоискателю, он вас благословил за этот дар!");
                u.steel -= 15;
                u.respect += 1;
                return message.channel.send(embed);
            }


            if(args[1] == "дерево"){
                if(u.wood < 200){
                    let embed = new MessageEmbed()
                        .setTitle("MysteryCave.ly")
                        .setColor(0xffffff)
                        .setDescription("Вы поднесли богоискателю всё ваше дерево, но он его отторгнул! Всё дерево разлетелось по пещере, да вскоре вы его собрали снова.");
                    return message.channel.send(embed);
                }
                let embed = new MessageEmbed()
                    .setTitle("MysteryCave.ly")
                    .setColor(0xffffff)
                    .setDescription("Вы пожертвовали 200 древесиной Богоискателю, он вас благословил за этот дар!");
                u.wood -= 200;
                u.respect += 1;
                return message.channel.send(embed);
            }


            if(args[1] == "железо"){
                if(u.iron_plate < 40){
                    let embed = new MessageEmbed()
                        .setTitle("MysteryCave.ly")
                        .setColor(0xffffff)
                        .setDescription("Вы поднесли богоискателю всё ваше <:iron_plate:695761073185488898>, но он его отторгнул! Всё <:iron_plate:695761073185488898> разлетелось по пещере, да вскоре вы его собрали снова.");
                    return message.channel.send(embed);
                }
                let embed = new MessageEmbed()
                    .setTitle("MysteryCave.ly")
                    .setColor(0xffffff)
                    .setDescription("Вы пожертвовали 40 <:iron_plate:695761073185488898> Богоискателю, он вас благословил за этот дар!");
                u.iron_plate -= 40;
                u.respect += 1;
                return message.channel.send(embed);
            }


            if(args[1] == "золото"){
                if(u.gold_plate < 30){
                    let embed = new MessageEmbed()
                        .setTitle("MysteryCave.ly")
                        .setColor(0xffffff)
                        .setDescription("Вы поднесли богоискателю всё ваше <:golden_plate:695787056038936606>, но он его отторгнул! Всё <:golden_plate:695787056038936606> разлетелось по пещере, да вскоре вы его собрали снова.");
                    return message.channel.send(embed);
                }
                let embed = new MessageEmbed()
                    .setTitle("MysteryCave.ly")
                    .setColor(0xffffff)
                    .setDescription("Вы пожертвовали 30 <:golden_plate:695787056038936606> Богоискателю, он вас благословил за этот дар!");
                u.gold_plate -= 30;
                u.respect += 1;
                return message.channel.send(embed);
            }


            if(args[1] == "кристаллы"){
                if(u.crystalls < 50){
                    let embed = new MessageEmbed()
                        .setTitle("MysteryCave.ly")
                        .setColor(0xffffff)
                        .setDescription("Вы поднесли богоискателю все ваши <:crystal:695684747879514232>, но он их отторгнул! Все <:crystal:695684747879514232> разлетелся по пещере, да вскоре вы их собрали снова.");
                    return message.channel.send(embed);
                }
                let embed = new MessageEmbed()
                    .setTitle("MysteryCave.ly")
                    .setColor(0xffffff)
                    .setDescription("Вы пожертвовали 50 <:crystal:695684747879514232> Богоискателю, он вас благословил за этот дар!");
                u.crystalls -= 50;
                u.respect += 1;
                return message.channel.send(embed);
            }


            if(args[1] == "камни"){
                if(u.pearls < 3){
                    let embed = new MessageEmbed()
                        .setTitle("MysteryCave.ly")
                        .setColor(0xffffff)
                        .setDescription("Вы поднесли богоискателю весь ваш <:huge_pearl:573817442711896074>, но он его отторгнул! Весь <:huge_pearl:573817442711896074> разлетелся по пещере, да вскоре вы его собрали снова.");
                    return message.channel.send(embed);
                }
                let embed = new MessageEmbed()
                    .setTitle("MysteryCave.ly")
                    .setColor(0xffffff)
                    .setDescription("Вы пожертвовали 3 <:huge_pearl:573817442711896074> Богоискателю, он вас благословил за этот дар!");
                u.pearls -= 3;
                u.respect += 1;
                return message.channel.send(embed);
            }
        }
        }
        else{
            u.corpse = false;
        }
    }
};
module.exports.help = {
    name: "труп"
}