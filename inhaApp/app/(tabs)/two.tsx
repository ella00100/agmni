// import { Stack, router, useLocalSearchParams } from 'expo-router';
// // import Button from '../../components/Button';
// import {
//   Platform,
//   View,
//   Button,
//   TouchableOpacity,
//   Image,
//   FlatList,
//   StyleSheet,
//   Alert,
//   Linking,
//   Text,
// } from 'react-native';
// import styled, { css } from '@emotion/native';
// import React, { useState } from 'react';
// const Title = styled.Text`
//     font-size: ${ 18 + "px"};
//     color: black;
//     font-family: Pretendard600;
// `;
// const SubTitle = styled.Text`
//     font-size: ${ 15 + "px"};
//     color: black;
//     font-family: Pretendard500;
// `;
//     return (
//         <SafeAreaView
//             style={css`
//                 flex: 1;
//                 background: white;

//                 padding-top: ${Platform.OS === "android" ? rsHeight * 50 + "px" : ""};
//             `}
//         >
//             <Stack.Screen
//                 options={{
//                     headerTitle: "",
//                     headerShadowVisible: false,
//                     headerShown: true,
//                     headerLeft: () => (
//                         <TouchableOpacity onPress={() => router.back()}>
//                           <Button title="이동" onPress={() => router.push('/(tabs)/Image')} />
//                         </TouchableOpacity>
//                     ),
//                 }}
//             ></Stack.Screen>

//             <View
//                 style={css`
//                     margin: ${rsHeight * 20 + "px"} ${rsWidth * 24 + "px"};
//                 `}
//             >
//                 <Text
//                     style={css`
//                         font-size: ${rsFont * 24 + "px"};
//                         color: black;
//                         font-family: Pretendard600;
//                     `}
//                 >
//                     인증하고자하는{"\n"}학과를 선택해주세요
//                 </Text>
//                 <SubTitle
//                     style={css`
//                         margin-top: ${rsHeight * 12 + "px"};
//                     `}
//                 >
//                     * 학과 인증 이미지와 일치하는 학과를 선택해주세요.
//                 </SubTitle>
//             </View>
//             <View
//                 style={css`
//                     margin: ${rsHeight * 14 + "px"} ${rsWidth * 24 + "px"};
//                     overflow: hidden;
//                     flex: 1;
//                 `}
//             >
//                 <Title
//                     style={css`
//                         margin-top: ${rsHeight * 12 + "px"};
//                     `}
//                 >
//                     단과대학
//                 </Title>

//                 <Title
//                     style={css`
//                         margin-top: ${rsHeight * 12 + "px"};
//                     `}
//                 >
//                     학과
//                 </Title>

//             </View>

//         </SafeAreaView>
//     );
// }
