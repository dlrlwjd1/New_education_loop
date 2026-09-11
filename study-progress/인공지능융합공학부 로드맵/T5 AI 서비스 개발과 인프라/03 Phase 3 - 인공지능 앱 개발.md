# T5 Phase 3 — 인공지능 앱 개발

> 학부 교과 **인공지능앱개발(2학년 2학기, 이론실습병행 3학점)**
> 교과목해설: "React Native의 기본 개념을 배우고, AI 모델과 서비스를 모바일 앱에 통합하는 방법을 익히게 된다. React Native의 크로스 플랫폼 기능을 활용하여 AI 기반 기능을 구현하고, 모바일 애플리케이션을 설계하는 방법을 다룬다"

- 목표: AI 기능이 붙은 모바일 앱을 만들어 실기기에서 돌린다.
- 분량: 약 22시간
- 마지막 학습일: (미학습)

> **중복 안내**: **리액트 네이티브 로드맵**이 같은 강의를 훨씬 넓게 다룬다(8 Phase + 부록 2). 여기는 **학부 한 과목 분량으로 압축한 자체 체크박스**다. 저쪽에서 이미 본 강의는 학습일을 옮겨 적는다. 앱 개발이 주 진로라면 이 Phase 대신 리액트 네이티브 로드맵을 통째로 도는 편이 낫다.
>
> **선행**: [Phase 1](01%20Phase%201%20-%20%EC%9B%B9%20%EA%B0%9C%EB%B0%9C%20%EA%B8%B0%EC%B4%88%EC%99%80%20%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8.md) 1-E(React). React를 모르면 여기가 두 배로 어렵다.

## 이 단계가 끝나면 할 수 있어야 하는 것

- React Native의 코어 컴포넌트로 화면을 만든다
- 리스트·입력·터치·이미지를 다룬다
- React Navigation으로 화면 사이를 이동한다
- 네이티브 기능(카메라·위치·알림)을 붙인다
- 서버 API를 호출해 AI 기능을 앱 안에서 쓴다
- 앱을 빌드해 실기기에 올린다

## 3-A. React Native 기초

메인: React Native (MOOC · Meta)

