export enum HTTP_METHOD {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  DELETE = "DELETE"
}

export type Api = {
  url: string;
  method: HTTP_METHOD
}
export type Action = {
  type: string;
  payload: any
}
export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  TabOne: undefined;
  TabTwo: undefined;
  Home: undefined;
  Profile: undefined;
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
  VocabularyList:undefined,
  VocabularyLession:undefined,
  VocabularyTopic:undefined,
  HomeApp: undefined;
  VocabularyOverview: undefined;
  Lesson: undefined;
  Register: undefined;
  Login: undefined;
  Overview: undefined;
  GrammarLessons: undefined;
  GrammarDetail: undefined;
  ReadingCategory: undefined;
  ReadingLessons: undefined;
  ReadingDetail: undefined;
  ReadingStartTesting: undefined;
  NotificationScreen: undefined;
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

export type RegisterInput = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  password_confirmation: string;
  avatarUrl?: string;
  isActive?: boolean;
}

export type LoginInput = {
  email: string;
  password: string
}
