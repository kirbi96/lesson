import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { AgEnum, Text } from '../../../components/ui/Text';
import { Button } from '../../../components/ui/Button';
import Navigation from '../../../base/Navigation';
import { screens } from '../../../navigation/consts/screens';
import { CategoryCard } from './components/CategoryCard';
import { Colors } from "../../../styles/Colors";

export const SearchScreen = () => {
  const handleNavigateToQuoteScreen = () => {
    // Navigation.navigate(screens.tab.TAB_QUOTES);
  };

  const categoryData = [
    {
      id: 1,
      title: 'Кино',
      img:
        'https://w7.pngwing.com/pngs/1017/318/png-transparent-black-gold-pattern-background-pattern-poster-banner-black.png',
    },
    {
      id: 2,
      title: 'Психология',
      img:
        'https://w7.pngwing.com/pngs/1017/318/png-transparent-black-gold-pattern-background-pattern-poster-banner-black.png',
    },
    {
      id: 3,
      title: 'Литература',
      img:
        'https://w7.pngwing.com/pngs/1017/318/png-transparent-black-gold-pattern-background-pattern-poster-banner-black.png',
    },
    {
      id: 4,
      title: 'Балет',
      img:
        'https://w7.pngwing.com/pngs/1017/318/png-transparent-black-gold-pattern-background-pattern-poster-banner-black.png',
    },
    {
      id: 5,
      title: 'Кино',
      img:
        'https://w7.pngwing.com/pngs/1017/318/png-transparent-black-gold-pattern-background-pattern-poster-banner-black.png',
    },
    {
      id: 6,
      title: 'Кино',
      img:
        'https://w7.pngwing.com/pngs/1017/318/png-transparent-black-gold-pattern-background-pattern-poster-banner-black.png',
    },
  ];

  return (
    <ScrollView style={styles.container}>

      <Text color={Colors.primary} style={{ marginTop: 24 }} Ag={AgEnum.H1}>
        Популярные
      </Text>

      <View style={styles.categoryCardsContainer}>
        {categoryData.map(item => (
          <CategoryCard key={item.id} id={item.id} img={item.img} title={item.title} />
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
    paddingHorizontal: 16,
  },
  categoryCardsContainer: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 40,
  },
});