- [ ] [01 Introduction to the course.md](../../../courses/mooc/Mobile%20Development/React%20Native/Module%201%20-%20Introduction%20to%20React%20Native/01%20Introduction%20to%20the%20course.md)
- [ ] [02 What is React Native.md](../../../courses/mooc/Mobile%20Development/React%20Native/Module%201%20-%20Introduction%20to%20React%20Native/02%20What%20is%20React%20Native.md)
- [ ] [03 Native, cross-platform and hybrid developer roles.md](../../../courses/mooc/Mobile%20Development/React%20Native/Module%201%20-%20Introduction%20to%20React%20Native/03%20Native,%20cross-platform%20and%20hybrid%20developer%20roles.md)
- [ ] [04 Meet a cross-platform developer.md](../../../courses/mooc/Mobile%20Development/React%20Native/Module%201%20-%20Introduction%20to%20React%20Native/04%20Meet%20a%20cross-platform%20developer.md)
- [ ] [05 React Native Development Environment Overview.md](../../../courses/mooc/Mobile%20Development/React%20Native/Module%201%20-%20Introduction%20to%20React%20Native/05%20React%20Native%20Development%20Environment%20Overview.md)
- [ ] [06 React Native with Expo.md](../../../courses/mooc/Mobile%20Development/React%20Native/Module%201%20-%20Introduction%20to%20React%20Native/06%20React%20Native%20with%20Expo.md)
- [ ] [07 How is React Native used in the real world.md](../../../courses/mooc/Mobile%20Development/React%20Native/Module%201%20-%20Introduction%20to%20React%20Native/07%20How%20is%20React%20Native%20used%20in%20the%20real%20world.md)
- [ ] [08 React Native Code.md](../../../courses/mooc/Mobile%20Development/React%20Native/Module%201%20-%20Introduction%20to%20React%20Native/08%20React%20Native%20Code.md)
- [ ] [09 What is Expo.md](../../../courses/mooc/Mobile%20Development/React%20Native/Module%201%20-%20Introduction%20to%20React%20Native/09%20What%20is%20Expo.md)
- [ ] [10 What are React Native Components.md](../../../courses/mooc/Mobile%20Development/React%20Native/Module%201%20-%20Introduction%20to%20React%20Native/10%20What%20are%20React%20Native%20Components.md)
- [ ] [11 Building a component.md](../../../courses/mooc/Mobile%20Development/React%20Native/Module%201%20-%20Introduction%20to%20React%20Native/11%20Building%20a%20component.md)
- [ ] [12 What are View and Text Components.md](../../../courses/mooc/Mobile%20Development/React%20Native/Module%201%20-%20Introduction%20to%20React%20Native/12%20What%20are%20View%20and%20Text%20Components.md)
- [ ] [13 Using the View and Text Components.md](../../../courses/mooc/Mobile%20Development/React%20Native/Module%201%20-%20Introduction%20to%20React%20Native/13%20Using%20the%20View%20and%20Text%20Components.md)
- [ ] [14 What is the ScrollView Component.md](../../../courses/mooc/Mobile%20Development/React%20Native/Module%201%20-%20Introduction%20to%20React%20Native/14%20What%20is%20the%20ScrollView%20Component.md)
- [ ] [15 Using the ScrollView Component.md](../../../courses/mooc/Mobile%20Development/React%20Native/Module%201%20-%20Introduction%20to%20React%20Native/15%20Using%20the%20ScrollView%20Component.md)
- [ ] [16 Styling Components using StyleSheet.md](../../../courses/mooc/Mobile%20Development/React%20Native/Module%201%20-%20Introduction%20to%20React%20Native/16%20Styling%20Components%20using%20StyleSheet.md)
- [ ] [17 Practical Styling.md](../../../courses/mooc/Mobile%20Development/React%20Native/Module%201%20-%20Introduction%20to%20React%20Native/17%20Practical%20Styling.md)
- [ ] [18 Module summary - Introduction to React Native.md](../../../courses/mooc/Mobile%20Development/React%20Native/Module%201%20-%20Introduction%20to%20React%20Native/18%20Module%20summary%20-%20Introduction%20to%20React%20Native.md)
- [ ] [01 Rendering large lists using FlatList component.md](../../../courses/mooc/Mobile%20Development/React%20Native/Module%202%20-%20Lists%20and%20Text%20Input%20in%20React%20Native/01%20Rendering%20large%20lists%20using%20FlatList%20component.md)
- [ ] [02 Using the FlatList component.md](../../../courses/mooc/Mobile%20Development/React%20Native/Module%202%20-%20Lists%20and%20Text%20Input%20in%20React%20Native/02%20Using%20the%20FlatList%20component.md)
- [ ] [03 FlatList Methods.md](../../../courses/mooc/Mobile%20Development/React%20Native/Module%202%20-%20Lists%20and%20Text%20Input%20in%20React%20Native/03%20FlatList%20Methods.md)
- [ ] [04 Render large lists by sections using SectionList.md](../../../courses/mooc/Mobile%20Development/React%20Native/Module%202%20-%20Lists%20and%20Text%20Input%20in%20React%20Native/04%20Render%20large%20lists%20by%20sections%20using%20SectionList.md)
- [ ] [05 Using the SectionList component.md](../../../courses/mooc/Mobile%20Development/React%20Native/Module%202%20-%20Lists%20and%20Text%20Input%20in%20React%20Native/05%20Using%20the%20SectionList%20component.md)
- [ ] [06 What is the TextInput component.md](../../../courses/mooc/Mobile%20Development/React%20Native/Module%202%20-%20Lists%20and%20Text%20Input%20in%20React%20Native/06%20What%20is%20the%20TextInput%20component.md)
- [ ] [07 Configure the TextInput Component.md](../../../courses/mooc/Mobile%20Development/React%20Native/Module%202%20-%20Lists%20and%20Text%20Input%20in%20React%20Native/07%20Configure%20the%20TextInput%20Component.md)
- [ ] [08 Virtual Keyboard on Mobile Apps.md](../../../courses/mooc/Mobile%20Development/React%20Native/Module%202%20-%20Lists%20and%20Text%20Input%20in%20React%20Native/08%20Virtual%20Keyboard%20on%20Mobile%20Apps.md)
- [ ] [09 Handling the Virtual Keyboard.md](../../../courses/mooc/Mobile%20Development/React%20Native/Module%202%20-%20Lists%20and%20Text%20Input%20in%20React%20Native/09%20Handling%20the%20Virtual%20Keyboard.md)
- [ ] [10 Passing props to TextInput Component.md](../../../courses/mooc/Mobile%20Development/React%20Native/Module%202%20-%20Lists%20and%20Text%20Input%20in%20React%20Native/10%20Passing%20props%20to%20TextInput%20Component.md)
- [ ] [11 Using TextInput Methods.md](../../../courses/mooc/Mobile%20Development/React%20Native/Module%202%20-%20Lists%20and%20Text%20Input%20in%20React%20Native/11%20Using%20TextInput%20Methods.md)
- [ ] [12 Module summary - Lists and Text Input in React Native.md](../../../courses/mooc/Mobile%20Development/React%20Native/Module%202%20-%20Lists%20and%20Text%20Input%20in%20React%20Native/12%20Module%20summary%20-%20Lists%20and%20Text%20Input%20in%20React%20Native.md)
- [ ] [01 What is the Pressable Component.md](../../../courses/mooc/Mobile%20Development/React%20Native/Module%203%20-%20Pressable,%20Images%20and%20Hooks%20in%20React%20Native/01%20What%20is%20the%20Pressable%20Component.md)
- [ ] [02 Using Pressable Component.md](../../../courses/mooc/Mobile%20Development/React%20Native/Module%203%20-%20Pressable,%20Images%20and%20Hooks%20in%20React%20Native/02%20Using%20Pressable%20Component.md)
- [ ] [03 Displaying Images in React Native.md](../../../courses/mooc/Mobile%20Development/React%20Native/Module%203%20-%20Pressable,%20Images%20and%20Hooks%20in%20React%20Native/03%20Displaying%20Images%20in%20React%20Native.md)
- [ ] [04 Using Image Component.md](../../../courses/mooc/Mobile%20Development/React%20Native/Module%203%20-%20Pressable,%20Images%20and%20Hooks%20in%20React%20Native/04%20Using%20Image%20Component.md)
- [ ] [05 Styling an Image within the app.md](../../../courses/mooc/Mobile%20Development/React%20Native/Module%203%20-%20Pressable,%20Images%20and%20Hooks%20in%20React%20Native/05%20Styling%20an%20Image%20within%20the%20app.md)
- [ ] [06 Passing props to the Image Component.md](../../../courses/mooc/Mobile%20Development/React%20Native/Module%203%20-%20Pressable,%20Images%20and%20Hooks%20in%20React%20Native/06%20Passing%20props%20to%20the%20Image%20Component.md)
- [ ] [07 Setting Background Images.md](../../../courses/mooc/Mobile%20Development/React%20Native/Module%203%20-%20Pressable,%20Images%20and%20Hooks%20in%20React%20Native/07%20Setting%20Background%20Images.md)
- [ ] [08 What are hooks.md](../../../courses/mooc/Mobile%20Development/React%20Native/Module%203%20-%20Pressable,%20Images%20and%20Hooks%20in%20React%20Native/08%20What%20are%20hooks.md)
- [ ] [09 Using useColorScheme hook.md](../../../courses/mooc/Mobile%20Development/React%20Native/Module%203%20-%20Pressable,%20Images%20and%20Hooks%20in%20React%20Native/09%20Using%20useColorScheme%20hook.md)
- [ ] [10 Using useWindowDimensions hook.md](../../../courses/mooc/Mobile%20Development/React%20Native/Module%203%20-%20Pressable,%20Images%20and%20Hooks%20in%20React%20Native/10%20Using%20useWindowDimensions%20hook.md)
- [ ] [11 Using other community hooks.md](../../../courses/mooc/Mobile%20Development/React%20Native/Module%203%20-%20Pressable,%20Images%20and%20Hooks%20in%20React%20Native/11%20Using%20other%20community%20hooks.md)
- [ ] [12 Module summary - Pressable, Images and Hooks in React Native.md](../../../courses/mooc/Mobile%20Development/React%20Native/Module%203%20-%20Pressable,%20Images%20and%20Hooks%20in%20React%20Native/12%20Module%20summary%20-%20Pressable,%20Images%20and%20Hooks%20in%20React%20Native.md)
- [ ] [01 What is React Navigation.md](../../../courses/mooc/Mobile%20Development/React%20Native/Module%204%20-%20React%20Navigation/01%20What%20is%20React%20Navigation.md)
- [ ] [02 Setting up React Navigation.md](../../../courses/mooc/Mobile%20Development/React%20Native/Module%204%20-%20React%20Navigation/02%20Setting%20up%20React%20Navigation.md)
- [ ] [03 Using the Stack.Navigator.md](../../../courses/mooc/Mobile%20Development/React%20Native/Module%204%20-%20React%20Navigation/03%20Using%20the%20Stack.Navigator.md)
- [ ] [04 Approaches to Passing Props to Screen.md](../../../courses/mooc/Mobile%20Development/React%20Native/Module%204%20-%20React%20Navigation/04%20Approaches%20to%20Passing%20Props%20to%20Screen.md)
- [ ] [05 Moving to a New Screen.md](../../../courses/mooc/Mobile%20Development/React%20Native/Module%204%20-%20React%20Navigation/05%20Moving%20to%20a%20New%20Screen.md)
- [ ] [06 Moving Between Screens.md](../../../courses/mooc/Mobile%20Development/React%20Native/Module%204%20-%20React%20Navigation/06%20Moving%20Between%20Screens.md)
- [ ] [07 Going Back to Previous Screen.md](../../../courses/mooc/Mobile%20Development/React%20Native/Module%204%20-%20React%20Navigation/07%20Going%20Back%20to%20Previous%20Screen.md)
- [ ] [08 Configuring a Header Bar.md](../../../courses/mooc/Mobile%20Development/React%20Native/Module%204%20-%20React%20Navigation/08%20Configuring%20a%20Header%20Bar.md)
- [ ] [09 What is Tab Navigation.md](../../../courses/mooc/Mobile%20Development/React%20Native/Module%204%20-%20React%20Navigation/09%20What%20is%20Tab%20Navigation.md)
- [ ] [10 Tab Navigation Example.md](../../../courses/mooc/Mobile%20Development/React%20Native/Module%204%20-%20React%20Navigation/10%20Tab%20Navigation%20Example.md)
- [ ] [11 Customizing your tab navigator.md](../../../courses/mooc/Mobile%20Development/React%20Native/Module%204%20-%20React%20Navigation/11%20Customizing%20your%20tab%20navigator.md)
- [ ] [12 What is Drawer Navigation.md](../../../courses/mooc/Mobile%20Development/React%20Native/Module%204%20-%20React%20Navigation/12%20What%20is%20Drawer%20Navigation.md)
- [ ] [13 Drawer Navigation Example.md](../../../courses/mooc/Mobile%20Development/React%20Native/Module%204%20-%20React%20Navigation/13%20Drawer%20Navigation%20Example.md)
- [ ] [14 Module summary - React Navigation.md](../../../courses/mooc/Mobile%20Development/React%20Native/Module%204%20-%20React%20Navigation/14%20Module%20summary%20-%20React%20Navigation.md)
- [ ] [01 Course Recap - React Native.md](../../../courses/mooc/Mobile%20Development/React%20Native/Module%205%20-%20Final%20project%20assessment/01%20Course%20Recap%20-%20React%20Native.md)
- [ ] [03 Congratulations, you have completed React Native.md](../../../courses/mooc/Mobile%20Development/React%20Native/Module%205%20-%20Final%20project%20assessment/03%20Congratulations,%20you%20have%20completed%20React%20Native.md)

