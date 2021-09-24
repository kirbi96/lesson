import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { AgEnum, Text } from '../../../components/ui/Text';
import { Button } from '../../../components/ui/Button';
import Navigation from '../../../base/Navigation';
import { screens } from '../../../navigation/consts/screens';
import { HomeBanner } from './components/HomeBanner';
import { Colors } from '../../../styles/Colors';
import { LessonCard } from '../../../components/LessonCard';

const bannerData = [
  {
    id: 1,
    banner: 'https://ra-germes.ru/upload/resize_cache/webp/iblock/e15/Banner.webp',
    title: 'Как понять современное исскуство',
    time: '30',
    lessons: 8,
    author: {
      image: 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png',
      name: 'Евгения Кузнецова ',
      position: 'Художник',
    },
  },
  {
    id: 2,
    banner: 'https://ra-germes.ru/upload/resize_cache/webp/iblock/e15/Banner.webp',
    title: 'Как понять современное исскуство',
    time: '30',
    lessons: 8,
    author: {
      image: 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png',
      name: 'Евгения Кузнецова ',
      position: 'Художник',
    },
  },
];

const cardData = [
  {
    id: 1,
    banner: 'https://ra-germes.ru/upload/resize_cache/webp/iblock/e15/Banner.webp',
    title: 'Как понять современное исскуство',
    time: '30',
    lessons: 8,
  },
  {
    id: 2,
    banner: 'https://ra-germes.ru/upload/resize_cache/webp/iblock/e15/Banner.webp',
    title: 'Как понять современное исскуство',
    time: '30',
    lessons: 8,
  },
];

export const HomeScreen = () => {
  const handleNavigateToQuoteScreen = () => {
    // Navigation.navigate(screens.tab.TAB_QUOTES);
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <Text Ag={AgEnum.H1}>Рекомендации для тебя</Text>

      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {bannerData.map(item => (
          <HomeBanner
            key={item.id}
            id={item.id}
            banner={item.banner}
            title={item.title}
            time={item.time}
            lessons={item.lessons}
            author={item.author}
          />
        ))}
      </ScrollView>

      <Text color={Colors.primary} style={{ marginTop: 40 }} Ag={AgEnum.H1}>
        Продолжи свой урок
      </Text>

      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {bannerData.map(item => (
          <HomeBanner
            key={item.id}
            id={item.id}
            banner={item.banner}
            title={item.title}
            time={item.time}
            lessons={item.lessons}
            author={item.author}
          />
        ))}
      </ScrollView>

      <View style={{ marginVertical: 32 }}>
        {cardData.map(item => (
          <LessonCard
            key={item.id}
            id={item.id}
            banner={item.banner}
            title={item.title}
            time={item.time}
            lessons={item.lessons}
          />
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
    paddingLeft: 16,
  },
});
