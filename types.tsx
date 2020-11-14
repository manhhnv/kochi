export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  TabOne: undefined;
  TabTwo: undefined;
  Home: undefined;
};

export type TabOneParamList = {
  TabOneScreen: undefined;
  VocabularyOverview: undefined;
  HomeApp: undefined;
};

export type TabTwoParamList = {
  TabTwoScreen: undefined;
};
export type TabStackParamList = {
  HomeApp: undefined;
  VocabularyOverview: undefined;
  Lesson: undefined;
}
export type CourseOverviewType = {
  totalUnits: number;
  completedUnits?: number;
  completedTest?: number;
  thumbnail?: any;
}
export type VocabularyFCardProps = {
  kanji?: string;
  hiragana?: string;
  vnjp?: string;
  marked?: boolean;
  mean?: string;
  previousWord: any;
  nextWord: any;
  currentIndex: number;
}
export type VocabularyPayload = {
  data?: any;
  totalWords?: number
  from?: number;
  to?: number
}
export type VocabularyActionType = {
  type?: string;
  payload?: VocabularyPayload;
}
