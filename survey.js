const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const questions = [
  "What's your name? Nicknames are also acceptable :) ",
  "What's an activity you like doing? ",
  "What do you listen to while doing that? ",
  "Which meal is your favourite (eg: dinner, brunch, etc.) ",
  "What's your favourite thing to eat for that meal? ",
  "Which sport is your absolute favourite? ",
  "What is your superpower? In a few words, tell us what you are amazing at! "
];

const p = {};
rl.question(questions[0], (answer) => {
  p.name = answer;
  rl.question(questions[1], (answer) => {
    p.activity = answer;
    rl.question(questions[2], (answer) => {
      p.music = answer;
      rl.question(questions[3], (answer) => {
        p.favoriteMealType = answer;
        rl.question(questions[4], (answer) => {
          p.favoriteMeal = answer;
          rl.question(questions[5], (answer) => {
            p.sport = answer;
            rl.question(questions[6], (answer) => {
              p.superpower = answer;
              console.log(`
                ${p.name} loves to listen to ${p.music} while ${p.activity}. You might find ${p.name} devouring ${p.favoriteMeal} for ${p.favoriteMealType}. 
                ${p.name} prefers ${p.sport} over any sport. One thing you must know is that ${p.name} is amazing at... ${p.superpower}.\n
                `)
              rl.close();
            });
          });
        });
      });
    });
  });
});