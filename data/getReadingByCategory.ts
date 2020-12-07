export const getReadingByCategory = (readingCategory: number, callback?: any) => {
    const data = [
        {
            readingCategory : 1,
            lessons: [
                {
                    id: 1,
                    title: "正解の自然ーショート",
                    paragraph: "生物にはふしぎな力がある。例えば、植物は生きる力がとても強い。" +
                                "切り取った茎を土にさしておくだけで、あっという間に元の大きさに成長することもあるほどだ。" +
                                "動物にも似たことが起こる。トカゲのしっぽやかにのはさみは、なくなると新しく生えてくる。"+
                                "しかし、人間の指はなくなると、二度と元にはま戻らない。ただ、髪の毛や手の爪は切ってもまた伸びる。" +
                                "このように、生物には切り取られた体の一部を、元に戻す力あるのだ。",
                    question: "生物のふしぎな力とは、どんなことだと言っているか。",
                    answers: [
                        {
                            id: 1,
                            text: "植物がとても早く成長できること。"
                        },
                        {
                            id: 2,
                            text: "動物にも植物と同じ力があること。"
                        },
                        {
                            id: 3,
                            text: "なくなった体の一部が元に戻ること。"
                        },
                        {
                            id: 4,
                            text: "人間にない力を植物が持っていること。"
                        }
                    ],
                    correct: {
                        id: 1,
                        text: "植物がとても早く成長できること。"
                    }
                },
                {
                    id: 2,
                    title: "正解の自然ーショート",
                    paragraph: "生物にはふしぎな力がある。例えば、植物は生きる力がとても強い。" +
                                "切り取った茎を土にさしておくだけで、あっという間に元の大きさに成長することもあるほどだ。" +
                                "動物にも似たことが起こる。トカゲのしっぽやかにのはさみは、なくなると新しく生えてくる。"+
                                "しかし、人間の指はなくなると、二度と元にはま戻らない。ただ、髪の毛や手の爪は切ってもまた伸びる。" +
                                "このように、生物には切り取られた体の一部を、元に戻す力あるのだ。",
                    question: "生物のふしぎな力とは、どんなことだと言っているか。",
                    answers: [
                        {
                            id: 1,
                            text: "植物がとても早く成長できること。"
                        },
                        {
                            id: 2,
                            text: "動物にも植物と同じ力があること。"
                        },
                        {
                            id: 3,
                            text: "なくなった体の一部が元に戻ること。"
                        },
                        {
                            id: 4,
                            text: "人間にない力を植物が持っていること。"
                        }
                    ],
                    correct: {
                        id: 2,
                        text: "動物にも植物と同じ力があること。"
                    }
                },
                {
                    id: 3,
                    title: "正解の自然ーショート",
                    paragraph: "生物にはふしぎな力がある。例えば、植物は生きる力がとても強い。" +
                                "切り取った茎を土にさしておくだけで、あっという間に元の大きさに成長することもあるほどだ。" +
                                "動物にも似たことが起こる。トカゲのしっぽやかにのはさみは、なくなると新しく生えてくる。"+
                                "しかし、人間の指はなくなると、二度と元にはま戻らない。ただ、髪の毛や手の爪は切ってもまた伸びる。" +
                                "このように、生物には切り取られた体の一部を、元に戻す力あるのだ。",
                    question: "生物のふしぎな力とは、どんなことだと言っているか。",
                    answers: [
                        {
                            id: 1,
                            text: "植物がとても早く成長できること。"
                        },
                        {
                            id: 2,
                            text: "動物にも植物と同じ力があること。"
                        },
                        {
                            id: 3,
                            text: "なくなった体の一部が元に戻ること。"
                        },
                        {
                            id: 4,
                            text: "人間にない力を植物が持っていること。"
                        }
                    ],
                    correct: {
                        id: 3,
                        text: "なくなった体の一部が元に戻ること。"
                    }
                },
                {
                    id: 4,
                    title: "正解の自然ーショート",
                    paragraph: "生物にはふしぎな力がある。例えば、植物は生きる力がとても強い。" +
                                "切り取った茎を土にさしておくだけで、あっという間に元の大きさに成長することもあるほどだ。" +
                                "動物にも似たことが起こる。トカゲのしっぽやかにのはさみは、なくなると新しく生えてくる。"+
                                "しかし、人間の指はなくなると、二度と元にはま戻らない。ただ、髪の毛や手の爪は切ってもまた伸びる。" +
                                "このように、生物には切り取られた体の一部を、元に戻す力あるのだ。",
                    question: "生物のふしぎな力とは、どんなことだと言っているか。",
                    answers: [
                        {
                            id: 1,
                            text: "植物がとても早く成長できること。"
                        },
                        {
                            id: 2,
                            text: "動物にも植物と同じ力があること。"
                        },
                        {
                            id: 3,
                            text: "なくなった体の一部が元に戻ること。"
                        },
                        {
                            id: 4,
                            text: "人間にない力を植物が持っていること。"
                        }
                    ],
                    correct: {
                        id: 4,
                        text: "人間にない力を植物が持っていること。"
                    }
                },
                {
                    id: 5,
                    title: "正解の自然ーショート",
                    paragraph: "生物にはふしぎな力がある。例えば、植物は生きる力がとても強い。" +
                                "切り取った茎を土にさしておくだけで、あっという間に元の大きさに成長することもあるほどだ。" +
                                "動物にも似たことが起こる。トカゲのしっぽやかにのはさみは、なくなると新しく生えてくる。"+
                                "しかし、人間の指はなくなると、二度と元にはま戻らない。ただ、髪の毛や手の爪は切ってもまた伸びる。" +
                                "このように、生物には切り取られた体の一部を、元に戻す力あるのだ。",
                    question: "生物のふしぎな力とは、どんなことだと言っているか。",
                    answers: [
                        {
                            id: 1,
                            text: "植物がとても早く成長できること。"
                        },
                        {
                            id: 2,
                            text: "動物にも植物と同じ力があること。"
                        },
                        {
                            id: 3,
                            text: "なくなった体の一部が元に戻ること。"
                        },
                        {
                            id: 4,
                            text: "人間にない力を植物が持っていること。"
                        }
                    ],
                    correct: {
                        id: 4,
                        text: "人間にない力を植物が持っていること。"
                    }
                },
                {
                    id: 6,
                    title: "正解の自然ーショート",
                    paragraph: "生物にはふしぎな力がある。例えば、植物は生きる力がとても強い。" +
                                "切り取った茎を土にさしておくだけで、あっという間に元の大きさに成長することもあるほどだ。" +
                                "動物にも似たことが起こる。トカゲのしっぽやかにのはさみは、なくなると新しく生えてくる。"+
                                "しかし、人間の指はなくなると、二度と元にはま戻らない。ただ、髪の毛や手の爪は切ってもまた伸びる。" +
                                "このように、生物には切り取られた体の一部を、元に戻す力あるのだ。",
                    question: "生物のふしぎな力とは、どんなことだと言っているか。",
                    answers: [
                        {
                            id: 1,
                            text: "植物がとても早く成長できること。"
                        },
                        {
                            id: 2,
                            text: "動物にも植物と同じ力があること。"
                        },
                        {
                            id: 3,
                            text: "なくなった体の一部が元に戻ること。"
                        },
                        {
                            id: 4,
                            text: "人間にない力を植物が持っていること。"
                        }
                    ],
                    correct: {
                        id: 4,
                        text: "人間にない力を植物が持っていること。"
                    }
                },
                {
                    id: 7,
                    title: "正解の自然ーショート",
                    paragraph: "生物にはふしぎな力がある。例えば、植物は生きる力がとても強い。" +
                                "切り取った茎を土にさしておくだけで、あっという間に元の大きさに成長することもあるほどだ。" +
                                "動物にも似たことが起こる。トカゲのしっぽやかにのはさみは、なくなると新しく生えてくる。"+
                                "しかし、人間の指はなくなると、二度と元にはま戻らない。ただ、髪の毛や手の爪は切ってもまた伸びる。" +
                                "このように、生物には切り取られた体の一部を、元に戻す力あるのだ。",
                    question: "生物のふしぎな力とは、どんなことだと言っているか。",
                    answers: [
                        {
                            id: 1,
                            text: "植物がとても早く成長できること。"
                        },
                        {
                            id: 2,
                            text: "動物にも植物と同じ力があること。"
                        },
                        {
                            id: 3,
                            text: "なくなった体の一部が元に戻ること。"
                        },
                        {
                            id: 4,
                            text: "人間にない力を植物が持っていること。"
                        }
                    ],
                    correct: {
                        id: 4,
                        text: "人間にない力を植物が持っていること。"
                    }
                }
            ]
        },
        {
            readingCategory : 2,
            lessons: [
                {
                    id: 8,
                    title: "正解の自然ーなみ",
                    paragraph: "生物にはふしぎな力がある。例えば、植物は生きる力がとても強い。" +
                                "切り取った茎を土にさしておくだけで、あっという間に元の大きさに成長することもあるほどだ。" +
                                "動物にも似たことが起こる。トカゲのしっぽやかにのはさみは、なくなると新しく生えてくる。"+
                                "しかし、人間の指はなくなると、二度と元にはま戻らない。ただ、髪の毛や手の爪は切ってもまた伸びる。" +
                                "このように、生物には切り取られた体の一部を、元に戻す力あるのだ。",
                    question: "生物のふしぎな力とは、どんなことだと言っているか。",
                    answers: [
                        {
                            id: 1,
                            text: "植物がとても早く成長できること。"
                        },
                        {
                            id: 2,
                            text: "動物にも植物と同じ力があること。"
                        },
                        {
                            id: 3,
                            text: "なくなった体の一部が元に戻ること。"
                        },
                        {
                            id: 4,
                            text: "人間にない力を植物が持っていること。"
                        }
                    ],
                    correct: {
                        id: 4,
                        text: "人間にない力を植物が持っていること。"
                    }
                },
                {
                    id: 9,
                    title: "正解の自然ーなみ",
                    paragraph: "生物にはふしぎな力がある。例えば、植物は生きる力がとても強い。" +
                                "切り取った茎を土にさしておくだけで、あっという間に元の大きさに成長することもあるほどだ。" +
                                "動物にも似たことが起こる。トカゲのしっぽやかにのはさみは、なくなると新しく生えてくる。"+
                                "しかし、人間の指はなくなると、二度と元にはま戻らない。ただ、髪の毛や手の爪は切ってもまた伸びる。" +
                                "このように、生物には切り取られた体の一部を、元に戻す力あるのだ。",
                    question: "生物のふしぎな力とは、どんなことだと言っているか。",
                    answers: [
                        {
                            id: 1,
                            text: "植物がとても早く成長できること。"
                        },
                        {
                            id: 2,
                            text: "動物にも植物と同じ力があること。"
                        },
                        {
                            id: 3,
                            text: "なくなった体の一部が元に戻ること。"
                        },
                        {
                            id: 4,
                            text: "人間にない力を植物が持っていること。"
                        }
                    ],
                    correct: {
                        id: 4,
                        text: "人間にない力を植物が持っていること。"
                    }
                },
                {
                    id: 10,
                    title: "正解の自然ーなみ",
                    paragraph: "生物にはふしぎな力がある。例えば、植物は生きる力がとても強い。" +
                                "切り取った茎を土にさしておくだけで、あっという間に元の大きさに成長することもあるほどだ。" +
                                "動物にも似たことが起こる。トカゲのしっぽやかにのはさみは、なくなると新しく生えてくる。"+
                                "しかし、人間の指はなくなると、二度と元にはま戻らない。ただ、髪の毛や手の爪は切ってもまた伸びる。" +
                                "このように、生物には切り取られた体の一部を、元に戻す力あるのだ。",
                    question: "生物のふしぎな力とは、どんなことだと言っているか。",
                    answers: [
                        {
                            id: 1,
                            text: "植物がとても早く成長できること。"
                        },
                        {
                            id: 2,
                            text: "動物にも植物と同じ力があること。"
                        },
                        {
                            id: 3,
                            text: "なくなった体の一部が元に戻ること。"
                        },
                        {
                            id: 4,
                            text: "人間にない力を植物が持っていること。"
                        }
                    ],
                    correct: {
                        id: 4,
                        text: "人間にない力を植物が持っていること。"
                    }
                },
                {
                    id: 11,
                    title: "正解の自然ーなみ",
                    paragraph: "生物にはふしぎな力がある。例えば、植物は生きる力がとても強い。" +
                                "切り取った茎を土にさしておくだけで、あっという間に元の大きさに成長することもあるほどだ。" +
                                "動物にも似たことが起こる。トカゲのしっぽやかにのはさみは、なくなると新しく生えてくる。"+
                                "しかし、人間の指はなくなると、二度と元にはま戻らない。ただ、髪の毛や手の爪は切ってもまた伸びる。" +
                                "このように、生物には切り取られた体の一部を、元に戻す力あるのだ。",
                    question: "生物のふしぎな力とは、どんなことだと言っているか。",
                    answers: [
                        {
                            id: 1,
                            text: "植物がとても早く成長できること。"
                        },
                        {
                            id: 2,
                            text: "動物にも植物と同じ力があること。"
                        },
                        {
                            id: 3,
                            text: "なくなった体の一部が元に戻ること。"
                        },
                        {
                            id: 4,
                            text: "人間にない力を植物が持っていること。"
                        }
                    ],
                    correct: {
                        id: 4,
                        text: "人間にない力を植物が持っていること。"
                    }
                },
                {
                    id: 12,
                    title: "正解の自然ーなみ",
                    paragraph: "生物にはふしぎな力がある。例えば、植物は生きる力がとても強い。" +
                                "切り取った茎を土にさしておくだけで、あっという間に元の大きさに成長することもあるほどだ。" +
                                "動物にも似たことが起こる。トカゲのしっぽやかにのはさみは、なくなると新しく生えてくる。"+
                                "しかし、人間の指はなくなると、二度と元にはま戻らない。ただ、髪の毛や手の爪は切ってもまた伸びる。" +
                                "このように、生物には切り取られた体の一部を、元に戻す力あるのだ。",
                    question: "生物のふしぎな力とは、どんなことだと言っているか。",
                    answers: [
                        {
                            id: 1,
                            text: "植物がとても早く成長できること。"
                        },
                        {
                            id: 2,
                            text: "動物にも植物と同じ力があること。"
                        },
                        {
                            id: 3,
                            text: "なくなった体の一部が元に戻ること。"
                        },
                        {
                            id: 4,
                            text: "人間にない力を植物が持っていること。"
                        }
                    ],
                    correct: {
                        id: 4,
                        text: "人間にない力を植物が持っていること。"
                    }
                },
                {
                    id: 13,
                    title: "正解の自然ーなみ",
                    paragraph: "生物にはふしぎな力がある。例えば、植物は生きる力がとても強い。" +
                                "切り取った茎を土にさしておくだけで、あっという間に元の大きさに成長することもあるほどだ。" +
                                "動物にも似たことが起こる。トカゲのしっぽやかにのはさみは、なくなると新しく生えてくる。"+
                                "しかし、人間の指はなくなると、二度と元にはま戻らない。ただ、髪の毛や手の爪は切ってもまた伸びる。" +
                                "このように、生物には切り取られた体の一部を、元に戻す力あるのだ。",
                    question: "生物のふしぎな力とは、どんなことだと言っているか。",
                    answers: [
                        {
                            id: 1,
                            text: "植物がとても早く成長できること。"
                        },
                        {
                            id: 2,
                            text: "動物にも植物と同じ力があること。"
                        },
                        {
                            id: 3,
                            text: "なくなった体の一部が元に戻ること。"
                        },
                        {
                            id: 4,
                            text: "人間にない力を植物が持っていること。"
                        }
                    ],
                    correct: {
                        id: 4,
                        text: "人間にない力を植物が持っていること。"
                    }
                },
                {
                    id: 14,
                    title: "正解の自然ーなみ",
                    paragraph: "生物にはふしぎな力がある。例えば、植物は生きる力がとても強い。" +
                                "切り取った茎を土にさしておくだけで、あっという間に元の大きさに成長することもあるほどだ。" +
                                "動物にも似たことが起こる。トカゲのしっぽやかにのはさみは、なくなると新しく生えてくる。"+
                                "しかし、人間の指はなくなると、二度と元にはま戻らない。ただ、髪の毛や手の爪は切ってもまた伸びる。" +
                                "このように、生物には切り取られた体の一部を、元に戻す力あるのだ。",
                    question: "生物のふしぎな力とは、どんなことだと言っているか。",
                    answers: [
                        {
                            id: 1,
                            text: "植物がとても早く成長できること。"
                        },
                        {
                            id: 2,
                            text: "動物にも植物と同じ力があること。"
                        },
                        {
                            id: 3,
                            text: "なくなった体の一部が元に戻ること。"
                        },
                        {
                            id: 4,
                            text: "人間にない力を植物が持っていること。"
                        }
                    ],
                    correct: {
                        id: 4,
                        text: "人間にない力を植物が持っていること。"
                    }
                }
            ]
        },
        {
            readingCategory : 3,
            lessons: [
                {
                    id: 15,
                    title: "正解の自然ー長い",
                    paragraph: "生物にはふしぎな力がある。例えば、植物は生きる力がとても強い。" +
                                "切り取った茎を土にさしておくだけで、あっという間に元の大きさに成長することもあるほどだ。" +
                                "動物にも似たことが起こる。トカゲのしっぽやかにのはさみは、なくなると新しく生えてくる。"+
                                "しかし、人間の指はなくなると、二度と元にはま戻らない。ただ、髪の毛や手の爪は切ってもまた伸びる。" +
                                "このように、生物には切り取られた体の一部を、元に戻す力あるのだ。",
                    question: "生物のふしぎな力とは、どんなことだと言っているか。",
                    answers: [
                        {
                            id: 1,
                            text: "植物がとても早く成長できること。"
                        },
                        {
                            id: 2,
                            text: "動物にも植物と同じ力があること。"
                        },
                        {
                            id: 3,
                            text: "なくなった体の一部が元に戻ること。"
                        },
                        {
                            id: 4,
                            text: "人間にない力を植物が持っていること。"
                        }
                    ],
                    correct: {
                        id: 4,
                        text: "人間にない力を植物が持っていること。"
                    }
                },
                {
                    id: 16,
                    title: "正解の自然ー長い",
                    paragraph: "生物にはふしぎな力がある。例えば、植物は生きる力がとても強い。" +
                                "切り取った茎を土にさしておくだけで、あっという間に元の大きさに成長することもあるほどだ。" +
                                "動物にも似たことが起こる。トカゲのしっぽやかにのはさみは、なくなると新しく生えてくる。"+
                                "しかし、人間の指はなくなると、二度と元にはま戻らない。ただ、髪の毛や手の爪は切ってもまた伸びる。" +
                                "このように、生物には切り取られた体の一部を、元に戻す力あるのだ。",
                    question: "生物のふしぎな力とは、どんなことだと言っているか。",
                    answers: [
                        {
                            id: 1,
                            text: "植物がとても早く成長できること。"
                        },
                        {
                            id: 2,
                            text: "動物にも植物と同じ力があること。"
                        },
                        {
                            id: 3,
                            text: "なくなった体の一部が元に戻ること。"
                        },
                        {
                            id: 4,
                            text: "人間にない力を植物が持っていること。"
                        }
                    ],
                    correct: {
                        id: 4,
                        text: "人間にない力を植物が持っていること。"
                    }
                },
                {
                    id: 17,
                    title: "正解の自然ー長い",
                    paragraph: "生物にはふしぎな力がある。例えば、植物は生きる力がとても強い。" +
                                "切り取った茎を土にさしておくだけで、あっという間に元の大きさに成長することもあるほどだ。" +
                                "動物にも似たことが起こる。トカゲのしっぽやかにのはさみは、なくなると新しく生えてくる。"+
                                "しかし、人間の指はなくなると、二度と元にはま戻らない。ただ、髪の毛や手の爪は切ってもまた伸びる。" +
                                "このように、生物には切り取られた体の一部を、元に戻す力あるのだ。",
                    question: "生物のふしぎな力とは、どんなことだと言っているか。",
                    answers: [
                        {
                            id: 1,
                            text: "植物がとても早く成長できること。"
                        },
                        {
                            id: 2,
                            text: "動物にも植物と同じ力があること。"
                        },
                        {
                            id: 3,
                            text: "なくなった体の一部が元に戻ること。"
                        },
                        {
                            id: 4,
                            text: "人間にない力を植物が持っていること。"
                        }
                    ],
                    correct: {
                        id: 4,
                        text: "人間にない力を植物が持っていること。"
                    }
                },
                {
                    id: 18,
                    title: "正解の自然ー長い",
                    paragraph: "生物にはふしぎな力がある。例えば、植物は生きる力がとても強い。" +
                                "切り取った茎を土にさしておくだけで、あっという間に元の大きさに成長することもあるほどだ。" +
                                "動物にも似たことが起こる。トカゲのしっぽやかにのはさみは、なくなると新しく生えてくる。"+
                                "しかし、人間の指はなくなると、二度と元にはま戻らない。ただ、髪の毛や手の爪は切ってもまた伸びる。" +
                                "このように、生物には切り取られた体の一部を、元に戻す力あるのだ。",
                    question: "生物のふしぎな力とは、どんなことだと言っているか。",
                    answers: [
                        {
                            id: 1,
                            text: "植物がとても早く成長できること。"
                        },
                        {
                            id: 2,
                            text: "動物にも植物と同じ力があること。"
                        },
                        {
                            id: 3,
                            text: "なくなった体の一部が元に戻ること。"
                        },
                        {
                            id: 4,
                            text: "人間にない力を植物が持っていること。"
                        }
                    ],
                    correct: {
                        id: 4,
                        text: "人間にない力を植物が持っていること。"
                    }
                },
                {
                    id: 19,
                    title: "正解の自然ー長い",
                    paragraph: "生物にはふしぎな力がある。例えば、植物は生きる力がとても強い。" +
                                "切り取った茎を土にさしておくだけで、あっという間に元の大きさに成長することもあるほどだ。" +
                                "動物にも似たことが起こる。トカゲのしっぽやかにのはさみは、なくなると新しく生えてくる。"+
                                "しかし、人間の指はなくなると、二度と元にはま戻らない。ただ、髪の毛や手の爪は切ってもまた伸びる。" +
                                "このように、生物には切り取られた体の一部を、元に戻す力あるのだ。",
                    question: "生物のふしぎな力とは、どんなことだと言っているか。",
                    answers: [
                        {
                            id: 1,
                            text: "植物がとても早く成長できること。"
                        },
                        {
                            id: 2,
                            text: "動物にも植物と同じ力があること。"
                        },
                        {
                            id: 3,
                            text: "なくなった体の一部が元に戻ること。"
                        },
                        {
                            id: 4,
                            text: "人間にない力を植物が持っていること。"
                        }
                    ],
                    correct: {
                        id: 4,
                        text: "人間にない力を植物が持っていること。"
                    }
                },
                {
                    id: 20,
                    title: "正解の自然ー長い",
                    paragraph: "生物にはふしぎな力がある。例えば、植物は生きる力がとても強い。" +
                                "切り取った茎を土にさしておくだけで、あっという間に元の大きさに成長することもあるほどだ。" +
                                "動物にも似たことが起こる。トカゲのしっぽやかにのはさみは、なくなると新しく生えてくる。"+
                                "しかし、人間の指はなくなると、二度と元にはま戻らない。ただ、髪の毛や手の爪は切ってもまた伸びる。" +
                                "このように、生物には切り取られた体の一部を、元に戻す力あるのだ。",
                    question: "生物のふしぎな力とは、どんなことだと言っているか。",
                    answers: [
                        {
                            id: 1,
                            text: "植物がとても早く成長できること。"
                        },
                        {
                            id: 2,
                            text: "動物にも植物と同じ力があること。"
                        },
                        {
                            id: 3,
                            text: "なくなった体の一部が元に戻ること。"
                        },
                        {
                            id: 4,
                            text: "人間にない力を植物が持っていること。"
                        }
                    ],
                    correct: {
                        id: 4,
                        text: "人間にない力を植物が持っていること。"
                    }
                },
                {
                    id: 21,
                    title: "正解の自然ー長い",
                    paragraph: "生物にはふしぎな力がある。例えば、植物は生きる力がとても強い。" +
                                "切り取った茎を土にさしておくだけで、あっという間に元の大きさに成長することもあるほどだ。" +
                                "動物にも似たことが起こる。トカゲのしっぽやかにのはさみは、なくなると新しく生えてくる。"+
                                "しかし、人間の指はなくなると、二度と元にはま戻らない。ただ、髪の毛や手の爪は切ってもまた伸びる。" +
                                "このように、生物には切り取られた体の一部を、元に戻す力あるのだ。",
                    question: "生物のふしぎな力とは、どんなことだと言っているか。",
                    answers: [
                        {
                            id: 1,
                            text: "植物がとても早く成長できること。"
                        },
                        {
                            id: 2,
                            text: "動物にも植物と同じ力があること。"
                        },
                        {
                            id: 3,
                            text: "なくなった体の一部が元に戻ること。"
                        },
                        {
                            id: 4,
                            text: "人間にない力を植物が持っていること。"
                        }
                    ],
                    correct: {
                        id: 4,
                        text: "人間にない力を植物が持っていること。"
                    }
                }
            ]
        }
    ]
    for (let i: number = 0; i < data.length; i++) {
        if (data[i].readingCategory == readingCategory) {
            if (callback) {
                callback(false)
            }
            return data[i].lessons;
        } 
    }
    if (callback) {
        callback(false)
    }
    return null;
}