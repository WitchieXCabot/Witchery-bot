const Discord = require('discord.js');

module.exports = {

    name: 'events',
    description: "this is a events embed",
    execute(message, args) {
        message.channel.send("Loading...");
        let events = new Discord.MessageEmbed()
      .setTitle(' 2021 Celestial Events ')
      .setColor("#D21F3C")
      .setTimestamp()
      .addField(` Events `, `January 2-3: Quadrantids Meteor Shower 

      January 30-February 21: Mercury Retrograde in Aquarius 
      
      March 9-10: Quadruple Formation: Moon, Mercury, Jupiter, Saturn  
      
      April 21-22: Lyrids Meteor Shower 
      
      May 5-6: Eta Aquarids Meteor Shower 
      
      May 26: Blood Moon Total Lunar Eclipse
      
      May 29- June 22: Mercury Retrograde in Gemini   
      
      June 10: Ring of Fire Solar Eclipse 
      
      July 12: Venus - Mars Conjunction 
      
      July 17-August 24: Perseid Meteor Shower 
      
      August 12-13: Perseid Meteor Shower Peaks 
      
      August 18: Mars - Mercury Conjunction  
      
      September 27-October 23: Mercury Retrograde in Libra 
      
      October 8: Draconid Meteor Shower 
      
      October 21-22: Orionids Meteor Shower 
      
      November 19: Partial Lunar Eclipse
      
      December 4: Total Solar Eclipse
      
      December 19-January 2022: Venus retrograde in Capricorn, moves back into Sagittarius  `)
      .setFooter(`have fun with our bot, we hope you learn alot`, message.author.displayAvatarURL({ format: "png", dynamic: true }));
      message.channel.send(events);
    }
}