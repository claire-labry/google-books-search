const mongoose = require('mongoose');
const db = require('../models');

// Connect to Mongoose
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/googlebooks', {
  useNewUrlParser: true,
});

const bookSeed = [
  {
    title: 'Braving the Wilderness',
    author: 'Brene Brown',
    description:
      'The wilderness is an untamed, unpredictable place of solitude and searching. It is a place as dangerous as it is breathtaking, a place as sought after as it is feared. But it turns out to be the place of true belonging, and its the bravest and most sacred place you will ever stand.',
    date: new Date(Date.now()),
  },
  {
    title: 'Deep Work',
    author: 'Cal Newport',
    description:
      'Deep work is the ability to focus without distraction on a cognitively demanding task. Shallow work is non-cognitively demanding, logistical-style work, often performed while distracted. Deep work is like a superpower in our increasingly competitive twenty-first-century economy.',
    date: new Date(Date.now()),
  },
  {
    title: 'Brooklyn',
    author: 'Colm Tóibín',
    description:
      'Hauntingly beautiful and heartbreaking, Brooklyn, is set in Brooklyn and Ireland in the early 1950s, when one young woman crosses the ocean to make a new life for herself.',
    date: new Date(Date.now()),
  },
  {
    title: 'Red Rising',
    author: 'Pierce Brown',
    description:
      'Red Rising. Red Rising is a 2014 science fiction dystopian novel by American author Pierce Brown, and the first book and eponym of a series. The novel, set on a future planet Mars, follows lowborn miner Darrow as he infiltrates the ranks of the elite Golds.',
    date: new Date(Date.now()),
  },
  {
    title: 'Man\ns Search for Meaning',
    author: 'Viktor Frankel',
    description:
      'a 1946 book by Viktor Frankl chronicling his experiences as a prisoner in Nazi concentration camps during World War II, and describing his psychotherapeutic method, which involved identifying a purpose in life to feel positive about, and then immersively imagining that outcome.',
    date: new Date(Date.now()),
  },
  {
    title: 'Normal People',
    author: 'Sally Rooney',
    description:
      'The novel is about the complex friendship and relationship between two teenagers, Connell and Marianne, who both attend the same secondary school in County Sligo and, later, Trinity College Dublin (TCD). It is set during the post-2008 Irish economic downturn.',
    date: new Date(Date.now()),
  },
  {
    title: 'Outlander',
    author: 'Diana Gabaldon',
    description:
      'Outlander follows the story of Claire Randall, a married combat nurse from 1945 who is mysteriously swept back in time to 1743, where she is immediately thrown into an unknown world where her life is threatened.',
    date: new Date(Date.now()),
  },
  {
    title: 'Brain on Fire',
    author: 'Susannah Cahalan',
    description:
      'In Brain on Fire, the journalist reconstructs — through hospital security videotapes and interviews with her friends, family and the doctors who finally managed to save her life — her hellish experience as a victim of anti-NMDA receptor encephalitis.',
    date: new Date(Date.now()),
  },
  {
    title: 'Colorless Tsukuru Tazaki',
    author: 'Haruki Murakami',
    description:
      'An instant #1 New York Times Bestseller, Colorless Tsukuru Tazaki and His Years of Pilgrimage is the remarkable story of a young man haunted by a great loss; of dreams and nightmares that have unintended consequences for the world around us; and of a journey into the past that is necessary to mend the present.',
    date: new Date(Date.now()),
  },
  {
    title: 'Farenheit 451',
    author: 'Ray Bradbury',
    description:
      'Fahrenheit 451 is a dystopian novel by American writer Ray Bradbury, first published in 1953. Often regarded as one of his best works, the novel presents a future American society where books are outlawed and "firemen" burn any that are found.',
    date: new Date(Date.now()),
  },
];

db.Book.remove({})
  .then(() => db.Book.collection.insertMany(bookSeed))
  .then((data) => {
    console.log(data.result.n + ' records inserted!');
    process.exit(0);
  })
  .catch((err) => {
    console.log(err);
    process.exit(0);
  });
