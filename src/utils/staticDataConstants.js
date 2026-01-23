export const BUTTON_LIST = [
  {
    id: 1,
    name: 'All'
  },
  {
    id: 2,
    name: 'Music'
  },
  {
    id: 3,
    name: 'Live'
  },
  {
    id: 4,
    name: 'Mantras'
  }, {
    id: 5,
    name: 'Mixes'
  },
  {
    id: 6,
    name: 'Podcasts'
  }, {
    id: 7,
    name: 'T-series'
  },
  {
    id: 8,
    name: 'Jukebox'
  }
];

export const commentsData = [
  {
    id: "c1",
    user: {
      id: "u1",
      name: "Saloni Malhotra",
      avatar: "S",
    },
    text: "This explanation was super clear 🔥 Loved the structure!",
    createdAt: "2026-01-18T10:20:00Z",
    likes: 42,
    dislikes: 1,
    isEdited: false,
    isPinned: true,
    repliesCount: 3,
    replies: [
      {
        id: "c1-r1",
        user: { id: "u2", name: "Anmol Dogra", avatar: "A" },
        text: "Same! Especially the React Query part 😄",
        createdAt: "2026-01-18T11:05:00Z",
        likes: 14,
        dislikes: 0,
        isEdited: false,
        repliesCount: 1,
        replies: [
          {
            id: "c1-r1-r1",
            user: { id: "u3", name: "Kartik Malhotra", avatar: "K" },
            text: "React Query + pagination is a game changer.",
            createdAt: "2026-01-18T11:25:00Z",
            likes: 6,
            dislikes: 0,
            isEdited: false,
            repliesCount: 0,
            replies: [],
          },
        ],
      },
      {
        id: "c1-r2",
        user: { id: "u4", name: "Neha Sharma", avatar: "N" },
        text: "Can you share the folder structure too?",
        createdAt: "2026-01-18T12:10:00Z",
        likes: 9,
        dislikes: 0,
        isEdited: false,
        repliesCount: 0,
        replies: [],
      },
      {
        id: "c1-r3",
        user: { id: "u5", name: "Rahul Verma", avatar: "R" },
        text: "This is exactly how seniors explain things ✅",
        createdAt: "2026-01-18T12:40:00Z",
        likes: 7,
        dislikes: 0,
        isEdited: false,
        repliesCount: 0,
        replies: [],
      },
    ],
  },

  {
    id: "c2",
    user: {
      id: "u6",
      name: "Priya Kapoor",
      avatar: "P",
    },
    text: "How to handle infinite scroll without duplicate API calls?",
    createdAt: "2026-01-19T08:10:00Z",
    likes: 30,
    dislikes: 2,
    isEdited: false,
    isPinned: false,
    repliesCount: 2,
    replies: [
      {
        id: "c2-r1",
        user: { id: "u1", name: "Saloni Malhotra", avatar: "S" },
        text: "Use cursor pagination + cancel previous request. React Query helps.",
        createdAt: "2026-01-19T08:30:00Z",
        likes: 12,
        dislikes: 0,
        isEdited: true,
        repliesCount: 0,
        replies: [],
      },
      {
        id: "c2-r2",
        user: { id: "u7", name: "Aman Gupta", avatar: "A" },
        text: "Also apply debounce on scroll handler ✅",
        createdAt: "2026-01-19T08:50:00Z",
        likes: 8,
        dislikes: 0,
        isEdited: false,
        repliesCount: 0,
        replies: [],
      },
    ],
  },

  {
    id: "c3",
    user: {
      id: "u8",
      name: "Simran Kaur",
      avatar: "SK",
    },
    text: "Great content! Please make a video on Redux Toolkit vs Context.",
    createdAt: "2026-01-20T16:10:00Z",
    likes: 18,
    dislikes: 0,
    isEdited: false,
    isPinned: false,
    repliesCount: 0,
    replies: [],
  },

  {
    id: "c4",
    user: {
      id: "u9",
      name: "Mohit Jain",
      avatar: "M",
    },
    text: "Sirf frontend se job safe rahegi 2026 me? AI ka kya?",
    createdAt: "2026-01-21T09:10:00Z",
    likes: 11,
    dislikes: 1,
    isEdited: false,
    isPinned: false,
    repliesCount: 2,
    replies: [
      {
        id: "c4-r1",
        user: { id: "u10", name: "Ritika Singh", avatar: "R" },
        text: "AI helps but real engineering still needed. Don't worry.",
        createdAt: "2026-01-21T09:40:00Z",
        likes: 6,
        dislikes: 0,
        isEdited: false,
        repliesCount: 1,
        replies: [
          {
            id: "c4-r1-r1",
            user: { id: "u9", name: "Mohit Jain", avatar: "M" },
            text: "True, I should focus on system design too.",
            createdAt: "2026-01-21T10:10:00Z",
            likes: 4,
            dislikes: 0,
            isEdited: false,
            repliesCount: 0,
            replies: [],
          },
        ],
      },
      {
        id: "c4-r2",
        user: { id: "u1", name: "Saloni Malhotra", avatar: "S" },
        text: "Frontend + architecture + APIs = best combo. Keep building projects.",
        createdAt: "2026-01-21T10:30:00Z",
        likes: 7,
        dislikes: 0,
        isEdited: false,
        repliesCount: 0,
        replies: [],
      },
    ],
  },
];


