const { MessageAttachment } = require('discord.js');
const Command = require('../Command');
const path = require('path');
const Canvas = require('canvas');

class Profile extends Command {
    constructor() {
        super('проф', 'отображает ваш профиль');
    }

    async run(_, message, args, profiles) {
        const userProfile = profiles[message.author.id];
        const { xp, lvl, mcoin, acoin, battles } = userProfile;

        const canvas = Canvas.createCanvas(285, 300);
        const ctx = canvas.getContext('2d');

        // Фон
        const profileBg = await Canvas.loadImage(path.resolve(__dirname, '../images/profile-card-template.jpg'));
        ctx.drawImage(profileBg, 0, 0, canvas.width, canvas.height);

        // Левел
        const lvlText = `${lvl} ---------------- ${lvl+1}`;
        const xpText = `${xp} XP`;

        ctx.font = 'bold 16px Arial';
        ctx.fillStyle = '#ffffff';
        ctx.textAlign = 'center';
        ctx.fillText(lvlText, canvas.width / 2, 187);

        ctx.font = 'bold 14px Arial';
        ctx.fillText(xpText, canvas.width / 2, 206);

        // MaxCoins
        const walletText = `${mcoin} mcoins,\t${acoin} unpolished mcoins`;
        ctx.font = 'bold 14px Arial';
        ctx.fillText(walletText, 142, 253);

        // Battles
        const battlesText = `Battles: ${battles}`;
        ctx.font = 'bold 13px Arial';
        ctx.textAlign = 'left';
        ctx.fillText(battlesText, 26, canvas.height - 12);

        // Имя пользователя
        ctx.textAlign = 'right';
        ctx.fillText(message.author.username, canvas.width - 26, canvas.height - 12);

        // Закругление для аватарки пользователя
        ctx.beginPath();
        ctx.arc(143, 114, 23, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.clip();

        // Аватарка пользователя
        const avatar = await Canvas.loadImage(
            message.author.displayAvatarURL({ format: 'jpg' })
        );
        ctx.drawImage(avatar, 120, 91, 46, 46);

        // Подготовка к публикации
        const attachment = new MessageAttachment(canvas.toBuffer(), 'user-profile.png'); 

        message.channel.send(attachment);
    }
}

module.exports = Profile;
