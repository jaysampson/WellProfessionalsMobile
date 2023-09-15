export type AuthStackParamList = {
  Onboarding: undefined;
  Login: undefined;
  Register: undefined;
  ForgotPassword: undefined;
  ResetPassword: undefined;
};

export type HomeStackParamList = {
  HomeScreen: undefined;
  TopRatedScreen: undefined;
  TrendingScreen: undefined;
  ProfileScreen: undefined;
  ViewProfileScreen: undefined;
  CoursePreviewScreen: { item: object };
  CourseReviewScreen: undefined;
  AllCoursesScreen: undefined;
  CartScreen: {item: object};
};

export interface RootStackParamList extends HomeStackParamList, AuthStackParamList {}


declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}