const sequelize = require('../config/connection');
const { Post } = require('../models');

const postData = [
{
  title: 'Test Post #1 The tortoise and The Hair',
  body: `
  There was once a hare who was friends with a tortoise. One day, he challenged the tortoise to a race. Seeing how slow the tortoise was going, the hare thought he’ll win this easily. So he took a nap while the tortoise kept on going. When the hare woke up, he saw that the tortoise was already at the finish line. Much to his chagrin, the tortoise won the race while he was busy sleeping.
  `,
  category: 1,
  tags: [1, 2, 3],
  post_url: 'testpost.tt.blog',
  user_id: 1,

},
{
  title: 'Test Post #2 The Dog and The Bone',
  body: `
  Once there was a dog who wandered the streets night and day in search of food. One day, he found a big juicy bone and he immediately grabbed it between his mouth and took it home. On his way home, he crossed a river and saw another dog who also had a bone in its mouth. He wanted that bone for himself too. But as he opened his mouth, the bone he was biting fell into the river and sank. That night, he went home hungry.
  `,
  category: 1,
  tags: [1, 2, 3],
  post_url: 'testpost.tt.blog',
  user_id: 1,

},
{
  title: 'Test Post #3 The Thirsty Crow',
  body: `
  After flying a long distance, a thirsty crow was wandering the forest in search of water. Finally, he saw a pot half-filled with water. He tried to drink from it but his beak wasn’t long enough to reach the water inside. He then saw pebbles on the ground and one by one, he put them in the pot until the water rose to the brim. The crow then hastily drank from it and quenched his thirst.
  `,
  category: 1,
  tags: [1, 2, 3],
  post_url: 'testpost.tt.blog',
  user_id: 1,

},
{
  title: 'Test Post #4 The Fox and The Grapes',
  body: `
  Once there was a hungry fox who stumbled upon a vineyard. After seeing the round, juicy grapes hanging in a bunch, the fox drooled. But no matter how high he jumped, he couldn’t reach for it. So he told himself that it was probably sour and left. That night, he had to sleep on an empty stomach.
  `,
  category: 1,
  tags: [1, 2, 3],
  post_url: 'testpost.tt.blog',
  user_id: 1,

},
{
  title: 'Test Post #5 The And and the Grasshopper',
  body: `
  The ant and the grasshopper were good friends. In the summer, the ant works hard to fill his storage with food. While the grasshopper was enjoying the fine weather and playing all day. When winter came, the ant was lying cozily in his home surrounded by the food he stored during the summer. While the grasshopper was in his home, hungry and freezing. He asked the ant for food and the ant gave him some. But it wasn’t enough to last the entire winter. When he tried to ask the ant again, the latter replied: “I’m sorry my friend but my food is just enough for my family to last until the end of winter. If I give you more, we too will starve. We had the entire summer to prepare for the winter but you chose to play instead.”

Moral of the story:

Winter, in this story, represents a time in our life where food and resources are scarce. While summer is that time where everything is abundant. So if you have a lot right now, save some of it for the winter.
  `,
  category: 1,
  tags: [1, 2, 3],
  post_url: 'testpost.tt.blog',
  user_id: 1,
},
{
  title: 'Test Post #6 The Ugly Duckling',
  body: `
  Most of us have probably heard of this story as this is one of the most popular fairy tales in the world. The story revolves around a duckling who from the moment of his birth has always felt different from his siblings. He was always picked on because he didn’t look like the rest of them. One day, he had enough and ran away from the pond he grew up in. He wandered near and far looking for a family who would accept him. Months passed and seasons changed but everywhere he went, nobody wanted him because he was such an ugly duck. Then one day, he came upon a family of swans. Upon looking at them, he realized that during the months he spent looking for a family to call his own, he had grown into a beautiful swan. Now he finally understood why he never looked like the rest of his siblings because he isn’t a duck but a swan.
  `,
  category: 1,
  tags: [1, 2, 3],
  post_url: 'testpost.tt.blog',
  user_id: 1,

},
{
  title: 'Test Post #7 The Lion and The Slave',
  body: `
  There was once a slave who was treated cruelly by his master. One day, he couldn’t take it anymore and ran away to the forest to escape. There he chanced upon a lion who couldn’t walk because of the thorn in its paw. Although he’s scared, the slave mustered his courage and took out the thorn in the lion’s paw. When the lion was finally free of the thorn, he ran into the forest and didn’t harm the slave. Sometime later, the slave was caught by his master along with some animals in the forest. The master then ordered the slave to be thrown into the lion’s den. When the slave saw the lion, he recognized it as the same lion he helped in the forest. The slave was able to escape the den unharmed and he freed all the other animals.

Moral of the story:

The good you did will always have a way of coming back to you. So do good deeds and be kind to others and the world will be kind to you.
  `,
  category: 1,
  tags: [1, 2, 3],
  post_url: 'testpost.tt.blog',
  user_id: 1,

},
{
  title: 'Test Post #8 The Elephant and The ants',
  body: `
  There was once a proud elephant who always bullied smaller animals. He would go to the anthill near his home and spray water at the ants. The ants, with their size, could do nothing but cry. The elephant just laughed and threatened the ants that he would crush them to death. One day, the ants had enough and decided to teach the elephant a lesson. They went straight into the elephant’s trunk and started biting him. The elephant could only howl in pain. He realized his mistake and apologized to the ants and all the animals he bullied.

Moral of the story:

Be humble and treat everyone with kindness. If you think you’re stronger than others, then use your strength to protect them instead of harming them.
  `,
  category: 1,
  tags: [1, 2, 3],
  post_url: 'testpost.tt.blog',
  user_id: 1,

},
{
  title: 'Test Post #9 The Golden Touch',
  body: `
  There once was a king named Midas who did a good deed for a Satyr. And he was then granted a wish by Dionysus, the god of wine.

For his wish, Midas asked that whatever he touched would turn to gold. Despite Dionysus’ efforts to prevent it, Midas pleaded that this was a fantastic wish, and so, it was bestowed.

Excited about his newly-earned powers, Midas started touching all kinds of things, turning each item into pure gold.

But soon, Midas became hungry. As he picked up a piece of food, he found he couldn’t eat it. It had turned to gold in his hand.

Hungry, Midas groaned, “I’ll starve! Perhaps this was not such an excellent wish after all!”

Seeing his dismay, Midas’ beloved daughter threw her arms around him to comfort him, and she, too, turned to gold. “The golden touch is no blessing,” Midas cried.
  `,
  category: 1,
  tags: [1, 2, 3],
  post_url: 'testpost.tt.blog',
  user_id: 1,

},
{
  title: 'Test Post #10 The Farmers Fortune?',
  body: `
  Once upon the time there was an old farmer who had worked his crops for many years. One day his horse ran away. Upon hearing the news, his neighbors came to visit. “Such bad luck,” they said sympathetically.

“Perhaps,” the farmer replied.

The next morning the horse returned, bringing with it three other wild horses. “What great luck!” the neighbors exclaimed.

“Perhaps,” replied the old man.

The following day, his son tried to ride one of the untamed horses, was thrown, and broke his leg. The neighbors again came to offer their sympathy on his misfortune.

“Perhaps,” answered the farmer.

The day after, military officials came to the village to draft young men into the army. Seeing that the son’s leg was broken, they passed him by. The neighbors congratulated the farmer on how well things had turned out.

“Perhaps,” said the farmer…

…
We’ve all had experiences where the curse turns into a blessing; rejection turns into redirection, and the unanswered prayer is the best thing that could’ve happened to you.

Life is indeed a box of chocolates—you never know what you’re gonna get. Yet the father isn’t delusional or apathetic, but equanimous through life’s ups and downs. And there’s a subtle expectation that fortune will follow his misfortune. It’s important to have foundational beliefs that keep you composed, to appreciate and celebrate the good, and to process trials knowing they soon shall pass.
  `,
  category: 1,
  tags: [1, 2, 3],
  post_url: 'testpost.tt.blog',
  user_id: 1,

},
{
  title: 'Test Post #11 The Two Wolves',
  body: `
  An old Cherokee chief was teaching his grandson about life…

“A fight is going on inside me,” he said to the boy.
“It is a terrible fight and it is between two wolves.

“One is evil – he is anger, envy, sorrow, regret, greed, arrogance, self-pity, guilt, resentment, inferiority, lies, false pride, superiority, self-doubt, and ego.

“The other is good – he is joy, peace, love, hope, serenity, humility, kindness, benevolence, empathy, generosity, truth, compassion, and faith.

“This same fight is going on inside you – and inside every other person, too.”

The grandson thought about it for a minute and then asked his grandfather,
“Which wolf will win?”

The old chief simply replied,
“The one you feed.”

…
It’s no surprise that expressing gratitude increases positive experiences. Whatever you decide to feed will grow. Focusing on something causes your brain’s reticular activating system (RAS) to flag anything related as important. If your default is toward negativity, you’ll always see the glass half empty. Start feeding the good wolf to see, and live, the silver lining.
  `,
  category: 1,
  tags: [1, 2, 3],
  post_url: 'testpost.tt.blog',
  user_id: 1,

},
{
  title: 'Test Post #12 The Muddy Road',
  body: `
  Tanzan and Ekido were once traveling together down a muddy road. A heavy rain was still falling.

Coming around a bend, they met a lovely girl in a silk kimono and sash, unable to cross the intersection.

“Come on, girl,” said Tanzan at once. Lifting her in his arms, he carried her over the mud.

Ekido did not speak again until that night when they reached a lodging temple. Then he no longer could restrain himself.

“We monks don’t go near females,” he told Tanzan, “especially not young and lovely ones. It is dangerous. Why did you do that?”

“I left the girl there,” said Tanzan. “Are you still carrying her?”

…
Letting go can be difficult, but you’ll torture yourself mentally and emotionally by holding on. Breathe deep, and let it go. Life doesn’t always follow the script; rules are bent and broken; the ideal doesn’t match the real. But carrying wounds long after the battle is done is a mark of immaturity.
  `,
  category: 1,
  tags: [1, 2, 3],
  post_url: 'testpost.tt.blog',
  user_id: 1,

},  
{
  title: 'Test Post #13 The Death Of Common Sense',
  body: 
  `
  Today we mourn the passing of a beloved old friend, "Common Sense" who has been with us for many years. 
  No one knows for sure how old he was, since his birth records were long ago lost in bureaucratic red tape and political correctness. He will be remembered as having cultivated such valuable lessons as:  Knowing when to come in out of the rain; why the early bird gets the worm; Life isn’t always fair; and maybe it was my fault.  
   
  Common Sense lived by simple, sound financial policies (don’t spend more than you can earn) and reliable strategies (adults, not children, are in charge). His health began to deteriorate rapidly when well-intentioned but overbearing regulations were set in place .  Reports of a 6-year-old boy charged with sexual harassment for kissing a classmate; teens suspended from school for using mouth wash after lunch; and a teacher fired for reprimanding an unruly student, only worsened his condition.
   
  Common Sense lost ground when parents attacked teachers for doing the job that they themselves had failed to do in disciplining their unruly children.  It declined even further when schools were required to get parental consent to administer sun lotion or an Aspirin to a student; but could not inform parents when a student became pregnant and wanted to have an abortion.
  Common Sense lost the will to live as the churches became businesses; and criminals received better treatment than their victims.  Common Sense took a beating when you couldn’t defend yourself from a burglar in your own home and the burglar could sue you for assault.  Common Sense finally gave up the will to live, after a woman failed to realise that a steaming cup of coffee was hot. She spilled a little in her lap, and was promptly awarded a huge settlement … Common Sense was preceded in death, by his parents, Truth and Trust. His wife, Discretion, his daughter, Responsibility, his son, Reason,
  He is survived by his 4 stepbrothers;   I Know My Rights; I want it now; Someone Else Is To Blame; I’m A Victim.
  Not many attended his funeral because so few realized he was gone.   If you still remember him, pass this on. If not, join the majority and do nothing.....
   `,
  category: 1,
  tags: [1, 2, 3],
  post_url: 'testpost.tt.blog',
  user_id: 1,

},
{
  title: 'Test Post #14 The Body Ritual Among The Nacirema',
  body:
  ` 
  The magical beliefs and practices of a group of people known as the Nacirema are interesting because they are so unusual. The Nacirema have many magical beliefs, but the most interesting are those about their own bodies and how they should be cared for.The Nacirema are a group of people who live in the territory north of the Tarahuamare people of Mexico. No one knows much about their origin, but traditional legends say they came from the east. Their customs have been studied for many years, yet their culture is still poorly understood.The Nacirema have a highly developed market economy. They live in a rich natural habitat. The people devote much of their time to economic activity. However, a large amount of money and a great deal of time each day are spent on ceremonies. The subject of these ceremonies is the human body. The Nacirema are extremely concerned about the health and appearance of their bodies. They believe that certain rituals and ceremonies must be practiced to maintain and improve the condition of their bodies. Though it is not unusual for people to be concerned about their own bodies, the rituals practiced by the Nacirema are unusual and extremely time consuming.The main belief of the Nacirema appears to be that the human body is ugly and that the only way to prevent it from growing weak and diseased is to practice powerful rituals devoted to this purpose. Every household has one or more shrines devoted to this goal. The more powerful people in the society have several ritual shrine rooms in their houses. In fact, the wealth of the owners of the houses is often measured in terms of the number of such ritual shrine rooms in a house. The shrine rooms of the more wealthy people are walled with stone. Poorer families imitate the rich by applying pottery plaques to their shrine room walls.While almost every family has at least one shrine in the home, the ritual ceremonies associated with it are not family ceremonies but are private and secret. The rites are normally discussed only with children, and then only during the period when they are being initiated into these mysteries. I was able, however, to make friends with the natives and they allowed me to examine the shrine rooms. Though they were reluctant to talk about them, they finally described the rituals to me.The most important part of a shrine is a box or chest which is built into the wall. In this chest are kept the many charms and magical potions without which no native believes he could live. The natives get the charms and potions from specialized practitioners. The most powerful of these are the medicine men, whose assistance must be rewarded with generous gifts. However, the medicine men do not provide the curing potions for their clients, but decide what the ingredients should be and write them down in an ancient and secret language. This writing is understood only by the medicine men and the herbalists who, for another gift, provide the required charm.The charm is not thrown away after it has served its purpose, but is placed in the charm box of the household shrine. Since the people believe that a new magical material must be obtained each time a new problem arises, and since the real or imagined problems and diseases of the people are many, the charm box is usually full to overflowing. The packets and containers of magical materials are so numerous that the people often forget what their purposes were and fear to use them again. While the natives are very vague on this point, we commonly assume that the reason for keeping all the old magical materials is that their presence in the charm box-before which the body rituals are conducted-will in some way protect the worshipper.Beneath the charm box is a small basin. Each day every member of the family, one after another, enters the shrine room, bows his head before the charm box, mixes different sorts of holy water in the basin, and conducts a brief ceremony of ritual cleansing. The holy waters come from the Water Temple of the community, where the priests conduct elaborate ceremonies to make the liquid ritually pure.The Nacirema have another kind of specialist whose name is best translated as "holy-mouth-man." The Nacirema have an almost extreme horror and fascination with the mouth, the condition of which is believed to have a supernatural influence on all social relationships. Several times each day, the natives rub the insides of their mouths with a small bundle of hog bristles. Those who neglect the ritual are forced to visit the holy mouth man who, as punishment, digs holes in their teeth with sharp instruments. Though small children must be forced to undergo this punishment when they neglect the mouth ritual, adults willingly accept it. Were it not for the rituals of the mouth, they believe that their teeth would fall out, their gums bleed, their jaws shrink, their friends desert them, and their lovers reject them. I observed that those nearing marriageable age even decorate their teeth with strips of metal which are believed to improve their appearance.The medicine men have a special temple, or latipsoh, in every community of any size. The more elaborate ceremonies required to treat very sick patients can only be performed in this temple. The maidens who conduct the ceremonies move quickly about the temple chambers wearing special costumes and headdresses. No matter how ill the native may be, or how serious the emergency, the guardians of many temples will not admit a client who cannot give a rich gift to the temple.The people willingly go to the latipsoh even though they fear it. In fact, I observed that many people who went to the latipsoh for a cure died during the curing ceremonies, which appear to be very harsh. One curing ceremony which takes place in this temple involves allowing the medicine men to cut out and throw away parts of their bodies. The Nacirema believe that this ceremony will remove the evil from their bodies and improve their health. The medicine men who conduct these ceremonies own a large collection of special knives which the client is never allowed to see. The Nacirema also allow the maidens of the temple to place sharp wires in their bodies and to remove small amounts of their blood in order to cure them.Our review of the ritual life of the Nacirema has certainly shown them to be a magic-ridden people. It is hard to understand how they have managed to exist so long under the burdens they have imposed upon themselves. nReprinted by permission of the American Anthropological Association from Horace Miner, American Anthropologist 58 (1956): 503-507.
  `,
  category: 1,
  tags: [1, 2, 3],
  post_url: 'testpost.tt.blog',
  user_id: 1,

},
{
  title: 'Test Post #15',
  body: '',
  category: 1,
  tags: [1, 2, 3],
  post_url: 'testpost.tt.blog',
  user_id: 1,

},  
]

const postSeeds = () => Post.bulkCreate(postData);
module.exports = postSeeds;