## 3-B. 고급 UI와 네이티브 기능

메인: Advanced Concepts in React Native Development

- [ ] [01 Using ScrollView for Long Content.md](../../../courses/mooc/Mobile%20Development/Advanced%20Concepts%20in%20React%20Native%20Development/Module%201%20-%20Advanced%20UI%20and%20User%20Experience/01%20Using%20ScrollView%20for%20Long%20Content.md)
- [ ] [02 Implementing Grid Layouts with FlatList.md](../../../courses/mooc/Mobile%20Development/Advanced%20Concepts%20in%20React%20Native%20Development/Module%201%20-%20Advanced%20UI%20and%20User%20Experience/02%20Implementing%20Grid%20Layouts%20with%20FlatList.md)
- [ ] [03 Customizing NativeBase and React Native Paper Components.md](../../../courses/mooc/Mobile%20Development/Advanced%20Concepts%20in%20React%20Native%20Development/Module%201%20-%20Advanced%20UI%20and%20User%20Experience/03%20Customizing%20NativeBase%20and%20React%20Native%20Paper%20Components.md)
- [ ] [04 Using the Animated API for Basic Animations.md](../../../courses/mooc/Mobile%20Development/Advanced%20Concepts%20in%20React%20Native%20Development/Module%201%20-%20Advanced%20UI%20and%20User%20Experience/04%20Using%20the%20Animated%20API%20for%20Basic%20Animations.md)
- [ ] [05 Building Complex Animations with Reanimated.md](../../../courses/mooc/Mobile%20Development/Advanced%20Concepts%20in%20React%20Native%20Development/Module%201%20-%20Advanced%20UI%20and%20User%20Experience/05%20Building%20Complex%20Animations%20with%20Reanimated.md)
- [ ] [06 Animating Transitions Between Screens.md](../../../courses/mooc/Mobile%20Development/Advanced%20Concepts%20in%20React%20Native%20Development/Module%201%20-%20Advanced%20UI%20and%20User%20Experience/06%20Animating%20Transitions%20Between%20Screens.md)
- [ ] [07 Implementing Swipes, Pinches, and Taps.md](../../../courses/mooc/Mobile%20Development/Advanced%20Concepts%20in%20React%20Native%20Development/Module%201%20-%20Advanced%20UI%20and%20User%20Experience/07%20Implementing%20Swipes,%20Pinches,%20and%20Taps.md)
- [ ] [08 Using React Native Gesture Handler.md](../../../courses/mooc/Mobile%20Development/Advanced%20Concepts%20in%20React%20Native%20Development/Module%201%20-%20Advanced%20UI%20and%20User%20Experience/08%20Using%20React%20Native%20Gesture%20Handler.md)
- [ ] [09 Building Custom Gesture Interactions.md](../../../courses/mooc/Mobile%20Development/Advanced%20Concepts%20in%20React%20Native%20Development/Module%201%20-%20Advanced%20UI%20and%20User%20Experience/09%20Building%20Custom%20Gesture%20Interactions.md)
- [ ] [10 Avoiding Re-renders with React.memo and useCallback.md](../../../courses/mooc/Mobile%20Development/Advanced%20Concepts%20in%20React%20Native%20Development/Module%201%20-%20Advanced%20UI%20and%20User%20Experience/10%20Avoiding%20Re-renders%20with%20React.memo%20and%20useCallback.md)
- [ ] [11 Optimizing Lists and Views with VirtualizedList.md](../../../courses/mooc/Mobile%20Development/Advanced%20Concepts%20in%20React%20Native%20Development/Module%201%20-%20Advanced%20UI%20and%20User%20Experience/11%20Optimizing%20Lists%20and%20Views%20with%20VirtualizedList.md)
- [ ] [12 Profiling and Debugging Performance Bottlenecks.md](../../../courses/mooc/Mobile%20Development/Advanced%20Concepts%20in%20React%20Native%20Development/Module%201%20-%20Advanced%20UI%20and%20User%20Experience/12%20Profiling%20and%20Debugging%20Performance%20Bottlenecks.md)
- [ ] [01 Understanding the Native Module Bridge.md](../../../courses/mooc/Mobile%20Development/Advanced%20Concepts%20in%20React%20Native%20Development/Module%202%20-%20Native%20Features%20and%20Platform-Specific%20APIs/01%20Understanding%20the%20Native%20Module%20Bridge.md)
- [ ] [02 Creating and Linking Custom Native Modules.md](../../../courses/mooc/Mobile%20Development/Advanced%20Concepts%20in%20React%20Native%20Development/Module%202%20-%20Native%20Features%20and%20Platform-Specific%20APIs/02%20Creating%20and%20Linking%20Custom%20Native%20Modules.md)
- [ ] [03 Debugging Issues with Native Code.md](../../../courses/mooc/Mobile%20Development/Advanced%20Concepts%20in%20React%20Native%20Development/Module%202%20-%20Native%20Features%20and%20Platform-Specific%20APIs/03%20Debugging%20Issues%20with%20Native%20Code.md)
- [ ] [04 Accessing Camera and Media Libraries.md](../../../courses/mooc/Mobile%20Development/Advanced%20Concepts%20in%20React%20Native%20Development/Module%202%20-%20Native%20Features%20and%20Platform-Specific%20APIs/04%20Accessing%20Camera%20and%20Media%20Libraries.md)
- [ ] [05 Geolocation and Maps Integration.md](../../../courses/mooc/Mobile%20Development/Advanced%20Concepts%20in%20React%20Native%20Development/Module%202%20-%20Native%20Features%20and%20Platform-Specific%20APIs/05%20Geolocation%20and%20Maps%20Integration.md)
- [ ] [06 Using Sensors - Accelerometer, Gyroscope in React Native.md](../../../courses/mooc/Mobile%20Development/Advanced%20Concepts%20in%20React%20Native%20Development/Module%202%20-%20Native%20Features%20and%20Platform-Specific%20APIs/06%20Using%20Sensors%20-%20Accelerometer,%20Gyroscope%20in%20React%20Native.md)
- [ ] [07 Implementing Local Notifications.md](../../../courses/mooc/Mobile%20Development/Advanced%20Concepts%20in%20React%20Native%20Development/Module%202%20-%20Native%20Features%20and%20Platform-Specific%20APIs/07%20Implementing%20Local%20Notifications.md)
- [ ] [08 Setting Up Push Notifications with Firebase.md](../../../courses/mooc/Mobile%20Development/Advanced%20Concepts%20in%20React%20Native%20Development/Module%202%20-%20Native%20Features%20and%20Platform-Specific%20APIs/08%20Setting%20Up%20Push%20Notifications%20with%20Firebase.md)
- [ ] [01 Introduction to Jest for Testing.md](../../../courses/mooc/Mobile%20Development/Advanced%20Concepts%20in%20React%20Native%20Development/Module%203%20-%20Testing%20and%20Debugging%20React%20Native%20Apps/01%20Introduction%20to%20Jest%20for%20Testing.md)
- [ ] [02 Testing with React Native.md](../../../courses/mooc/Mobile%20Development/Advanced%20Concepts%20in%20React%20Native%20Development/Module%203%20-%20Testing%20and%20Debugging%20React%20Native%20Apps/02%20Testing%20with%20React%20Native.md)
- [ ] [03 Testing Asynchronous Code with Mocks.md](../../../courses/mooc/Mobile%20Development/Advanced%20Concepts%20in%20React%20Native%20Development/Module%203%20-%20Testing%20and%20Debugging%20React%20Native%20Apps/03%20Testing%20Asynchronous%20Code%20with%20Mocks.md)
- [ ] [04 Setting Up Detox for E2E Testing.md](../../../courses/mooc/Mobile%20Development/Advanced%20Concepts%20in%20React%20Native%20Development/Module%203%20-%20Testing%20and%20Debugging%20React%20Native%20Apps/04%20Setting%20Up%20Detox%20for%20E2E%20Testing.md)
- [ ] [05 Implementing Jest Testing in React Native.md](../../../courses/mooc/Mobile%20Development/Advanced%20Concepts%20in%20React%20Native%20Development/Module%203%20-%20Testing%20and%20Debugging%20React%20Native%20Apps/05%20Implementing%20Jest%20Testing%20in%20React%20Native.md)
- [ ] [06 Debugging Tools - React Native Debugger and Flipper.md](../../../courses/mooc/Mobile%20Development/Advanced%20Concepts%20in%20React%20Native%20Development/Module%203%20-%20Testing%20and%20Debugging%20React%20Native%20Apps/06%20Debugging%20Tools%20-%20React%20Native%20Debugger%20and%20Flipper.md)
- [ ] [07 Handling and Logging Errors.md](../../../courses/mooc/Mobile%20Development/Advanced%20Concepts%20in%20React%20Native%20Development/Module%203%20-%20Testing%20and%20Debugging%20React%20Native%20Apps/07%20Handling%20and%20Logging%20Errors.md)

