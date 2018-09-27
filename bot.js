const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json')


var prefix = ayarlar.prefix;

client.on('ready', () => {
  console.log(`[BOT] ${client.user.tag} ADI İLE GİRİŞ YAPTI!`);
});

client.on('message', msg => {
  if (msg.content === 'sa') {
    msg.reply('Aleyküm Selam, Kardeşim Hoşgeldin!');
  }
  	  client.on('message', msg => {
  if (msg.content === 'SA') {
    msg.reply('Aleyküm Selam, Kardeşim Hoşgeldin!');
  }

});
 	  client.on('message', msg => {
  if (msg.content === 'Selam') {
    msg.reply('Aleyküm Selam, Kardeşim Hoşgeldin!');
  }

});
 	  client.on('message', msg => {
  if (msg.content === 'SA') {
    msg.reply('Aleyküm Selam, Kardeşim Hoşgeldin!');
  }
});
  
  if (message.content === prefix + 'reboot') {
	  
	  if (message.author.id === "muhteşim id niz") {
		  message.channel.send('[BOT]Yenden başlatılıyor...').then(msg => {
			  console.log('yeniden başlatılıyor')
			  process.exit(0);
		  });
	  } else 
		  message.channel.send('Maalesef bu komutu kullanamazsın. Benim yapımcım değilsin!')
  }
  
  
});

client.login(process.env.BOT_TOKEN);
