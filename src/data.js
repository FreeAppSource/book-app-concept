// Exact books from Figma Book App Concept design AST
export const categories = ['Trending', 'Popular', 'New'];

export const books = [
  {
    id: 'b1',
    title: 'Under The Rain',
    author: 'By : Sarah Wins',
    genre: 'Fiction',
    rating: '4.2',
    reviews: '1,420',
    duration: '2h 19m',
    currentTimestamp: '0:58:34',
    remainingTimestamp: '1:20:34',
    progress: 0.42,
    gradient: ['#FD6E8D', '#FF9B82'],
    coverBg: '#FBA89B',
    accentColor: '#555FB2',
    description:
      'A deeply moving tale of love, unexpected encounters, and resilience under the stormy skies of a quiet coastal town.',
    narrator: 'Emma Watson',
    chapters: [
      { id: 'c1', title: 'Chapter 1: The Gathering Clouds', duration: '24:12' },
      { id: 'c2', title: 'Chapter 2: Footsteps in the Rain', duration: '34:22' },
      { id: 'c3', title: 'Chapter 3: The Ocean Horizon', duration: '40:15' },
      { id: 'c4', title: 'Chapter 4: Finding Calm', duration: '40:45' },
    ],
  },
  {
    id: 'b2',
    title: 'Midnight Dreams',
    author: 'By : Shreya',
    genre: 'Drama',
    rating: '4.2',
    reviews: '980',
    duration: '3h 05m',
    currentTimestamp: '1:12:00',
    remainingTimestamp: '1:53:00',
    progress: 0.38,
    gradient: ['#555FB2', '#848E9A'],
    coverBg: '#5B65B8',
    accentColor: '#FFD562',
    description:
      'An evocative drama that explores the intertwined lives of four ambitious souls navigating fame and secrecy in a bustling metropolis.',
    narrator: 'David Oyelowo',
    chapters: [
      { id: 'c1', title: 'Chapter 1: Neon Reflections', duration: '45:10' },
      { id: 'c2', title: 'Chapter 2: Shadows at Midnight', duration: '52:18' },
    ],
  },
  {
    id: 'b3',
    title: 'Day Remember',
    author: 'By : Nicholas',
    genre: 'Love',
    rating: '4.2',
    reviews: '2,150',
    duration: '1h 48m',
    currentTimestamp: '0:22:15',
    remainingTimestamp: '1:25:45',
    progress: 0.2,
    gradient: ['#FFBC52', '#FF9B82'],
    coverBg: '#FFD073',
    accentColor: '#FD6E8D',
    description:
      'A heartwarming celebration of memories, second chances, and the serendipitous moments that redefine our lives forever.',
    narrator: 'Richard Armitage',
    chapters: [
      { id: 'c1', title: 'Chapter 1: Golden Hour', duration: '32:00' },
      { id: 'c2', title: 'Chapter 2: Letters We Never Sent', duration: '41:20' },
    ],
  },
];


export const appInfo = {
  title: 'Book App',
  tagline: 'Listen to thousands of audiobooks anytime, anywhere',
  version: '1.0.0',
};

export const feedItems = books.map((b) => ({
  ...b,
  category: b.genre,
}));