## 3-C. CLI 환경·AI 챗 앱·배포

메인: Advanced React Native Techniques and Deployment. **Module 4~5가 정확히 "AI 모델과 서비스를 모바일 앱에 통합"에 해당한다**

- [ ] [01 React Native CLI.md](../../../courses/mooc/Mobile%20Development/Advanced%20React%20Native%20Techniques%20and%20Deployment/Module%201%20-%20Introduction%20to%20React%20Native%20CLI/01%20React%20Native%20CLI.md)
- [ ] [02 How Expo and CLI Share a Lot Together.md](../../../courses/mooc/Mobile%20Development/Advanced%20React%20Native%20Techniques%20and%20Deployment/Module%201%20-%20Introduction%20to%20React%20Native%20CLI/02%20How%20Expo%20and%20CLI%20Share%20a%20Lot%20Together.md)
- [ ] [03 MacOS Environment Setup.md](../../../courses/mooc/Mobile%20Development/Advanced%20React%20Native%20Techniques%20and%20Deployment/Module%201%20-%20Introduction%20to%20React%20Native%20CLI/03%20MacOS%20Environment%20Setup.md)
- [ ] [04 Mac Android Environment Setup.md](../../../courses/mooc/Mobile%20Development/Advanced%20React%20Native%20Techniques%20and%20Deployment/Module%201%20-%20Introduction%20to%20React%20Native%20CLI/04%20Mac%20Android%20Environment%20Setup.md)
- [ ] [05 Run App on iOS & Android.md](../../../courses/mooc/Mobile%20Development/Advanced%20React%20Native%20Techniques%20and%20Deployment/Module%201%20-%20Introduction%20to%20React%20Native%20CLI/05%20Run%20App%20on%20iOS%20&%20Android.md)
- [ ] [06 Run App on Real Android Device.md](../../../courses/mooc/Mobile%20Development/Advanced%20React%20Native%20Techniques%20and%20Deployment/Module%201%20-%20Introduction%20to%20React%20Native%20CLI/06%20Run%20App%20on%20Real%20Android%20Device.md)
- [ ] [07 Run App on Real iPhone Device.md](../../../courses/mooc/Mobile%20Development/Advanced%20React%20Native%20Techniques%20and%20Deployment/Module%201%20-%20Introduction%20to%20React%20Native%20CLI/07%20Run%20App%20on%20Real%20iPhone%20Device.md)
- [ ] [08 Introduction to Yarn.md](../../../courses/mooc/Mobile%20Development/Advanced%20React%20Native%20Techniques%20and%20Deployment/Module%201%20-%20Introduction%20to%20React%20Native%20CLI/08%20Introduction%20to%20Yarn.md)

