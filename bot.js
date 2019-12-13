const Discord = require('discord.js');
const ytdl = require('ytdl-core');
const fs = require('fs');
const client = new Discord.Client();

client.on('ready', ready => {
  console.log('ready');
  client.user.setActivity('commands', { type: 'LISTENING' })
});

client.on('message', msg => {
  var args = msg.content.split(' ');
  if (args[0] === '!play') {
  if (args.length == 2) {
  if (msg.member.voiceChannel) {
  console.log('yt start ' + args[1]);
  msg.member.voiceChannel.join()
  .then(conn => {
  const dispatcher = conn.playStream(ytdl(args[1], {filter: 'audioonly'}));
  dispatcher.on('end', end => {
  msg.member.voiceChannel.leave();
  console.log('yt vege');
  });
  })
  }
  else {
  msg.reply('Hangcsatornában kell lenned!');
  }
  }
  else {
  msg.reply('Használat: !play <url>')
  }
  }
  if (args[0] === '!playother') {
  if (args.length == 2) {
  if (msg.member.voiceChannel) {
  console.log('egyeb start ' + args[1]);
  msg.member.voiceChannel.join()
  .then(conn => {
  conn.playArbitraryInput(args[1])
  .on('end', end => {
  msg.member.voiceChannel.leave();
  console.log('egyeb vege');
  });
  })
  }
  else {
  msg.reply('Hangcsatornában kell lenned!');
  }
  }
  else {
  msg.reply('Használat: !play <url>')
  }
  }
  if (args[0] === '!exit') {
  if (msg.member.roles.find(r => r.name === Admin)) {
  if (args[1] !== undefined) {
  msg.reply('Leállítás');
  err = args[1]
  }
  process.exit(args[1]);
  }
  }
});

client.login('NjQ3NTM2NDc0MzM3NzA2MDA2.XdkG1Q.6WXJw1N6qzLrKEQqqBWKTjIlLV0');
