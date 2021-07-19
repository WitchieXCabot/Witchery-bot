const { MessageEmbed, MessageAttachment } =  require("discord.js");
 
module.exports = {
    config: {
        name: 'tarot',
        category: "divination",
        aliases: ["t", "tt"],
        description: "Tarot card command",
    },
    run: async (bot, message, args) => {   
        let rand =  [
            {
                "name": "The Fool",
                "number": "0",
                "arcana": "Major Arcana",
                "suit": null,
                "img": "tarot-json-master/cards/m00.jpg",
                "deck": "Rider Waite tarot",
                "description": "Fool represents new beginnings,\nhaving faith in the future,\nbeing inexperienced, not knowing what\nto expect, having beginners luck, improvising,\nbelieving that the Universe provides,\nhaving no strings attached, being carefree."
            },
            {
                "name": "The Magician",
                "number": "1",
                "arcana": "Major Arcana",
                "suit": null,
                "img": "tarot-json-master/cards/m01.jpg",
                "deck": "Rider Waite tarot",
                "description": "Magician represents your ability to communicate clearly, to ‘sell’ yourself and to be innovative. The Magician has all the tools and resources available to manifest his desired outcome, so it is a good card to get if you want to create."
            },
            {
                "name": "The High Priestess",
                "number": "2",
                "arcana": "Major Arcana",
                "suit": null,
                "img": "tarot-json-master/cards/m02.jpg",
                "deck": "Rider Waite tarot",
                "description": "High Priestess represents secrets, mystery, intuition, wisdom, making the impossible become possible, and magic."
            },
            {
                "name": "The Empress",
                "number": "3",
                "arcana": "Major Arcana",
                "suit": null,
                "img": "tarot-json-master/cards/m03.jpg",
                "deck": "Rider Waite tarot",
                "description": "Empress represents feminine power, a nurturer and a family oriented person, our mother or a mother figure, abundance, femininity, fertility and the love of the home and family."
            },
            {
                "name": "The Emperor",
                "number": "4",
                "arcana": "Major Arcana",
                "suit": null,
                "img": "tarot-json-master/cards/m04.jpg",
                "deck": "Rider Waite tarot",
                "description": "Emperor represents masculine energy, the ruler, the head of the household, head of a company, organisation and communities. The Emperor is an authority figure that creates a solid foundation to build and create on."
            },
            {
                "name": "The Hierophant",
                "number": "5",
                "arcana": "Major Arcana",
                "suit": null,
                "img": "tarot-json-master/cards/m05.jpg",
                "deck": "Rider Waite tarot",
                "description": "Hierophant represents group consciousness, religion, your belief system, ceremony, traditions, kindness, charity, giving guidance in the form of spiritual counselling."
            },
            {
                "name": "The Lovers",
                "number": "6",
                "arcana": "Major Arcana",
                "suit": null,
                "img": "tarot-json-master/cards/m06.jpg",
                "deck": "Rider Waite tarot",
                "description": "Lovers represents love and relationship, soul mates, physical attractions, choices to be made, The Lovers represents doing the things that make us feel whole, being with the people who make us feel whole."
            },
            {
                "name": "The Chariot",
                "number": "7",
                "arcana": "Major Arcana",
                "suit": null,
                "img": "tarot-json-master/cards/m07.jpg",
                "deck": "Rider Waite tarot",
                "description": "Chariot represents your willpower and determination. It represents victory. The Chariot gives you the green light to charge ahead and take control in your life or an area of your life that needs your attention."
            },
            {
                "name": "Strength",
                "number": "8",
                "arcana": "Major Arcana",
                "suit": null,
                "img": "tarot-json-master/cards/m08.jpg",
                "deck": "Rider Waite tarot",
                "description": "Strength represents our courage, passions, strength, self-confidence, patience and compassion. Strength reminds us to follow our passions, to take the time to do the things that make us tick, that makes us strong within ourselves and which builds confidence and self-worth."
            },
            {
                "name": "The Hermit",
                "number": "9",
                "arcana": "Major Arcana",
                "suit": null,
                "img": "tarot-json-master/cards/m09.jpg",
                "deck": "Rider Waite tarot",
                "description": "Hermit represents spending time alone, being a lone wolf, soul-searching, seeking spiritual guidance, introspection."
            },
            {
                "name": "Wheel of Fortune",
                "number": "10",
                "arcana": "Major Arcana",
                "suit": null,
                "img": "tarot-json-master/cards/m10.jpg",
                "deck": "Rider Waite tarot",
                "description": "Wheel of Fortune is the Big destiny card in the tarot deck. What is meant to be is meant to be. In the tarot when the Wheel of Fortune turns up, it means that the events and people in your life are in your life due to it being pre-decided by destiny."
            },
            {
                "name": "Justice",
                "number": "11",
                "arcana": "Major Arcana",
                "suit": null,
                "img": "tarot-json-master/cards/m11.jpg",
                "deck": "Rider Waite tarot",
                "description": "Justice represents all kinds of legal matters, the spiritual laws of truth and cause and effect. When the Justice card shows up it reminds us to be lawful and fair to achieve the best result."
            },
            {
                "name": "The Hanged Man",
                "number": "12",
                "arcana": "Major Arcana",
                "suit": null,
                "img": "tarot-json-master/cards/m12.jpg",
                "deck": "Rider Waite tarot",
                "description": "Hanged Man represents being temporarily suspended. Life is on hold, but it serves a purpose."
            },
            {
                "name": "Death",
                "number": "13",
                "arcana": "Major Arcana",
                "suit": null,
                "img": "tarot-json-master/cards/m13.jpg",
                "deck": "Rider Waite tarot",
                "description": "Death represents transformation, endings and new beginnings. When the Death card shows up it tells you that things will not be the same again. A transformation is taking place, you are growing and changing with the circumstances you find yourself in."
            },
            {
                "name": "Temperance",
                "number": "14",
                "arcana": "Major Arcana",
                "suit": null,
                "img": "tarot-json-master/cards/m14.jpg",
                "deck": "Rider Waite tarot",
                "description": "Temperance represents balanced interaction between the elements to create something new and fresh. Temperance includes all the elements in such a way that it brings out the best of each substance. When the Temperance card shows up in your life there is great balance and strength between the different areas and people in your life that are working together."
            },
            {
                "name": "The Devil",
                "number": "15",
                "arcana": "Major Arcana",
                "suit": null,
                "img": "tarot-json-master/cards/m15.jpg",
                "deck": "Rider Waite tarot",
                "description": "Devil represents the primal source of behaviour that shows itself in the form of our desires and earthly needs. It also represents our fears that causes addiction and compulsive behaviour."
            },
            {
                "name": "The Tower",
                "number": "16",
                "arcana": "Major Arcana",
                "suit": null,
                "img": "tarot-json-master/cards/m16.jpg",
                "deck": "Rider Waite tarot",
                "description": "Tower represent disaster, emotional ‘meltdowns’ and/or tantrums, anger issues, upheaval, sudden change that is caused by disruption and revelations that rock the foundation of the person, household, organisation or even country, depending on the nature of the question."
            },
            {
                "name": "The Star",
                "number": "17",
                "arcana": "Major Arcana",
                "suit": null,
                "img": "tarot-json-master/cards/m17.jpg",
                "deck": "Rider Waite tarot",
                "description": "Star represents hope, a bright future, joy, optimism, guidance, having answers to your questions, being and feeling the connection to the divine, serenity and inspiration. The Star shines so brightly that when it shows up in a reading it tells you that you are being the light in someone’s life."
            },
            {
                "name": "The Moon",
                "number": "18",
                "arcana": "Major Arcana",
                "suit": null,
                "img": "tarot-json-master/cards/m18.jpg",
                "deck": "Rider Waite tarot",
                "description": "Moon represents illusions, intuition, fantasies, fears and anxiety. When the Moon appears things might not be quite as they seem. Your insecurities might be running high or you find yourself on the receiving end of other people’s insecurities."
            },
            {
                "name": "The Sun",
                "number": "19",
                "arcana": "Major Arcana",
                "suit": null,
                "img": "tarot-json-master/cards/m19.jpg",
                "deck": "Rider Waite tarot",
                "description": "Sun represents success, joy, sunshine, day, warmth and happiness. The Sun shows up when life is sunny and you are enjoying your time with the people you love. Life is simple rather than complicated. Relationships are blossoming and you are feeling loved."
            },
            {
                "name": "Judgement",
                "number": "20",
                "arcana": "Major Arcana",
                "suit": null,
                "img": "tarot-json-master/cards/m20.jpg",
                "deck": "Rider Waite tarot",
                "description": "Judgement represents taking responsibility for your actions and your life, being a good judge of character, seeing the truth and knowing what you want. The Judgement card often shows up when you need to step up and be a leader, speaking the truth and being more assertive."
            },
            {
                "name": "The World",
                "number": "21",
                "arcana": "Major Arcana",
                "suit": null,
                "img": "tarot-json-master/cards/m21.jpg",
                "deck": "Rider Waite tarot",
                "description": "World is the final Major Arcana card and represents fulfilment and successful completion of a cycle. You know your place in the world, and your life lessons have made you smart and accomplished. The World shows up when the world is ready for you and want what you have to offer."
            },
            {
                "name": "Ace of Cups",
                "number": "1",
                "arcana": "Minor Arcana",
                "suit": "Cups",
                "img": "tarot-json-master/cards/c01.jpg",
                "deck": "Rider Waite tarot",
                "description":
                "Ace of cups is the card for new love, compassion, joy and creativity. If this card shows up with Ace of Pentacles it often means moving in together in a relationship."
            },
            {
                "name": "Two of Cups",
                "number": "2",
                "arcana": "Minor Arcana",
                "suit": "Cups",
                "img": "tarot-json-master/cards/c02.jpg",
                "deck": "Rider Waite tarot",
                "description":
                "Two of cups is the card for being in love and being in a close relationship, There is real intimacy in the relationship, and you know and understand each other on a deep level."
            },
            {
                "name": "Three of Cups",
                "number": "3",
                "arcana": "Minor Arcana",
                "suit": "Cups",
                "img": "tarot-json-master/cards/c03.jpg",
                "deck": "Rider Waite tarot",
                "description":
                "Three of cups is the card for celebration, going out with friends, having a good time and being part of a community. This card often shows up when someone is getting engaged or married."
            },
            {
                "name": "Four of Cups",
                "number": "4",
                "arcana": "Minor Arcana",
                "suit": "Cups",
                "img": "tarot-json-master/cards/c04.jpg",
                "deck": "Rider Waite tarot",
                "description":
                "Four of cups is the card for contemplation. It often shows up when the querent is dissatisfied about something and doesn’t fully notice what they are being offered."
            },
            {
                "name": "Five of Cups",
                "number": "5",
                "arcana": "Minor Arcana",
                "suit": "Cups",
                "img": "tarot-json-master/cards/c05.jpg",
                "deck": "Rider Waite tarot",
                "description":
                "Five of cups is the card for regrets and disappointment, especially in love. A relationship might not have turned out the way you would have liked it to."
            },
            {
                "name": "Six of Cups",
                "number": "6",
                "arcana": "Minor Arcana",
                "suit": "Cups",
                "img": "tarot-json-master/cards/c06.jpg",
                "deck": "Rider Waite tarot",
                "description":
                "Six of cups is the card for sensuality and pleasure, memories, innocence, nostalgia and childhood. Sometimes this card shows up when someone from the past is on their way back into your life again."
            },
            {
                "name": "Seven of Cups",
                "number": "7",
                "arcana": "Minor Arcana",
                "suit": "Cups",
                "img": "tarot-json-master/cards/c07.jpg",
                "deck": "Rider Waite tarot",
                "description":
                "Seven of cups is the card for day dreaming, illusions, wishful thinking, and fantasies. This card usually shows up when you have plenty of choices and need a vision to make them a reality."
            },
            {
                "name": "Eight of Cups",
                "number": "8",
                "arcana": "Minor Arcana",
                "suit": "Cups",
                "img": "tarot-json-master/cards/c08.jpg",
                "deck": "Rider Waite tarot",
                "description":
                "Eight of cups is the card for turning your back at something to go and follow your dream. The day-dreaming that happened in Seven of cups has materialized in a vision that the querent is going to pursuit."
            },
            {
                "name": "Nine of Cups",
                "number": "9",
                "arcana": "Minor Arcana",
                "suit": "Cups",
                "img": "tarot-json-master/cards/c09.jpg",
                "deck": "Rider Waite tarot",
                "description":
                "Nine of cups is the card for getting what you want and having a wish come true. This card speaks of abundance and satisfaction, and also about being proud of what you have achieved."
            },
            {
                "name": "Ten of Cups",
                "number": "10",
                "arcana": "Minor Arcana",
                "suit": "Cups",
                "img": "tarot-json-master/cards/c10.jpg",
                "deck": "Rider Waite tarot",
                "description":
                "Ten of cups is the card for total spiritual bliss experienced in your relationship, home and family life. This card is about being in alignment with your true nature and everything in your life is in harmony with your higher self and purpose on this planet."
            },
            {
                "name": "Page of Cups",
                "number": "11",
                "arcana": "Minor Arcana",
                "suit": "Cups",
                "img": "tarot-json-master/cards/c11.jpg",
                "deck": "Rider Waite tarot",
                "description":
                "Page of cups denotes a young person with gentle and sensitive nature. This is someone who lives in wonder and can be quite naive at times."
            },
            {
                "name": "Knight of Cups",
                "number": "12",
                "arcana": "Minor Arcana",
                "suit": "Cups",
                "img": "tarot-json-master/cards/c12.jpg",
                "deck": "Rider Waite tarot",
                "description":
                "Knight of cups denotes a person on a quest to declare his love. This is your knight in shining armor. He is a singer, poet, and writer. He paints and creates wherever he goes. He is artistic and incredibly lovable."
            },
            {
                "name": "Queen of Cups",
                "number": "13",
                "arcana": "Minor Arcana",
                "suit": "Cups",
                "img": "tarot-json-master/cards/c13.jpg",
                "deck": "Rider Waite tarot",
                "description":
                "Queen of cups denotes a woman who is highly intuitive and sensitive. She is in touch with her emotions, her subconscious and the universe. She is compassionate and cares deeply about her life and those in it."
            },
            {
                "name": "King of Cups",
                "number": "14",
                "arcana": "Minor Arcana",
                "suit": "Cups",
                "img": "tarot-json-master/cards/c14.jpg",
                "deck": "Rider Waite tarot",
                "description":
                "King of cups denotes a warm, honest and generous man who is kind and fair. This is someone who is in control over his own emotions."
            },
            {
                "name": "Ace of Swords",
                "number": "1",
                "arcana": "Minor Arcana",
                "suit": "Swords",
                "img": "tarot-json-master/cards/s01.jpg",
                "deck": "Rider Waite tarot",
                "description":
                "Ace of swords is the card for a new thought and belief system. It is the potential of mental energy used to create clarity and often also justice."
            },
            {
                "name": "Two of Swords",
                "number": "2",
                "arcana": "Minor Arcana",
                "suit": "Swords",
                "img": "tarot-json-master/cards/s02.jpg",
                "deck": "Rider Waite tarot",
                "description":
                "Two of Swords is the card for compromise, passiveness, keeping the peace (as in not rocking the boat), stalemate, indecision and avoiding conflict."
            },
            {
                "name": "Three of Swords",
                "number": "3",
                "arcana": "Minor Arcana",
                "suit": "Swords",
                "img": "tarot-json-master/cards/s03.jpg",
                "deck": "Rider Waite tarot",
                "description":
                "Three of Swords denotes heartbreak. sorrow, pain and separation. Sometimes the separation is only temporary, other times it is final."
            },
            {
                "name": "Four of Swords",
                "number": "4",
                "arcana": "Minor Arcana",
                "suit": "Swords",
                "img": "tarot-json-master/cards/s04.jpg",
                "deck": "Rider Waite tarot",
                "description":
                "Four of Swords is about rest and rejuvenation, getting enough sleep and taking time out to meditate."
            },
            {
                "name": "Five of Swords",
                "number": "5",
                "arcana": "Minor Arcana",
                "suit": "Swords",
                "img": "tarot-json-master/cards/s05.jpg",
                "deck": "Rider Waite tarot",
                "description":
                "Five of Swords is the card for defeat and betrayal, conflict and unhealthy competition. Words will be hurtful, lies will be told and your weaknesses used against you."
            },
            {
                "name": "Six of Swords",
                "number": "6",
                "arcana": "Minor Arcana",
                "suit": "Swords",
                "img": "tarot-json-master/cards/s06.jpg",
                "deck": "Rider Waite tarot",
                "description":
                "Six of Swords is about crossing the troubled sea and entering into calmer water. This is the card for finding solutions and implementing them, often bringing other people with you in the process, ie, your family, friends, and colleagues."
            },
            {
                "name": "Seven of Swords",
                "number": "7",
                "arcana": "Minor Arcana",
                "suit": "Swords",
                "img": "tarot-json-master/cards/s07.jpg",
                "deck": "Rider Waite tarot",
                "description":
                "Seven of Swords denotes someone is moving forward in less than honourable ways. There is often dishonesty connected with this card, and trying to get away with something or trying to get out of something by lying."
            },
            {
                "name": "Eight of Swords",
                "number": "8",
                "arcana": "Minor Arcana",
                "suit": "Swords",
                "img": "tarot-json-master/cards/s08.jpg",
                "deck": "Rider Waite tarot",
                "description":
                "Eight of Swords is the card of being stuck and unable to move on due to confusion and not knowing what is going on. Often people draw this card when their own gut feeling is being overruled by other people."
            },
            {
                "name": "Nine of Swords",
                "number": "9",
                "arcana": "Minor Arcana",
                "suit": "Swords",
                "img": "tarot-json-master/cards/s09.jpg",
                "deck": "Rider Waite tarot",
                "description":
                "Nine of Swords denotes worry and anxiety, sleeplessness and being overwhelmed by negative emotions such as guilt and regrets."
            },
            {
                "name": "Ten of Swords",
                "number": "10",
                "arcana": "Minor Arcana",
                "suit": "Swords",
                "img": "tarot-json-master/cards/s10.jpg",
                "deck": "Rider Waite tarot",
                "description":
                "Ten of Swords is the card for endings and loss, backstabbing and lack of support. Sometimes this card denotes hitting rock bottom. It has the mentality of ‘when it rains it pours’, and the querent might be feeling there is no end of the suffering."
            },
            {
                "name": "Page of Swords",
                "number": "11",
                "arcana": "Minor Arcana",
                "suit": "Swords",
                "img": "tarot-json-master/cards/s11.jpg",
                "deck": "Rider Waite tarot",
                "description":
                "Page of Swords denotes a young and mentally very active and clever person. This is someone who can concentrate over long periods of time and who learns new skills easily, especially mental skills."
            },
            {
                "name": "Knight of Swords",
                "number": "12",
                "arcana": "Minor Arcana",
                "suit": "Swords",
                "img": "tarot-json-master/cards/s12.jpg",
                "deck": "Rider Waite tarot",
                "description":
                "Knight of Swords denotes a communicative, strong-minded and at times an opinionated person who is very action oriented and thrive on change. This is someone with a competitive streak and doesn’t like to let go of his/hers position in an argument."
            },
            {
                "name": "Queen of Swords",
                "number": "13",
                "arcana": "Minor Arcana",
                "suit": "Swords",
                "img": "tarot-json-master/cards/s13.jpg",
                "deck": "Rider Waite tarot",
                "description":
                "Queen of Swords denotes a woman who is cold, professional and smart. She is witty and funny in an intelligent way (no toilet humour). She often represents single women who have been hurt in love, and is bitter and hurt, but a master at covering it up."
            },
            {
                "name": "King of Swords",
                "number": "14",
                "arcana": "Minor Arcana",
                "suit": "Swords",
                "img": "tarot-json-master/cards/s14.jpg",
                "deck": "Rider Waite tarot",
                "description":
                "King of Swords denotes a professional man who is at the top of his game. This is someone who is an expert in his field and would have had to study to acquire this knowledge."
            },
            {
                "name": "Ace of Wands",
                "number": "1",
                "arcana": "Minor Arcana",
                "suit": "Wands",
                "img": "tarot-json-master/cards/w01.jpg",
                "deck": "Rider Waite tarot",
                "description":
                "Ace of wands speaks of new beginnings. Be bold and start something new. Follow your inspiration. Ace of Wands speaks of births of all kinds; the birth of enterprises and job opportunities, and also the birth of a baby."
            },
            {
                "name": "Two of Wands",
                "number": "2",
                "arcana": "Minor Arcana",
                "suit": "Wands",
                "img": "tarot-json-master/cards/w02.jpg",
                "deck": "Rider Waite tarot",
                "description":
                "Two of Wands is about manifesting using the will and strength of your mind. You might have to weigh up your options before deciding on the one that is best for you."
            },
            {
                "name": "Three of Wands",
                "number": "3",
                "arcana": "Minor Arcana",
                "suit": "Wands",
                "img": "tarot-json-master/cards/w03.jpg",
                "deck": "Rider Waite tarot",
                "description":
                "Three of Wands is the card for writers, and writing jobs and freelancers. It is also the card that follows the manifesting the querent did in Two of Wand, and the querent has now lived a new and exciting opportunity or dream."
            },
            {
                "name": "Four of Wands",
                "number": "4",
                "arcana": "Minor Arcana",
                "suit": "Wands",
                "img": "tarot-json-master/cards/w04.jpg",
                "deck": "Rider Waite tarot",
                "description":
                "Four of Wands is the card for harmony and developing on a larger scale, often expanding your living situation, and also being stronger connected to a community."
            },
            {
                "name": "Five of Wands",
                "number": "5",
                "arcana": "Minor Arcana",
                "suit": "Wands",
                "img": "tarot-json-master/cards/w05.jpg",
                "deck": "Rider Waite tarot",
                "description":
                "Five of Wands is about standing up for what is important to you, even if it means meeting some opposition."
            },
            {
                "name": "Six of Wands",
                "number": "6",
                "arcana": "Minor Arcana",
                "suit": "Wands",
                "img": "tarot-json-master/cards/w06.jpg",
                "deck": "Rider Waite tarot",
                "description":
                "Six of Wands is the card for popularity, progress, victory and success, self-confidence and getting what you want."
            },
            {
                "name": "Seven of Wands",
                "number": "7",
                "arcana": "Minor Arcana",
                "suit": "Wands",
                "img": "tarot-json-master/cards/w07.jpg",
                "deck": "Rider Waite tarot",
                "description":
                "Seven of Wands denotes being defensive and putting up barriers and boundaries. You are protecting your point of view and your position."
            },
            {
                "name": "Eight of Wands",
                "number": "8",
                "arcana": "Minor Arcana",
                "suit": "Wands",
                "img": "tarot-json-master/cards/w08.jpg",
                "deck": "Rider Waite tarot",
                "description":
                "Eight of Wands speaks of swift action and progress. It often shows up when there is a visitor coming, or when the querent is visiting someone."
            },
            {
                "name": "Nine of Wands",
                "number": "9",
                "arcana": "Minor Arcana",
                "suit": "Wands",
                "img": "tarot-json-master/cards/w09.jpg",
                "deck": "Rider Waite tarot",
                "description":
                "Nine of Wands is the card for strength, courage, resilience and endurance. Never give up and never surrender."
            },
            {
                "name": "Ten of Wands",
                "number": "10",
                "arcana": "Minor Arcana",
                "suit": "Wands",
                "img": "tarot-json-master/cards/w10.jpg",
                "deck": "Rider Waite tarot",
                "description":
                "Ten of Wands is the card for hard work and taking on more responsibility."
            },
            {
                "name": "Page of Wands",
                "number": "11",
                "arcana": "Minor Arcana",
                "suit": "Wands",
                "img": "tarot-json-master/cards/w11.jpg",
                "deck": "Rider Waite tarot",
                "description":
                "Page of Wands denotes an enthusiastic young person who is eager to explore and gain life experience."
            },
            {
                "name": "Knight of Wands",
                "number": "12",
                "arcana": "Minor Arcana",
                "suit": "Wands",
                "img": "tarot-json-master/cards/w12.jpg",
                "deck": "Rider Waite tarot",
                "description":
                "Knight of Wands denotes a person who is travelling through life at a high-speed, living life in the fast lane. This is someone who will be the life of the party."
            },
            {
                "name": "Queen of Wands",
                "number": "13",
                "arcana": "Minor Arcana",
                "suit": "Wands",
                "img": "tarot-json-master/cards/w13.jpg",
                "deck": "Rider Waite tarot",
                "description":
                "Queen of Wands denotes a warm, kind and passionate woman. She is goal oriented and determined. She is also a metaphysic who can use her mind both to create harmony and havoc."
            },
            {
                "name": "King of Wands",
                "number": "14",
                "arcana": "Minor Arcana",
                "suit": "Wands",
                "img": "tarot-json-master/cards/w14.jpg",
                "deck": "Rider Waite tarot",
                "description":
                "King of Wands denotes a married man who is a natural and charismatic leader. He has entrepreneurial skills and loves to run a new and exciting project."
            },
            {
                "name": "Ace of Pentacles",
                "number": "1",
                "arcana": "Minor Arcana",
                "suit": "Pentacles",
                "img": "tarot-json-master/cards/p01.jpg",
                "deck": "Rider Waite tarot",
                "description":
                "Ace of Pentacles symbolises a new beginning in your financial situation and an opportunity to deepen your security."
            },
            {
                "name": "Two of Pentacles",
                "number": "2",
                "arcana": "Minor Arcana",
                "suit": "Pentacles",
                "img": "tarot-json-master/cards/p02.jpg",
                "deck": "Rider Waite tarot",
                "description":
                "Two of Pentacles symbolises juggling with finances. You might have income from more than one source. Two of Pentacles also indicates investing money into different projects, or bartering."
            },
            {
                "name": "Three of Pentacles",
                "number": "3",
                "arcana": "Minor Arcana",
                "suit": "Pentacles",
                "img": "tarot-json-master/cards/p03.jpg",
                "deck": "Rider Waite tarot",
                "description":
                "Three of Pentacles symbolises your work, especially where team work or listening to clients/customers are concerned. This is a positive card which indicates job satisfaction and taking pride in your work, but you must put in the effort to see results."
            },
            {
                "name": "Four of Pentacles",
                "number": "4",
                "arcana": "Minor Arcana",
                "suit": "Pentacles",
                "img": "tarot-json-master/cards/p04.jpg",
                "deck": "Rider Waite tarot",
                "description":
                "Four of Pentacles symbolises the need for security and recognition in your life, to have control over your possession and to keep abundance and money increasing. This card shows stubbornness in the situation or in the querent."
            },
            {
                "name": "Five of Pentacles",
                "number": "5",
                "arcana": "Minor Arcana",
                "suit": "Pentacles",
                "img": "tarot-json-master/cards/p05.jpg",
                "deck": "Rider Waite tarot",
                "description":
                "Five of Pentacles symbolises financial loss or hardship. It can also mean you are in a place where you feel there is no security and your health might be suffering."
            },
            {
                "name": "Six of Pentacles",
                "number": "6",
                "arcana": "Minor Arcana",
                "suit": "Pentacles",
                "img": "tarot-json-master/cards/p06.jpg",
                "deck": "Rider Waite tarot",
                "description":
                "Six of Pentacles symbolises generosity towards those who has less than you. It can also mean receiving generosity from others."
            },
            {
                "name": "Seven of Pentacles",
                "number": "7",
                "arcana": "Minor Arcana",
                "suit": "Pentacles",
                "img": "tarot-json-master/cards/p07.jpg",
                "deck": "Rider Waite tarot",
                "description":
                "Seven of Pentacles symbolises a vision that will pay off in the future. You are planting the seeds so that you will be able to harvest a more secure and abundant future for yourself."
            },
            {
                "name": "Eight of Pentacles",
                "number": "8",
                "arcana": "Minor Arcana",
                "suit": "Pentacles",
                "img": "tarot-json-master/cards/p08.jpg",
                "deck": "Rider Waite tarot",
                "description":
                "Eight of Pentacles symbolise craftsmanship in regards to work. It can also mean doing an apprenticeship and/or learning a new skill."
            },
            {
                "name": "Nine of Pentacles",
                "number": "9",
                "arcana": "Minor Arcana",
                "suit": "Pentacles",
                "img": "tarot-json-master/cards/p09.jpg",
                "deck": "Rider Waite tarot",
                "description":
                "Nine of Pentacles symbolises luxury, financial security and being on a lavish holiday."
            },
            {
                "name": "Ten of Pentacles",
                "number": "10",
                "arcana": "Minor Arcana",
                "suit": "Pentacles",
                "img": "tarot-json-master/cards/p10.jpg",
                "deck": "Rider Waite tarot",
                "description":
                "Ten of Pentacles symbolises the type of wealth you get when you inherit something, being it your own retirement money, hand me downs, or possessions from someone who has passes away."
            },
            {
                "name": "Page of Pentacles",
                "number": "11",
                "arcana": "Minor Arcana",
                "suit": "Pentacles",
                "img": "tarot-json-master/cards/p11.jpg",
                "deck": "Rider Waite tarot",
                "description":
                "Page of Pentacles indicates reinventing yourself in some way. It often denotes an opportunity to start something new, whether it is a creative venture, studying, business or a new job offer. Page of pentacles is not yet an expert in the field of choice but has a clear goal and dream to achieve."
            },
            {
                "name": "Knight of Pentacles",
                "number": "12",
                "arcana": "Minor Arcana",
                "suit": "Pentacles",
                "img": 'tarot-json-master/cards/p12.jpg',
                "deck": "Rider Waite tarot",
                "description":
                "Knight of Pentacles denotes being of service and doing the actual work (in contrast to Page of Pentacles who enjoys daydreaming about the idea rather than actual living it). Knight of Pentacles is comfortable with routine and is efficient and conservative."
            },
            {
                "name": "Queen of Pentacles",
                "number": "13",
                "arcana": "Minor Arcana",
                "suit": "Pentacles",
                "img": 'tarot-json-master/cards/p13.jpg',
                "deck": "Rider Waite tarot",
                "description":
                "Queen of Pentacles is someone with a down to earth and practical approach to life and situations. It is important to have work/home balance, in fact if you could work from home you probably would. This card takes enjoyment in material pleasures and success."
            },
            {
                "name": "King of Pentacles",
                "number": "14",
                "arcana": "Minor Arcana",
                "suit": "Pentacles",
                "img": `tarot-json-master/cards/p14.jpg`,
                "deck": "Rider Waite tarot",
                "description":
                "King of Pentacles symbolises a successful businessman or a person in a manager position. This is a stable and authoritative character, who is hard-working and dependable."
            },
            ///burnt woodland tarot///
            {
                "name": "The Fool",
                "number": "0",
                "arcana": "Major Arcana",
                "suit": null,
                "img": "tarot-json-master/cards/BurntWonderlandTarot/m00.jpg",
                "deck": "Burnt Wonderland Tarot",
                "description":
                "Fool represents new beginnings, having faith in the future, being inexperienced, not knowing what to expect, having beginners luck, improvising, believing that the Universe provides, having no strings attached, being carefree."
            },
            {
                "name": "The Magician",
                "number": "1",
                "arcana": "Major Arcana",
                "suit": null,
                "img": "tarot-json-master/cards/BurntWonderlandTarot/m01.jpg",
                "deck": "Burnt Wonderland Tarot",
                "description":
                "Magician represents your ability to communicate clearly, to ‘sell’ yourself and to be innovative. The Magician has all the tools and resources available to manifest his desired outcome, so it is a good card to get if you want to create."
            },
            {
                "name": "The High Priestess",
                "number": "2",
                "arcana": "Major Arcana",
                "suit": null,
                "img": "tarot-json-master/cards/BurntWonderlandTarot/m02.jpg",
                "deck": "Burnt Wonderland Tarot",
                "description":
                "High Priestess represents secrets, mystery, intuition, wisdom, making the impossible become possible, and magic."
            },
            {
                "name": "The Empress",
                "number": "3",
                "arcana": "Major Arcana",
                "suit": null,
                "img": "tarot-json-master/cards/BurntWonderlandTarot/m03.jpg",
                "deck": "Burnt Wonderland Tarot",
                "description":
                "Empress represents feminine power, a nurturer and a family oriented person, our mother or a mother figure, abundance, femininity, fertility and the love of the home and family."
            },
            {
                "name": "The Emperor",
                "number": "4",
                "arcana": "Major Arcana",
                "suit": null,
                "img": "tarot-json-master/cards/BurntWonderlandTarot/m04.jpg",
                "deck": "Burnt Wonderland Tarot",
                "description":
                "Emperor represents masculine energy, the ruler, the head of the household, head of a company, organisation and communities. The Emperor is an authority figure that creates a solid foundation to build and create on."
            },
            {
                "name": "The Hierophant",
                "number": "5",
                "arcana": "Major Arcana",
                "suit": null,
                "img": "tarot-json-master/cards/BurntWonderlandTarot/m05.jpg",
                "deck": "Burnt Wonderland Tarot",
                "description":
                "Hierophant represents group consciousness, religion, your belief system, ceremony, traditions, kindness, charity, giving guidance in the form of spiritual counselling."
            },
            {
                "name": "The Lovers",
                "number": "6",
                "arcana": "Major Arcana",
                "suit": null,
                "img": "tarot-json-master/cards/BurntWonderlandTarot/m06.jpg",
                "deck": "Burnt Wonderland Tarot",
                "description":
                "Lovers represents love and relationship, soul mates, physical attractions, choices to be made, The Lovers represents doing the things that make us feel whole, being with the people who make us feel whole."
            },
            {
                "name": "The Chariot",
                "number": "7",
                "arcana": "Major Arcana",
                "suit": null,
                "img": "tarot-json-master/cards/BurntWonderlandTarot/m07.jpg",
                "deck": "Burnt Wonderland Tarot",
                "description":
                "Chariot represents your willpower and determination. It represents victory. The Chariot gives you the green light to charge ahead and take control in your life or an area of your life that needs your attention."
            },
            {
                "name": "Strength",
                "number": "8",
                "arcana": "Major Arcana",
                "suit": null,
                "img": "tarot-json-master/cards/BurntWonderlandTarot/m08.jpg",
                "deck": "Burnt Wonderland Tarot",
                "description":
                "Strength represents our courage, passions, strength, self-confidence, patience and compassion. Strength reminds us to follow our passions, to take the time to do the things that make us tick, that makes us strong within ourselves and which builds confidence and self-worth."
            },
            {
                "name": "The Hermit",
                "number": "9",
                "arcana": "Major Arcana",
                "suit": null,
                "img": "tarot-json-master/cards/BurntWonderlandTarot/m09.jpg",
                "deck": "Burnt Wonderland Tarot",
                "description":
                "Hermit represents spending time alone, being a lone wolf, soul-searching, seeking spiritual guidance, introspection."
            },
            {
                "name": "Wheel of Fortune",
                "number": "10",
                "arcana": "Major Arcana",
                "suit": null,
                "img": "tarot-json-master/cards/BurntWonderlandTarot/m10.jpg",
                "deck": "Burnt Wonderland Tarot",
                "description":
                "Wheel of Fortune is the Big destiny card in the tarot deck. What is meant to be is meant to be. In the tarot when the Wheel of Fortune turns up, it means that the events and people in your life are in your life due to it being pre-decided by destiny."
            },
            {
                "name": "Justice",
                "number": "11",
                "arcana": "Major Arcana",
                "suit": null,
                "img": "tarot-json-master/cards/BurntWonderlandTarot/m11.jpg",
                "deck": "Burnt Wonderland Tarot",
                "description":
                "Justice represents all kinds of legal matters, the spiritual laws of truth and cause and effect. When the Justice card shows up it reminds us to be lawful and fair to achieve the best result."
            },
            {
                "name": "The Hanged Man",
                "number": "12",
                "arcana": "Major Arcana",
                "suit": null,
                "img": "tarot-json-master/cards/BurntWonderlandTarot/m12.jpg",
                "deck": "Burnt Wonderland Tarot",
                "description":
                "Hanged Man represents being temporarily suspended. Life is on hold, but it serves a purpose."
            },
            {
                "name": "Death",
                "number": "13",
                "arcana": "Major Arcana",
                "suit": null,
                "img": "tarot-json-master/cards/BurntWonderlandTarot/m13.jpg",
                "deck": "Burnt Wonderland Tarot",
                "description":
                "Death represents transformation, endings and new beginnings. When the Death card shows up it tells you that things will not be the same again. A transformation is taking place, you are growing and changing with the circumstances you find yourself in."
            },
            {
                "name": "Temperance",
                "number": "14",
                "arcana": "Major Arcana",
                "suit": null,
                "img": "tarot-json-master/cards/BurntWonderlandTarot/m14.jpg",
                "deck": "Burnt Wonderland Tarot",
                "description":
                "Temperance represents balanced interaction between the elements to create something new and fresh. Temperance includes all the elements in such a way that it brings out the best of each substance. When the Temperance card shows up in your life there is great balance and strength between the different areas and people in your life that are working together."
            },
            {
                "name": "The Devil",
                "number": "15",
                "arcana": "Major Arcana",
                "suit": null,
                "img": "tarot-json-master/cards/BurntWonderlandTarot/m15.jpg",
                "deck": "Burnt Wonderland Tarot",
                "description":
                "Devil represents the primal source of behaviour that shows itself in the form of our desires and earthly needs. It also represents our fears that causes addiction and compulsive behaviour."
            },
            {
                "name": "The Tower",
                "number": "16",
                "arcana": "Major Arcana",
                "suit": null,
                "img": "tarot-json-master/cards/BurntWonderlandTarot/m16.jpg",
                "deck": "Burnt Wonderland Tarot",
                "description":
                "Tower represent disaster, emotional ‘meltdowns’ and/or tantrums, anger issues, upheaval, sudden change that is caused by disruption and revelations that rock the foundation of the person, household, organisation or even country, depending on the nature of the question."
            },
            {
                "name": "The Star",
                "number": "17",
                "arcana": "Major Arcana",
                "suit": null,
                "img": "tarot-json-master/cards/BurntWonderlandTarot/m17.jpg",
                "deck": "Burnt Wonderland Tarot",
                "description":
                "Star represents hope, a bright future, joy, optimism, guidance, having answers to your questions, being and feeling the connection to the divine, serenity and inspiration. The Star shines so brightly that when it shows up in a reading it tells you that you are being the light in someone’s life."
            },
            {
                "name": "The Moon",
                "number": "18",
                "arcana": "Major Arcana",
                "suit": null,
                "img": "tarot-json-master/cards/BurntWonderlandTarot/m18.jpg",
                "deck": "Burnt Wonderland Tarot",
                "description":
                "Moon represents illusions, intuition, fantasies, fears and anxiety. When the Moon appears things might not be quite as they seem. Your insecurities might be running high or you find yourself on the receiving end of other people’s insecurities."
            },
            {
                "name": "The Sun",
                "number": "19",
                "arcana": "Major Arcana",
                "suit": null,
                "img": "tarot-json-master/cards/BurntWonderlandTarot/m19.jpg",
                "deck": "Burnt Wonderland Tarot",
                "description":
                "Sun represents success, joy, sunshine, day, warmth and happiness. The Sun shows up when life is sunny and you are enjoying your time with the people you love. Life is simple rather than complicated. Relationships are blossoming and you are feeling loved."
            },
            {
                "name": "Judgement",
                "number": "20",
                "arcana": "Major Arcana",
                "suit": null,
                "img": "tarot-json-master/cards/BurntWonderlandTarot/m20.jpg",
                "deck": "Burnt Wonderland Tarot",
                "description":
                "Judgement represents taking responsibility for your actions and your life, being a good judge of character, seeing the truth and knowing what you want. The Judgement card often shows up when you need to step up and be a leader, speaking the truth and being more assertive."
            },
            {
                "name": "The World",
                "number": "21",
                "arcana": "Major Arcana",
                "suit": null,
                "img": "tarot-json-master/cards/BurntWonderlandTarot/m21.jpg",
                "deck": "Burnt Wonderland Tarot",
                "description":
                "World is the final Major Arcana card and represents fulfilment and successful completion of a cycle. You know your place in the world, and your life lessons have made you smart and accomplished. The World shows up when the world is ready for you and want what you have to offer."
            },
            {
                "name": "Ace of Cups",
                "number": "1",
                "arcana": "Minor Arcana",
                "suit": "Cups",
                "img": "tarot-json-master/cards/BurntWonderlandTarot/n01.jpg",
                "deck": "Burnt Wonderland Tarot",
                "description":
                "Ace of cups is the card for new love, compassion, joy and creativity. If this card shows up with Ace of Pentacles it often means moving in together in a relationship."
            },
            {
                "name": "Two of Cups",
                "number": "2",
                "arcana": "Minor Arcana",
                "suit": "Cups",
                "img": "tarot-json-master/cards/BurntWonderlandTarot/n02.jpg",
                "deck": "Burnt Wonderland Tarot",
                "description":
                "Two of cups is the card for being in love and being in a close relationship, There is real intimacy in the relationship, and you know and understand each other on a deep level."
            },
            {
                "name": "Three of Cups",
                "number": "3",
                "arcana": "Minor Arcana",
                "suit": "Cups",
                "img": "tarot-json-master/cards/BurntWonderlandTarot/n03.jpg",
                "deck": "Burnt Wonderland Tarot",
                "description":
                "Three of cups is the card for celebration, going out with friends, having a good time and being part of a community. This card often shows up when someone is getting engaged or married."
            },
            {
                "name": "Four of Cups",
                "number": "4",
                "arcana": "Minor Arcana",
                "suit": "Cups",
                "img": "tarot-json-master/cards/BurntWonderlandTarot/n04.jpg",
                "deck": "Burnt Wonderland Tarot",
                "description":
                "Four of cups is the card for contemplation. It often shows up when the querent is dissatisfied about something and doesn’t fully notice what they are being offered."
            },
            {
                "name": "Five of Cups",
                "number": "5",
                "arcana": "Minor Arcana",
                "suit": "Cups",
                "img": "tarot-json-master/cards/BurntWonderlandTarot/n05.jpg",
                "deck": "Burnt Wonderland Tarot",
                "description":
                "Five of cups is the card for regrets and disappointment, especially in love. A relationship might not have turned out the way you would have liked it to."
            },
            {
                "name": "Six of Cups",
                "number": "6",
                "arcana": "Minor Arcana",
                "suit": "Cups",
                "img": "tarot-json-master/cards/BurntWonderlandTarot/n06.jpg",
                "deck": "Burnt Wonderland Tarot",
                "description":
                "Six of cups is the card for sensuality and pleasure, memories, innocence, nostalgia and childhood. Sometimes this card shows up when someone from the past is on their way back into your life again."
            },
            {
                "name": "Seven of Cups",
                "number": "7",
                "arcana": "Minor Arcana",
                "suit": "Cups",
                "img": "tarot-json-master/cards/BurntWonderlandTarot/n07.jpg",
                "deck": "Burnt Wonderland Tarot",
                "description":
                "Seven of cups is the card for day dreaming, illusions, wishful thinking, and fantasies. This card usually shows up when you have plenty of choices and need a vision to make them a reality."
            },
            {
                "name": "Eight of Cups",
                "number": "8",
                "arcana": "Minor Arcana",
                "suit": "Cups",
                "img": "tarot-json-master/cards/BurntWonderlandTarot/n08.jpg",
                "deck": "Burnt Wonderland Tarot",
                "description":
                "Eight of cups is the card for turning your back at something to go and follow your dream. The day-dreaming that happened in Seven of cups has materialized in a vision that the querent is going to pursuit."
            },
            {
                "name": "Nine of Cups",
                "number": "9",
                "arcana": "Minor Arcana",
                "suit": "Cups",
                "img": "tarot-json-master/cards/BurntWonderlandTarot/n09.jpg",
                "deck": "Burnt Wonderland Tarot",
                "description":
                "Nine of cups is the card for getting what you want and having a wish come true. This card speaks of abundance and satisfaction, and also about being proud of what you have achieved."
            },
            {
                "name": "Ten of Cups",
                "number": "10",
                "arcana": "Minor Arcana",
                "suit": "Cups",
                "img": "tarot-json-master/cards/BurntWonderlandTarot/n10.jpg",
                "deck": "Burnt Wonderland Tarot",
                "description":
                "Ten of cups is the card for total spiritual bliss experienced in your relationship, home and family life. This card is about being in alignment with your true nature and everything in your life is in harmony with your higher self and purpose on this planet."
            },
            {
                "name": "Page of Cups",
                "number": "11",
                "arcana": "Minor Arcana",
                "suit": "Cups",
                "img": "tarot-json-master/cards/BurntWonderlandTarot/n11.jpg",
                "deck": "Burnt Wonderland Tarot",
                "description":
                "Page of cups denotes a young person with gentle and sensitive nature. This is someone who lives in wonder and can be quite naive at times."
            },
            {
                "name": "Knight of Cups",
                "number": "12",
                "arcana": "Minor Arcana",
                "suit": "Cups",
                "img": "tarot-json-master/cards/BurntWonderlandTarot/n12.jpg",
                "deck": "Burnt Wonderland Tarot",
                "description":
                "Knight of cups denotes a person on a quest to declare his love. This is your knight in shining armor. He is a singer, poet, and writer. He paints and creates wherever he goes. He is artistic and incredibly lovable."
            },
            {
                "name": "Queen of Cups",
                "number": "13",
                "arcana": "Minor Arcana",
                "suit": "Cups",
                "img": "tarot-json-master/cards/BurntWonderlandTarot/n13.jpg",
                "deck": "Burnt Wonderland Tarot",
                "description":
                "Queen of cups denotes a woman who is highly intuitive and sensitive. She is in touch with her emotions, her subconscious and the universe. She is compassionate and cares deeply about her life and those in it."
            },
            {
                "name": "King of Cups",
                "number": "14",
                "arcana": "Minor Arcana",
                "suit": "Cups",
                "img": "tarot-json-master/cards/BurntWonderlandTarot/n14.jpg",
                "deck": "Burnt Wonderland Tarot",
                "description":
                "King of cups denotes a warm, honest and generous man who is kind and fair. This is someone who is in control over his own emotions."
            },
            {
                "name": "Ace of Swords",
                "number": "1",
                "arcana": "Minor Arcana",
                "suit": "Swords",
                "img": "tarot-json-master/cards/BurntWonderlandTarot/o01.jpg",
                "deck": "Burnt Wonderland Tarot",
                "description":
                "Ace of swords is the card for a new thought and belief system. It is the potential of mental energy used to create clarity and often also justice."
            },
            {
                "name": "Two of Swords",
                "number": "2",
                "arcana": "Minor Arcana",
                "suit": "Swords",
                "img": "tarot-json-master/cards/BurntWonderlandTarot/o02.jpg",
                "deck": "Burnt Wonderland Tarot",
                "description":
                "Two of Swords is the card for compromise, passiveness, keeping the peace (as in not rocking the boat), stalemate, indecision and avoiding conflict."
            },
            {
                "name": "Three of Swords",
                "number": "3",
                "arcana": "Minor Arcana",
                "suit": "Swords",
                "img": "tarot-json-master/cards/BurntWonderlandTarot/o03.jpg",
                "deck": "Burnt Wonderland Tarot",
                "description":
                "Three of Swords denotes heartbreak. sorrow, pain and separation. Sometimes the separation is only temporary, other times it is final."
            },
            {
                "name": "Four of Swords",
                "number": "4",
                "arcana": "Minor Arcana",
                "suit": "Swords",
                "img": "tarot-json-master/cards/BurntWonderlandTarot/o04.jpg",
                "deck": "Burnt Wonderland Tarot",
                "description":
                "Four of Swords is about rest and rejuvenation, getting enough sleep and taking time out to meditate."
            },
            {
                "name": "Five of Swords",
                "number": "5",
                "arcana": "Minor Arcana",
                "suit": "Swords",
                "img": "tarot-json-master/cards/BurntWonderlandTarot/o05.jpg",
                "deck": "Burnt Wonderland Tarot",
                "description":
                "Five of Swords is the card for defeat and betrayal, conflict and unhealthy competition. Words will be hurtful, lies will be told and your weaknesses used against you."
            },
            {
                "name": "Six of Swords",
                "number": "6",
                "arcana": "Minor Arcana",
                "suit": "Swords",
                "img": "tarot-json-master/cards/BurntWonderlandTarot/o06.jpg",
                "deck": "Burnt Wonderland Tarot",
                "description":
                "Six of Swords is about crossing the troubled sea and entering into calmer water. This is the card for finding solutions and implementing them, often bringing other people with you in the process, ie, your family, friends, and colleagues."
            },
            {
                "name": "Seven of Swords",
                "number": "7",
                "arcana": "Minor Arcana",
                "suit": "Swords",
                "img": "tarot-json-master/cards/BurntWonderlandTarot/o07.jpg",
                "deck": "Burnt Wonderland Tarot",
                "description":
                "Seven of Swords denotes someone is moving forward in less than honourable ways. There is often dishonesty connected with this card, and trying to get away with something or trying to get out of something by lying."
            },
            {
                "name": "Eight of Swords",
                "number": "8",
                "arcana": "Minor Arcana",
                "suit": "Swords",
                "img": "tarot-json-master/cards/BurntWonderlandTarot/o08.jpg",
                "deck": "Burnt Wonderland Tarot",
                "description":
                "Eight of Swords is the card of being stuck and unable to move on due to confusion and not knowing what is going on. Often people draw this card when their own gut feeling is being overruled by other people."
            },
            {
                "name": "Nine of Swords",
                "number": "9",
                "arcana": "Minor Arcana",
                "suit": "Swords",
                "img": "tarot-json-master/cards/BurntWonderlandTarot/o09.jpg",
                "deck": "Burnt Wonderland Tarot",
                "description":
                "Nine of Swords denotes worry and anxiety, sleeplessness and being overwhelmed by negative emotions such as guilt and regrets."
            },
            {
                "name": "Ten of Swords",
                "number": "10",
                "arcana": "Minor Arcana",
                "suit": "Swords",
                "img": "tarot-json-master/cards/BurntWonderlandTarot/o10.jpg",
                "deck": "Burnt Wonderland Tarot",
                "description":
                "Ten of Swords is the card for endings and loss, backstabbing and lack of support. Sometimes this card denotes hitting rock bottom. It has the mentality of ‘when it rains it pours’, and the querent might be feeling there is no end of the suffering."
            },
            {
                "name": "Page of Swords",
                "number": "11",
                "arcana": "Minor Arcana",
                "suit": "Swords",
                "img": "tarot-json-master/cards/BurntWonderlandTarot/o11.jpg",
                "deck": "Burnt Wonderland Tarot",
                "description":
                "Page of Swords denotes a young and mentally very active and clever person. This is someone who can concentrate over long periods of time and who learns new skills easily, especially mental skills."
            },
            {
                "name": "Knight of Swords",
                "number": "12",
                "arcana": "Minor Arcana",
                "suit": "Swords",
                "img": "tarot-json-master/cards/BurntWonderlandTarot/o12.jpg",
                "deck": "Burnt Wonderland Tarot",
                "description":
                "Knight of Swords denotes a communicative, strong-minded and at times an opinionated person who is very action oriented and thrive on change. This is someone with a competitive streak and doesn’t like to let go of his/hers position in an argument."
            },
            {
                "name": "Queen of Swords",
                "number": "13",
                "arcana": "Minor Arcana",
                "suit": "Swords",
                "img": "tarot-json-master/cards/BurntWonderlandTarot/o13.jpg",
                "deck": "Burnt Wonderland Tarot",
                "description":
                "Queen of Swords denotes a woman who is cold, professional and smart. She is witty and funny in an intelligent way (no toilet humour). She often represents single women who have been hurt in love, and is bitter and hurt, but a master at covering it up."
            },
            {
                "name": "King of Swords",
                "number": "14",
                "arcana": "Minor Arcana",
                "suit": "Swords",
                "img": "tarot-json-master/cards/BurntWonderlandTarot/o14.jpg",
                "deck": "Burnt Wonderland Tarot",
                "description":
                "King of Swords denotes a professional man who is at the top of his game. This is someone who is an expert in his field and would have had to study to acquire this knowledge."
            },
            {
                "name": "Ace of Wands",
                "number": "1",
                "arcana": "Minor Arcana",
                "suit": "Wands",
                "img": "tarot-json-master/cards/BurntWonderlandTarot/p01.jpg",
                "deck": "Burnt Wonderland Tarot",
                "description":
                "Ace of wands speaks of new beginnings. Be bold and start something new. Follow your inspiration. Ace of Wands speaks of births of all kinds; the birth of enterprises and job opportunities, and also the birth of a baby."
            },
            {
                "name": "Two of Wands",
                "number": "2",
                "arcana": "Minor Arcana",
                "suit": "Wands",
                "img": "tarot-json-master/cards/BurntWonderlandTarot/p02.jpg",
                "deck": "Burnt Wonderland Tarot",
                "description":
                "Two of Wands is about manifesting using the will and strength of your mind. You might have to weigh up your options before deciding on the one that is best for you."
            },
            {
                "name": "Three of Wands",
                "number": "3",
                "arcana": "Minor Arcana",
                "suit": "Wands",
                "img": "tarot-json-master/cards/BurntWonderlandTarot/p03.jpg",
                "deck": "Burnt Wonderland Tarot",
                "description":
                "Three of Wands is the card for writers, and writing jobs and freelancers. It is also the card that follows the manifesting the querent did in Two of Wand, and the querent has now lived a new and exciting opportunity or dream."
            },
            {
                "name": "Four of Wands",
                "number": "4",
                "arcana": "Minor Arcana",
                "suit": "Wands",
                "img": "tarot-json-master/cards/BurntWonderlandTarot/p04.jpg",
                "deck": "Burnt Wonderland Tarot",
                "description":
                "Four of Wands is the card for harmony and developing on a larger scale, often expanding your living situation, and also being stronger connected to a community."
            },
            {
                "name": "Five of Wands",
                "number": "5",
                "arcana": "Minor Arcana",
                "suit": "Wands",
                "img": "tarot-json-master/cards/BurntWonderlandTarot/p05.jpg",
                "deck": "Burnt Wonderland Tarot",
                "description":
                "Five of Wands is about standing up for what is important to you, even if it means meeting some opposition."
            },
            {
                "name": "Six of Wands",
                "number": "6",
                "arcana": "Minor Arcana",
                "suit": "Wands",
                "img": "tarot-json-master/cards/BurntWonderlandTarot/p06.jpg",
                "deck": "Burnt Wonderland Tarot",
                "description":
                "Six of Wands is the card for popularity, progress, victory and success, self-confidence and getting what you want."
            },
            {
                "name": "Seven of Wands",
                "number": "7",
                "arcana": "Minor Arcana",
                "suit": "Wands",
                "img": "tarot-json-master/cards/BurntWonderlandTarot/p07.jpg",
                "deck": "Burnt Wonderland Tarot",
                "description":
                "Seven of Wands denotes being defensive and putting up barriers and boundaries. You are protecting your point of view and your position."
            },
            {
                "name": "Eight of Wands",
                "number": "8",
                "arcana": "Minor Arcana",
                "suit": "Wands",
                "img": "tarot-json-master/cards/BurntWonderlandTarot/p08.jpg",
                "deck": "Burnt Wonderland Tarot",
                "description":
                "Eight of Wands speaks of swift action and progress. It often shows up when there is a visitor coming, or when the querent is visiting someone."
            },
            {
                "name": "Nine of Wands",
                "number": "9",
                "arcana": "Minor Arcana",
                "suit": "Wands",
                "img": "tarot-json-master/cards/BurntWonderlandTarot/p09.jpg",
                "deck": "Burnt Wonderland Tarot",
                "description":
                "Nine of Wands is the card for strength, courage, resilience and endurance. Never give up and never surrender."
            },
            {
                "name": "Ten of Wands",
                "number": "10",
                "arcana": "Minor Arcana",
                "suit": "Wands",
                "img": "tarot-json-master/cards/BurntWonderlandTarot/p10.jpg",
                "deck": "Burnt Wonderland Tarot",
                "description":
                "Ten of Wands is the card for hard work and taking on more responsibility."
            },
            {
                "name": "Page of Wands",
                "number": "11",
                "arcana": "Minor Arcana",
                "suit": "Wands",
                "img": "tarot-json-master/cards/BurntWonderlandTarot/p11.jpg",
                "deck": "Burnt Wonderland Tarot",
                "description":
                "Page of Wands denotes an enthusiastic young person who is eager to explore and gain life experience."
            },
            {
                "name": "Knight of Wands",
                "number": "12",
                "arcana": "Minor Arcana",
                "suit": "Wands",
                "img": "tarot-json-master/cards/BurntWonderlandTarot/p12.jpg",
                "deck": "Burnt Wonderland Tarot",
                "description":
                "Knight of Wands denotes a person who is travelling through life at a high-speed, living life in the fast lane. This is someone who will be the life of the party."
            },
            {
                "name": "Queen of Wands",
                "number": "13",
                "arcana": "Minor Arcana",
                "suit": "Wands",
                "img": "tarot-json-master/cards/BurntWonderlandTarot/p13.jpg",
                "deck": "Burnt Wonderland Tarot",
                "description":
                "Queen of Wands denotes a warm, kind and passionate woman. She is goal oriented and determined. She is also a metaphysic who can use her mind both to create harmony and havoc."
            },
            {
                "name": "King of Wands",
                "number": "14",
                "arcana": "Minor Arcana",
                "suit": "Wands",
                "img": "tarot-json-master/cards/BurntWonderlandTarot/p14.jpg",
                "deck": "Burnt Wonderland Tarot",
                "description":
                "King of Wands denotes a married man who is a natural and charismatic leader. He has entrepreneurial skills and loves to run a new and exciting project."
            },
            {
                "name": "Ace of Pentacles",
                "number": "1",
                "arcana": "Minor Arcana",
                "suit": "Pentacles",
                "img": "tarot-json-master/cards/BurntWonderlandTarot/q01.jpg",
                "deck": "Burnt Wonderland Tarot",
                "description":
                "Ace of Pentacles symbolises a new beginning in your financial situation and an opportunity to deepen your security."
            },
            {
                "name": "Two of Pentacles",
                "number": "2",
                "arcana": "Minor Arcana",
                "suit": "Pentacles",
                "img": "tarot-json-master/cards/BurntWonderlandTarot/q02.jpg",
                "deck": "Burnt Wonderland Tarot",
                "description":
                "Two of Pentacles symbolises juggling with finances. You might have income from more than one source. Two of Pentacles also indicates investing money into different projects, or bartering."
            },
            {
                "name": "Three of Pentacles",
                "number": "3",
                "arcana": "Minor Arcana",
                "suit": "Pentacles",
                "img": "tarot-json-master/cards/BurntWonderlandTarot/q03.jpg",
                "deck": "Burnt Wonderland Tarot",
                "description":
                "Three of Pentacles symbolises your work, especially where team work or listening to clients/customers are concerned. This is a positive card which indicates job satisfaction and taking pride in your work, but you must put in the effort to see results."
            },
            {
                "name": "Four of Pentacles",
                "number": "4",
                "arcana": "Minor Arcana",
                "suit": "Pentacles",
                "img": "tarot-json-master/cards/BurntWonderlandTarot/q04.jpg",
                "deck": "Burnt Wonderland Tarot",
                "description":
                "Four of Pentacles symbolises the need for security and recognition in your life, to have control over your possession and to keep abundance and money increasing. This card shows stubbornness in the situation or in the querent."
            },
            {
                "name": "Five of Pentacles",
                "number": "5",
                "arcana": "Minor Arcana",
                "suit": "Pentacles",
                "img": "tarot-json-master/cards/BurntWonderlandTarot/q05.jpg",
                "deck": "Burnt Wonderland Tarot",
                "description":
                "Five of Pentacles symbolises financial loss or hardship. It can also mean you are in a place where you feel there is no security and your health might be suffering."
            },
            {
                "name": "Six of Pentacles",
                "number": "6",
                "arcana": "Minor Arcana",
                "suit": "Pentacles",
                "img": "tarot-json-master/cards/BurntWonderlandTarot/q06.jpg",
                "deck": "Burnt Wonderland Tarot",
                "description":
                "Six of Pentacles symbolises generosity towards those who has less than you. It can also mean receiving generosity from others."
            },
            {
                "name": "Seven of Pentacles",
                "number": "7",
                "arcana": "Minor Arcana",
                "suit": "Pentacles",
                "img": "tarot-json-master/cards/BurntWonderlandTarot/q07.jpg",
                "deck": "Burnt Wonderland Tarot",
                "description":
                "Seven of Pentacles symbolises a vision that will pay off in the future. You are planting the seeds so that you will be able to harvest a more secure and abundant future for yourself."
            },
            {
                "name": "Eight of Pentacles",
                "number": "8",
                "arcana": "Minor Arcana",
                "suit": "Pentacles",
                "img": "tarot-json-master/cards/BurntWonderlandTarot/q08.jpg",
                "deck": "Burnt Wonderland Tarot",
                "description":
                "Eight of Pentacles symbolise craftsmanship in regards to work. It can also mean doing an apprenticeship and/or learning a new skill."
            },
            {
                "name": "Nine of Pentacles",
                "number": "9",
                "arcana": "Minor Arcana",
                "suit": "Pentacles",
                "img": "tarot-json-master/cards/BurntWonderlandTarot/q09.jpg",
                "deck": "Burnt Wonderland Tarot",
                "description":
                "Nine of Pentacles symbolises luxury, financial security and being on a lavish holiday."
            },
            {
                "name": "Ten of Pentacles",
                "number": "10",
                "arcana": "Minor Arcana",
                "suit": "Pentacles",
                "img": "tarot-json-master/cards/BurntWonderlandTarot/q10.jpg",
                "deck": "Burnt Wonderland Tarot",
                "description":
                "Ten of Pentacles symbolises the type of wealth you get when you inherit something, being it your own retirement money, hand me downs, or possessions from someone who has passes away."
            },
            {
                "name": "Page of Pentacles",
                "number": "11",
                "arcana": "Minor Arcana",
                "suit": "Pentacles",
                "img": "tarot-json-master/cards/BurntWonderlandTarot/q11.jpg",
                "deck": "Burnt Wonderland Tarot",
                "description":
                "Page of Pentacles indicates reinventing yourself in some way. It often denotes an opportunity to start something new, whether it is a creative venture, studying, business or a new job offer. Page of pentacles is not yet an expert in the field of choice but has a clear goal and dream to achieve."
            },
            {
                "name": "Knight of Pentacles",
                "number": "12",
                "arcana": "Minor Arcana",
                "suit": "Pentacles",
                "img": 'tarot-json-master/cards/BurntWonderlandTarot/q12.jpg',
                "deck": "Burnt Wonderland Tarot",
                "description":
                "Knight of Pentacles denotes being of service and doing the actual work (in contrast to Page of Pentacles who enjoys daydreaming about the idea rather than actual living it). Knight of Pentacles is comfortable with routine and is efficient and conservative."
            },
            {
                "name": "Queen of Pentacles",
                "number": "13",
                "arcana": "Minor Arcana",
                "suit": "Pentacles",
                "img": 'tarot-json-master/cards/BurntWonderlandTarot/q13.jpg',
                "deck": "Burnt Wonderland Tarot",
                "description":
                "Queen of Pentacles is someone with a down to earth and practical approach to life and situations. It is important to have work/home balance, in fact if you could work from home you probably would. This card takes enjoyment in material pleasures and success."
            },
            {
                "name": "King of Pentacles",
                "number": "14",
                "arcana": "Minor Arcana",
                "suit": "Pentacles",
                "img": `tarot-json-master/cards/BurntWonderlandTarot/q14.jpg`,
                "deck": "Burnt Wonderland Tarot",
                "description":
                "King of Pentacles symbolises a successful businessman or a person in a manager position. This is a stable and authoritative character, who is hard-working and dependable."
            },
            ///pixel///
            {
                "name": "The Fool",
                "number": "0",
                "arcana": "Major Arcana",
                "suit": null,
                "img": "tarot-json-master/cards/Chee's Pixel Tarot/TarotCards2x/Major Arcana/major0_fool.png",
                "deck": "Chee's pixel Tarot",
                "description":
                "Fool represents new beginnings, having faith in the future, being inexperienced, not knowing what to expect, having beginners luck, improvising, believing that the Universe provides, having no strings attached, being carefree."
            },
            {
                "name": "The Magician",
                "number": "1",
                "arcana": "Major Arcana",
                "suit": null,
                "img": "tarot-json-master/cards/Chee's Pixel Tarot/TarotCards2x/Major Arcana/major1_magician.png",
                "deck": "Chee's pixel Tarot",
                "description":
                "Magician represents your ability to communicate clearly, to ‘sell’ yourself and to be innovative. The Magician has all the tools and resources available to manifest his desired outcome, so it is a good card to get if you want to create."
            },
            {
                "name": "The High Priestess",
                "number": "2",
                "arcana": "Major Arcana",
                "suit": null,
                "img": "tarot-json-master/cards/Chee's Pixel Tarot/TarotCards2x/Major Arcana/major2_preistess.png",
                "deck": "Chee's pixel Tarot",
                "description":
                "High Priestess represents secrets, mystery, intuition, wisdom, making the impossible become possible, and magic."
            },
            {
                "name": "The Empress",
                "number": "3",
                "arcana": "Major Arcana",
                "suit": null,
                "img": "tarot-json-master/cards/Chee's Pixel Tarot/TarotCards2x/Major Arcana/major3_empress.png",
                "deck": "Chee's pixel Tarot",
                "description":
                "Empress represents feminine power, a nurturer and a family oriented person, our mother or a mother figure, abundance, femininity, fertility and the love of the home and family."
            },
            {
                "name": "The Emperor",
                "number": "4",
                "arcana": "Major Arcana",
                "suit": null,
                "img": "tarot-json-master/cards/Chee's Pixel Tarot/TarotCards2x/Major Arcana/major4_emperor.png",
                "deck": "Chee's pixel Tarot",
                "description":
                "Emperor represents masculine energy, the ruler, the head of the household, head of a company, organisation and communities. The Emperor is an authority figure that creates a solid foundation to build and create on."
            },
            {
                "name": "The Hierophant",
                "number": "5",
                "arcana": "Major Arcana",
                "suit": null,
                "img": "tarot-json-master/cards/Chee's Pixel Tarot/TarotCards2x/Major Arcana/major5_hierophant.png",
                "deck": "Chee's pixel Tarot",
                "description":
                "Hierophant represents group consciousness, religion, your belief system, ceremony, traditions, kindness, charity, giving guidance in the form of spiritual counselling."
            },
            {
                "name": "The Lovers",
                "number": "6",
                "arcana": "Major Arcana",
                "suit": null,
                "img": "tarot-json-master/cards/Chee's Pixel Tarot/TarotCards2x/Major Arcana/major6_lovers.png",
                "deck": "Chee's pixel Tarot",
                "description":
                "Lovers represents love and relationship, soul mates, physical attractions, choices to be made, The Lovers represents doing the things that make us feel whole, being with the people who make us feel whole."
            },
            {
                "name": "The Chariot",
                "number": "7",
                "arcana": "Major Arcana",
                "suit": null,
                "img": "tarot-json-master/cards/Chee's Pixel Tarot/TarotCards2x/Major Arcana/major7_chariot.png",
                "deck": "Chee's pixel Tarot",
                "description":
                "Chariot represents your willpower and determination. It represents victory. The Chariot gives you the green light to charge ahead and take control in your life or an area of your life that needs your attention."
            },
            {
                "name": "Strength",
                "number": "8",
                "arcana": "Major Arcana",
                "suit": null,
                "img": "tarot-json-master/cards/Chee's Pixel Tarot/TarotCards2x/Major Arcana/major8_strenght.png",
                "deck": "Chee's pixel Tarot",
                "description":
                "Strength represents our courage, passions, strength, self-confidence, patience and compassion. Strength reminds us to follow our passions, to take the time to do the things that make us tick, that makes us strong within ourselves and which builds confidence and self-worth."
            },
            {
                "name": "The Hermit",
                "number": "9",
                "arcana": "Major Arcana",
                "suit": null,
                "img": "tarot-json-master/cards/Chee's Pixel Tarot/TarotCards2x/Major Arcana/major9_hermit.png",
                "deck": "Chee's pixel Tarot",
                "description":
                "Hermit represents spending time alone, being a lone wolf, soul-searching, seeking spiritual guidance, introspection."
            },
            {
                "name": "Wheel of Fortune",
                "number": "10",
                "arcana": "Major Arcana",
                "suit": null,
                "img": "tarot-json-master/cards/Chee's Pixel Tarot/TarotCards2x/Major Arcana/major10_wheel.png",
                "deck": "Chee's pixel Tarot",
                "description":
                "Wheel of Fortune is the Big destiny card in the tarot deck. What is meant to be is meant to be. In the tarot when the Wheel of Fortune turns up, it means that the events and people in your life are in your life due to it being pre-decided by destiny."
            },
            {
                "name": "Justice",
                "number": "11",
                "arcana": "Major Arcana",
                "suit": null,
                "img": "tarot-json-master/cards/Chee's Pixel Tarot/TarotCards2x/Major Arcana/major11_justice.png",
                "deck": "Chee's pixel Tarot",
                "description":
                "Justice represents all kinds of legal matters, the spiritual laws of truth and cause and effect. When the Justice card shows up it reminds us to be lawful and fair to achieve the best result."
            },
            {
                "name": "The Hanged Man",
                "number": "12",
                "arcana": "Major Arcana",
                "suit": null,
                "img": "tarot-json-master/cards/Chee's Pixel Tarot/TarotCards2x/Major Arcana/major12_hanged.png",
                "deck": "Chee's pixel Tarot",
                "description":
                "Hanged Man represents being temporarily suspended. Life is on hold, but it serves a purpose."
            },
            {
                "name": "Death",
                "number": "13",
                "arcana": "Major Arcana",
                "suit": null,
                "img": "tarot-json-master/cards/Chee's Pixel Tarot/TarotCards2x/Major Arcana/major13_death.png",
                "deck": "Chee's pixel Tarot",
                "description":
                "Death represents transformation, endings and new beginnings. When the Death card shows up it tells you that things will not be the same again. A transformation is taking place, you are growing and changing with the circumstances you find yourself in."
            },
            {
                "name": "Temperance",
                "number": "14",
                "arcana": "Major Arcana",
                "suit": null,
                "img": "tarot-json-master/cards/Chee's Pixel Tarot/TarotCards2x/Major Arcana/major14_temperance.png",
                "deck": "Chee's pixel Tarot",
                "description":
                "Temperance represents balanced interaction between the elements to create something new and fresh. Temperance includes all the elements in such a way that it brings out the best of each substance. When the Temperance card shows up in your life there is great balance and strength between the different areas and people in your life that are working together."
            },
            {
                "name": "The Devil",
                "number": "15",
                "arcana": "Major Arcana",
                "suit": null,
                "img": "tarot-json-master/cards/Chee's Pixel Tarot/TarotCards2x/Major Arcana/major15_devil.png",
                "deck": "Chee's pixel Tarot",
                "description":
                "Devil represents the primal source of behaviour that shows itself in the form of our desires and earthly needs. It also represents our fears that causes addiction and compulsive behaviour."
            },
            {
                "name": "The Tower",
                "number": "16",
                "arcana": "Major Arcana",
                "suit": null,
                "img": "tarot-json-master/cards/Chee's Pixel Tarot/TarotCards2x/Major Arcana/major16_tower.png",
                "deck": "Chee's pixel Tarot",
                "description":
                "Tower represent disaster, emotional ‘meltdowns’ and/or tantrums, anger issues, upheaval, sudden change that is caused by disruption and revelations that rock the foundation of the person, household, organisation or even country, depending on the nature of the question."
            },
            {
                "name": "The Star",
                "number": "17",
                "arcana": "Major Arcana",
                "suit": null,
                "img": "tarot-json-master/cards/Chee's Pixel Tarot/TarotCards2x/Major Arcana/major17_star.png",
                "deck": "Chee's pixel Tarot",
                "description":
                "Star represents hope, a bright future, joy, optimism, guidance, having answers to your questions, being and feeling the connection to the divine, serenity and inspiration. The Star shines so brightly that when it shows up in a reading it tells you that you are being the light in someone’s life."
            },
            {
                "name": "The Moon",
                "number": "18",
                "arcana": "Major Arcana",
                "suit": null,
                "img": "tarot-json-master/cards/Chee's Pixel Tarot/TarotCards2x/Major Arcana/major18_moon.png",
                "deck": "Chee's pixel Tarot",
                "description":
                "Moon represents illusions, intuition, fantasies, fears and anxiety. When the Moon appears things might not be quite as they seem. Your insecurities might be running high or you find yourself on the receiving end of other people’s insecurities."
            },
            {
                "name": "The Sun",
                "number": "19",
                "arcana": "Major Arcana",
                "suit": null,
                "img": "tarot-json-master/cards/Chee's Pixel Tarot/TarotCards2x/Major Arcana/major18_sun.png",
                "deck": "Chee's pixel Tarot",
                "description":
                "Sun represents success, joy, sunshine, day, warmth and happiness. The Sun shows up when life is sunny and you are enjoying your time with the people you love. Life is simple rather than complicated. Relationships are blossoming and you are feeling loved."
            },
            {
                "name": "Judgement",
                "number": "20",
                "arcana": "Major Arcana",
                "suit": null,
                "img": "tarot-json-master/cards/Chee's Pixel Tarot/TarotCards2x/Major Arcana/major20_judgement.png",
                "deck": "Chee's pixel Tarot",
                "description":
                "Judgement represents taking responsibility for your actions and your life, being a good judge of character, seeing the truth and knowing what you want. The Judgement card often shows up when you need to step up and be a leader, speaking the truth and being more assertive."
            },
            {
                "name": "The World",
                "number": "21",
                "arcana": "Major Arcana",
                "suit": null,
                "img": "tarot-json-master/cards/Chee's Pixel Tarot/TarotCards2x/Major Arcana/major21_world.png",
                "deck": "Chee's pixel Tarot",
                "description":
                "World is the final Major Arcana card and represents fulfilment and successful completion of a cycle. You know your place in the world, and your life lessons have made you smart and accomplished. The World shows up when the world is ready for you and want what you have to offer."
            },
            {
                "name": "Ace of Cups",
                "number": "1",
                "arcana": "Minor Arcana",
                "suit": "Cups",
                "img": "tarot-json-master/cards/Chee's Pixel Tarot/TarotCards2x/Cups/cups1.png",
                "deck": "Chee's pixel Tarot",
                "description":
                "Ace of cups is the card for new love, compassion, joy and creativity. If this card shows up with Ace of Pentacles it often means moving in together in a relationship."
            },
            {
                "name": "Two of Cups",
                "number": "2",
                "arcana": "Minor Arcana",
                "suit": "Cups",
                "img": "tarot-json-master/cards/Chee's Pixel Tarot/TarotCards2x/Cups/cups2.png",
                "deck": "Chee's pixel Tarot",
                "description":
                "Two of cups is the card for being in love and being in a close relationship, There is real intimacy in the relationship, and you know and understand each other on a deep level."
            },
            {
                "name": "Three of Cups",
                "number": "3",
                "arcana": "Minor Arcana",
                "suit": "Cups",
                "img": "tarot-json-master/cards/Chee's Pixel Tarot/TarotCards2x/Cups/cups3.png",
                "deck": "Chee's pixel Tarot",
                "description":
                "Three of cups is the card for celebration, going out with friends, having a good time and being part of a community. This card often shows up when someone is getting engaged or married."
            },
            {
                "name": "Four of Cups",
                "number": "4",
                "arcana": "Minor Arcana",
                "suit": "Cups",
                "img": "tarot-json-master/cards/Chee's Pixel Tarot/TarotCards2x/Cups/cups4.png",
                "deck": "Chee's pixel Tarot",
                "description":
                "Four of cups is the card for contemplation. It often shows up when the querent is dissatisfied about something and doesn’t fully notice what they are being offered."
            },
            {
                "name": "Five of Cups",
                "number": "5",
                "arcana": "Minor Arcana",
                "suit": "Cups",
                "img": "tarot-json-master/cards/Chee's Pixel Tarot/TarotCards2x/Cups/cups5.png",
                "deck": "Chee's pixel Tarot",
                "description":
                "Five of cups is the card for regrets and disappointment, especially in love. A relationship might not have turned out the way you would have liked it to."
            },
            {
                "name": "Six of Cups",
                "number": "6",
                "arcana": "Minor Arcana",
                "suit": "Cups",
                "img": "tarot-json-master/cards/Chee's Pixel Tarot/TarotCards2x/Cups/cups6.png",
                "deck": "Chee's pixel Tarot",
                "description":
                "Six of cups is the card for sensuality and pleasure, memories, innocence, nostalgia and childhood. Sometimes this card shows up when someone from the past is on their way back into your life again."
            },
            {
                "name": "Seven of Cups",
                "number": "7",
                "arcana": "Minor Arcana",
                "suit": "Cups",
                "img": "tarot-json-master/cards/Chee's Pixel Tarot/TarotCards2x/Cups/cups7.png",
                "deck": "Chee's pixel Tarot",
                "description":
                "Seven of cups is the card for day dreaming, illusions, wishful thinking, and fantasies. This card usually shows up when you have plenty of choices and need a vision to make them a reality."
            },
            {
                "name": "Eight of Cups",
                "number": "8",
                "arcana": "Minor Arcana",
                "suit": "Cups",
                "img": "tarot-json-master/cards/Chee's Pixel Tarot/TarotCards2x/Cups/cups8.png",
                "deck": "Chee's pixel Tarot",
                "description":
                "Eight of cups is the card for turning your back at something to go and follow your dream. The day-dreaming that happened in Seven of cups has materialized in a vision that the querent is going to pursuit."
            },
            {
                "name": "Nine of Cups",
                "number": "9",
                "arcana": "Minor Arcana",
                "suit": "Cups",
                "img": "tarot-json-master/cards/Chee's Pixel Tarot/TarotCards2x/Cups/cups9.png",
                "deck": "Chee's pixel Tarot",
                "description":
                "Nine of cups is the card for getting what you want and having a wish come true. This card speaks of abundance and satisfaction, and also about being proud of what you have achieved."
            },
            {
                "name": "Ten of Cups",
                "number": "10",
                "arcana": "Minor Arcana",
                "suit": "Cups",
                "img": "tarot-json-master/cards/Chee's Pixel Tarot/TarotCards2x/Cups/cups10.png",
                "deck": "Chee's pixel Tarot",
                "description":
                "Ten of cups is the card for total spiritual bliss experienced in your relationship, home and family life. This card is about being in alignment with your true nature and everything in your life is in harmony with your higher self and purpose on this planet."
            },
            {
                "name": "Page of Cups",
                "number": "11",
                "arcana": "Minor Arcana",
                "suit": "Cups",
                "img": "tarot-json-master/cards/Chee's Pixel Tarot/TarotCards2x/Cups/cupsP.png",
                "deck": "Chee's pixel Tarot",
                "description":
                "Page of cups denotes a young person with gentle and sensitive nature. This is someone who lives in wonder and can be quite naive at times."
            },
            {
                "name": "Knight of Cups",
                "number": "12",
                "arcana": "Minor Arcana",
                "suit": "Cups",
                "img": "tarot-json-master/cards/Chee's Pixel Tarot/TarotCards2x/Cups/cupsKn.png",
                "deck": "Chee's pixel Tarot",
                "description":
                "Knight of cups denotes a person on a quest to declare his love. This is your knight in shining armor. He is a singer, poet, and writer. He paints and creates wherever he goes. He is artistic and incredibly lovable."
            },
            {
                "name": "Queen of Cups",
                "number": "13",
                "arcana": "Minor Arcana",
                "suit": "Cups",
                "img": "tarot-json-master/cards/Chee's Pixel Tarot/TarotCards2x/Cups/cupsQ.png",
                "deck": "Chee's pixel Tarot",
                "description":
                "Queen of cups denotes a woman who is highly intuitive and sensitive. She is in touch with her emotions, her subconscious and the universe. She is compassionate and cares deeply about her life and those in it."
            },
            {
                "name": "King of Cups",
                "number": "14",
                "arcana": "Minor Arcana",
                "suit": "Cups",
                "img": "tarot-json-master/cards/Chee's Pixel Tarot/TarotCards2x/Cups/cupsK.png",
                "deck": "Chee's pixel Tarot",
                "description":
                "King of cups denotes a warm, honest and generous man who is kind and fair. This is someone who is in control over his own emotions."
            },
            {
                "name": "Ace of Swords",
                "number": "1",
                "arcana": "Minor Arcana",
                "suit": "Swords",
                "img": "tarot-json-master/cards/Chee's Pixel Tarot/TarotCards2x/Swords/swords1.png",
                "deck": "Chee's pixel Tarot",
                "description":
                "Ace of swords is the card for a new thought and belief system. It is the potential of mental energy used to create clarity and often also justice."
            },
            {
                "name": "Two of Swords",
                "number": "2",
                "arcana": "Minor Arcana",
                "suit": "Swords",
                "img": "tarot-json-master/cards/Chee's Pixel Tarot/TarotCards2x/Swords/swords2.png",
                "deck": "Chee's pixel Tarot",
                "description":
                "Two of Swords is the card for compromise, passiveness, keeping the peace (as in not rocking the boat), stalemate, indecision and avoiding conflict."
            },
            {
                "name": "Three of Swords",
                "number": "3",
                "arcana": "Minor Arcana",
                "suit": "Swords",
                "img": "tarot-json-master/cards/Chee's Pixel Tarot/TarotCards2x/Swords/swords3.png",
                "deck": "Chee's pixel Tarot",
                "description":
                "Three of Swords denotes heartbreak. sorrow, pain and separation. Sometimes the separation is only temporary, other times it is final."
            },
            {
                "name": "Four of Swords",
                "number": "4",
                "arcana": "Minor Arcana",
                "suit": "Swords",
                "img": "tarot-json-master/cards/Chee's Pixel Tarot/TarotCards2x/Swords/swords4.png",
                "deck": "Chee's pixel Tarot",
                "description":
                "Four of Swords is about rest and rejuvenation, getting enough sleep and taking time out to meditate."
            },
            {
                "name": "Five of Swords",
                "number": "5",
                "arcana": "Minor Arcana",
                "suit": "Swords",
                "img": "tarot-json-master/cards/Chee's Pixel Tarot/TarotCards2x/Swords/swords5.png",
                "deck": "Chee's pixel Tarot",
                "description":
                "Five of Swords is the card for defeat and betrayal, conflict and unhealthy competition. Words will be hurtful, lies will be told and your weaknesses used against you."
            },
            {
                "name": "Six of Swords",
                "number": "6",
                "arcana": "Minor Arcana",
                "suit": "Swords",
                "img": "tarot-json-master/cards/Chee's Pixel Tarot/TarotCards2x/Swords/swords6.png",
                "deck": "Chee's pixel Tarot",
                "description":
                "Six of Swords is about crossing the troubled sea and entering into calmer water. This is the card for finding solutions and implementing them, often bringing other people with you in the process, ie, your family, friends, and colleagues."
            },
            {
                "name": "Seven of Swords",
                "number": "7",
                "arcana": "Minor Arcana",
                "suit": "Swords",
                "img": "tarot-json-master/cards/Chee's Pixel Tarot/TarotCards2x/Swords/swords7.png",
                "deck": "Chee's pixel Tarot",
                "description":
                "Seven of Swords denotes someone is moving forward in less than honourable ways. There is often dishonesty connected with this card, and trying to get away with something or trying to get out of something by lying."
            },
            {
                "name": "Eight of Swords",
                "number": "8",
                "arcana": "Minor Arcana",
                "suit": "Swords",
                "img": "tarot-json-master/cards/Chee's Pixel Tarot/TarotCards2x/Swords/swords8.png",
                "deck": "Chee's pixel Tarot",
                "description":
                "Eight of Swords is the card of being stuck and unable to move on due to confusion and not knowing what is going on. Often people draw this card when their own gut feeling is being overruled by other people."
            },
            {
                "name": "Nine of Swords",
                "number": "9",
                "arcana": "Minor Arcana",
                "suit": "Swords",
                "img": "tarot-json-master/cards/Chee's Pixel Tarot/TarotCards2x/Swords/swords9.png",
                "deck": "Chee's pixel Tarot",
                "description":
                "Nine of Swords denotes worry and anxiety, sleeplessness and being overwhelmed by negative emotions such as guilt and regrets."
            },
            {
                "name": "Ten of Swords",
                "number": "10",
                "arcana": "Minor Arcana",
                "suit": "Swords",
                "img": "tarot-json-master/cards/Chee's Pixel Tarot/TarotCards2x/Swords/swords10.png",
                "deck": "Chee's pixel Tarot",
                "description":
                "Ten of Swords is the card for endings and loss, backstabbing and lack of support. Sometimes this card denotes hitting rock bottom. It has the mentality of ‘when it rains it pours’, and the querent might be feeling there is no end of the suffering."
            },
            {
                "name": "Page of Swords",
                "number": "11",
                "arcana": "Minor Arcana",
                "suit": "Swords",
                "img": "tarot-json-master/cards/Chee's Pixel Tarot/TarotCards2x/Swords/swordsP.png",
                "deck": "Chee's pixel Tarot",
                "description":
                "Page of Swords denotes a young and mentally very active and clever person. This is someone who can concentrate over long periods of time and who learns new skills easily, especially mental skills."
            },
            {
                "name": "Knight of Swords",
                "number": "12",
                "arcana": "Minor Arcana",
                "suit": "Swords",
                "img": "tarot-json-master/cards/Chee's Pixel Tarot/TarotCards2x/Swords/swordsKn.png",
                "deck": "Chee's pixel Tarot",
                "description":
                "Knight of Swords denotes a communicative, strong-minded and at times an opinionated person who is very action oriented and thrive on change. This is someone with a competitive streak and doesn’t like to let go of his/hers position in an argument."
            },
            {
                "name": "Queen of Swords",
                "number": "13",
                "arcana": "Minor Arcana",
                "suit": "Swords",
                "img": "tarot-json-master/cards/Chee's Pixel Tarot/TarotCards2x/Swords/swordsQ.png",
                "deck": "Chee's pixel Tarot",
                "description":
                "Queen of Swords denotes a woman who is cold, professional and smart. She is witty and funny in an intelligent way (no toilet humour). She often represents single women who have been hurt in love, and is bitter and hurt, but a master at covering it up."
            },
            {
                "name": "King of Swords",
                "number": "14",
                "arcana": "Minor Arcana",
                "suit": "Swords",
                "img": "tarot-json-master/cards/Chee's Pixel Tarot/TarotCards2x/Swords/swordsK.png",
                "deck": "Chee's pixel Tarot",
                "description":
                "King of Swords denotes a professional man who is at the top of his game. This is someone who is an expert in his field and would have had to study to acquire this knowledge."
            },
            {
                "name": "Ace of Wands",
                "number": "1",
                "arcana": "Minor Arcana",
                "suit": "Wands",
                "img": "tarot-json-master/cards/Chee's Pixel Tarot/TarotCards2x/Wands/wands1.png",
                "deck": "Chee's pixel Tarot",
                "description":
                "Ace of wands speaks of new beginnings. Be bold and start something new. Follow your inspiration. Ace of Wands speaks of births of all kinds; the birth of enterprises and job opportunities, and also the birth of a baby."
            },
            {
                "name": "Two of Wands",
                "number": "2",
                "arcana": "Minor Arcana",
                "suit": "Wands",
                "img": "tarot-json-master/cards/Chee's Pixel Tarot/TarotCards2x/Wands/wands2.png",
                "deck": "Chee's pixel Tarot",
                "description":
                "Two of Wands is about manifesting using the will and strength of your mind. You might have to weigh up your options before deciding on the one that is best for you."
            },
            {
                "name": "Three of Wands",
                "number": "3",
                "arcana": "Minor Arcana",
                "suit": "Wands",
                "img": "tarot-json-master/cards/Chee's Pixel Tarot/TarotCards2x/Wands/wands3.png",
                "deck": "Chee's pixel Tarot",
                "description":
                "Three of Wands is the card for writers, and writing jobs and freelancers. It is also the card that follows the manifesting the querent did in Two of Wand, and the querent has now lived a new and exciting opportunity or dream."
            },
            {
                "name": "Four of Wands",
                "number": "4",
                "arcana": "Minor Arcana",
                "suit": "Wands",
                "img": "tarot-json-master/cards/Chee's Pixel Tarot/TarotCards2x/Wands/wands4.png",
                "deck": "Chee's pixel Tarot",
                "description":
                "Four of Wands is the card for harmony and developing on a larger scale, often expanding your living situation, and also being stronger connected to a community."
            },
            {
                "name": "Five of Wands",
                "number": "5",
                "arcana": "Minor Arcana",
                "suit": "Wands",
                "img": "tarot-json-master/cards/Chee's Pixel Tarot/TarotCards2x/Wands/wands5.png",
                "deck": "Chee's pixel Tarot",
                "description":
                "Five of Wands is about standing up for what is important to you, even if it means meeting some opposition."
            },
            {
                "name": "Six of Wands",
                "number": "6",
                "arcana": "Minor Arcana",
                "suit": "Wands",
                "img": "tarot-json-master/cards/Chee's Pixel Tarot/TarotCards2x/Wands/wands6.png",
                "deck": "Chee's pixel Tarot",
                "description":
                "Six of Wands is the card for popularity, progress, victory and success, self-confidence and getting what you want."
            },
            {
                "name": "Seven of Wands",
                "number": "7",
                "arcana": "Minor Arcana",
                "suit": "Wands",
                "img": "tarot-json-master/cards/Chee's Pixel Tarot/TarotCards2x/Wands/wands7.png",
                "deck": "Chee's pixel Tarot",
                "description":
                "Seven of Wands denotes being defensive and putting up barriers and boundaries. You are protecting your point of view and your position."
            },
            {
                "name": "Eight of Wands",
                "number": "8",
                "arcana": "Minor Arcana",
                "suit": "Wands",
                "img": "tarot-json-master/cards/Chee's Pixel Tarot/TarotCards2x/Wands/wands8.png",
                "deck": "Chee's pixel Tarot",
                "description":
                "Eight of Wands speaks of swift action and progress. It often shows up when there is a visitor coming, or when the querent is visiting someone."
            },
            {
                "name": "Nine of Wands",
                "number": "9",
                "arcana": "Minor Arcana",
                "suit": "Wands",
                "img": "tarot-json-master/cards/Chee's Pixel Tarot/TarotCards2x/Wands/wands9.png",
                "deck": "Chee's pixel Tarot",
                "description":
                "Nine of Wands is the card for strength, courage, resilience and endurance. Never give up and never surrender."
            },
            {
                "name": "Ten of Wands",
                "number": "10",
                "arcana": "Minor Arcana",
                "suit": "Wands",
                "img": "tarot-json-master/cards/Chee's Pixel Tarot/TarotCards2x/Wands/wands10.png",
                "deck": "Chee's pixel Tarot",
                "description":
                "Ten of Wands is the card for hard work and taking on more responsibility."
            },
            {
                "name": "Page of Wands",
                "number": "11",
                "arcana": "Minor Arcana",
                "suit": "Wands",
                "img": "tarot-json-master/cards/Chee's Pixel Tarot/TarotCards2x/Wands/wandsP.png",
                "deck": "Chee's pixel Tarot",
                "description":
                "Page of Wands denotes an enthusiastic young person who is eager to explore and gain life experience."
            },
            {
                "name": "Knight of Wands",
                "number": "12",
                "arcana": "Minor Arcana",
                "suit": "Wands",
                "img": "tarot-json-master/cards/Chee's Pixel Tarot/TarotCards2x/Wands/wandsKn.png",
                "deck": "Chee's pixel Tarot",
                "description":
                "Knight of Wands denotes a person who is travelling through life at a high-speed, living life in the fast lane. This is someone who will be the life of the party."
            },
            {
                "name": "Queen of Wands",
                "number": "13",
                "arcana": "Minor Arcana",
                "suit": "Wands",
                "img": "tarot-json-master/cards/Chee's Pixel Tarot/TarotCards2x/Wands/wandsQ.png",
                "deck": "Chee's pixel Tarot",
                "description":
                "Queen of Wands denotes a warm, kind and passionate woman. She is goal oriented and determined. She is also a metaphysic who can use her mind both to create harmony and havoc."
            },
            {
                "name": "King of Wands",
                "number": "14",
                "arcana": "Minor Arcana",
                "suit": "Wands",
                "img": "tarot-json-master/cards/Chee's Pixel Tarot/TarotCards2x/Wands/wandsK.png",
                "deck": "Chee's pixel Tarot",
                "description":
                "King of Wands denotes a married man who is a natural and charismatic leader. He has entrepreneurial skills and loves to run a new and exciting project."
            },
            {
                "name": "Ace of Pentacles",
                "number": "1",
                "arcana": "Minor Arcana",
                "suit": "Pentacles",
                "img": "tarot-json-master/cards/Chee's Pixel Tarot/TarotCards2x/Pentacles/pentacles1.png",
                "deck": "Chee's pixel Tarot",
                "description":
                "Ace of Pentacles symbolises a new beginning in your financial situation and an opportunity to deepen your security."
            },
            {
                "name": "Two of Pentacles",
                "number": "2",
                "arcana": "Minor Arcana",
                "suit": "Pentacles",
                "img": "tarot-json-master/cards/Chee's Pixel Tarot/TarotCards2x/Pentacles/pentacles2.png",
                "deck": "Chee's pixel Tarot",
                "description":
                "Two of Pentacles symbolises juggling with finances. You might have income from more than one source. Two of Pentacles also indicates investing money into different projects, or bartering."
            },
            {
                "name": "Three of Pentacles",
                "number": "3",
                "arcana": "Minor Arcana",
                "suit": "Pentacles",
                "img": "tarot-json-master/cards/Chee's Pixel Tarot/TarotCards2x/Pentacles/pentacles3.png",
                "deck": "Chee's pixel Tarot",
                "description":
                "Three of Pentacles symbolises your work, especially where team work or listening to clients/customers are concerned. This is a positive card which indicates job satisfaction and taking pride in your work, but you must put in the effort to see results."
            },
            {
                "name": "Four of Pentacles",
                "number": "4",
                "arcana": "Minor Arcana",
                "suit": "Pentacles",
                "img": "tarot-json-master/cards/Chee's Pixel Tarot/TarotCards2x/Pentacles/pentacles4.png",
                "deck": "Chee's pixel Tarot",
                "description":
                "Four of Pentacles symbolises the need for security and recognition in your life, to have control over your possession and to keep abundance and money increasing. This card shows stubbornness in the situation or in the querent."
            },
            {
                "name": "Five of Pentacles",
                "number": "5",
                "arcana": "Minor Arcana",
                "suit": "Pentacles",
                "img": "tarot-json-master/cards/Chee's Pixel Tarot/TarotCards2x/Pentacles/pentacles5.png",
                "deck": "Chee's pixel Tarot",
                "description":
                "Five of Pentacles symbolises financial loss or hardship. It can also mean you are in a place where you feel there is no security and your health might be suffering."
            },
            {
                "name": "Six of Pentacles",
                "number": "6",
                "arcana": "Minor Arcana",
                "suit": "Pentacles",
                "img": "tarot-json-master/cards/Chee's Pixel Tarot/TarotCards2x/Pentacles/pentacles6.png",
                "deck": "Chee's pixel Tarot",
                "description":
                "Six of Pentacles symbolises generosity towards those who has less than you. It can also mean receiving generosity from others."
            },
            {
                "name": "Seven of Pentacles",
                "number": "7",
                "arcana": "Minor Arcana",
                "suit": "Pentacles",
                "img": "tarot-json-master/cards/Chee's Pixel Tarot/TarotCards2x/Pentacles/pentacles7.png",
                "deck": "Chee's pixel Tarot",
                "description":
                "Seven of Pentacles symbolises a vision that will pay off in the future. You are planting the seeds so that you will be able to harvest a more secure and abundant future for yourself."
            },
            {
                "name": "Eight of Pentacles",
                "number": "8",
                "arcana": "Minor Arcana",
                "suit": "Pentacles",
                "img": "tarot-json-master/cards/Chee's Pixel Tarot/TarotCards2x/Pentacles/pentacles8.png",
                "deck": "Chee's pixel Tarot",
                "description":
                "Eight of Pentacles symbolise craftsmanship in regards to work. It can also mean doing an apprenticeship and/or learning a new skill."
            },
            {
                "name": "Nine of Pentacles",
                "number": "9",
                "arcana": "Minor Arcana",
                "suit": "Pentacles",
                "img": "tarot-json-master/cards/Chee's Pixel Tarot/TarotCards2x/Pentacles/pentacles9png",
                "deck": "Chee's pixel Tarot",
                "description":
                "Nine of Pentacles symbolises luxury, financial security and being on a lavish holiday."
            },
            {
                "name": "Ten of Pentacles",
                "number": "10",
                "arcana": "Minor Arcana",
                "suit": "Pentacles",
                "img": "tarot-json-master/cards/Chee's Pixel Tarot/TarotCards2x/Pentacles/pentacles10.png",
                "deck": "Chee's pixel Tarot",
                "description":
                "Ten of Pentacles symbolises the type of wealth you get when you inherit something, being it your own retirement money, hand me downs, or possessions from someone who has passes away."
            },
            {
                "name": "Page of Pentacles",
                "number": "11",
                "arcana": "Minor Arcana",
                "suit": "Pentacles",
                "img": "tarot-json-master/cards/Chee's Pixel Tarot/TarotCards2x/Pentacles/pentaclesP.png",
                "deck": "Chee's pixel Tarot",
                "description":
                "Page of Pentacles indicates reinventing yourself in some way. It often denotes an opportunity to start something new, whether it is a creative venture, studying, business or a new job offer. Page of pentacles is not yet an expert in the field of choice but has a clear goal and dream to achieve."
            },
            {
                "name": "Knight of Pentacles",
                "number": "12",
                "arcana": "Minor Arcana",
                "suit": "Pentacles",
                "img": "tarot-json-master/cards/Chee's Pixel Tarot/TarotCards2x/Pentacles/pentaclesKn.png",
                "deck": "Chee's pixel Tarot",
                "description":
                "Knight of Pentacles denotes being of service and doing the actual work (in contrast to Page of Pentacles who enjoys daydreaming about the idea rather than actual living it). Knight of Pentacles is comfortable with routine and is efficient and conservative."
            },
            {
                "name": "Queen of Pentacles",
                "number": "13",
                "arcana": "Minor Arcana",
                "suit": "Pentacles",
                "img": "tarot-json-master/cards/Chee's Pixel Tarot/TarotCards2x/Pentacles/pentaclesQ.png",
                "deck": "Chee's pixel Tarot",
                "description":
                "Queen of Pentacles is someone with a down to earth and practical approach to life and situations. It is important to have work/home balance, in fact if you could work from home you probably would. This card takes enjoyment in material pleasures and success."
            },
            {
                "name": "King of Pentacles",
                "number": "14",
                "arcana": "Minor Arcana",
                "suit": "Pentacles",
                "img": `tarot-json-master/cards/Chee's Pixel Tarot/TarotCards2x/Pentacles/pentaclesK.png`,
                "deck": "Chee's pixel Tarot",
                "description":
                "King of Pentacles symbolises a successful businessman or a person in a manager position. This is a stable and authoritative character, who is hard-working and dependable."
            },
            ///Mixed///
            {
                "name": "The Fool",
                "number": "0",
                "arcana": "Major Arcana",
                "suit": null,
                "img": "tarot-json-master/cards/mixedDecks/SKT Majors/00_Initiate_(Fool).jpg",
                "deck": "SKT",
                "description":
                "Fool represents new beginnings, having faith in the future, being inexperienced, not knowing what to expect, having beginners luck, improvising, believing that the Universe provides, having no strings attached, being carefree."
            },
            {
                "name": "The Magician",
                "number": "1",
                "arcana": "Major Arcana",
                "suit": null,
                "img": "tarot-json-master/cards/mixedDecks/SKT Majors/01 _The _Magus _(Magician).jpg",
                "deck": "SKT",
                "description":
                "Magician represents your ability to communicate clearly, to ‘sell’ yourself and to be innovative. The Magician has all the tools and resources available to manifest his desired outcome, so it is a good card to get if you want to create."
            },
            {
                "name": "The High Priestess",
                "number": "2",
                "arcana": "Major Arcana",
                "suit": null,
                "img": "tarot-json-master/cards/mixedDecks/SKT Majors/02_The_Priestess_(High_Priestess).jpg",
                "deck": "SKT",
                "description":
                "High Priestess represents secrets, mystery, intuition, wisdom, making the impossible become possible, and magic."
            },
            {
                "name": "The Empress",
                "number": "3",
                "arcana": "Major Arcana",
                "suit": null,
                "img": "tarot-json-master/cards/mixedDecks/SKT Majors/03_The_Empress.jpg",
                "deck": "SKT",
                "description":
                "Empress represents feminine power, a nurturer and a family oriented person, our mother or a mother figure, abundance, femininity, fertility and the love of the home and family."
            },
            {
                "name": "The Emperor",
                "number": "4",
                "arcana": "Major Arcana",
                "suit": null,
                "img": "tarot-json-master/cards/mixedDecks/SKT Majors/04_The_Emperor.jpg",
                "deck": "SKT",
                "description":
                "Emperor represents masculine energy, the ruler, the head of the household, head of a company, organisation and communities. The Emperor is an authority figure that creates a solid foundation to build and create on."
            },
            {
                "name": "The Hierophant",
                "number": "5",
                "arcana": "Major Arcana",
                "suit": null,
                "img": "tarot-json-master/cards/mixedDecks/SKT Majors/05_The_Holy_See (Hierophant).jpg",
                "deck": "SKT",
                "description":
                "Hierophant represents group consciousness, religion, your belief system, ceremony, traditions, kindness, charity, giving guidance in the form of spiritual counselling."
            },
            {
                "name": "The Lovers",
                "number": "6",
                "arcana": "Major Arcana",
                "suit": null,
                "img": "tarot-json-master/cards/mixedDecks/SKT Majors/06_The_Lovers.jpg",
                "deck": "SKT",
                "description":
                "Lovers represents love and relationship, soul mates, physical attractions, choices to be made, The Lovers represents doing the things that make us feel whole, being with the people who make us feel whole."
            },
            {
                "name": "The Chariot",
                "number": "7",
                "arcana": "Major Arcana",
                "suit": null,
                "img": "tarot-json-master/cards/mixedDecks/SKT Majors/07_The_Chariot.jpg",
                "deck": "SKT",
                "description":
                "Chariot represents your willpower and determination. It represents victory. The Chariot gives you the green light to charge ahead and take control in your life or an area of your life that needs your attention."
            },
            {
                "name": "Strength",
                "number": "8",
                "arcana": "Major Arcana",
                "suit": null,
                "img": "tarot-json-master/cards/mixedDecks/SKT Majors/SKT Key 08 The Force (Strength).jpg",
                "deck": "SKT",
                "description":
                "Strength represents our courage, passions, strength, self-confidence, patience and compassion. Strength reminds us to follow our passions, to take the time to do the things that make us tick, that makes us strong within ourselves and which builds confidence and self-worth."
            },
            {
                "name": "The Hermit",
                "number": "9",
                "arcana": "Major Arcana",
                "suit": null,
                "img": "tarot-json-master/cards/mixedDecks/SKT Majors/SKT Key 09 The Erudite (Hermit).jpg",
                "deck": "SKT",
                "description":
                "Hermit represents spending time alone, being a lone wolf, soul-searching, seeking spiritual guidance, introspection."
            },
            {
                "name": "Wheel of Fortune",
                "number": "10",
                "arcana": "Major Arcana",
                "suit": null,
                "img": "tarot-json-master/cards/mixedDecks/SKT Majors/SKT Key 10 Wheel of Life (Wheel of Fortune).jpg",
                "deck": "SKT",
                "description":
                "Wheel of Fortune is the Big destiny card in the tarot deck. What is meant to be is meant to be. In the tarot when the Wheel of Fortune turns up, it means that the events and people in your life are in your life due to it being pre-decided by destiny."
            },
            {
                "name": "Justice",
                "number": "11",
                "arcana": "Major Arcana",
                "suit": null,
                "img": "tarot-json-master/cards/mixedDecks/SKT Majors/SKT Key 11 The Chancellor (Justice).jpg",
                "deck": "SKT",
                "description":
                "Justice represents all kinds of legal matters, the spiritual laws of truth and cause and effect. When the Justice card shows up it reminds us to be lawful and fair to achieve the best result."
            },
            {
                "name": "The Hanged Man",
                "number": "12",
                "arcana": "Major Arcana",
                "suit": null,
                "img": "tarot-json-master/cards/mixedDecks/SKT Majors/SKT Key 12 The Outlaw (Hanged Man).jpg",
                "deck": "SKT",
                "description":
                "Hanged Man represents being temporarily suspended. Life is on hold, but it serves a purpose."
            },
            {
                "name": "Death",
                "number": "13",
                "arcana": "Major Arcana",
                "suit": null,
                "img": "tarot-json-master/cards/mixedDecks/SKT Majors/SKT Key 13 The Reaper (Death).jpg",
                "deck": "SKT",
                "description":
                "Death represents transformation, endings and new beginnings. When the Death card shows up it tells you that things will not be the same again. A transformation is taking place, you are growing and changing with the circumstances you find yourself in."
            },
            {
                "name": "Temperance",
                "number": "14",
                "arcana": "Major Arcana",
                "suit": null,
                "img": "tarot-json-master/cards/mixedDecks/SKT Majors/SKT Key 14 The Angel (Temperance).jpg",
                "deck": "SKT",
                "description":
                "Temperance represents balanced interaction between the elements to create something new and fresh. Temperance includes all the elements in such a way that it brings out the best of each substance. When the Temperance card shows up in your life there is great balance and strength between the different areas and people in your life that are working together."
            },
            {
                "name": "The Devil",
                "number": "15",
                "arcana": "Major Arcana",
                "suit": null,
                "img": "tarot-json-master/cards/mixedDecks/SKT Majors/SKT Key 15 The Demon (Devil).jpg",
                "deck": "SKT",
                "description":
                "Devil represents the primal source of behaviour that shows itself in the form of our desires and earthly needs. It also represents our fears that causes addiction and compulsive behaviour."
            },
            {
                "name": "The Tower",
                "number": "16",
                "arcana": "Major Arcana",
                "suit": null,
                "img": "tarot-json-master/cards/mixedDecks/SKT Majors/SKT Key 16 The Tower.jpg",
                "deck": "SKT",
                "description":
                "Tower represent disaster, emotional ‘meltdowns’ and/or tantrums, anger issues, upheaval, sudden change that is caused by disruption and revelations that rock the foundation of the person, household, organisation or even country, depending on the nature of the question."
            },
            {
                "name": "The Star",
                "number": "17",
                "arcana": "Major Arcana",
                "suit": null,
                "img": "tarot-json-master/cards/mixedDecks/SKT Majors/SKT Key 17 The Healer (Star).jpg",
                "deck": "SKT",
                "description":
                "Star represents hope, a bright future, joy, optimism, guidance, having answers to your questions, being and feeling the connection to the divine, serenity and inspiration. The Star shines so brightly that when it shows up in a reading it tells you that you are being the light in someone’s life."
            },
            {
                "name": "The Moon",
                "number": "18",
                "arcana": "Major Arcana",
                "suit": null,
                "img": "tarot-json-master/cards/mixedDecks/SKT Majors/SKT Key 18 The Necromancer (Moon).jpg",
                "deck": "SKT",
                "description":
                "Moon represents illusions, intuition, fantasies, fears and anxiety. When the Moon appears things might not be quite as they seem. Your insecurities might be running high or you find yourself on the receiving end of other people’s insecurities."
            },
            {
                "name": "The Sun",
                "number": "19",
                "arcana": "Major Arcana",
                "suit": null,
                "img": "tarot-json-master/cards/mixedDecks/SKT Majors/SKT Key 19 The Warrior (Sun).jpg",
                "deck": "SKT",
                "description":
                "Sun represents success, joy, sunshine, day, warmth and happiness. The Sun shows up when life is sunny and you are enjoying your time with the people you love. Life is simple rather than complicated. Relationships are blossoming and you are feeling loved."
            },
            {
                "name": "Judgement",
                "number": "20",
                "arcana": "Major Arcana",
                "suit": null,
                "img": "tarot-json-master/cards/mixedDecks/SKT Majors/SKT Key 20 Apocalypse (Judgement).jpg",
                "deck": "SKT",
                "description":
                "Judgement represents taking responsibility for your actions and your life, being a good judge of character, seeing the truth and knowing what you want. The Judgement card often shows up when you need to step up and be a leader, speaking the truth and being more assertive."
            },
            {
                "name": "The World",
                "number": "21",
                "arcana": "Major Arcana",
                "suit": null,
                "img": "tarot-json-master/cards/mixedDecks/SKT Majors/SKT Key 21 New World Order (World).jpg",
                "deck": "SKT",
                "description":
                "World is the final Major Arcana card and represents fulfilment and successful completion of a cycle. You know your place in the world, and your life lessons have made you smart and accomplished. The World shows up when the world is ready for you and want what you have to offer."
            },
            ///alcemist///
            {
                "name": "The Fool",
                "number": "0",
                "arcana": "Major Arcana",
                "suit": null,
                "img": "tarot-json-master/cards/mixedDecks/alchemist tarot/1 - h48RLg8.jpg",
                "deck": "Alchemist tarot",
                "description":
                "Fool represents new beginnings, having faith in the future, being inexperienced, not knowing what to expect, having beginners luck, improvising, believing that the Universe provides, having no strings attached, being carefree."
            },
            {
                "name": "The Magician",
                "number": "1",
                "arcana": "Major Arcana",
                "suit": null,
                "img": "tarot-json-master/cards/mixedDecks/alchemist tarot/2 - qcuNOQn.jpg",
                "deck": "Alchemist tarot",
                "description":
                "Magician represents your ability to communicate clearly, to ‘sell’ yourself and to be innovative. The Magician has all the tools and resources available to manifest his desired outcome, so it is a good card to get if you want to create."
            },
            {
                "name": "The High Priestess",
                "number": "2",
                "arcana": "Major Arcana",
                "suit": null,
                "img": "tarot-json-master/cards/mixedDecks/alchemist tarot/3 - XI2POaY.jpg",
                "deck": "Alchemist tarot",
                "description":
                "High Priestess represents secrets, mystery, intuition, wisdom, making the impossible become possible, and magic."
            },
            {
                "name": "The Empress",
                "number": "3",
                "arcana": "Major Arcana",
                "suit": null,
                "img": "tarot-json-master/cards/mixedDecks/alchemist tarot/4 - Gt6aAM8.jpg",
                "deck": "Alchemist tarot",
                "description":
                "Empress represents feminine power, a nurturer and a family oriented person, our mother or a mother figure, abundance, femininity, fertility and the love of the home and family."
            },
            {
                "name": "The Emperor",
                "number": "4",
                "arcana": "Major Arcana",
                "suit": null,
                "img": "tarot-json-master/cards/mixedDecks/alchemist tarot/5 - NONjmGF.jpg",
                "deck": "Alchemist tarot",
                "description":
                "Emperor represents masculine energy, the ruler, the head of the household, head of a company, organisation and communities. The Emperor is an authority figure that creates a solid foundation to build and create on."
            },
            {
                "name": "The Hierophant",
                "number": "5",
                "arcana": "Major Arcana",
                "suit": null,
                "img": "tarot-json-master/cards/mixedDecks/alchemist tarot/6 - kbmqAaf.jpg",
                "deck": "Alchemist tarot",
                "description":
                "Hierophant represents group consciousness, religion, your belief system, ceremony, traditions, kindness, charity, giving guidance in the form of spiritual counselling."
            },
            {
                "name": "The Lovers",
                "number": "6",
                "arcana": "Major Arcana",
                "suit": null,
                "img": "tarot-json-master/cards/mixedDecks/alchemist tarot/7 - WpdZz1g.jpg",
                "deck": "Alchemist tarot",
                "description":
                "Lovers represents love and relationship, soul mates, physical attractions, choices to be made, The Lovers represents doing the things that make us feel whole, being with the people who make us feel whole."
            },
            {
                "name": "The Chariot",
                "number": "7",
                "arcana": "Major Arcana",
                "suit": null,
                "img": "tarot-json-master/cards/mixedDecks/alchemist tarot/8 - eUzTGRc.jpg",
                "deck": "Alchemist tarot",
                "description":
                "Chariot represents your willpower and determination. It represents victory. The Chariot gives you the green light to charge ahead and take control in your life or an area of your life that needs your attention."
            },
            {
                "name": "Strength",
                "number": "8",
                "arcana": "Major Arcana",
                "suit": null,
                "img": "tarot-json-master/cards/mixedDecks/alchemist tarot/9 - nU48xwf.jpg",
                "deck": "Alchemist tarot",
                "description":
                "Strength represents our courage, passions, strength, self-confidence, patience and compassion. Strength reminds us to follow our passions, to take the time to do the things that make us tick, that makes us strong within ourselves and which builds confidence and self-worth."
            },
            {
                "name": "The Hermit",
                "number": "9",
                "arcana": "Major Arcana",
                "suit": null,
                "img": "tarot-json-master/cards/mixedDecks/alchemist tarot/10 - eV8790B.jpg",
                "deck": "Alchemist tarot",
                "description":
                "Hermit represents spending time alone, being a lone wolf, soul-searching, seeking spiritual guidance, introspection."
            },
            {
                "name": "Wheel of Fortune",
                "number": "10",
                "arcana": "Major Arcana",
                "suit": null,
                "img": "tarot-json-master/cards/mixedDecks/alchemist tarot/11 - NT5XUgd.jpgf",
                "deck": "Alchemist tarot",
                "description":
                "Wheel of Fortune is the Big destiny card in the tarot deck. What is meant to be is meant to be. In the tarot when the Wheel of Fortune turns up, it means that the events and people in your life are in your life due to it being pre-decided by destiny."
            },
            {
                "name": "Justice",
                "number": "11",
                "arcana": "Major Arcana",
                "suit": null,
                "img": "tarot-json-master/cards/mixedDecks/alchemist tarot/12 - GwSEcZC.jpg",
                "deck": "Alchemist tarot",
                "description":
                "Justice represents all kinds of legal matters, the spiritual laws of truth and cause and effect. When the Justice card shows up it reminds us to be lawful and fair to achieve the best result."
            },
            {
                "name": "The Hanged Man",
                "number": "12",
                "arcana": "Major Arcana",
                "suit": null,
                "img": "tarot-json-master/cards/mixedDecks/alchemist tarot/13 - T2SyIaN.jpg",
                "deck": "Alchemist tarot",
                "description":
                "Hanged Man represents being temporarily suspended. Life is on hold, but it serves a purpose."
            },
            {
                "name": "Death",
                "number": "13",
                "arcana": "Major Arcana",
                "suit": null,
                "img": "tarot-json-master/cards/mixedDecks/alchemist tarot/14 - OR5t9yN.jpg",
                "deck": "Alchemist tarot",
                "description":
                "Death represents transformation, endings and new beginnings. When the Death card shows up it tells you that things will not be the same again. A transformation is taking place, you are growing and changing with the circumstances you find yourself in."
            },
            {
                "name": "Temperance",
                "number": "14",
                "arcana": "Major Arcana",
                "suit": null,
                "img": "tarot-json-master/cards/mixedDecks/alchemist tarot/15 - xwnfrt0.jpg",
                "deck": "Alchemist tarot",
                "description":
                "Temperance represents balanced interaction between the elements to create something new and fresh. Temperance includes all the elements in such a way that it brings out the best of each substance. When the Temperance card shows up in your life there is great balance and strength between the different areas and people in your life that are working together."
            },
            {
                "name": "The Devil",
                "number": "15",
                "arcana": "Major Arcana",
                "suit": null,
                "img": "tarot-json-master/cards/mixedDecks/alchemist tarot/16 - wnbD4EJ.jpg",
                "deck": "Alchemist tarot",
                "description":
                "Devil represents the primal source of behaviour that shows itself in the form of our desires and earthly needs. It also represents our fears that causes addiction and compulsive behaviour."
            },
            {
                "name": "The Tower",
                "number": "16",
                "arcana": "Major Arcana",
                "suit": null,
                "img": "tarot-json-master/cards/mixedDecks/alchemist tarot/17 - fm0Ssi1.jpg",
                "deck": "Alchemist tarot",
                "description":
                "Tower represent disaster, emotional ‘meltdowns’ and/or tantrums, anger issues, upheaval, sudden change that is caused by disruption and revelations that rock the foundation of the person, household, organisation or even country, depending on the nature of the question."
            },
            {
                "name": "The Star",
                "number": "17",
                "arcana": "Major Arcana",
                "suit": null,
                "img": "tarot-json-master/cards/mixedDecks/alchemist tarot/18 - IvDgwap.jpg",
                "deck": "Alchemist tarot",
                "description":
                "Star represents hope, a bright future, joy, optimism, guidance, having answers to your questions, being and feeling the connection to the divine, serenity and inspiration. The Star shines so brightly that when it shows up in a reading it tells you that you are being the light in someone’s life."
            },
            {
                "name": "The Moon",
                "number": "18",
                "arcana": "Major Arcana",
                "suit": null,
                "img": "tarot-json-master/cards/mixedDecks/alchemist tarot/19 - 1PFLlh2.jpg",
                "deck": "Alchemist tarot",
                "description":
                "Moon represents illusions, intuition, fantasies, fears and anxiety. When the Moon appears things might not be quite as they seem. Your insecurities might be running high or you find yourself on the receiving end of other people’s insecurities."
            },
            {
                "name": "The Sun",
                "number": "19",
                "arcana": "Major Arcana",
                "suit": null,
                "img": "tarot-json-master/cards/mixedDecks/alchemist tarot/20 - zD0Mxzi.jpg",
                "deck": "Alchemist tarot",
                "description":
                "Sun represents success, joy, sunshine, day, warmth and happiness. The Sun shows up when life is sunny and you are enjoying your time with the people you love. Life is simple rather than complicated. Relationships are blossoming and you are feeling loved."
            },
            {
                "name": "Judgement",
                "number": "20",
                "arcana": "Major Arcana",
                "suit": null,
                "img": "tarot-json-master/cards/mixedDecks/alchemist tarot/21 - q6GlQ7Y.jpg",
                "deck": "Alchemist tarot",
                "description":
                "Judgement represents taking responsibility for your actions and your life, being a good judge of character, seeing the truth and knowing what you want. The Judgement card often shows up when you need to step up and be a leader, speaking the truth and being more assertive."
            },
            {
                "name": "The World",
                "number": "21",
                "arcana": "Major Arcana",
                "suit": null,
                "img": "tarot-json-master/cards/mixedDecks/alchemist tarot/22 - oxYKfgj.jpg",
                "deck": "Alchemist tarot",
                "description":
                "World is the final Major Arcana card and represents fulfilment and successful completion of a cycle. You know your place in the world, and your life lessons have made you smart and accomplished. The World shows up when the world is ready for you and want what you have to offer."
            }
        
        ];
        
        let c = rand[Math.floor(Math.random() * rand.length)];

        const a = new MessageAttachment(`${c.img}`, 'image.jpg');

        const t = new MessageEmbed()
        .setTitle(`${c.name}`)
        .setDescription(`Arcana: ${c.arcana}\nNumber: ${c.number}\nSuit: ${c.suit}`)
        .addField("Meaning:", `${c.description}`)
        .attachFiles(a)
        .setImage(`attachment://image.jpg`)
        .setFooter(`Deck: ${c.deck}`)
        .setColor(`#D21F3C`)


      let c2 = rand[Math.floor(Math.random() * rand.length)]

      const ta = new MessageEmbed()
      .setTitle(`${c2.name}`)
      .setDescription(`Arcana: ${c2.arcana}\nNumber: ${c2.number}\nSuit: ${c2.suit}`)
      .addField("Meaning:", `${c2.description}`)
      .setColor(`#D21F3C`)

      let c3 = rand[Math.floor(Math.random() * rand.length)]

      const b = new MessageAttachment(`${c3.img}`, 'image.jpg');

      const im = new MessageEmbed()
      .attachFiles(b)
      .setImage(`attachment://image.jpg`)
      .setColor(`#D21F3C`)

      let deck = [
          "- `Rider Waite tarot`\n- `Burt Wonderland tarot` (burnt)\n- `Chee's pixel tarot` (pixel)\n- `SKT majors tarot`\n- `Animated pepe tarot` (pepe)"
      ]

      const decks = new MessageEmbed()
      .setDescription(`${deck}`)
      .setColor(`#D21F3C`)


    let burnt =  [
        {
            "name": "The Fool",
            "number": "0",
            "arcana": "Major Arcana",
            "suit": null,
            "img": "tarot-json-master/cards/BurntWonderlandTarot/m00.jpg",
            "deck": "Burnt Wonderland Tarot",
            "description":
            "Fool represents new beginnings, having faith in the future, being inexperienced, not knowing what to expect, having beginners luck, improvising, believing that the Universe provides, having no strings attached, being carefree."
        },
        {
            "name": "The Magician",
            "number": "1",
            "arcana": "Major Arcana",
            "suit": null,
            "img": "tarot-json-master/cards/BurntWonderlandTarot/m01.jpg",
            "deck": "Burnt Wonderland Tarot",
            "description":
            "Magician represents your ability to communicate clearly, to ‘sell’ yourself and to be innovative. The Magician has all the tools and resources available to manifest his desired outcome, so it is a good card to get if you want to create."
        },
        {
            "name": "The High Priestess",
            "number": "2",
            "arcana": "Major Arcana",
            "suit": null,
            "img": "tarot-json-master/cards/BurntWonderlandTarot/m02.jpg",
            "deck": "Burnt Wonderland Tarot",
            "description":
            "High Priestess represents secrets, mystery, intuition, wisdom, making the impossible become possible, and magic."
        },
        {
            "name": "The Empress",
            "number": "3",
            "arcana": "Major Arcana",
            "suit": null,
            "img": "tarot-json-master/cards/BurntWonderlandTarot/m03.jpg",
            "deck": "Burnt Wonderland Tarot",
            "description":
            "Empress represents feminine power, a nurturer and a family oriented person, our mother or a mother figure, abundance, femininity, fertility and the love of the home and family."
        },
        {
            "name": "The Emperor",
            "number": "4",
            "arcana": "Major Arcana",
            "suit": null,
            "img": "tarot-json-master/cards/BurntWonderlandTarot/m04.jpg",
            "deck": "Burnt Wonderland Tarot",
            "description":
            "Emperor represents masculine energy, the ruler, the head of the household, head of a company, organisation and communities. The Emperor is an authority figure that creates a solid foundation to build and create on."
        },
        {
            "name": "The Hierophant",
            "number": "5",
            "arcana": "Major Arcana",
            "suit": null,
            "img": "tarot-json-master/cards/BurntWonderlandTarot/m05.jpg",
            "deck": "Burnt Wonderland Tarot",
            "description":
            "Hierophant represents group consciousness, religion, your belief system, ceremony, traditions, kindness, charity, giving guidance in the form of spiritual counselling."
        },
        {
            "name": "The Lovers",
            "number": "6",
            "arcana": "Major Arcana",
            "suit": null,
            "img": "tarot-json-master/cards/BurntWonderlandTarot/m06.jpg",
            "deck": "Burnt Wonderland Tarot",
            "description":
            "Lovers represents love and relationship, soul mates, physical attractions, choices to be made, The Lovers represents doing the things that make us feel whole, being with the people who make us feel whole."
        },
        {
            "name": "The Chariot",
            "number": "7",
            "arcana": "Major Arcana",
            "suit": null,
            "img": "tarot-json-master/cards/BurntWonderlandTarot/m07.jpg",
            "deck": "Burnt Wonderland Tarot",
            "description":
            "Chariot represents your willpower and determination. It represents victory. The Chariot gives you the green light to charge ahead and take control in your life or an area of your life that needs your attention."
        },
        {
            "name": "Strength",
            "number": "8",
            "arcana": "Major Arcana",
            "suit": null,
            "img": "tarot-json-master/cards/BurntWonderlandTarot/m08.jpg",
            "deck": "Burnt Wonderland Tarot",
            "description":
            "Strength represents our courage, passions, strength, self-confidence, patience and compassion. Strength reminds us to follow our passions, to take the time to do the things that make us tick, that makes us strong within ourselves and which builds confidence and self-worth."
        },
        {
            "name": "The Hermit",
            "number": "9",
            "arcana": "Major Arcana",
            "suit": null,
            "img": "tarot-json-master/cards/BurntWonderlandTarot/m09.jpg",
            "deck": "Burnt Wonderland Tarot",
            "description":
            "Hermit represents spending time alone, being a lone wolf, soul-searching, seeking spiritual guidance, introspection."
        },
        {
            "name": "Wheel of Fortune",
            "number": "10",
            "arcana": "Major Arcana",
            "suit": null,
            "img": "tarot-json-master/cards/BurntWonderlandTarot/m10.jpg",
            "deck": "Burnt Wonderland Tarot",
            "description":
            "Wheel of Fortune is the Big destiny card in the tarot deck. What is meant to be is meant to be. In the tarot when the Wheel of Fortune turns up, it means that the events and people in your life are in your life due to it being pre-decided by destiny."
        },
        {
            "name": "Justice",
            "number": "11",
            "arcana": "Major Arcana",
            "suit": null,
            "img": "tarot-json-master/cards/BurntWonderlandTarot/m11.jpg",
            "deck": "Burnt Wonderland Tarot",
            "description":
            "Justice represents all kinds of legal matters, the spiritual laws of truth and cause and effect. When the Justice card shows up it reminds us to be lawful and fair to achieve the best result."
        },
        {
            "name": "The Hanged Man",
            "number": "12",
            "arcana": "Major Arcana",
            "suit": null,
            "img": "tarot-json-master/cards/BurntWonderlandTarot/m12.jpg",
            "deck": "Burnt Wonderland Tarot",
            "description":
            "Hanged Man represents being temporarily suspended. Life is on hold, but it serves a purpose."
        },
        {
            "name": "Death",
            "number": "13",
            "arcana": "Major Arcana",
            "suit": null,
            "img": "tarot-json-master/cards/BurntWonderlandTarot/m13.jpg",
            "deck": "Burnt Wonderland Tarot",
            "description":
            "Death represents transformation, endings and new beginnings. When the Death card shows up it tells you that things will not be the same again. A transformation is taking place, you are growing and changing with the circumstances you find yourself in."
        },
        {
            "name": "Temperance",
            "number": "14",
            "arcana": "Major Arcana",
            "suit": null,
            "img": "tarot-json-master/cards/BurntWonderlandTarot/m14.jpg",
            "deck": "Burnt Wonderland Tarot",
            "description":
            "Temperance represents balanced interaction between the elements to create something new and fresh. Temperance includes all the elements in such a way that it brings out the best of each substance. When the Temperance card shows up in your life there is great balance and strength between the different areas and people in your life that are working together."
        },
        {
            "name": "The Devil",
            "number": "15",
            "arcana": "Major Arcana",
            "suit": null,
            "img": "tarot-json-master/cards/BurntWonderlandTarot/m15.jpg",
            "deck": "Burnt Wonderland Tarot",
            "description":
            "Devil represents the primal source of behaviour that shows itself in the form of our desires and earthly needs. It also represents our fears that causes addiction and compulsive behaviour."
        },
        {
            "name": "The Tower",
            "number": "16",
            "arcana": "Major Arcana",
            "suit": null,
            "img": "tarot-json-master/cards/BurntWonderlandTarot/m16.jpg",
            "deck": "Burnt Wonderland Tarot",
            "description":
            "Tower represent disaster, emotional ‘meltdowns’ and/or tantrums, anger issues, upheaval, sudden change that is caused by disruption and revelations that rock the foundation of the person, household, organisation or even country, depending on the nature of the question."
        },
        {
            "name": "The Star",
            "number": "17",
            "arcana": "Major Arcana",
            "suit": null,
            "img": "tarot-json-master/cards/BurntWonderlandTarot/m17.jpg",
            "deck": "Burnt Wonderland Tarot",
            "description":
            "Star represents hope, a bright future, joy, optimism, guidance, having answers to your questions, being and feeling the connection to the divine, serenity and inspiration. The Star shines so brightly that when it shows up in a reading it tells you that you are being the light in someone’s life."
        },
        {
            "name": "The Moon",
            "number": "18",
            "arcana": "Major Arcana",
            "suit": null,
            "img": "tarot-json-master/cards/BurntWonderlandTarot/m18.jpg",
            "deck": "Burnt Wonderland Tarot",
            "description":
            "Moon represents illusions, intuition, fantasies, fears and anxiety. When the Moon appears things might not be quite as they seem. Your insecurities might be running high or you find yourself on the receiving end of other people’s insecurities."
        },
        {
            "name": "The Sun",
            "number": "19",
            "arcana": "Major Arcana",
            "suit": null,
            "img": "tarot-json-master/cards/BurntWonderlandTarot/m19.jpg",
            "deck": "Burnt Wonderland Tarot",
            "description":
            "Sun represents success, joy, sunshine, day, warmth and happiness. The Sun shows up when life is sunny and you are enjoying your time with the people you love. Life is simple rather than complicated. Relationships are blossoming and you are feeling loved."
        },
        {
            "name": "Judgement",
            "number": "20",
            "arcana": "Major Arcana",
            "suit": null,
            "img": "tarot-json-master/cards/BurntWonderlandTarot/m20.jpg",
            "deck": "Burnt Wonderland Tarot",
            "description":
            "Judgement represents taking responsibility for your actions and your life, being a good judge of character, seeing the truth and knowing what you want. The Judgement card often shows up when you need to step up and be a leader, speaking the truth and being more assertive."
        },
        {
            "name": "The World",
            "number": "21",
            "arcana": "Major Arcana",
            "suit": null,
            "img": "tarot-json-master/cards/BurntWonderlandTarot/m21.jpg",
            "deck": "Burnt Wonderland Tarot",
            "description":
            "World is the final Major Arcana card and represents fulfilment and successful completion of a cycle. You know your place in the world, and your life lessons have made you smart and accomplished. The World shows up when the world is ready for you and want what you have to offer."
        },
        {
            "name": "Ace of Cups",
            "number": "1",
            "arcana": "Minor Arcana",
            "suit": "Cups",
            "img": "tarot-json-master/cards/BurntWonderlandTarot/n01.jpg",
            "deck": "Burnt Wonderland Tarot",
            "description":
            "Ace of cups is the card for new love, compassion, joy and creativity. If this card shows up with Ace of Pentacles it often means moving in together in a relationship."
        },
        {
            "name": "Two of Cups",
            "number": "2",
            "arcana": "Minor Arcana",
            "suit": "Cups",
            "img": "tarot-json-master/cards/BurntWonderlandTarot/n02.jpg",
            "deck": "Burnt Wonderland Tarot",
            "description":
            "Two of cups is the card for being in love and being in a close relationship, There is real intimacy in the relationship, and you know and understand each other on a deep level."
        },
        {
            "name": "Three of Cups",
            "number": "3",
            "arcana": "Minor Arcana",
            "suit": "Cups",
            "img": "tarot-json-master/cards/BurntWonderlandTarot/n03.jpg",
            "deck": "Burnt Wonderland Tarot",
            "description":
            "Three of cups is the card for celebration, going out with friends, having a good time and being part of a community. This card often shows up when someone is getting engaged or married."
        },
        {
            "name": "Four of Cups",
            "number": "4",
            "arcana": "Minor Arcana",
            "suit": "Cups",
            "img": "tarot-json-master/cards/BurntWonderlandTarot/n04.jpg",
            "deck": "Burnt Wonderland Tarot",
            "description":
            "Four of cups is the card for contemplation. It often shows up when the querent is dissatisfied about something and doesn’t fully notice what they are being offered."
        },
        {
            "name": "Five of Cups",
            "number": "5",
            "arcana": "Minor Arcana",
            "suit": "Cups",
            "img": "tarot-json-master/cards/BurntWonderlandTarot/n05.jpg",
            "deck": "Burnt Wonderland Tarot",
            "description":
            "Five of cups is the card for regrets and disappointment, especially in love. A relationship might not have turned out the way you would have liked it to."
        },
        {
            "name": "Six of Cups",
            "number": "6",
            "arcana": "Minor Arcana",
            "suit": "Cups",
            "img": "tarot-json-master/cards/BurntWonderlandTarot/n06.jpg",
            "deck": "Burnt Wonderland Tarot",
            "description":
            "Six of cups is the card for sensuality and pleasure, memories, innocence, nostalgia and childhood. Sometimes this card shows up when someone from the past is on their way back into your life again."
        },
        {
            "name": "Seven of Cups",
            "number": "7",
            "arcana": "Minor Arcana",
            "suit": "Cups",
            "img": "tarot-json-master/cards/BurntWonderlandTarot/n07.jpg",
            "deck": "Burnt Wonderland Tarot",
            "description":
            "Seven of cups is the card for day dreaming, illusions, wishful thinking, and fantasies. This card usually shows up when you have plenty of choices and need a vision to make them a reality."
        },
        {
            "name": "Eight of Cups",
            "number": "8",
            "arcana": "Minor Arcana",
            "suit": "Cups",
            "img": "tarot-json-master/cards/BurntWonderlandTarot/n08.jpg",
            "deck": "Burnt Wonderland Tarot",
            "description":
            "Eight of cups is the card for turning your back at something to go and follow your dream. The day-dreaming that happened in Seven of cups has materialized in a vision that the querent is going to pursuit."
        },
        {
            "name": "Nine of Cups",
            "number": "9",
            "arcana": "Minor Arcana",
            "suit": "Cups",
            "img": "tarot-json-master/cards/BurntWonderlandTarot/n09.jpg",
            "deck": "Burnt Wonderland Tarot",
            "description":
            "Nine of cups is the card for getting what you want and having a wish come true. This card speaks of abundance and satisfaction, and also about being proud of what you have achieved."
        },
        {
            "name": "Ten of Cups",
            "number": "10",
            "arcana": "Minor Arcana",
            "suit": "Cups",
            "img": "tarot-json-master/cards/BurntWonderlandTarot/n10.jpg",
            "deck": "Burnt Wonderland Tarot",
            "description":
            "Ten of cups is the card for total spiritual bliss experienced in your relationship, home and family life. This card is about being in alignment with your true nature and everything in your life is in harmony with your higher self and purpose on this planet."
        },
        {
            "name": "Page of Cups",
            "number": "11",
            "arcana": "Minor Arcana",
            "suit": "Cups",
            "img": "tarot-json-master/cards/BurntWonderlandTarot/n11.jpg",
            "deck": "Burnt Wonderland Tarot",
            "description":
            "Page of cups denotes a young person with gentle and sensitive nature. This is someone who lives in wonder and can be quite naive at times."
        },
        {
            "name": "Knight of Cups",
            "number": "12",
            "arcana": "Minor Arcana",
            "suit": "Cups",
            "img": "tarot-json-master/cards/BurntWonderlandTarot/n12.jpg",
            "deck": "Burnt Wonderland Tarot",
            "description":
            "Knight of cups denotes a person on a quest to declare his love. This is your knight in shining armor. He is a singer, poet, and writer. He paints and creates wherever he goes. He is artistic and incredibly lovable."
        },
        {
            "name": "Queen of Cups",
            "number": "13",
            "arcana": "Minor Arcana",
            "suit": "Cups",
            "img": "tarot-json-master/cards/BurntWonderlandTarot/n13.jpg",
            "deck": "Burnt Wonderland Tarot",
            "description":
            "Queen of cups denotes a woman who is highly intuitive and sensitive. She is in touch with her emotions, her subconscious and the universe. She is compassionate and cares deeply about her life and those in it."
        },
        {
            "name": "King of Cups",
            "number": "14",
            "arcana": "Minor Arcana",
            "suit": "Cups",
            "img": "tarot-json-master/cards/BurntWonderlandTarot/n14.jpg",
            "deck": "Burnt Wonderland Tarot",
            "description":
            "King of cups denotes a warm, honest and generous man who is kind and fair. This is someone who is in control over his own emotions."
        },
        {
            "name": "Ace of Swords",
            "number": "1",
            "arcana": "Minor Arcana",
            "suit": "Swords",
            "img": "tarot-json-master/cards/BurntWonderlandTarot/o01.jpg",
            "deck": "Burnt Wonderland Tarot",
            "description":
            "Ace of swords is the card for a new thought and belief system. It is the potential of mental energy used to create clarity and often also justice."
        },
        {
            "name": "Two of Swords",
            "number": "2",
            "arcana": "Minor Arcana",
            "suit": "Swords",
            "img": "tarot-json-master/cards/BurntWonderlandTarot/o02.jpg",
            "deck": "Burnt Wonderland Tarot",
            "description":
            "Two of Swords is the card for compromise, passiveness, keeping the peace (as in not rocking the boat), stalemate, indecision and avoiding conflict."
        },
        {
            "name": "Three of Swords",
            "number": "3",
            "arcana": "Minor Arcana",
            "suit": "Swords",
            "img": "tarot-json-master/cards/BurntWonderlandTarot/o03.jpg",
            "deck": "Burnt Wonderland Tarot",
            "description":
            "Three of Swords denotes heartbreak. sorrow, pain and separation. Sometimes the separation is only temporary, other times it is final."
        },
        {
            "name": "Four of Swords",
            "number": "4",
            "arcana": "Minor Arcana",
            "suit": "Swords",
            "img": "tarot-json-master/cards/BurntWonderlandTarot/o04.jpg",
            "deck": "Burnt Wonderland Tarot",
            "description":
            "Four of Swords is about rest and rejuvenation, getting enough sleep and taking time out to meditate."
        },
        {
            "name": "Five of Swords",
            "number": "5",
            "arcana": "Minor Arcana",
            "suit": "Swords",
            "img": "tarot-json-master/cards/BurntWonderlandTarot/o05.jpg",
            "deck": "Burnt Wonderland Tarot",
            "description":
            "Five of Swords is the card for defeat and betrayal, conflict and unhealthy competition. Words will be hurtful, lies will be told and your weaknesses used against you."
        },
        {
            "name": "Six of Swords",
            "number": "6",
            "arcana": "Minor Arcana",
            "suit": "Swords",
            "img": "tarot-json-master/cards/BurntWonderlandTarot/o06.jpg",
            "deck": "Burnt Wonderland Tarot",
            "description":
            "Six of Swords is about crossing the troubled sea and entering into calmer water. This is the card for finding solutions and implementing them, often bringing other people with you in the process, ie, your family, friends, and colleagues."
        },
        {
            "name": "Seven of Swords",
            "number": "7",
            "arcana": "Minor Arcana",
            "suit": "Swords",
            "img": "tarot-json-master/cards/BurntWonderlandTarot/o07.jpg",
            "deck": "Burnt Wonderland Tarot",
            "description":
            "Seven of Swords denotes someone is moving forward in less than honourable ways. There is often dishonesty connected with this card, and trying to get away with something or trying to get out of something by lying."
        },
        {
            "name": "Eight of Swords",
            "number": "8",
            "arcana": "Minor Arcana",
            "suit": "Swords",
            "img": "tarot-json-master/cards/BurntWonderlandTarot/o08.jpg",
            "deck": "Burnt Wonderland Tarot",
            "description":
            "Eight of Swords is the card of being stuck and unable to move on due to confusion and not knowing what is going on. Often people draw this card when their own gut feeling is being overruled by other people."
        },
        {
            "name": "Nine of Swords",
            "number": "9",
            "arcana": "Minor Arcana",
            "suit": "Swords",
            "img": "tarot-json-master/cards/BurntWonderlandTarot/o09.jpg",
            "deck": "Burnt Wonderland Tarot",
            "description":
            "Nine of Swords denotes worry and anxiety, sleeplessness and being overwhelmed by negative emotions such as guilt and regrets."
        },
        {
            "name": "Ten of Swords",
            "number": "10",
            "arcana": "Minor Arcana",
            "suit": "Swords",
            "img": "tarot-json-master/cards/BurntWonderlandTarot/o10.jpg",
            "deck": "Burnt Wonderland Tarot",
            "description":
            "Ten of Swords is the card for endings and loss, backstabbing and lack of support. Sometimes this card denotes hitting rock bottom. It has the mentality of ‘when it rains it pours’, and the querent might be feeling there is no end of the suffering."
        },
        {
            "name": "Page of Swords",
            "number": "11",
            "arcana": "Minor Arcana",
            "suit": "Swords",
            "img": "tarot-json-master/cards/BurntWonderlandTarot/o11.jpg",
            "deck": "Burnt Wonderland Tarot",
            "description":
            "Page of Swords denotes a young and mentally very active and clever person. This is someone who can concentrate over long periods of time and who learns new skills easily, especially mental skills."
        },
        {
            "name": "Knight of Swords",
            "number": "12",
            "arcana": "Minor Arcana",
            "suit": "Swords",
            "img": "tarot-json-master/cards/BurntWonderlandTarot/o12.jpg",
            "deck": "Burnt Wonderland Tarot",
            "description":
            "Knight of Swords denotes a communicative, strong-minded and at times an opinionated person who is very action oriented and thrive on change. This is someone with a competitive streak and doesn’t like to let go of his/hers position in an argument."
        },
        {
            "name": "Queen of Swords",
            "number": "13",
            "arcana": "Minor Arcana",
            "suit": "Swords",
            "img": "tarot-json-master/cards/BurntWonderlandTarot/o13.jpg",
            "deck": "Burnt Wonderland Tarot",
            "description":
            "Queen of Swords denotes a woman who is cold, professional and smart. She is witty and funny in an intelligent way (no toilet humour). She often represents single women who have been hurt in love, and is bitter and hurt, but a master at covering it up."
        },
        {
            "name": "King of Swords",
            "number": "14",
            "arcana": "Minor Arcana",
            "suit": "Swords",
            "img": "tarot-json-master/cards/BurntWonderlandTarot/o14.jpg",
            "deck": "Burnt Wonderland Tarot",
            "description":
            "King of Swords denotes a professional man who is at the top of his game. This is someone who is an expert in his field and would have had to study to acquire this knowledge."
        },
        {
            "name": "Ace of Wands",
            "number": "1",
            "arcana": "Minor Arcana",
            "suit": "Wands",
            "img": "tarot-json-master/cards/BurntWonderlandTarot/p01.jpg",
            "deck": "Burnt Wonderland Tarot",
            "description":
            "Ace of wands speaks of new beginnings. Be bold and start something new. Follow your inspiration. Ace of Wands speaks of births of all kinds; the birth of enterprises and job opportunities, and also the birth of a baby."
        },
        {
            "name": "Two of Wands",
            "number": "2",
            "arcana": "Minor Arcana",
            "suit": "Wands",
            "img": "tarot-json-master/cards/BurntWonderlandTarot/p02.jpg",
            "deck": "Burnt Wonderland Tarot",
            "description":
            "Two of Wands is about manifesting using the will and strength of your mind. You might have to weigh up your options before deciding on the one that is best for you."
        },
        {
            "name": "Three of Wands",
            "number": "3",
            "arcana": "Minor Arcana",
            "suit": "Wands",
            "img": "tarot-json-master/cards/BurntWonderlandTarot/p03.jpg",
            "deck": "Burnt Wonderland Tarot",
            "description":
            "Three of Wands is the card for writers, and writing jobs and freelancers. It is also the card that follows the manifesting the querent did in Two of Wand, and the querent has now lived a new and exciting opportunity or dream."
        },
        {
            "name": "Four of Wands",
            "number": "4",
            "arcana": "Minor Arcana",
            "suit": "Wands",
            "img": "tarot-json-master/cards/BurntWonderlandTarot/p04.jpg",
            "deck": "Burnt Wonderland Tarot",
            "description":
            "Four of Wands is the card for harmony and developing on a larger scale, often expanding your living situation, and also being stronger connected to a community."
        },
        {
            "name": "Five of Wands",
            "number": "5",
            "arcana": "Minor Arcana",
            "suit": "Wands",
            "img": "tarot-json-master/cards/BurntWonderlandTarot/p05.jpg",
            "deck": "Burnt Wonderland Tarot",
            "description":
            "Five of Wands is about standing up for what is important to you, even if it means meeting some opposition."
        },
        {
            "name": "Six of Wands",
            "number": "6",
            "arcana": "Minor Arcana",
            "suit": "Wands",
            "img": "tarot-json-master/cards/BurntWonderlandTarot/p06.jpg",
            "deck": "Burnt Wonderland Tarot",
            "description":
            "Six of Wands is the card for popularity, progress, victory and success, self-confidence and getting what you want."
        },
        {
            "name": "Seven of Wands",
            "number": "7",
            "arcana": "Minor Arcana",
            "suit": "Wands",
            "img": "tarot-json-master/cards/BurntWonderlandTarot/p07.jpg",
            "deck": "Burnt Wonderland Tarot",
            "description":
            "Seven of Wands denotes being defensive and putting up barriers and boundaries. You are protecting your point of view and your position."
        },
        {
            "name": "Eight of Wands",
            "number": "8",
            "arcana": "Minor Arcana",
            "suit": "Wands",
            "img": "tarot-json-master/cards/BurntWonderlandTarot/p08.jpg",
            "deck": "Burnt Wonderland Tarot",
            "description":
            "Eight of Wands speaks of swift action and progress. It often shows up when there is a visitor coming, or when the querent is visiting someone."
        },
        {
            "name": "Nine of Wands",
            "number": "9",
            "arcana": "Minor Arcana",
            "suit": "Wands",
            "img": "tarot-json-master/cards/BurntWonderlandTarot/p09.jpg",
            "deck": "Burnt Wonderland Tarot",
            "description":
            "Nine of Wands is the card for strength, courage, resilience and endurance. Never give up and never surrender."
        },
        {
            "name": "Ten of Wands",
            "number": "10",
            "arcana": "Minor Arcana",
            "suit": "Wands",
            "img": "tarot-json-master/cards/BurntWonderlandTarot/p10.jpg",
            "deck": "Burnt Wonderland Tarot",
            "description":
            "Ten of Wands is the card for hard work and taking on more responsibility."
        },
        {
            "name": "Page of Wands",
            "number": "11",
            "arcana": "Minor Arcana",
            "suit": "Wands",
            "img": "tarot-json-master/cards/BurntWonderlandTarot/p11.jpg",
            "deck": "Burnt Wonderland Tarot",
            "description":
            "Page of Wands denotes an enthusiastic young person who is eager to explore and gain life experience."
        },
        {
            "name": "Knight of Wands",
            "number": "12",
            "arcana": "Minor Arcana",
            "suit": "Wands",
            "img": "tarot-json-master/cards/BurntWonderlandTarot/p12.jpg",
            "deck": "Burnt Wonderland Tarot",
            "description":
            "Knight of Wands denotes a person who is travelling through life at a high-speed, living life in the fast lane. This is someone who will be the life of the party."
        },
        {
            "name": "Queen of Wands",
            "number": "13",
            "arcana": "Minor Arcana",
            "suit": "Wands",
            "img": "tarot-json-master/cards/BurntWonderlandTarot/p13.jpg",
            "deck": "Burnt Wonderland Tarot",
            "description":
            "Queen of Wands denotes a warm, kind and passionate woman. She is goal oriented and determined. She is also a metaphysic who can use her mind both to create harmony and havoc."
        },
        {
            "name": "King of Wands",
            "number": "14",
            "arcana": "Minor Arcana",
            "suit": "Wands",
            "img": "tarot-json-master/cards/BurntWonderlandTarot/p14.jpg",
            "deck": "Burnt Wonderland Tarot",
            "description":
            "King of Wands denotes a married man who is a natural and charismatic leader. He has entrepreneurial skills and loves to run a new and exciting project."
        },
        {
            "name": "Ace of Pentacles",
            "number": "1",
            "arcana": "Minor Arcana",
            "suit": "Pentacles",
            "img": "tarot-json-master/cards/BurntWonderlandTarot/q01.jpg",
            "deck": "Burnt Wonderland Tarot",
            "description":
            "Ace of Pentacles symbolises a new beginning in your financial situation and an opportunity to deepen your security."
        },
        {
            "name": "Two of Pentacles",
            "number": "2",
            "arcana": "Minor Arcana",
            "suit": "Pentacles",
            "img": "tarot-json-master/cards/BurntWonderlandTarot/q02.jpg",
            "deck": "Burnt Wonderland Tarot",
            "description":
            "Two of Pentacles symbolises juggling with finances. You might have income from more than one source. Two of Pentacles also indicates investing money into different projects, or bartering."
        },
        {
            "name": "Three of Pentacles",
            "number": "3",
            "arcana": "Minor Arcana",
            "suit": "Pentacles",
            "img": "tarot-json-master/cards/BurntWonderlandTarot/q03.jpg",
            "deck": "Burnt Wonderland Tarot",
            "description":
            "Three of Pentacles symbolises your work, especially where team work or listening to clients/customers are concerned. This is a positive card which indicates job satisfaction and taking pride in your work, but you must put in the effort to see results."
        },
        {
            "name": "Four of Pentacles",
            "number": "4",
            "arcana": "Minor Arcana",
            "suit": "Pentacles",
            "img": "tarot-json-master/cards/BurntWonderlandTarot/q04.jpg",
            "deck": "Burnt Wonderland Tarot",
            "description":
            "Four of Pentacles symbolises the need for security and recognition in your life, to have control over your possession and to keep abundance and money increasing. This card shows stubbornness in the situation or in the querent."
        },
        {
            "name": "Five of Pentacles",
            "number": "5",
            "arcana": "Minor Arcana",
            "suit": "Pentacles",
            "img": "tarot-json-master/cards/BurntWonderlandTarot/q05.jpg",
            "deck": "Burnt Wonderland Tarot",
            "description":
            "Five of Pentacles symbolises financial loss or hardship. It can also mean you are in a place where you feel there is no security and your health might be suffering."
        },
        {
            "name": "Six of Pentacles",
            "number": "6",
            "arcana": "Minor Arcana",
            "suit": "Pentacles",
            "img": "tarot-json-master/cards/BurntWonderlandTarot/q06.jpg",
            "deck": "Burnt Wonderland Tarot",
            "description":
            "Six of Pentacles symbolises generosity towards those who has less than you. It can also mean receiving generosity from others."
        },
        {
            "name": "Seven of Pentacles",
            "number": "7",
            "arcana": "Minor Arcana",
            "suit": "Pentacles",
            "img": "tarot-json-master/cards/BurntWonderlandTarot/q07.jpg",
            "deck": "Burnt Wonderland Tarot",
            "description":
            "Seven of Pentacles symbolises a vision that will pay off in the future. You are planting the seeds so that you will be able to harvest a more secure and abundant future for yourself."
        },
        {
            "name": "Eight of Pentacles",
            "number": "8",
            "arcana": "Minor Arcana",
            "suit": "Pentacles",
            "img": "tarot-json-master/cards/BurntWonderlandTarot/q08.jpg",
            "deck": "Burnt Wonderland Tarot",
            "description":
            "Eight of Pentacles symbolise craftsmanship in regards to work. It can also mean doing an apprenticeship and/or learning a new skill."
        },
        {
            "name": "Nine of Pentacles",
            "number": "9",
            "arcana": "Minor Arcana",
            "suit": "Pentacles",
            "img": "tarot-json-master/cards/BurntWonderlandTarot/q09.jpg",
            "deck": "Burnt Wonderland Tarot",
            "description":
            "Nine of Pentacles symbolises luxury, financial security and being on a lavish holiday."
        },
        {
            "name": "Ten of Pentacles",
            "number": "10",
            "arcana": "Minor Arcana",
            "suit": "Pentacles",
            "img": "tarot-json-master/cards/BurntWonderlandTarot/q10.jpg",
            "deck": "Burnt Wonderland Tarot",
            "description":
            "Ten of Pentacles symbolises the type of wealth you get when you inherit something, being it your own retirement money, hand me downs, or possessions from someone who has passes away."
        },
        {
            "name": "Page of Pentacles",
            "number": "11",
            "arcana": "Minor Arcana",
            "suit": "Pentacles",
            "img": "tarot-json-master/cards/BurntWonderlandTarot/q11.jpg",
            "deck": "Burnt Wonderland Tarot",
            "description":
            "Page of Pentacles indicates reinventing yourself in some way. It often denotes an opportunity to start something new, whether it is a creative venture, studying, business or a new job offer. Page of pentacles is not yet an expert in the field of choice but has a clear goal and dream to achieve."
        },
        {
            "name": "Knight of Pentacles",
            "number": "12",
            "arcana": "Minor Arcana",
            "suit": "Pentacles",
            "img": 'tarot-json-master/cards/BurntWonderlandTarot/q12.jpg',
            "deck": "Burnt Wonderland Tarot",
            "description":
            "Knight of Pentacles denotes being of service and doing the actual work (in contrast to Page of Pentacles who enjoys daydreaming about the idea rather than actual living it). Knight of Pentacles is comfortable with routine and is efficient and conservative."
        },
        {
            "name": "Queen of Pentacles",
            "number": "13",
            "arcana": "Minor Arcana",
            "suit": "Pentacles",
            "img": 'tarot-json-master/cards/BurntWonderlandTarot/q13.jpg',
            "deck": "Burnt Wonderland Tarot",
            "description":
            "Queen of Pentacles is someone with a down to earth and practical approach to life and situations. It is important to have work/home balance, in fact if you could work from home you probably would. This card takes enjoyment in material pleasures and success."
        },
        {
            "name": "King of Pentacles",
            "number": "14",
            "arcana": "Minor Arcana",
            "suit": "Pentacles",
            "img": `tarot-json-master/cards/BurntWonderlandTarot/q14.jpg`,
            "deck": "Burnt Wonderland Tarot",
            "description":
            "King of Pentacles symbolises a successful businessman or a person in a manager position. This is a stable and authoritative character, who is hard-working and dependable."
        },
    ];
        
        let c4 = burnt[Math.floor(Math.random() * burnt.length)];

        const d = new MessageAttachment(`${c4.img}`, 'image.jpg');

        const tar = new MessageEmbed()
        .setTitle(`${c4.name}`)
        .setDescription(`Arcana: ${c4.arcana}\nNumber: ${c4.number}\nSuit: ${c4.suit}`)
        .addField("Meaning:", `${c4.description}`)
        .attachFiles(d)
        .setImage(`attachment://image.jpg`)
        .setFooter(`Deck: ${c4.deck}`)
        .setColor(`#D21F3C`)
        let pixel =  [
            {
                "name": "The Fool",
                "number": "0",
                "arcana": "Major Arcana",
                "suit": null,
                "img": "tarot-json-master/cards/Chee's Pixel Tarot/TarotCards2x/Major Arcana/major0_fool.png",
                "deck": "Chee's pixel Tarot",
                "description":
                "Fool represents new beginnings, having faith in the future, being inexperienced, not knowing what to expect, having beginners luck, improvising, believing that the Universe provides, having no strings attached, being carefree."
            },
            {
                "name": "The Magician",
                "number": "1",
                "arcana": "Major Arcana",
                "suit": null,
                "img": "tarot-json-master/cards/Chee's Pixel Tarot/TarotCards2x/Major Arcana/major1_magician.png",
                "deck": "Chee's pixel Tarot",
                "description":
                "Magician represents your ability to communicate clearly, to ‘sell’ yourself and to be innovative. The Magician has all the tools and resources available to manifest his desired outcome, so it is a good card to get if you want to create."
            },
            {
                "name": "The High Priestess",
                "number": "2",
                "arcana": "Major Arcana",
                "suit": null,
                "img": "tarot-json-master/cards/Chee's Pixel Tarot/TarotCards2x/Major Arcana/major2_preistess.png",
                "deck": "Chee's pixel Tarot",
                "description":
                "High Priestess represents secrets, mystery, intuition, wisdom, making the impossible become possible, and magic."
            },
            {
                "name": "The Empress",
                "number": "3",
                "arcana": "Major Arcana",
                "suit": null,
                "img": "tarot-json-master/cards/Chee's Pixel Tarot/TarotCards2x/Major Arcana/major3_empress.png",
                "deck": "Chee's pixel Tarot",
                "description":
                "Empress represents feminine power, a nurturer and a family oriented person, our mother or a mother figure, abundance, femininity, fertility and the love of the home and family."
            },
            {
                "name": "The Emperor",
                "number": "4",
                "arcana": "Major Arcana",
                "suit": null,
                "img": "tarot-json-master/cards/Chee's Pixel Tarot/TarotCards2x/Major Arcana/major4_emperor.png",
                "deck": "Chee's pixel Tarot",
                "description":
                "Emperor represents masculine energy, the ruler, the head of the household, head of a company, organisation and communities. The Emperor is an authority figure that creates a solid foundation to build and create on."
            },
            {
                "name": "The Hierophant",
                "number": "5",
                "arcana": "Major Arcana",
                "suit": null,
                "img": "tarot-json-master/cards/Chee's Pixel Tarot/TarotCards2x/Major Arcana/major5_hierophant.png",
                "deck": "Chee's pixel Tarot",
                "description":
                "Hierophant represents group consciousness, religion, your belief system, ceremony, traditions, kindness, charity, giving guidance in the form of spiritual counselling."
            },
            {
                "name": "The Lovers",
                "number": "6",
                "arcana": "Major Arcana",
                "suit": null,
                "img": "tarot-json-master/cards/Chee's Pixel Tarot/TarotCards2x/Major Arcana/major6_lovers.png",
                "deck": "Chee's pixel Tarot",
                "description":
                "Lovers represents love and relationship, soul mates, physical attractions, choices to be made, The Lovers represents doing the things that make us feel whole, being with the people who make us feel whole."
            },
            {
                "name": "The Chariot",
                "number": "7",
                "arcana": "Major Arcana",
                "suit": null,
                "img": "tarot-json-master/cards/Chee's Pixel Tarot/TarotCards2x/Major Arcana/major7_chariot.png",
                "deck": "Chee's pixel Tarot",
                "description":
                "Chariot represents your willpower and determination. It represents victory. The Chariot gives you the green light to charge ahead and take control in your life or an area of your life that needs your attention."
            },
            {
                "name": "Strength",
                "number": "8",
                "arcana": "Major Arcana",
                "suit": null,
                "img": "tarot-json-master/cards/Chee's Pixel Tarot/TarotCards2x/Major Arcana/major8_strenght.png",
                "deck": "Chee's pixel Tarot",
                "description":
                "Strength represents our courage, passions, strength, self-confidence, patience and compassion. Strength reminds us to follow our passions, to take the time to do the things that make us tick, that makes us strong within ourselves and which builds confidence and self-worth."
            },
            {
                "name": "The Hermit",
                "number": "9",
                "arcana": "Major Arcana",
                "suit": null,
                "img": "tarot-json-master/cards/Chee's Pixel Tarot/TarotCards2x/Major Arcana/major9_hermit.png",
                "deck": "Chee's pixel Tarot",
                "description":
                "Hermit represents spending time alone, being a lone wolf, soul-searching, seeking spiritual guidance, introspection."
            },
            {
                "name": "Wheel of Fortune",
                "number": "10",
                "arcana": "Major Arcana",
                "suit": null,
                "img": "tarot-json-master/cards/Chee's Pixel Tarot/TarotCards2x/Major Arcana/major10_wheel.png",
                "deck": "Chee's pixel Tarot",
                "description":
                "Wheel of Fortune is the Big destiny card in the tarot deck. What is meant to be is meant to be. In the tarot when the Wheel of Fortune turns up, it means that the events and people in your life are in your life due to it being pre-decided by destiny."
            },
            {
                "name": "Justice",
                "number": "11",
                "arcana": "Major Arcana",
                "suit": null,
                "img": "tarot-json-master/cards/Chee's Pixel Tarot/TarotCards2x/Major Arcana/major11_justice.png",
                "deck": "Chee's pixel Tarot",
                "description":
                "Justice represents all kinds of legal matters, the spiritual laws of truth and cause and effect. When the Justice card shows up it reminds us to be lawful and fair to achieve the best result."
            },
            {
                "name": "The Hanged Man",
                "number": "12",
                "arcana": "Major Arcana",
                "suit": null,
                "img": "tarot-json-master/cards/Chee's Pixel Tarot/TarotCards2x/Major Arcana/major12_hanged.png",
                "deck": "Chee's pixel Tarot",
                "description":
                "Hanged Man represents being temporarily suspended. Life is on hold, but it serves a purpose."
            },
            {
                "name": "Death",
                "number": "13",
                "arcana": "Major Arcana",
                "suit": null,
                "img": "tarot-json-master/cards/Chee's Pixel Tarot/TarotCards2x/Major Arcana/major13_death.png",
                "deck": "Chee's pixel Tarot",
                "description":
                "Death represents transformation, endings and new beginnings. When the Death card shows up it tells you that things will not be the same again. A transformation is taking place, you are growing and changing with the circumstances you find yourself in."
            },
            {
                "name": "Temperance",
                "number": "14",
                "arcana": "Major Arcana",
                "suit": null,
                "img": "tarot-json-master/cards/Chee's Pixel Tarot/TarotCards2x/Major Arcana/major14_temperance.png",
                "deck": "Chee's pixel Tarot",
                "description":
                "Temperance represents balanced interaction between the elements to create something new and fresh. Temperance includes all the elements in such a way that it brings out the best of each substance. When the Temperance card shows up in your life there is great balance and strength between the different areas and people in your life that are working together."
            },
            {
                "name": "The Devil",
                "number": "15",
                "arcana": "Major Arcana",
                "suit": null,
                "img": "tarot-json-master/cards/Chee's Pixel Tarot/TarotCards2x/Major Arcana/major15_devil.png",
                "deck": "Chee's pixel Tarot",
                "description":
                "Devil represents the primal source of behaviour that shows itself in the form of our desires and earthly needs. It also represents our fears that causes addiction and compulsive behaviour."
            },
            {
                "name": "The Tower",
                "number": "16",
                "arcana": "Major Arcana",
                "suit": null,
                "img": "tarot-json-master/cards/Chee's Pixel Tarot/TarotCards2x/Major Arcana/major16_tower.png",
                "deck": "Chee's pixel Tarot",
                "description":
                "Tower represent disaster, emotional ‘meltdowns’ and/or tantrums, anger issues, upheaval, sudden change that is caused by disruption and revelations that rock the foundation of the person, household, organisation or even country, depending on the nature of the question."
            },
            {
                "name": "The Star",
                "number": "17",
                "arcana": "Major Arcana",
                "suit": null,
                "img": "tarot-json-master/cards/Chee's Pixel Tarot/TarotCards2x/Major Arcana/major17_star.png",
                "deck": "Chee's pixel Tarot",
                "description":
                "Star represents hope, a bright future, joy, optimism, guidance, having answers to your questions, being and feeling the connection to the divine, serenity and inspiration. The Star shines so brightly that when it shows up in a reading it tells you that you are being the light in someone’s life."
            },
            {
                "name": "The Moon",
                "number": "18",
                "arcana": "Major Arcana",
                "suit": null,
                "img": "tarot-json-master/cards/Chee's Pixel Tarot/TarotCards2x/Major Arcana/major18_moon.png",
                "deck": "Chee's pixel Tarot",
                "description":
                "Moon represents illusions, intuition, fantasies, fears and anxiety. When the Moon appears things might not be quite as they seem. Your insecurities might be running high or you find yourself on the receiving end of other people’s insecurities."
            },
            {
                "name": "The Sun",
                "number": "19",
                "arcana": "Major Arcana",
                "suit": null,
                "img": "tarot-json-master/cards/Chee's Pixel Tarot/TarotCards2x/Major Arcana/major18_sun.png",
                "deck": "Chee's pixel Tarot",
                "description":
                "Sun represents success, joy, sunshine, day, warmth and happiness. The Sun shows up when life is sunny and you are enjoying your time with the people you love. Life is simple rather than complicated. Relationships are blossoming and you are feeling loved."
            },
            {
                "name": "Judgement",
                "number": "20",
                "arcana": "Major Arcana",
                "suit": null,
                "img": "tarot-json-master/cards/Chee's Pixel Tarot/TarotCards2x/Major Arcana/major20_judgement.png",
                "deck": "Chee's pixel Tarot",
                "description":
                "Judgement represents taking responsibility for your actions and your life, being a good judge of character, seeing the truth and knowing what you want. The Judgement card often shows up when you need to step up and be a leader, speaking the truth and being more assertive."
            },
            {
                "name": "The World",
                "number": "21",
                "arcana": "Major Arcana",
                "suit": null,
                "img": "tarot-json-master/cards/Chee's Pixel Tarot/TarotCards2x/Major Arcana/major21_world.png",
                "deck": "Chee's pixel Tarot",
                "description":
                "World is the final Major Arcana card and represents fulfilment and successful completion of a cycle. You know your place in the world, and your life lessons have made you smart and accomplished. The World shows up when the world is ready for you and want what you have to offer."
            },
            {
                "name": "Ace of Cups",
                "number": "1",
                "arcana": "Minor Arcana",
                "suit": "Cups",
                "img": "tarot-json-master/cards/Chee's Pixel Tarot/TarotCards2x/Cups/cups1.png",
                "deck": "Chee's pixel Tarot",
                "description":
                "Ace of cups is the card for new love, compassion, joy and creativity. If this card shows up with Ace of Pentacles it often means moving in together in a relationship."
            },
            {
                "name": "Two of Cups",
                "number": "2",
                "arcana": "Minor Arcana",
                "suit": "Cups",
                "img": "tarot-json-master/cards/Chee's Pixel Tarot/TarotCards2x/Cups/cups2.png",
                "deck": "Chee's pixel Tarot",
                "description":
                "Two of cups is the card for being in love and being in a close relationship, There is real intimacy in the relationship, and you know and understand each other on a deep level."
            },
            {
                "name": "Three of Cups",
                "number": "3",
                "arcana": "Minor Arcana",
                "suit": "Cups",
                "img": "tarot-json-master/cards/Chee's Pixel Tarot/TarotCards2x/Cups/cups3.png",
                "deck": "Chee's pixel Tarot",
                "description":
                "Three of cups is the card for celebration, going out with friends, having a good time and being part of a community. This card often shows up when someone is getting engaged or married."
            },
            {
                "name": "Four of Cups",
                "number": "4",
                "arcana": "Minor Arcana",
                "suit": "Cups",
                "img": "tarot-json-master/cards/Chee's Pixel Tarot/TarotCards2x/Cups/cups4.png",
                "deck": "Chee's pixel Tarot",
                "description":
                "Four of cups is the card for contemplation. It often shows up when the querent is dissatisfied about something and doesn’t fully notice what they are being offered."
            },
            {
                "name": "Five of Cups",
                "number": "5",
                "arcana": "Minor Arcana",
                "suit": "Cups",
                "img": "tarot-json-master/cards/Chee's Pixel Tarot/TarotCards2x/Cups/cups5.png",
                "deck": "Chee's pixel Tarot",
                "description":
                "Five of cups is the card for regrets and disappointment, especially in love. A relationship might not have turned out the way you would have liked it to."
            },
            {
                "name": "Six of Cups",
                "number": "6",
                "arcana": "Minor Arcana",
                "suit": "Cups",
                "img": "tarot-json-master/cards/Chee's Pixel Tarot/TarotCards2x/Cups/cups6.png",
                "deck": "Chee's pixel Tarot",
                "description":
                "Six of cups is the card for sensuality and pleasure, memories, innocence, nostalgia and childhood. Sometimes this card shows up when someone from the past is on their way back into your life again."
            },
            {
                "name": "Seven of Cups",
                "number": "7",
                "arcana": "Minor Arcana",
                "suit": "Cups",
                "img": "tarot-json-master/cards/Chee's Pixel Tarot/TarotCards2x/Cups/cups7.png",
                "deck": "Chee's pixel Tarot",
                "description":
                "Seven of cups is the card for day dreaming, illusions, wishful thinking, and fantasies. This card usually shows up when you have plenty of choices and need a vision to make them a reality."
            },
            {
                "name": "Eight of Cups",
                "number": "8",
                "arcana": "Minor Arcana",
                "suit": "Cups",
                "img": "tarot-json-master/cards/Chee's Pixel Tarot/TarotCards2x/Cups/cups8.png",
                "deck": "Chee's pixel Tarot",
                "description":
                "Eight of cups is the card for turning your back at something to go and follow your dream. The day-dreaming that happened in Seven of cups has materialized in a vision that the querent is going to pursuit."
            },
            {
                "name": "Nine of Cups",
                "number": "9",
                "arcana": "Minor Arcana",
                "suit": "Cups",
                "img": "tarot-json-master/cards/Chee's Pixel Tarot/TarotCards2x/Cups/cups9.png",
                "deck": "Chee's pixel Tarot",
                "description":
                "Nine of cups is the card for getting what you want and having a wish come true. This card speaks of abundance and satisfaction, and also about being proud of what you have achieved."
            },
            {
                "name": "Ten of Cups",
                "number": "10",
                "arcana": "Minor Arcana",
                "suit": "Cups",
                "img": "tarot-json-master/cards/Chee's Pixel Tarot/TarotCards2x/Cups/cups10.png",
                "deck": "Chee's pixel Tarot",
                "description":
                "Ten of cups is the card for total spiritual bliss experienced in your relationship, home and family life. This card is about being in alignment with your true nature and everything in your life is in harmony with your higher self and purpose on this planet."
            },
            {
                "name": "Page of Cups",
                "number": "11",
                "arcana": "Minor Arcana",
                "suit": "Cups",
                "img": "tarot-json-master/cards/Chee's Pixel Tarot/TarotCards2x/Cups/cupsP.png",
                "deck": "Chee's pixel Tarot",
                "description":
                "Page of cups denotes a young person with gentle and sensitive nature. This is someone who lives in wonder and can be quite naive at times."
            },
            {
                "name": "Knight of Cups",
                "number": "12",
                "arcana": "Minor Arcana",
                "suit": "Cups",
                "img": "tarot-json-master/cards/Chee's Pixel Tarot/TarotCards2x/Cups/cupsKn.png",
                "deck": "Chee's pixel Tarot",
                "description":
                "Knight of cups denotes a person on a quest to declare his love. This is your knight in shining armor. He is a singer, poet, and writer. He paints and creates wherever he goes. He is artistic and incredibly lovable."
            },
            {
                "name": "Queen of Cups",
                "number": "13",
                "arcana": "Minor Arcana",
                "suit": "Cups",
                "img": "tarot-json-master/cards/Chee's Pixel Tarot/TarotCards2x/Cups/cupsQ.png",
                "deck": "Chee's pixel Tarot",
                "description":
                "Queen of cups denotes a woman who is highly intuitive and sensitive. She is in touch with her emotions, her subconscious and the universe. She is compassionate and cares deeply about her life and those in it."
            },
            {
                "name": "King of Cups",
                "number": "14",
                "arcana": "Minor Arcana",
                "suit": "Cups",
                "img": "tarot-json-master/cards/Chee's Pixel Tarot/TarotCards2x/Cups/cupsK.png",
                "deck": "Chee's pixel Tarot",
                "description":
                "King of cups denotes a warm, honest and generous man who is kind and fair. This is someone who is in control over his own emotions."
            },
            {
                "name": "Ace of Swords",
                "number": "1",
                "arcana": "Minor Arcana",
                "suit": "Swords",
                "img": "tarot-json-master/cards/Chee's Pixel Tarot/TarotCards2x/Swords/swords1.png",
                "deck": "Chee's pixel Tarot",
                "description":
                "Ace of swords is the card for a new thought and belief system. It is the potential of mental energy used to create clarity and often also justice."
            },
            {
                "name": "Two of Swords",
                "number": "2",
                "arcana": "Minor Arcana",
                "suit": "Swords",
                "img": "tarot-json-master/cards/Chee's Pixel Tarot/TarotCards2x/Swords/swords2.png",
                "deck": "Chee's pixel Tarot",
                "description":
                "Two of Swords is the card for compromise, passiveness, keeping the peace (as in not rocking the boat), stalemate, indecision and avoiding conflict."
            },
            {
                "name": "Three of Swords",
                "number": "3",
                "arcana": "Minor Arcana",
                "suit": "Swords",
                "img": "tarot-json-master/cards/Chee's Pixel Tarot/TarotCards2x/Swords/swords3.png",
                "deck": "Chee's pixel Tarot",
                "description":
                "Three of Swords denotes heartbreak. sorrow, pain and separation. Sometimes the separation is only temporary, other times it is final."
            },
            {
                "name": "Four of Swords",
                "number": "4",
                "arcana": "Minor Arcana",
                "suit": "Swords",
                "img": "tarot-json-master/cards/Chee's Pixel Tarot/TarotCards2x/Swords/swords4.png",
                "deck": "Chee's pixel Tarot",
                "description":
                "Four of Swords is about rest and rejuvenation, getting enough sleep and taking time out to meditate."
            },
            {
                "name": "Five of Swords",
                "number": "5",
                "arcana": "Minor Arcana",
                "suit": "Swords",
                "img": "tarot-json-master/cards/Chee's Pixel Tarot/TarotCards2x/Swords/swords5.png",
                "deck": "Chee's pixel Tarot",
                "description":
                "Five of Swords is the card for defeat and betrayal, conflict and unhealthy competition. Words will be hurtful, lies will be told and your weaknesses used against you."
            },
            {
                "name": "Six of Swords",
                "number": "6",
                "arcana": "Minor Arcana",
                "suit": "Swords",
                "img": "tarot-json-master/cards/Chee's Pixel Tarot/TarotCards2x/Swords/swords6.png",
                "deck": "Chee's pixel Tarot",
                "description":
                "Six of Swords is about crossing the troubled sea and entering into calmer water. This is the card for finding solutions and implementing them, often bringing other people with you in the process, ie, your family, friends, and colleagues."
            },
            {
                "name": "Seven of Swords",
                "number": "7",
                "arcana": "Minor Arcana",
                "suit": "Swords",
                "img": "tarot-json-master/cards/Chee's Pixel Tarot/TarotCards2x/Swords/swords7.png",
                "deck": "Chee's pixel Tarot",
                "description":
                "Seven of Swords denotes someone is moving forward in less than honourable ways. There is often dishonesty connected with this card, and trying to get away with something or trying to get out of something by lying."
            },
            {
                "name": "Eight of Swords",
                "number": "8",
                "arcana": "Minor Arcana",
                "suit": "Swords",
                "img": "tarot-json-master/cards/Chee's Pixel Tarot/TarotCards2x/Swords/swords8.png",
                "deck": "Chee's pixel Tarot",
                "description":
                "Eight of Swords is the card of being stuck and unable to move on due to confusion and not knowing what is going on. Often people draw this card when their own gut feeling is being overruled by other people."
            },
            {
                "name": "Nine of Swords",
                "number": "9",
                "arcana": "Minor Arcana",
                "suit": "Swords",
                "img": "tarot-json-master/cards/Chee's Pixel Tarot/TarotCards2x/Swords/swords9.png",
                "deck": "Chee's pixel Tarot",
                "description":
                "Nine of Swords denotes worry and anxiety, sleeplessness and being overwhelmed by negative emotions such as guilt and regrets."
            },
            {
                "name": "Ten of Swords",
                "number": "10",
                "arcana": "Minor Arcana",
                "suit": "Swords",
                "img": "tarot-json-master/cards/Chee's Pixel Tarot/TarotCards2x/Swords/swords10.png",
                "deck": "Chee's pixel Tarot",
                "description":
                "Ten of Swords is the card for endings and loss, backstabbing and lack of support. Sometimes this card denotes hitting rock bottom. It has the mentality of ‘when it rains it pours’, and the querent might be feeling there is no end of the suffering."
            },
            {
                "name": "Page of Swords",
                "number": "11",
                "arcana": "Minor Arcana",
                "suit": "Swords",
                "img": "tarot-json-master/cards/Chee's Pixel Tarot/TarotCards2x/Swords/swordsP.png",
                "deck": "Chee's pixel Tarot",
                "description":
                "Page of Swords denotes a young and mentally very active and clever person. This is someone who can concentrate over long periods of time and who learns new skills easily, especially mental skills."
            },
            {
                "name": "Knight of Swords",
                "number": "12",
                "arcana": "Minor Arcana",
                "suit": "Swords",
                "img": "tarot-json-master/cards/Chee's Pixel Tarot/TarotCards2x/Swords/swordsKn.png",
                "deck": "Chee's pixel Tarot",
                "description":
                "Knight of Swords denotes a communicative, strong-minded and at times an opinionated person who is very action oriented and thrive on change. This is someone with a competitive streak and doesn’t like to let go of his/hers position in an argument."
            },
            {
                "name": "Queen of Swords",
                "number": "13",
                "arcana": "Minor Arcana",
                "suit": "Swords",
                "img": "tarot-json-master/cards/Chee's Pixel Tarot/TarotCards2x/Swords/swordsQ.png",
                "deck": "Chee's pixel Tarot",
                "description":
                "Queen of Swords denotes a woman who is cold, professional and smart. She is witty and funny in an intelligent way (no toilet humour). She often represents single women who have been hurt in love, and is bitter and hurt, but a master at covering it up."
            },
            {
                "name": "King of Swords",
                "number": "14",
                "arcana": "Minor Arcana",
                "suit": "Swords",
                "img": "tarot-json-master/cards/Chee's Pixel Tarot/TarotCards2x/Swords/swordsK.png",
                "deck": "Chee's pixel Tarot",
                "description":
                "King of Swords denotes a professional man who is at the top of his game. This is someone who is an expert in his field and would have had to study to acquire this knowledge."
            },
            {
                "name": "Ace of Wands",
                "number": "1",
                "arcana": "Minor Arcana",
                "suit": "Wands",
                "img": "tarot-json-master/cards/Chee's Pixel Tarot/TarotCards2x/Wands/wands1.png",
                "deck": "Chee's pixel Tarot",
                "description":
                "Ace of wands speaks of new beginnings. Be bold and start something new. Follow your inspiration. Ace of Wands speaks of births of all kinds; the birth of enterprises and job opportunities, and also the birth of a baby."
            },
            {
                "name": "Two of Wands",
                "number": "2",
                "arcana": "Minor Arcana",
                "suit": "Wands",
                "img": "tarot-json-master/cards/Chee's Pixel Tarot/TarotCards2x/Wands/wands2.png",
                "deck": "Chee's pixel Tarot",
                "description":
                "Two of Wands is about manifesting using the will and strength of your mind. You might have to weigh up your options before deciding on the one that is best for you."
            },
            {
                "name": "Three of Wands",
                "number": "3",
                "arcana": "Minor Arcana",
                "suit": "Wands",
                "img": "tarot-json-master/cards/Chee's Pixel Tarot/TarotCards2x/Wands/wands3.png",
                "deck": "Chee's pixel Tarot",
                "description":
                "Three of Wands is the card for writers, and writing jobs and freelancers. It is also the card that follows the manifesting the querent did in Two of Wand, and the querent has now lived a new and exciting opportunity or dream."
            },
            {
                "name": "Four of Wands",
                "number": "4",
                "arcana": "Minor Arcana",
                "suit": "Wands",
                "img": "tarot-json-master/cards/Chee's Pixel Tarot/TarotCards2x/Wands/wands4.png",
                "deck": "Chee's pixel Tarot",
                "description":
                "Four of Wands is the card for harmony and developing on a larger scale, often expanding your living situation, and also being stronger connected to a community."
            },
            {
                "name": "Five of Wands",
                "number": "5",
                "arcana": "Minor Arcana",
                "suit": "Wands",
                "img": "tarot-json-master/cards/Chee's Pixel Tarot/TarotCards2x/Wands/wands5.png",
                "deck": "Chee's pixel Tarot",
                "description":
                "Five of Wands is about standing up for what is important to you, even if it means meeting some opposition."
            },
            {
                "name": "Six of Wands",
                "number": "6",
                "arcana": "Minor Arcana",
                "suit": "Wands",
                "img": "tarot-json-master/cards/Chee's Pixel Tarot/TarotCards2x/Wands/wands6.png",
                "deck": "Chee's pixel Tarot",
                "description":
                "Six of Wands is the card for popularity, progress, victory and success, self-confidence and getting what you want."
            },
            {
                "name": "Seven of Wands",
                "number": "7",
                "arcana": "Minor Arcana",
                "suit": "Wands",
                "img": "tarot-json-master/cards/Chee's Pixel Tarot/TarotCards2x/Wands/wands7.png",
                "deck": "Chee's pixel Tarot",
                "description":
                "Seven of Wands denotes being defensive and putting up barriers and boundaries. You are protecting your point of view and your position."
            },
            {
                "name": "Eight of Wands",
                "number": "8",
                "arcana": "Minor Arcana",
                "suit": "Wands",
                "img": "tarot-json-master/cards/Chee's Pixel Tarot/TarotCards2x/Wands/wands8.png",
                "deck": "Chee's pixel Tarot",
                "description":
                "Eight of Wands speaks of swift action and progress. It often shows up when there is a visitor coming, or when the querent is visiting someone."
            },
            {
                "name": "Nine of Wands",
                "number": "9",
                "arcana": "Minor Arcana",
                "suit": "Wands",
                "img": "tarot-json-master/cards/Chee's Pixel Tarot/TarotCards2x/Wands/wands9.png",
                "deck": "Chee's pixel Tarot",
                "description":
                "Nine of Wands is the card for strength, courage, resilience and endurance. Never give up and never surrender."
            },
            {
                "name": "Ten of Wands",
                "number": "10",
                "arcana": "Minor Arcana",
                "suit": "Wands",
                "img": "tarot-json-master/cards/Chee's Pixel Tarot/TarotCards2x/Wands/wands10.png",
                "deck": "Chee's pixel Tarot",
                "description":
                "Ten of Wands is the card for hard work and taking on more responsibility."
            },
            {
                "name": "Page of Wands",
                "number": "11",
                "arcana": "Minor Arcana",
                "suit": "Wands",
                "img": "tarot-json-master/cards/Chee's Pixel Tarot/TarotCards2x/Wands/wandsP.png",
                "deck": "Chee's pixel Tarot",
                "description":
                "Page of Wands denotes an enthusiastic young person who is eager to explore and gain life experience."
            },
            {
                "name": "Knight of Wands",
                "number": "12",
                "arcana": "Minor Arcana",
                "suit": "Wands",
                "img": "tarot-json-master/cards/Chee's Pixel Tarot/TarotCards2x/Wands/wandsKn.png",
                "deck": "Chee's pixel Tarot",
                "description":
                "Knight of Wands denotes a person who is travelling through life at a high-speed, living life in the fast lane. This is someone who will be the life of the party."
            },
            {
                "name": "Queen of Wands",
                "number": "13",
                "arcana": "Minor Arcana",
                "suit": "Wands",
                "img": "tarot-json-master/cards/Chee's Pixel Tarot/TarotCards2x/Wands/wandsQ.png",
                "deck": "Chee's pixel Tarot",
                "description":
                "Queen of Wands denotes a warm, kind and passionate woman. She is goal oriented and determined. She is also a metaphysic who can use her mind both to create harmony and havoc."
            },
            {
                "name": "King of Wands",
                "number": "14",
                "arcana": "Minor Arcana",
                "suit": "Wands",
                "img": "tarot-json-master/cards/Chee's Pixel Tarot/TarotCards2x/Wands/wandsK.png",
                "deck": "Chee's pixel Tarot",
                "description":
                "King of Wands denotes a married man who is a natural and charismatic leader. He has entrepreneurial skills and loves to run a new and exciting project."
            },
            {
                "name": "Ace of Pentacles",
                "number": "1",
                "arcana": "Minor Arcana",
                "suit": "Pentacles",
                "img": "tarot-json-master/cards/Chee's Pixel Tarot/TarotCards2x/Pentacles/pentacles1.png",
                "deck": "Chee's pixel Tarot",
                "description":
                "Ace of Pentacles symbolises a new beginning in your financial situation and an opportunity to deepen your security."
            },
            {
                "name": "Two of Pentacles",
                "number": "2",
                "arcana": "Minor Arcana",
                "suit": "Pentacles",
                "img": "tarot-json-master/cards/Chee's Pixel Tarot/TarotCards2x/Pentacles/pentacles2.png",
                "deck": "Chee's pixel Tarot",
                "description":
                "Two of Pentacles symbolises juggling with finances. You might have income from more than one source. Two of Pentacles also indicates investing money into different projects, or bartering."
            },
            {
                "name": "Three of Pentacles",
                "number": "3",
                "arcana": "Minor Arcana",
                "suit": "Pentacles",
                "img": "tarot-json-master/cards/Chee's Pixel Tarot/TarotCards2x/Pentacles/pentacles3.png",
                "deck": "Chee's pixel Tarot",
                "description":
                "Three of Pentacles symbolises your work, especially where team work or listening to clients/customers are concerned. This is a positive card which indicates job satisfaction and taking pride in your work, but you must put in the effort to see results."
            },
            {
                "name": "Four of Pentacles",
                "number": "4",
                "arcana": "Minor Arcana",
                "suit": "Pentacles",
                "img": "tarot-json-master/cards/Chee's Pixel Tarot/TarotCards2x/Pentacles/pentacles4.png",
                "deck": "Chee's pixel Tarot",
                "description":
                "Four of Pentacles symbolises the need for security and recognition in your life, to have control over your possession and to keep abundance and money increasing. This card shows stubbornness in the situation or in the querent."
            },
            {
                "name": "Five of Pentacles",
                "number": "5",
                "arcana": "Minor Arcana",
                "suit": "Pentacles",
                "img": "tarot-json-master/cards/Chee's Pixel Tarot/TarotCards2x/Pentacles/pentacles5.png",
                "deck": "Chee's pixel Tarot",
                "description":
                "Five of Pentacles symbolises financial loss or hardship. It can also mean you are in a place where you feel there is no security and your health might be suffering."
            },
            {
                "name": "Six of Pentacles",
                "number": "6",
                "arcana": "Minor Arcana",
                "suit": "Pentacles",
                "img": "tarot-json-master/cards/Chee's Pixel Tarot/TarotCards2x/Pentacles/pentacles6.png",
                "deck": "Chee's pixel Tarot",
                "description":
                "Six of Pentacles symbolises generosity towards those who has less than you. It can also mean receiving generosity from others."
            },
            {
                "name": "Seven of Pentacles",
                "number": "7",
                "arcana": "Minor Arcana",
                "suit": "Pentacles",
                "img": "tarot-json-master/cards/Chee's Pixel Tarot/TarotCards2x/Pentacles/pentacles7.png",
                "deck": "Chee's pixel Tarot",
                "description":
                "Seven of Pentacles symbolises a vision that will pay off in the future. You are planting the seeds so that you will be able to harvest a more secure and abundant future for yourself."
            },
            {
                "name": "Eight of Pentacles",
                "number": "8",
                "arcana": "Minor Arcana",
                "suit": "Pentacles",
                "img": "tarot-json-master/cards/Chee's Pixel Tarot/TarotCards2x/Pentacles/pentacles8.png",
                "deck": "Chee's pixel Tarot",
                "description":
                "Eight of Pentacles symbolise craftsmanship in regards to work. It can also mean doing an apprenticeship and/or learning a new skill."
            },
            {
                "name": "Nine of Pentacles",
                "number": "9",
                "arcana": "Minor Arcana",
                "suit": "Pentacles",
                "img": "tarot-json-master/cards/Chee's Pixel Tarot/TarotCards2x/Pentacles/pentacles9png",
                "deck": "Chee's pixel Tarot",
                "description":
                "Nine of Pentacles symbolises luxury, financial security and being on a lavish holiday."
            },
            {
                "name": "Ten of Pentacles",
                "number": "10",
                "arcana": "Minor Arcana",
                "suit": "Pentacles",
                "img": "tarot-json-master/cards/Chee's Pixel Tarot/TarotCards2x/Pentacles/pentacles10.png",
                "deck": "Chee's pixel Tarot",
                "description":
                "Ten of Pentacles symbolises the type of wealth you get when you inherit something, being it your own retirement money, hand me downs, or possessions from someone who has passes away."
            },
            {
                "name": "Page of Pentacles",
                "number": "11",
                "arcana": "Minor Arcana",
                "suit": "Pentacles",
                "img": "tarot-json-master/cards/Chee's Pixel Tarot/TarotCards2x/Pentacles/pentaclesP.png",
                "deck": "Chee's pixel Tarot",
                "description":
                "Page of Pentacles indicates reinventing yourself in some way. It often denotes an opportunity to start something new, whether it is a creative venture, studying, business or a new job offer. Page of pentacles is not yet an expert in the field of choice but has a clear goal and dream to achieve."
            },
            {
                "name": "Knight of Pentacles",
                "number": "12",
                "arcana": "Minor Arcana",
                "suit": "Pentacles",
                "img": "tarot-json-master/cards/Chee's Pixel Tarot/TarotCards2x/Pentacles/pentaclesKn.png",
                "deck": "Chee's pixel Tarot",
                "description":
                "Knight of Pentacles denotes being of service and doing the actual work (in contrast to Page of Pentacles who enjoys daydreaming about the idea rather than actual living it). Knight of Pentacles is comfortable with routine and is efficient and conservative."
            },
            {
                "name": "Queen of Pentacles",
                "number": "13",
                "arcana": "Minor Arcana",
                "suit": "Pentacles",
                "img": "tarot-json-master/cards/Chee's Pixel Tarot/TarotCards2x/Pentacles/pentaclesQ.png",
                "deck": "Chee's pixel Tarot",
                "description":
                "Queen of Pentacles is someone with a down to earth and practical approach to life and situations. It is important to have work/home balance, in fact if you could work from home you probably would. This card takes enjoyment in material pleasures and success."
            },
            {
                "name": "King of Pentacles",
                "number": "14",
                "arcana": "Minor Arcana",
                "suit": "Pentacles",
                "img": `tarot-json-master/cards/Chee's Pixel Tarot/TarotCards2x/Pentacles/pentaclesK.png`,
                "deck": "Chee's pixel Tarot",
                "description":
                "King of Pentacles symbolises a successful businessman or a person in a manager position. This is a stable and authoritative character, who is hard-working and dependable."
            }
        ];

            let c5 = pixel[Math.floor(Math.random() * pixel.length)];

            let e = new MessageAttachment(`${c5.img}`, 'image.jpg');
    
            const pix = new MessageEmbed()
            .setTitle(`${c5.name}`)
            .setDescription(`Arcana: ${c5.arcana}\nNumber: ${c5.number}\nSuit: ${c5.suit}`)
            .addField("Meaning:", `${c5.description}`)
            .attachFiles(e)
            .setImage(`attachment://image.jpg`)
            .setFooter("Deck: Chee's pixel Tarot")
            .setColor(`#D21F3C`)


        let pepe =  [
            {
                "name": "The Fool",
                "number": "0",
                "arcana": "Major Arcana",
                "suit": null,
                "img": "tarot-json-master/cards/mixedDecks/pepe tarot/1 - 4UB0din.gif",
                "deck": "Animated pepe tarot"
            },
            {
                "name": "The Magician",
                "number": "1",
                "arcana": "Major Arcana",
                "suit": null,
                "img": "tarot-json-master/cards/mixedDecks/pepe tarot/2 - YMHLODM.gif",
                "deck": "Animated pepe tarot"
            },
            {
                "name": "The High Priestess",
                "number": "2",
                "arcana": "Major Arcana",
                "suit": null,
                "img": "tarot-json-master/cards/mixedDecks/pepe tarot/3 - ZEtGABP.gif",
                "deck": "Animated pepe tarot"
            },
            {
                "name": "The Empress",
                "number": "3",
                "arcana": "Major Arcana",
                "suit": null,
                "img": "tarot-json-master/cards/mixedDecks/pepe tarot/4 - oKAV4We.gif",
                "deck": "Animated pepe tarot"
            },
            {
                "name": "The Emperor",
                "number": "4",
                "arcana": "Major Arcana",
                "suit": null,
                "img": "tarot-json-master/cards/mixedDecks/pepe tarot/5 - hj9GXIj.gif",
                "deck": "Animated pepe tarot"
            },
            {
                "name": "The Hierophant",
                "number": "5",
                "arcana": "Major Arcana",
                "suit": null,
                "img": "tarot-json-master/cards/mixedDecks/pepe tarot/6 - TXSNjSk.gif",
                "deck": "Animated pepe tarot"
            },
            {
                "name": "The Lovers",
                "number": "6",
                "arcana": "Major Arcana",
                "suit": null,
                "img": "tarot-json-master/cards/mixedDecks/pepe tarot/7 - RLKsDOV.gif",
                "deck": "Animated pepe tarot"
            },
            {
                "name": "The Chariot",
                "number": "7",
                "arcana": "Major Arcana",
                "suit": null,
                "img": "tarot-json-master/cards/mixedDecks/pepe tarot/8 - Qvk8o3u.gif",
                "deck": "Animated pepe tarot"
            },
            {
                "name": "Strength",
                "number": "8",
                "arcana": "Major Arcana",
                "suit": null,
                "img": "tarot-json-master/cards/mixedDecks/pepe tarot/9 - uDMXTf8.gif",
                "deck": "Animated pepe tarot"
            },
            {
                "name": "The Hermit",
                "number": "9",
                "arcana": "Major Arcana",
                "suit": null,
                "img": "tarot-json-master/cards/mixedDecks/pepe tarot/10 - ZBVootQ.gif",
                "deck": "Animated pepe tarot"
            },
            {
                "name": "Wheel of Fortune",
                "number": "10",
                "arcana": "Major Arcana",
                "suit": null,
                "img": "tarot-json-master/cards/mixedDecks/pepe tarot/11 - 9k6yJBA.gif",
                "deck": "Animated pepe tarot"
            },
            {
                "name": "Justice",
                "number": "11",
                "arcana": "Major Arcana",
                "suit": null,
                "img": "tarot-json-master/cards/mixedDecks/pepe tarot/12 - o79RdDw.gif",
                "deck": "Animated pepe tarot"
            },
            {
                "name": "The Hanged Man",
                "number": "12",
                "arcana": "Major Arcana",
                "suit": null,
                "img": "tarot-json-master/cards/mixedDecks/pepe tarot/13 - YhWgeVV.gif",
                "deck": "Animated pepe tarot"
            },
            {
                "name": "Death",
                "number": "13",
                "arcana": "Major Arcana",
                "suit": null,
                "img": "tarot-json-master/cards/mixedDecks/pepe tarot/14 - MOe9dun.gif",
                "deck": "Animated pepe tarot"
            },
            {
                "name": "Temperance",
                "number": "14",
                "arcana": "Major Arcana",
                "suit": null,
                "img": "tarot-json-master/cards/mixedDecks/pepe tarot/15 - y3r3H7c.gif",
                "deck": "Animated pepe tarot"
            },
            {
                "name": "The Devil",
                "number": "15",
                "arcana": "Major Arcana",
                "suit": null,
                "img": "tarot-json-master/cards/mixedDecks/pepe tarot/16 - NqnzELK.gif",
                "deck": "Animated pepe tarot"
            },
            {
                "name": "The Tower",
                "number": "16",
                "arcana": "Major Arcana",
                "suit": null,
                "img": "tarot-json-master/cards/mixedDecks/pepe tarot/17 - 2L6LSvO.gif",
                "deck": "Animated pepe tarot"
            },
            {
                "name": "The Star",
                "number": "17",
                "arcana": "Major Arcana",
                "suit": null,
                "img": "tarot-json-master/cards/mixedDecks/pepe tarot/18 - P3atLd7.gif",
                "deck": "Animated pepe tarot"
            },
            {
                "name": "The Moon",
                "number": "18",
                "arcana": "Major Arcana",
                "suit": null,
                "img": "tarot-json-master/cards/mixedDecks/pepe tarot/19 - 8oLi7vv.gif",
                "deck": "Animated pepe tarot"
            },
            {
                "name": "The Sun",
                "number": "19",
                "arcana": "Major Arcana",
                "suit": null,
                "img": "tarot-json-master/cards/mixedDecks/pepe tarot/20 - SusR7tD.gif",
                "deck": "Animated pepe tarot"
            },
            {
                "name": "Judgement",
                "number": "20",
                "arcana": "Major Arcana",
                "suit": null,
                "img": "tarot-json-master/cards/mixedDecks/pepe tarot/21 - 0bNwafz.gif",
                "deck": "Animated pepe tarot"
            },
            {
                "name": "The World",
                "number": "21",
                "arcana": "Major Arcana",
                "suit": null,
                "img": "tarot-json-master/cards/mixedDecks/pepe tarot/22 - Y2LABcM.gif",
                "deck": "Animated pepe tarot"

            }
        ];

            let c6 = pepe[Math.floor(Math.random() * pepe.length)];

            const f = new MessageAttachment(`${c6.img}`, 'image.gif');
    
            const frog = new MessageEmbed()
            .setTitle(`${c6.name}`)
            .setDescription(`Arcana: ${c6.arcana}\nNumber: ${c6.number}\nSuit: ${c6.suit}`)
            .addField("Meaning:", `${c6.description}`)
            .attachFiles(f)
            .setImage(`attachment://image.gif`)
            .setFooter(`Deck: ${c6.deck}`)
            .setColor(`#D21F3C`)

      if (!args.length) {
        return message.channel.send(t);
    } else if (args[0] === 'st') {
        return message.channel.send(ta);
    } else if (args[0] === 'simpletarot') {
        return message.channel.send(ta);
    } else if (args[0] === 'simple') {
        return message.channel.send(ta);
    }else if (args[0] === 'remove-image') {
        return message.channel.send(ta);
    } else if (args[0] === 'image') {
        return message.channel.send(im);
    } else if (args[0] === 'img') {
        return message.channel.send(im);
    } else if (args[0] === 'decks') {
        return message.channel.send(decks);
    } else if (args[0] === 'burnt') {
        return message.channel.send(tar);
    } else if (args[0] === 'pixel') { 
        return message.channel.send(pix)
    } else if (args[0] === 'chees') { 
        return message.channel.send(pix)
    } else if (args[0] === 'pepe') { 
        return message.channel.send(frog)
    } else if (args[0] === 'frog') { 
        return message.channel.send(frog)
    }
    }
}