- [ ] [01 Change Bundle ID.md](../../../courses/mooc/Mobile%20Development/Advanced%20React%20Native%20Techniques%20and%20Deployment/Module%202%20-%20Firebase%20with%20React%20Native%20CLI/01%20Change%20Bundle%20ID.md)
- [ ] [02 Integrate Firebase with Android.md](../../../courses/mooc/Mobile%20Development/Advanced%20React%20Native%20Techniques%20and%20Deployment/Module%202%20-%20Firebase%20with%20React%20Native%20CLI/02%20Integrate%20Firebase%20with%20Android.md)
- [ ] [03 Integrate Firebase with iOS.md](../../../courses/mooc/Mobile%20Development/Advanced%20React%20Native%20Techniques%20and%20Deployment/Module%202%20-%20Firebase%20with%20React%20Native%20CLI/03%20Integrate%20Firebase%20with%20iOS.md)
- [ ] [04 Push Notifications Android.md](../../../courses/mooc/Mobile%20Development/Advanced%20React%20Native%20Techniques%20and%20Deployment/Module%202%20-%20Firebase%20with%20React%20Native%20CLI/04%20Push%20Notifications%20Android.md)
- [ ] [05 Foreground Notifications.md](../../../courses/mooc/Mobile%20Development/Advanced%20React%20Native%20Techniques%20and%20Deployment/Module%202%20-%20Firebase%20with%20React%20Native%20CLI/05%20Foreground%20Notifications.md)
- [ ] [06 Social Login - Google Gmail Login with Android.md](../../../courses/mooc/Mobile%20Development/Advanced%20React%20Native%20Techniques%20and%20Deployment/Module%202%20-%20Firebase%20with%20React%20Native%20CLI/06%20Social%20Login%20-%20Google%20Gmail%20Login%20with%20Android.md)
- [ ] [07 Social Login - Google Gmail Login with iOS.md](../../../courses/mooc/Mobile%20Development/Advanced%20React%20Native%20Techniques%20and%20Deployment/Module%202%20-%20Firebase%20with%20React%20Native%20CLI/07%20Social%20Login%20-%20Google%20Gmail%20Login%20with%20iOS.md)

- [ ] [01 Open Gallery and Camera to Pick Images.md](../../../courses/mooc/Mobile%20Development/Advanced%20React%20Native%20Techniques%20and%20Deployment/Module%203%20-%20Native%20Code%20and%20Native%20Modules/01%20Open%20Gallery%20and%20Camera%20to%20Pick%20Images.md)
- [ ] [02 Change App Name.md](../../../courses/mooc/Mobile%20Development/Advanced%20React%20Native%20Techniques%20and%20Deployment/Module%203%20-%20Native%20Code%20and%20Native%20Modules/02%20Change%20App%20Name.md)
- [ ] [03 Change App Icon iOS.md](../../../courses/mooc/Mobile%20Development/Advanced%20React%20Native%20Techniques%20and%20Deployment/Module%203%20-%20Native%20Code%20and%20Native%20Modules/03%20Change%20App%20Icon%20iOS.md)
- [ ] [04 Change App Icon Android.md](../../../courses/mooc/Mobile%20Development/Advanced%20React%20Native%20Techniques%20and%20Deployment/Module%203%20-%20Native%20Code%20and%20Native%20Modules/04%20Change%20App%20Icon%20Android.md)
- [ ] [05 Splash Screen Android.md](../../../courses/mooc/Mobile%20Development/Advanced%20React%20Native%20Techniques%20and%20Deployment/Module%203%20-%20Native%20Code%20and%20Native%20Modules/05%20Splash%20Screen%20Android.md)
- [ ] [06 Splash Screen iOS.md](../../../courses/mooc/Mobile%20Development/Advanced%20React%20Native%20Techniques%20and%20Deployment/Module%203%20-%20Native%20Code%20and%20Native%20Modules/06%20Splash%20Screen%20iOS.md)
- [ ] [07 Integrate Google Maps & iOS Maps in React Native App.md](../../../courses/mooc/Mobile%20Development/Advanced%20React%20Native%20Techniques%20and%20Deployment/Module%203%20-%20Native%20Code%20and%20Native%20Modules/07%20Integrate%20Google%20Maps%20&%20iOS%20Maps%20in%20React%20Native%20App.md)
- [ ] [08 Display Google Map in App.md](../../../courses/mooc/Mobile%20Development/Advanced%20React%20Native%20Techniques%20and%20Deployment/Module%203%20-%20Native%20Code%20and%20Native%20Modules/08%20Display%20Google%20Map%20in%20App.md)
- [ ] [09 Adding Markers to MapView.md](../../../courses/mooc/Mobile%20Development/Advanced%20React%20Native%20Techniques%20and%20Deployment/Module%203%20-%20Native%20Code%20and%20Native%20Modules/09%20Adding%20Markers%20to%20MapView.md)
- [ ] [10 React Native Vector Icons.md](../../../courses/mooc/Mobile%20Development/Advanced%20React%20Native%20Techniques%20and%20Deployment/Module%203%20-%20Native%20Code%20and%20Native%20Modules/10%20React%20Native%20Vector%20Icons.md)
- [ ] [11 How to Use SVGs with React Native.md](../../../courses/mooc/Mobile%20Development/Advanced%20React%20Native%20Techniques%20and%20Deployment/Module%203%20-%20Native%20Code%20and%20Native%20Modules/11%20How%20to%20Use%20SVGs%20with%20React%20Native.md)

