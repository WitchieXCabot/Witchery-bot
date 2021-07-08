const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = 'W';
const { TOKEN }  = require('./config');


const manager = new Discord.ShardingManager('./main.js', {
  TOKEN: TOKEN,
  //autoSpawn: true,
  totalShards: 'auto',
});
manager.spawn();

manager.on('shardCreate', shard => console.log(`Launching Shard ${shard.id + 1}`, { label: `Shard` }));
