const Discord = module.require("discord.js");
const fs = require("fs");
const { Client, MessageEmbed } = require('discord.js');
module.exports.run = async (bot, message, args)=>{
    if(args[0] == "материалы"){
        let embed = new MessageEmbed()
            .setTitle("LearningBasicsTo.org")
            .setColor(0x0c59eb)
            .setDescription("Гайд по материалам \nМатериалы - предметы для создания/взаимодействия/активации чего-либо.\n\n1. Камень <камень>\nСамый распространённый и легкодобываемый ресурс. Нужен в большинстве примитивных крафтов, да для создания каменных кирпичей. \nПри использовании команды .майн выпадает в случае неудачи получения чего-либо. В конце концов, вы под землёй. Так-же имеет некий шанс приобретения при использовании кирок. \nРыночная стоимость - 3<:loxovskoi_mc:609154702533197845>-ов. Продать можно 10шт за 1<:loxovskoi_mc:609154702533197845>\n\n2. Дерево <дерево>\nДовольно распространённое топливо, либо-же ресурс. Выступает компонентом большинства примитивных крафтов, да служит средним топливом.\nМожно получить выполнив цикл орудывания топором (.гайд механики) \nРыночная цена - 10<:loxovskoi_mc:609154702533197845>-ов. Можно продать 10шт за 5<:loxovskoi_mc:609154702533197845>-ов\n\n3. Железная руда <:iron_ore:695770290445090856>\nОтносительно прочная и распространённая руда. Служит для переплавки в плиты, либо-же для незамысловатых изделий.\nМожно получить покопавшись в шахте. Обычно выпадает в два раза реже монет при использовании .майн , или-же как основной ресурс при использовании кирок. \nРыночная стоимость - 20<:loxovskoi_mc:609154702533197845>-ов. Продать можно 1шт за 2<:loxovskoi_mc:609154702533197845>-a.\n\n4. Железная плита <:iron_plate:695761073185488898>\nПереплавленая в печи версия железной руды, являющаяся более продвинутым материалом. Вполне пригодна для относительно долгослужащих инструментов.\nДобывается переплавкой руды в печи (.гайд крафт), в отношении 2руды в 1слиток.\nРыночная стоимость - 60<:loxovskoi_mc:609154702533197845>-ов. Можно продать 1шт за 15<:loxovskoi_mc:609154702533197845>-ов.");
        let embed2 = new MessageEmbed()
            .setColor(0x0c59eb)
            .setDescription("\n5. Золотая руда <:gold_ore:695792535049601094>\nРедкая и драгоценная руда, однако уступает другим металлам в прочности. Как и железная руда, служит для переплавки в плиты\nМожно добыть лишь орудуя железной киркой. Если мануально прописывать .майн с экипированой железной киркой, то шанс её выпадения будет примерно такой-же, как и у железной руды, не копая железной киркой. При использовании кирки в виде команды (.исп железная кирка) (.гайд механики) (.гайд инструменты), она имеет вероятность выпадения в примерно 25%.\nРыночная цена - 30<:loxovskoi_mc:609154702533197845>-ов, можно продать 1шт за 5<:loxovskoi_mc:609154702533197845>-а.\n\n6. Золотая плита <:golden_plate:695787056038936606>\nДрагоценный металл, необходимый в ряде механических и магических изделий, полученный плавкой золотой руды в печи\nДобывается плавкой золотой руды в печи (.гайд крафт) (.гайд станки), в отношении 2руды на 1слиток.\nРыночная стоимость - 90<:loxovskoi_mc:609154702533197845>-ов, продать 1шт можно за 30<:loxovskoi_mc:609154702533197845>-ов.\n\n7. Кристалл <:crystal:695684747879514232>\nОдин из редчайших материалов, который хорошо оценивается в незаконной торговле. Служит и валютой, и материалом, и топливом для магических изделий.\nДобыть можно при помощи бура. За одну ходку обычно можно найти 1-7 кристаллов \nРыночная стоимость - 200<:loxovskoi_mc:609154702533197845>-ов, продать можно на чёрном рынке (.гайд механики) за 100<:loxovskoi_mc:609154702533197845>/шт\n");
        let embed3 = new MessageEmbed()
            .setColor(0x0c59eb)
            .setDescription("8. Таинственная Жемчужина <:huge_pearl:573817442711896074>\nРедчайшая драгоценность, видели которую наживо лишь еденицы. Обладает ещё не изучеными свойствами. Поговаривают, иногда она может попасться в абсолютно неожиданном месте.\nТочное получение ещё не установлено. Можно испытывать удачу, открывая всевозможные мешки, клады, да вообще мануально копая, в надежде её получить.\nНа рынок она невероятно редко поступает. Но если и поступает, то раскупают её моментально, по этой причине точной стоимостью не обладает. Но в отличии от базара, на чёрном рынке за неё готовы дать хоть 500<:loxovskoi_mc:609154702533197845>-ов за одну штуку.")
            .setFooter("Для списка гайдов - .гайд");
        message.channel.send(embed);
        message.channel.send(embed2);
        return message.channel.send(embed3)
    }
    if(args[0] == "крафт"){
        let embed = new MessageEmbed()
            .setTitle("LearningBasicsTo.org")
            .setColor(0x0c59eb)
            .setDescription('Система создания вещей.\nПо другому, крафтинга. Это гайд по созданию/ингредиентам для создания вещей, о рабочих столах да и о подобном. \nДля того, чтобы вообще начать крафтить, нужно купить в магазине (.гайд механики) мастерской стол (верстак по другому) и инструменты для крафта. Каждый раз, когда вы создаёте предмет на верстаке у вас отнимается единица инструментов. Ниже приведён список вещей, которые можно создать. Некоторые детали разбросаны по гайду "разное"\n------------------- \nСтанки:\n\nПечь. Нужна для переплавки руд в пластины, да так далее.\nРецепт: 60 <камень>, 4<:iron_ore:695770290445090856> (верстак) \n\nСундук. Нужен для хранения вещей. \nРецепт: 20<дерево>, 10<доски>, 4<:iron_plate:695761073185488898>. (слесарский станок) \n\nСлесарский станок. Служит для создания досок.\nРецепт: 60 <дерево>, 20<:literally_a_stump:695773481270378556> , 8<:iron_plate:695761073185488898> (верстак) \n\n3д принтер. Подходит для реализации невозмодных идей.\nРецепт: 10<:steel:697162647589748816>, 2<:golden_plate:695787056038936606>, 6<:crystal:695684747879514232>. (верстак, так-же требует сразу 10 инструментов)\n\nЛитейный минизавод. Производит <:loxovskoi_mc:609154702533197845>  из различных сплавов.\nРецепт: 6<:steel:697162647589748816>, 10<:golden_plate:695787056038936606>, 1000<:loxovskoi_mc:609154702533197845>. (3д принтер, требует в наличии электронные стальные инструменты)\n');
        let embed1 = new MessageEmbed()
            .setColor(0x0c59eb)
            .setDescription('Инструменты:\n\nЖелезная кирка. Служит для намеренной добычи золота, да иногда железа с минералами.\nРецепт: 10<дерево>, 2<:iron_plate:695761073185488898> (верстак)\n\nЖелезный топор. Нужен для продуктивной добычи дерева.\nРецепт: 10<дерево>, 3<:iron_plate:695761073185488898> (верстак)\n\nСтальной бур. Индустриальная версия старого бура, способная прорыть гораздо большие дистанции.\nРецепт: 2<:steel:697162647589748816>, 2<:iron_plate:695761073185488898>, 1<:crystal:695684747879514232>. (3д принтер, требует в наличии электронные стальные инструменты)\n\nМатериалы:\n\nЖелезная пластина <:iron_plate:695761073185488898>. Сплавленная в пластину железная руда, пригодная для почти всего. \nРецепт: 2<:iron_ore:695770290445090856>. (печь. На партию (.гайд механики) нужно 5<дерево>) \n\nЗолотая пластина <:golden_plate:695787056038936606>. Сплавленная в пластину золотая руда, которая отлично подходит для того, чтобы просто любоваться ею. \nРецепт: 2<:gold_ore:695792535049601094>  (печь. На партию (.гайд механики) нужно 5<дерево>)\n\nДоски. Продвинутое дерево, говоря грубо. \nРецепт: 5<дерево>. Еденица создаётся 10с в слесарском станке. (слесарский станок) \n\nСталь <:steel:697162647589748816>. Невероятно крепкий и прочный металл, который может выдержать даже самые высокие температуры. \nРецепт: 2<:iron_plate:695761073185488898>. Единица создаётся 30с в печи, с требованием поддува(.гайд механики). (печь, на единицу нужно 10<:literally_a_stump:695773481270378556>)\n');
        let embed2 = new MessageEmbed()
            .setColor(0x0c59eb)
            .setDescription('Разное:\n\nЖелезные инструменты х3. Нужны для того, чтобы создавать вещи. Являются копией тех, что на прилавке.\nРецепт: 2<:iron_plate:695761073185488898>, 5<дерево>. (верстак) \n\nЭлектронные стальные инструменты. Бесконечный вариант обычных инструментов. Позволяет так-же создавать некоторые продвинутые вещи. \nРецепт: 6<:steel:697162647589748816>, 4<:iron_plate:695761073185488898>, 4<:golden_plate:695787056038936606>, 1<:crystal:695684747879514232> (3д принтер) \n\nБлагословление кирки. Зачаровывает ваш любимый инструмент, делая его в разы продуктивнее.\nРецепт: 5<:crystal:695684747879514232>, 1<:huge_pearl:573817442711896074>. (таинственный пъедестал, требует 3<божье уважение>)\n\nЗаклятие неустанности. Делает вас неустанным, позволяя менять локации в три раза быстрее обычного.\nРецепт: 15<:golden_plate:695787056038936606>, 24<:crystal:695684747879514232>, 1<:huge_pearl:573817442711896074> (таинственный пъедестал, требует 5<божье уважение>)')
            .setFooter("Для списка гайдов - .гайд");
        message.channel.send(embed);
        message.channel.send(embed1);
        return message.channel.send(embed2);
    }
    
    let embed = new MessageEmbed()
        .setTitle("LearningBasicsTo.org")
        .setColor(0x0c59eb)
        .setDescription("Гайды - подсказки по использованию и написанию команд, по продвижению по игре да по самому её контенту. \nНа данный момент присутствуют такие гайды, как:\n\nМатериалы (спрайты, сами описания, способы и тонкости получения и их цены) \n\nКрафт (станки, ингредиенты, тонкости, да вообще что можно крафтить) \n\nМеханики (название говорит само за себя. Тут так-же как что работает) \n\nБитвы (wip) \n\nРазное ")
        .setFooter('Для вывода соответствующего гайда пропишите ".гайд <название>". Допустим, ".гайд материалы');
    return message.channel.send(embed)


};
module.exports.help = {
    name: "гайд"
}