AI 챗 앱 — 이 Phase의 핵심

- [ ] [01 App Init Structures.md](../../../courses/mooc/Mobile%20Development/Advanced%20React%20Native%20Techniques%20and%20Deployment/Module%204%20-%20AI%20Chat%20App%20-%20Folder%20Structure/01%20App%20Init%20Structures.md)
- [ ] [02 Useful Scripts.md](../../../courses/mooc/Mobile%20Development/Advanced%20React%20Native%20Techniques%20and%20Deployment/Module%204%20-%20AI%20Chat%20App%20-%20Folder%20Structure/02%20Useful%20Scripts.md)
- [ ] [03 Integrate with Reactotron.md](../../../courses/mooc/Mobile%20Development/Advanced%20React%20Native%20Techniques%20and%20Deployment/Module%204%20-%20AI%20Chat%20App%20-%20Folder%20Structure/03%20Integrate%20with%20Reactotron.md)

- [ ] [01 App Header.md](../../../courses/mooc/Mobile%20Development/Advanced%20React%20Native%20Techniques%20and%20Deployment/Module%205%20-%20AI%20Chat%20App%20-%20App%20UI%20and%20Integration/01%20App%20Header.md)
- [ ] [02 Sent Message Card.md](../../../courses/mooc/Mobile%20Development/Advanced%20React%20Native%20Techniques%20and%20Deployment/Module%205%20-%20AI%20Chat%20App%20-%20App%20UI%20and%20Integration/02%20Sent%20Message%20Card.md)
- [ ] [03 Response Message Card.md](../../../courses/mooc/Mobile%20Development/Advanced%20React%20Native%20Techniques%20and%20Deployment/Module%205%20-%20AI%20Chat%20App%20-%20App%20UI%20and%20Integration/03%20Response%20Message%20Card.md)
- [ ] [04 Put Messages in FlatList.md](../../../courses/mooc/Mobile%20Development/Advanced%20React%20Native%20Techniques%20and%20Deployment/Module%205%20-%20AI%20Chat%20App%20-%20App%20UI%20and%20Integration/04%20Put%20Messages%20in%20FlatList.md)
- [ ] [05 Adding TypeScript.md](../../../courses/mooc/Mobile%20Development/Advanced%20React%20Native%20Techniques%20and%20Deployment/Module%205%20-%20AI%20Chat%20App%20-%20App%20UI%20and%20Integration/05%20Adding%20TypeScript.md)
- [ ] [06 Chat Input.md](../../../courses/mooc/Mobile%20Development/Advanced%20React%20Native%20Techniques%20and%20Deployment/Module%205%20-%20AI%20Chat%20App%20-%20App%20UI%20and%20Integration/06%20Chat%20Input.md)
- [ ] [07 KeyboardAvoidingView.md](../../../courses/mooc/Mobile%20Development/Advanced%20React%20Native%20Techniques%20and%20Deployment/Module%205%20-%20AI%20Chat%20App%20-%20App%20UI%20and%20Integration/07%20KeyboardAvoidingView.md)
- [ ] [08 ChatInput Props.md](../../../courses/mooc/Mobile%20Development/Advanced%20React%20Native%20Techniques%20and%20Deployment/Module%205%20-%20AI%20Chat%20App%20-%20App%20UI%20and%20Integration/08%20ChatInput%20Props.md)
- [ ] [09 Send Messages.md](../../../courses/mooc/Mobile%20Development/Advanced%20React%20Native%20Techniques%20and%20Deployment/Module%205%20-%20AI%20Chat%20App%20-%20App%20UI%20and%20Integration/09%20Send%20Messages.md)
- [ ] [10 Receive Messages.md](../../../courses/mooc/Mobile%20Development/Advanced%20React%20Native%20Techniques%20and%20Deployment/Module%205%20-%20AI%20Chat%20App%20-%20App%20UI%20and%20Integration/10%20Receive%20Messages.md)
- [ ] [11 Adding Typing Effect.md](../../../courses/mooc/Mobile%20Development/Advanced%20React%20Native%20Techniques%20and%20Deployment/Module%205%20-%20AI%20Chat%20App%20-%20App%20UI%20and%20Integration/11%20Adding%20Typing%20Effect.md)
- [ ] [12 Empty Chat Screen.md](../../../courses/mooc/Mobile%20Development/Advanced%20React%20Native%20Techniques%20and%20Deployment/Module%205%20-%20AI%20Chat%20App%20-%20App%20UI%20and%20Integration/12%20Empty%20Chat%20Screen.md)
- [ ] [13 Auto Scroll to Bottom in FlatList.md](../../../courses/mooc/Mobile%20Development/Advanced%20React%20Native%20Techniques%20and%20Deployment/Module%205%20-%20AI%20Chat%20App%20-%20App%20UI%20and%20Integration/13%20Auto%20Scroll%20to%20Bottom%20in%20FlatList.md)
- [ ] [14 Keyboard State.md](../../../courses/mooc/Mobile%20Development/Advanced%20React%20Native%20Techniques%20and%20Deployment/Module%205%20-%20AI%20Chat%20App%20-%20App%20UI%20and%20Integration/14%20Keyboard%20State.md)
- [ ] [15 Create Hugging Face Access Token.md](../../../courses/mooc/Mobile%20Development/Advanced%20React%20Native%20Techniques%20and%20Deployment/Module%205%20-%20AI%20Chat%20App%20-%20App%20UI%20and%20Integration/15%20Create%20Hugging%20Face%20Access%20Token.md)
- [ ] [16 Connect App with Hugging (GPT-2).md](../../../courses/mooc/Mobile%20Development/Advanced%20React%20Native%20Techniques%20and%20Deployment/Module%205%20-%20AI%20Chat%20App%20-%20App%20UI%20and%20Integration/16%20Connect%20App%20with%20Hugging%20%28GPT-2%29.md)
- [ ] [17 Display Hugging Face (GPT-2) Response.md](../../../courses/mooc/Mobile%20Development/Advanced%20React%20Native%20Techniques%20and%20Deployment/Module%205%20-%20AI%20Chat%20App%20-%20App%20UI%20and%20Integration/17%20Display%20Hugging%20Face%20%28GPT-2%29%20Response.md)
- [ ] [18 Create OpenAI Key.md](../../../courses/mooc/Mobile%20Development/Advanced%20React%20Native%20Techniques%20and%20Deployment/Module%205%20-%20AI%20Chat%20App%20-%20App%20UI%20and%20Integration/18%20Create%20OpenAI%20Key.md)
- [ ] [19 Connect with OpenAI and Get Smarter Answers.md](../../../courses/mooc/Mobile%20Development/Advanced%20React%20Native%20Techniques%20and%20Deployment/Module%205%20-%20AI%20Chat%20App%20-%20App%20UI%20and%20Integration/19%20Connect%20with%20OpenAI%20and%20Get%20Smarter%20Answers.md)
- [ ] [20 Fix Input Padding Bottom.md](../../../courses/mooc/Mobile%20Development/Advanced%20React%20Native%20Techniques%20and%20Deployment/Module%205%20-%20AI%20Chat%20App%20-%20App%20UI%20and%20Integration/20%20Fix%20Input%20Padding%20Bottom.md)
- [ ] [21 Adding Try-Catch.md](../../../courses/mooc/Mobile%20Development/Advanced%20React%20Native%20Techniques%20and%20Deployment/Module%205%20-%20AI%20Chat%20App%20-%20App%20UI%20and%20Integration/21%20Adding%20Try-Catch.md)
- [ ] [22 Adding Thinking Loading.md](../../../courses/mooc/Mobile%20Development/Advanced%20React%20Native%20Techniques%20and%20Deployment/Module%205%20-%20AI%20Chat%20App%20-%20App%20UI%20and%20Integration/22%20Adding%20Thinking%20Loading.md)
- [ ] [23 Fix Typing Effect Issue.md](../../../courses/mooc/Mobile%20Development/Advanced%20React%20Native%20Techniques%20and%20Deployment/Module%205%20-%20AI%20Chat%20App%20-%20App%20UI%20and%20Integration/23%20Fix%20Typing%20Effect%20Issue.md)
- [ ] [24 Task Time.md](../../../courses/mooc/Mobile%20Development/Advanced%20React%20Native%20Techniques%20and%20Deployment/Module%205%20-%20AI%20Chat%20App%20-%20App%20UI%20and%20Integration/24%20Task%20Time.md)

