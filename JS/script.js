
quotes = [
    `“Be yourself; everyone else is already taken.” ― Oscar Wilde`,
    `“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.” ― Marilyn Monroe`,
    `“So many books, so little time.” ― Frank Zappa`,
    `“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.” ― Albert Einstein`,
    `“A room without books is like a body without a soul.” ― Marcus Tullius Cicero`,
    `“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.” ― Bernard M. Baruch`,
    `“You've gotta dance like there's nobody watching, Love like you'll never be hurt, Sing like there's nobody listening, And live like it's heaven on earth.” ― William W. Purkey`,
    `“You know you're in love when you can't fall asleep because reality is finally better than your dreams.” ― Dr. Seuss`,
    `“You only live once, but if you do it right, once is enough.” ― Mae West`,
    `“Be the change that you wish to see in the world.” ― Mahatma Gandhi`,
    `“In three words I can sum up everything I've learned about life: it goes on.” ― Robert Frost`,
    `“If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.” ― J.K. Rowling`,
    `“If you tell the truth, you don't have to remember anything.” ― Mark Twain`,
    `“A friend is someone who knows all about you and still loves you.” ― Elbert Hubbard`,
    `“I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.” ― Maya Angelou`,
    `“Get busy living or get busy dying.” ― Stephen King`,
    `“Whoever is happy will make others happy too.” ― Anne Frank`,
    `“Always forgive your enemies; nothing annoys them so much.” ― Oscar Wilde`,
    `“I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.” ― Maya Angelou`,
    `“The greatest glory in living lies not in never falling, but in rising every time we fall.” ― Nelson Mandela`,
    `“The way to get started is to quit talking and begin doing.” ― Walt Disney`,
]

let lastIndex = -1;

function getRandomQuote() {
    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * quotes.length);
    } while (randomIndex === lastIndex);
    
    lastIndex = randomIndex;
    document.getElementById("quote").innerHTML = quotes[randomIndex];
}
