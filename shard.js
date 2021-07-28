const Discord = require('discord.js');

const manager = new Discord.ShardingManager('./index.js', {
  token: process.env.token,
 //autoSpawn: true,
  totalShards: 2
});

manager.on('shardCreate', shard =>
console.log(`Launching Shard ${shard.id + 1}`));
manager.spawn(manager.totalShards, -1);