배포와 애니메이션

- [ ] [01 Generate APK & AAB for Android.md](../../../courses/mooc/Mobile%20Development/Advanced%20React%20Native%20Techniques%20and%20Deployment/Module%206%20-%20React%20Native%20CLI%20Deployment/01%20Generate%20APK%20&%20AAB%20for%20Android.md)
- [ ] [02 OTA Updates Android.md](../../../courses/mooc/Mobile%20Development/Advanced%20React%20Native%20Techniques%20and%20Deployment/Module%206%20-%20React%20Native%20CLI%20Deployment/02%20OTA%20Updates%20Android.md)
- [ ] [03 OTA Updates iOS.md](../../../courses/mooc/Mobile%20Development/Advanced%20React%20Native%20Techniques%20and%20Deployment/Module%206%20-%20React%20Native%20CLI%20Deployment/03%20OTA%20Updates%20iOS.md)

- [ ] [01 Animation Section Introduction.md](../../../courses/mooc/Mobile%20Development/Advanced%20React%20Native%20Techniques%20and%20Deployment/Module%207%20-%20Animations%20with%20React%20Native/01%20Animation%20Section%20Introduction.md)
- [ ] [02 Moving Elements Horizontally.md](../../../courses/mooc/Mobile%20Development/Advanced%20React%20Native%20Techniques%20and%20Deployment/Module%207%20-%20Animations%20with%20React%20Native/02%20Moving%20Elements%20Horizontally.md)
- [ ] [03 Moving Elements Horizontally Multiple Times.md](../../../courses/mooc/Mobile%20Development/Advanced%20React%20Native%20Techniques%20and%20Deployment/Module%207%20-%20Animations%20with%20React%20Native/03%20Moving%20Elements%20Horizontally%20Multiple%20Times.md)
- [ ] [04 Move Elements Vertically.md](../../../courses/mooc/Mobile%20Development/Advanced%20React%20Native%20Techniques%20and%20Deployment/Module%207%20-%20Animations%20with%20React%20Native/04%20Move%20Elements%20Vertically.md)
- [ ] [05 Task Time - Task 1.md](../../../courses/mooc/Mobile%20Development/Advanced%20React%20Native%20Techniques%20and%20Deployment/Module%207%20-%20Animations%20with%20React%20Native/05%20Task%20Time%20-%20Task%201.md)
- [ ] [06 Animation Sequence.md](../../../courses/mooc/Mobile%20Development/Advanced%20React%20Native%20Techniques%20and%20Deployment/Module%207%20-%20Animations%20with%20React%20Native/06%20Animation%20Sequence.md)
- [ ] [07 Fade Animation.md](../../../courses/mooc/Mobile%20Development/Advanced%20React%20Native%20Techniques%20and%20Deployment/Module%207%20-%20Animations%20with%20React%20Native/07%20Fade%20Animation.md)
- [ ] [08 Task Time - Task 2.md](../../../courses/mooc/Mobile%20Development/Advanced%20React%20Native%20Techniques%20and%20Deployment/Module%207%20-%20Animations%20with%20React%20Native/08%20Task%20Time%20-%20Task%202.md)
- [ ] [09 Rotate Animation.md](../../../courses/mooc/Mobile%20Development/Advanced%20React%20Native%20Techniques%20and%20Deployment/Module%207%20-%20Animations%20with%20React%20Native/09%20Rotate%20Animation.md)
- [ ] [10 Task Time - Task 3.md](../../../courses/mooc/Mobile%20Development/Advanced%20React%20Native%20Techniques%20and%20Deployment/Module%207%20-%20Animations%20with%20React%20Native/10%20Task%20Time%20-%20Task%203.md)
- [ ] [11 Expand & Shrink Animation.md](../../../courses/mooc/Mobile%20Development/Advanced%20React%20Native%20Techniques%20and%20Deployment/Module%207%20-%20Animations%20with%20React%20Native/11%20Expand%20&%20Shrink%20Animation.md)
- [ ] [12 Task Time - Task 4.md](../../../courses/mooc/Mobile%20Development/Advanced%20React%20Native%20Techniques%20and%20Deployment/Module%207%20-%20Animations%20with%20React%20Native/12%20Task%20Time%20-%20Task%204.md)
- [ ] [13 How to Animate Color Changes.md](../../../courses/mooc/Mobile%20Development/Advanced%20React%20Native%20Techniques%20and%20Deployment/Module%207%20-%20Animations%20with%20React%20Native/13%20How%20to%20Animate%20Color%20Changes.md)

