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
