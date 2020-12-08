const setQuestions = [
    {
        id: 1,
        title: "正解の自然ーショート",
        paragraph: "生物にはふしぎな力がある。例えば、植物は生きる力がとても強い。" +
                    "切り取った茎を土にさしておくだけで、あっという間に元の大きさに成長することもあるほどだ。" +
                    "動物にも似たことが起こる。トカゲのしっぽやかにのはさみは、なくなると新しく生えてくる。"+
                    "しかし、人間の指はなくなると、二度と元にはま戻らない。ただ、髪の毛や手の爪は切ってもまた伸びる。" +
                    "このように、生物には切り取られた体の一部を、元に戻す力あるのだ。",
        questions: [
            {   content: "生物のふしぎな力とは、どんなことだと言っているか。",
                id: 1,
                score: 10,
                answers: [
                    {
                        id: 1,
                        text: "植物がとても早く成長できること。",
                        correct: false,
                    },
                    {
                        id: 2,
                        text: "動物にも植物と同じ力があること。",
                        correct: false,
                    },
                    {
                        id: 3,
                        text: "なくなった体の一部が元に戻ること。",
                        correct: false,
                    },
                    {
                        id: 4,
                        text: "人間にない力を植物が持っていること。",
                        correct: true,
                    },
                ],
                correct: {
                    id: 4,
                }
            },
            {   content: "生物のふしぎな力とは、どんなことだと言っているか。",
                id: 2,
                score: 10,
                answers: [
                    {
                        id: 1,
                        text: "植物がとても早く成長できること。",
                        correct: true
                    },
                    {
                        id: 2,
                        text: "動物にも植物と同じ力があること。",
                        correct: false,
                    },
                    {
                        id: 3,
                        text: "なくなった体の一部が元に戻ること。",
                        correct: false,
                    },
                    {
                        id: 4,
                        text: "人間にない力を植物が持っていること。",
                        correct: false,
                    },
                ],
                correct: {
                    id: 1,
                }
            },
            {   content: "生物のふしぎな力とは、どんなことだと言っているか。",
                id: 3,
                score: 10,
                answers: [
                    {
                        id: 1,
                        text: "植物がとても早く成長できること。",
                        correct: false,
                    },
                    {
                        id: 2,
                        text: "動物にも植物と同じ力があること。",
                        correct: true,
                    },
                    {
                        id: 3,
                        text: "なくなった体の一部が元に戻ること。",
                        correct: false,
                    },
                    {
                        id: 4,
                        text: "人間にない力を植物が持っていること。",
                        correct: false,
                    },
                ],
                correct: {
                    id: 2,
                }
            },
        ]
    },
    {
        id: 2,
        title: "授業の最終日",
        paragraph: "授業の最終日に試験を行います。今年は3月9日です。"+
                    "はじめの20分が聴解試験です。聴解試験が終わったら、すぐ筆記試験をします。試験範囲は教科書の10課から25課までです。"+
                    "（　　1　　）、54ページの「辞書の引き方」は除きます。以上です。なにか質問がありますか。"+
                    "（　　2　　）この試験は、遅刻したら受けることができませんから、遅刻しないよう注意してください。",
        questions: [
            {
                id: 4,
                content: "（　1　）に入る正しい接続詞を1、2、3、4から選びなさい。",
                score: 10,
                answers : [
                    {
                        id: 1,
                        text: "ところが",
                        correct: true,
                    },
                    {
                        id: 2,
                        text: "なぜなら",
                        correct: false,
                    },
                    {
                        id: 3,
                        text: "ただし",
                        correct: false,
                    },
                    {
                        id: 4,
                        text: "それとも",
                        correct: false,
                    }
                ],
                correct: {
                    id: 1
                }
            },
            {
                id: 5,
                content: "（　2　）に入る正しい接続詞を1、2、3、4から選びなさい。",
                score: 10,
                answers : [
                    {
                        id: 1,
                        text: "そこで",
                        correct: false,
                    },
                    {
                        id: 2,
                        text: "それに",
                        correct: true
                    },
                    {
                        id: 3,
                        text: "そのため",
                        correct: false,
                    },
                    {
                        id: 4,
                        text: "なお",
                        correct: false,
                    }
                ],
                correct: {
                    id: 2
                }
            }
        ]
    }
]


export const readingQuestions = () => {
    return setQuestions[1];
}