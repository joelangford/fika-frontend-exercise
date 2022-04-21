import {StyleSheet, Image, Text, View} from 'react-native';
import FallbackImage from '../assets/icon.png'

const styles = StyleSheet.create({
  movie: {
    borderBottomWidth: 1,
    borderBottomColor: '#2f2f2f',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingVertical: 8,
    overflow: 'hidden',
    maxWidth: '100%',
    flexWrap: 'nowrap',
  },
  heading: {
    color: '#fff',
    fontSize: 18,
    marginBottom: 6,
    maxWidth: '100%',
  },
  image: {
    display: 'flex',
    flexBasis: 100,
    height: 150,
    width: 100,
    marginRight: 10,
  },
  genreList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  genre: {
    backgroundColor: '#2f2f2f',
    borderRadius: 5,
    color: '#fff',
    paddingHorizontal: 4,
    paddingVertical: 2,
    marginRight: 4,
    marginBottom: 4,
    textAlign: 'center',
  },
  rightCol: {
    flexShrink: 1,
    overflow: 'hidden',
  }
});

const getGenreName = (genreId, genres) => {
  return genres.find(genre => genre.id === genreId).name;
}

const MovieListing = ({ item }, genres) => {
  return (
    <View style={styles.movie}>
      <Image
        style={styles.image}
        resizeMode={'contain'}
        source={{ uri: 'https://image.tmdb.org/t/p/w500'+ item.poster_path}}
        defaultSource={FallbackImage}
      />
      <View style={styles.rightCol}>
        <Text style={styles.heading}>{item.title}</Text>
        <View style={styles.genreList}>
          {item.genre_ids.map(genreId => (
            <Text key={genreId} style={styles.genre}>{getGenreName(genreId, genres)}</Text>
          ))}
        </View>
      </View>
    </View>
  );
}

export default MovieListing;