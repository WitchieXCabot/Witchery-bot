const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = 'W';
const TOKEN  = "NzgwMzQxMzU0Mzc5MDgzNzk3.X7trhA.iVuTbhwlRt1jagKgb_d61NGnk5E"


const manager = new Discord.ShardingManager('./main.js', {
  TOKEN: TOKEN,
 //autoSpawn: true,
  //totalShards: 'auto'
  totalShards: 1
});

manager.spawn();

manager.on('shardCreate', shard => console.log(`Launching Shard ${shard.id + 1}`, { label: `Shard` }));
