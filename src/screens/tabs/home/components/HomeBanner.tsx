import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { AgEnum, Text } from '../../../../components/ui/Text';
import { Colors } from '../../../../styles/Colors';
import { IconSvgFavorites } from '../../../../assets/icons/IconSvgFavorites';

interface IHomeBanner {
  id: number;
  banner: string;
  title: string;
  time: string;
  lessons: number;
  author: IAuthor;
}

interface IAuthor {
  image: string;
  name: string;
  position: string;
}

export const HomeBanner = (props: IHomeBanner) => {
  return (
    <View style={[styles.container, { marginRight: 16 }]}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: props.banner }} />
      </View>

      <View style={{ padding: 10, paddingTop: 0 }}>
        <View style={styles.authorContainer}>
          <View style={styles.authorImageContainer}>
            <Image style={styles.imageAuthor} source={{ uri: props.author.image }} />
          </View>

          <View style={{ marginLeft: 8 }}>
            <Text Ag={AgEnum.TEXT14}>{props.author.name}</Text>
            <Text color={Colors.gray600} Ag={AgEnum.TEXT14}>
              {props.author.position}
            </Text>
          </View>
        </View>

        <Text style={{ marginTop: 16 }} Ag={AgEnum.TEXT14}>
          {props.title}
        </Text>

        <View style={styles.flexRowBetween}>
          <Text style={{ marginTop: 16 }} Ag={AgEnum.TEXT14}>
            {props.time} м ⋅ {props.lessons} уроков
          </Text>

          <IconSvgFavorites />
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
    backgroundColor: Colors.white,
    marginTop: 20,
  },
  imageContainer: {
    height: 180,
    width: '100%',
  },
  image: {
    height: '100%',
    width: '100%',
  },
  authorContainer: {
    marginTop: 6,
    flexDirection: 'row',
  },
  authorImageContainer: {
    height: 28,
    width: 28,
    borderRadius: 28,
  },
  imageAuthor: {
    height: '100%',
    width: '100%',
    borderRadius: 28,
  },
});
