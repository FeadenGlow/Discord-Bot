const fs = require('fs');
const { Client, Collection } = require('discord.js');
const botClient = new Client();
botClient.commands = new Collection();

const { token, commandsPrefix } = require('./src/data/botConfig.json');

const defaultProfile = require('./src/data/defaultProfile.json');
const profiles = require('./src/data/profiles.json');
const topics = require('./src/data/topics.json');

fs.readdir('./src/commands/', (err, files) => {
	if (err) throw new Error(err);

	const botCommands = files.filter(file => file.split('.').pop() === 'js');
	if (botCommands.length <= 0) console.log('Нет команд загрузки!');

	botCommands.forEach((file, index) => {
		const CommandFile = require(`./src/commands/${file}`);

		// Данное условие было написано в целях временной обратной совместимости
		// TODO: после окончания рефакторинга убрать содержание if-а
		if (CommandFile.help) {
			botClient.commands.set(CommandFile.help.name, CommandFile);
		}
		else {
			const CommandClass = new CommandFile();
			botClient.commands.set(CommandClass.getName(), CommandClass);
		}

		console.log(`${index + 1}.${file} загружен!`);
	});
	console.log(`Загружено ${botCommands.length} комманд`);
});

botClient.on('ready', () => {
	console.log(`Приготовтесь к поединку, включен ${botClient.user.username}!`);
	botClient.generateInvite(['ADMINISTRATOR']).then(link => {
		console.log(link);
	});
	botClient.user.setActivity(`${commandsPrefix}хелп`, { type: 'WATCHING' });
});

botClient.on('message', async message => {
	const { author, channel } = message;

	if (author.bot || channel.type === 'dm') return;

	const profileId = author.id;
	const profile = profiles[profileId] || defaultProfile;
	profile.xp++;

	if (profile.area !== 'Замкнутая пещерка') {
		profile.corpse = false;
	}

	if (profile.xp >= profile.lvl * 10) {
		profile.xp = 0;
		profile.lvl++;
	}

	const newProfilesFileContent = {...profiles, [profileId]: profile};
	fs.writeFile('./src/data/profiles.json', JSON.stringify(newProfilesFileContent), (err) => {
		if (err) throw new Error(err);
	});

	const userMessageArray = message.content.split(' ');
	const requestedCommand = userMessageArray[0];
	const commandArgs = userMessageArray.slice(1);

	if (message.content.startsWith(commandsPrefix)) {
		const Command = botClient.commands.get(requestedCommand.slice(commandsPrefix.length));
		Command.run(botClient, message, commandArgs, profiles);
	}
});

botClient.login(token);
