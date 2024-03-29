import { ProfileContent } from "@/features/dashboard/types/ProfileContent";

export const profileContent = () => {
  const randomIndex = Math.floor(Math.random() * PROFILE_CONTENTS.length);
  return PROFILE_CONTENTS[randomIndex];
};

const PROFILE_CONTENTS: ProfileContent[] = [
  {
    address: "北海道",
    age: 25,
    birthday: new Date(),
    hashtags: ["冒険好き", "登山"],
    hobbies: ["挨拶", "自然"],
    imageUrl: "/portrait/1.jpg",
    message:
      "冒険心旺盛な登山家です。新たな山々や景色を求めて旅を続けています。一緒に自然の美しさを共有しませんか？",
    name: "田中 みさき",
    sex: "女",
  },
  {
    address: "東京都",
    age: 30,
    birthday: new Date(),
    hashtags: ["山好き"],
    hobbies: ["登山"],
    imageUrl: "/portrait/2.jpg",
    message:
      "登山が大好きで、山頂からの絶景に心を奪われます。一緒に山に登って、感動の瞬間を共有しましょう。よろしくおねがいします。",
    name: "佐藤 あやか",
    sex: "女",
  },
  {
    address: "大阪府",
    age: 22,
    birthday: null,
    hashtags: ["好奇心旺盛"],
    hobbies: ["新しいこと"],
    imageUrl: "/portrait/3.jpg",
    message:
      "新しいことに興味津々で、世界中の未知の場所や文化に触れたいと思っています。一緒に冒険し、新たな体験を楽しみましょう！たくさんの人と話してみたいです！",
    name: "佐藤花子",
    sex: "女",
  },
  {
    address: "愛知県",
    age: 28,
    birthday: null,
    hashtags: ["グルメ"],
    hobbies: ["美食"],
    imageUrl: "/portrait/4.jpg",
    message:
      "グルメな食事を楽しむことが大好きで、美味しい料理を求めて街を彷徨います。好物はたこ焼きとお好み焼きです。よろしくね！",
    name: "田中美咲",
    sex: "女",
  },
  {
    address: "",
    age: 35,
    birthday: null,
    hashtags: [],
    hobbies: [],
    imageUrl: "/portrait/5.jpg",
    message: "",
    name: "山本 さくら",
    sex: "女",
  },
];
