import React, { useEffect, useState } from 'react';
import { ActivityIndicator, StyleSheet, FlatList, View } from 'react-native';
import MovieListing from './components/MovieListing';
import SearchField from './components/SearchField';
import discoverMovies from './api/discoverMovies';
import searchMovies from './api/searchMovies';
import getGenres from './api/getGenres';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    color: '#fff',
    flex: 1,
    padding: 24
  }
});

export default function App() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [query, setQuery] = useState('');
  const [genres, setGenres] = useState([]);

  if (genres.length === 0) {
    getGenres(setGenres);
  }

  useEffect(() => {
    if (query === '') {
      discoverMovies(setData, setLoading);
    } else {
      searchMovies(setData, setLoading, query);
    }
  }, [query]);

  return (
    <View style={styles.container}>
      <SearchField
        setQuery={setQuery}
        />
      {isLoading ? <View style={styles.container}>
        <ActivityIndicator size="large" color="#fff" />
      </View> : <FlatList
        data={data}
        renderItem={data => MovieListing(data, genres)}
      />}
    </View>
  );
}