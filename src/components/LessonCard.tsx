import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { AgEnum, Text } from './ui/Text';
import { Colors } from '../styles/Colors';

interface ILessonCard {
  id: number;
  banner: string;
  title: string;
  time: string;
  lessons: number;
}

export const LessonCard = (props: ILessonCard) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: props.banner }} />
      </View>

      <View style={{ marginLeft: 16 }}>
        <Text style={{ marginTop: 16 }} Ag={AgEnum.TEXT14}>
          {props.title}
        </Text>

        <View style={styles.flexRowBetween}>
          <Text style={{ marginTop: 16 }} Ag={AgEnum.TEXT14}>
            {props.time} м ⋅ {props.lessons} уроков
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  flexRowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  container: {
    width: '100%',
    borderRadius: 5,
    padding: 5,
    marginTop: 10,
    backgroundColor: Colors.white,
    flexDirection: 'row',
  },
  imageContainer: {
    height: 80,
    width: 80,
  },
  image: {
    height: '100%',
    width: '100%',
    borderRadius: 5,
  },
});