JavaScript 복습 (선택 — Phase 1을 끝냈으면 건너뛴다)

- [ ] [01 Logging.md](../../../courses/mooc/Mobile%20Development/Advanced%20React%20Native%20Techniques%20and%20Deployment/Module%208%20-%20JavaScript%20Crash%20Course%20%28Optional%29/01%20Logging.md)
- [ ] [02 Comments.md](../../../courses/mooc/Mobile%20Development/Advanced%20React%20Native%20Techniques%20and%20Deployment/Module%208%20-%20JavaScript%20Crash%20Course%20%28Optional%29/02%20Comments.md)
- [ ] [03 Data Types.md](../../../courses/mooc/Mobile%20Development/Advanced%20React%20Native%20Techniques%20and%20Deployment/Module%208%20-%20JavaScript%20Crash%20Course%20%28Optional%29/03%20Data%20Types.md)
- [ ] [04 Variables Rules.md](../../../courses/mooc/Mobile%20Development/Advanced%20React%20Native%20Techniques%20and%20Deployment/Module%208%20-%20JavaScript%20Crash%20Course%20%28Optional%29/04%20Variables%20Rules.md)
- [ ] [05 var let const.md](../../../courses/mooc/Mobile%20Development/Advanced%20React%20Native%20Techniques%20and%20Deployment/Module%208%20-%20JavaScript%20Crash%20Course%20%28Optional%29/05%20var%20let%20const.md)
- [ ] [06 Statements.md](../../../courses/mooc/Mobile%20Development/Advanced%20React%20Native%20Techniques%20and%20Deployment/Module%208%20-%20JavaScript%20Crash%20Course%20%28Optional%29/06%20Statements.md)
- [ ] [07 Arithmetic Operators.md](../../../courses/mooc/Mobile%20Development/Advanced%20React%20Native%20Techniques%20and%20Deployment/Module%208%20-%20JavaScript%20Crash%20Course%20%28Optional%29/07%20Arithmetic%20Operators.md)
- [ ] [08 Strings.md](../../../courses/mooc/Mobile%20Development/Advanced%20React%20Native%20Techniques%20and%20Deployment/Module%208%20-%20JavaScript%20Crash%20Course%20%28Optional%29/08%20Strings.md)
- [ ] [09 String Templates.md](../../../courses/mooc/Mobile%20Development/Advanced%20React%20Native%20Techniques%20and%20Deployment/Module%208%20-%20JavaScript%20Crash%20Course%20%28Optional%29/09%20String%20Templates.md)
- [ ] [10 String Methods.md](../../../courses/mooc/Mobile%20Development/Advanced%20React%20Native%20Techniques%20and%20Deployment/Module%208%20-%20JavaScript%20Crash%20Course%20%28Optional%29/10%20String%20Methods.md)
- [ ] [11 Objects.md](../../../courses/mooc/Mobile%20Development/Advanced%20React%20Native%20Techniques%20and%20Deployment/Module%208%20-%20JavaScript%20Crash%20Course%20%28Optional%29/11%20Objects.md)
- [ ] [12 Arrays.md](../../../courses/mooc/Mobile%20Development/Advanced%20React%20Native%20Techniques%20and%20Deployment/Module%208%20-%20JavaScript%20Crash%20Course%20%28Optional%29/12%20Arrays.md)
- [ ] [13 Boolean.md](../../../courses/mooc/Mobile%20Development/Advanced%20React%20Native%20Techniques%20and%20Deployment/Module%208%20-%20JavaScript%20Crash%20Course%20%28Optional%29/13%20Boolean.md)
- [ ] [14 Comparison.md](../../../courses/mooc/Mobile%20Development/Advanced%20React%20Native%20Techniques%20and%20Deployment/Module%208%20-%20JavaScript%20Crash%20Course%20%28Optional%29/14%20Comparison.md)
- [ ] [15 Logical Operator.md](../../../courses/mooc/Mobile%20Development/Advanced%20React%20Native%20Techniques%20and%20Deployment/Module%208%20-%20JavaScript%20Crash%20Course%20%28Optional%29/15%20Logical%20Operator.md)
- [ ] [16 if-else.md](../../../courses/mooc/Mobile%20Development/Advanced%20React%20Native%20Techniques%20and%20Deployment/Module%208%20-%20JavaScript%20Crash%20Course%20%28Optional%29/16%20if-else.md)
- [ ] [17 Functions.md](../../../courses/mooc/Mobile%20Development/Advanced%20React%20Native%20Techniques%20and%20Deployment/Module%208%20-%20JavaScript%20Crash%20Course%20%28Optional%29/17%20Functions.md)

## 산출물

**AI 기능이 붙은 모바일 앱 하나.** [Phase 2](02%20Phase%202%20-%20%EC%84%9C%EB%B2%84%20%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D.md)에서 만든 API 서버를 그대로 쓴다.

1. 화면 3개 이상 + 화면 간 이동
2. AI 기능 하나 이상 — 챗, 이미지 분류, 텍스트 요약 중 무엇이든
3. 네이티브 기능 하나 — 카메라나 위치
4. 오프라인·에러·로딩 상태 처리
5. 실기기(또는 에뮬레이터)에서 도는 화면 녹화

## 다음 단계

→ [04 Phase 4 - 네트워크 서비스](04%20Phase%204%20-%20%EB%84%A4%ED%8A%B8%EC%9B%8C%ED%81%AC%20%EC%84%9C%EB%B9%84%EC%8A%A4.md)