export const LIVE_CHAT_DUMMY_DATA = [
  { id: 1, name: "YouTubeBot", message: "Welcome to live chat 👋", img: "https://i.pravatar.cc/40?img=1" },
  { id: 2, name: "Saloni", message: "Hello everyone 🔥", img: "https://i.pravatar.cc/40?img=5" },
  { id: 3, name: "Aman", message: "Nice video 💯", img: "https://i.pravatar.cc/40?img=12" },
  { id: 4, name: "Neha", message: "Loved this explanation ❤️", img: "https://i.pravatar.cc/40?img=16" },
  { id: 5, name: "Rahul", message: "Watching from Delhi 🇮🇳", img: "https://i.pravatar.cc/40?img=22" },
  { id: 6, name: "Simran", message: "Can you make a part 2? 😄", img: "https://i.pravatar.cc/40?img=30" },
  { id: 7, name: "Kartik", message: "This is super helpful ✅", img: "https://i.pravatar.cc/40?img=40" },
  { id: 8, name: "Priya", message: "Wow 🔥🔥🔥", img: "https://i.pravatar.cc/40?img=28" },
  { id: 9, name: "Rohit", message: "Bro OP 😭😂", img: "https://i.pravatar.cc/40?img=33" },
  { id: 10, name: "Nisha", message: "Crystal clear explanation 👌", img: "https://i.pravatar.cc/40?img=46" },
  { id: 11, name: "Vikram", message: "Thanks for sharing 🙌", img: "https://i.pravatar.cc/40?img=52" },
  { id: 12, name: "Sneha", message: "1st time live chat pe ho 😄", img: "https://i.pravatar.cc/40?img=58" },
  { id: 13, name: "Arjun", message: "Amazing speed ✅", img: "https://i.pravatar.cc/40?img=61" },
  { id: 14, name: "Mehak", message: "Bohot sahi 🔥", img: "https://i.pravatar.cc/40?img=63" },
  { id: 15, name: "Sahil", message: "Who else is watching right now? 👀", img: "https://i.pravatar.cc/40?img=67" },
  { id: 16, name: "Pooja", message: "Explain again please 😅", img: "https://i.pravatar.cc/40?img=18" },
  { id: 17, name: "Deepak", message: "Fully understood ✅✅", img: "https://i.pravatar.cc/40?img=24" },
  { id: 18, name: "Isha", message: "This deserves 1M views 😍", img: "https://i.pravatar.cc/40?img=36" },
  { id: 19, name: "Manish", message: "Bro legend 🔥", img: "https://i.pravatar.cc/40?img=44" },
  { id: 20, name: "Kiran", message: "Subscribed ❤️", img: "https://i.pravatar.cc/40?img=49" },
  { id: 21, name: "Tanya", message: "Maza aa gaya 😂", img: "https://i.pravatar.cc/40?img=55" },
  { id: 22, name: "Harsh", message: "Next video kab aayegi?", img: "https://i.pravatar.cc/40?img=6" },
  { id: 23, name: "Ritika", message: "Keep going 💪", img: "https://i.pravatar.cc/40?img=10" },
  { id: 24, name: "Gaurav", message: "Best tutorial ever ✅", img: "https://i.pravatar.cc/40?img=14" },
];

export const getRandomName = () => {
  const names = [
    "YouTubeBot", "Saloni", "Anmol", "Kartik", "Neha", "Aman",
    "Rahul", "Simran", "Priya", "Rohit", "Nisha",
    "Arjun", "Sneha", "Vikram", "Pooja", "Deepak",
    "Mehak", "Sahil", "Isha", "Manish", "Tanya",
    "Harsh", "Ritika", "Gaurav", "Kiran", "Aditi",
    "Sanya", "Ravi", "Mohit", "Kunal", "Ayush",
    "Shreya", "Komal", "Navya", "Shivam", "Pankaj"
  ];

  return names[Math.floor(Math.random() * names.length)];
};

export const getRandomMessage = () => {
  const messages = [
    "Nice 🔥",
    "Amazing content 💯",
    "Hello everyone 👋",
    "OP bro 😭😂",
    "Super helpful ✅",
    "Watching from India 🇮🇳",
    "Part 2 please 😄",
    "LOL 🤣",
    "Love this ❤️",
    "Legend 🔥🔥",
    "Subscribed ✅",
    "This is too good 😍",
    "Best explanation ever 🙌",
    "Maza aa gaya 😂",
    "Next video kab aayegi? 👀",
    "Explain again please 😅",
    "Big fan bro 😎",
    "Audio clear hai ✅",
    "Who else is here right now? 👀",
    "Try this with React 🔥",
    "Tailwind OP 💯",
    "Great work 💪",
    "Finally samajh aa gaya ✅✅",
    "This deserves 1M views 🚀",
    "First time live chat pe 😄",
    "Pinned comment dekho 📌",
    "Superb content 🔥🔥🔥",
    "Share this with friends ✅",
    "Saved for later 🔖",
    "Respect bro 🙏"
  ];

  return messages[Math.floor(Math.random() * messages.length)];
};

export const getRandomAvatar = () => {
  const avatarId = Math.floor(Math.random() * 70) + 1; // 1 to 70
  return `https://i.pravatar.cc/40?img=${avatarId}`;
};

