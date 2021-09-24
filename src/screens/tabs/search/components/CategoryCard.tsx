import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { AgEnum, Text } from '../../../../components/ui/Text';
import { Colors } from '../../../../styles/Colors';

interface ICategoryCard {
  id: number;
  img: string;
  title: string;
}

export const CategoryCard = (props: ICategoryCard) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.imageContainer}>
        <Text color={Colors.white} style={styles.text} Ag={AgEnum.H1}>
          {props.title}
        </Text>
        <Image style={styles.image} source={{ uri: props.img }} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '48%',
    marginTop: 12,
  },
  imageContainer: {
    height: 100,
    borderRadius: 10,
  },
  image: {
    height: '100%',
    width: '100%',
    borderRadius: 10,
  },
  text: {
    textAlign: 'center',
    top: 65,
    zIndex: 100,
  },
});
