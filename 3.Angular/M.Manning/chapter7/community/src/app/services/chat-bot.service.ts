import { Injectable } from '@angular/core';

@Injectable()
export class ChatBotService {
  private responses = [
    "Here's a penny for your thoughts",
    "Actions speak louder than words",
    "Better go back to the drawing board",
    "The ball is in your court",
    "Don't beat around the bush",
    "That's the best thing since sliced bread",
    "Don't bite off more than you can chew",
    "It's a blessing in disguise",
    "You can't judge a book by its cover",
    "We'll cross that bridge when you come to it",
    "Don't cry over spilt milk",
    "You know, curiosity killed the cat",
    "Don't count your chickens before the eggs have hatched",
    "Don't put all your eggs in one basket",
    "Drastic times call for drastic measures",
    "Every cloud has a silver lining",
    "You hit the nail on the head",
    "It takes two to tango",
    "I say, let sleeping dogs lie",
    "You let the cat out of the bag",
    "Can you make a long story short",
    "A picture paints a thousand words",
    "That's a piece of cake",
    "Speak of the devil!",
    "Take my words with a grain of salt",
    "Your guess is as good as mine"
  ];

  respond() {
    let random = Math.round(Math.random() * (this.responses.length - 1)) + 1;
    return this.responses[random];
  }
}
