- GhostStory JavaScript game -
===

[You can preview the game here!] (http://darth.kipsu.fi/GhostStory/)

This is my first JavaScript game. It has three different phases, based on user's actions:

### Storytelling phase

A short story, that advances based on users selection. Uses users name to address the user and adds some text between html span tags based on the users name.

**Remarks:** I think this phase of the game is quite pointless. I did it to learn how to make the panels change and how to give the user an option on how the story proceeds. All this could have been learned by doing just the next two phases though! But I guess it was a shoft start on this thing.

### Attack phase

The user gets scared of the ghost and accidentally attacks it. He/she can choose to continue to attack the ghost or try to run from it. Both user and ghost start with 100hp and the user has to either kill the ghost or run from it before his/her hp runs to 0.

The amount of damage done with each attack is based on random number. The user does a bit more damage than the ghost, so that he/she doesn't get killed every time.

Escaping is also based on chance, the user has a better chace of escaping, if the ghost hasn't lost much hp. When the ghost has been hit too much, it's impossible to escape him anymore.

All the attacking happens in one panel, unlike the other phases of the game. It uses jQuery *.text()* method to tell the user what has happened.

I also made it so that if you set your users age below 18, then you don't get to play this phase, because we don't want to prompt violence against kids after all!

**Remarks:** I'm quite happy with this phase of the game. It was the last one I did and I was getting somewhat bored with adding content to the game, so I managed to keep it nice and simple.

### Riddle phase

If the user is nice to the ghost, they may start a game of riddles. This phase the user gets a riddle first and can answer whatever he or she likes to. The game cleans the answer from extra spaces and articles a/an and then checks if the answer is found in an array of right answers. Some riddles only have one answer, but some have a list of synonyms.

The user can choose from three different riddles to ask from the ghost and based on what they chose, the ghost either knows it or doesn't.

The end of the game is rigged so the maximum length of the riddle game is six rounds.

**Remarks:** This phase could have been made some better way, it's really heavy and painstaking. Maybe use some kind of database to fetch the riddles from. I haven't used databases, so I don't know yet how to do it, but I might redo this part of the game later when my understanding of JavaScript and coding in general improves.
