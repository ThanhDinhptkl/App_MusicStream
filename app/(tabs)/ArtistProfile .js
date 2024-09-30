import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList, ScrollView } from 'react-native';

const ArtistProfile = () => {
  const songs = [
    { id: '1', title: 'Let you free', plays: '68M', duration: '03:35' },
    { id: '2', title: 'Blinding Lights', plays: '93M', duration: '04:39' },
    { id: '3', title: 'Levitating', plays: '9M', duration: '07:48' },
    { id: '4', title: 'Astronaut in the Ocean', plays: '23M', duration: '03:36' },
    { id: '5', title: 'Dynamite', plays: '10M', duration: '06:22' },
  ];

  const albums = [
    { id: '1', title: 'ME', artist: 'Jessica Gonzalez', image: './assets/images/Artist_Profile/Image 66.png' },
    { id: '2', title: 'Magna nost', artist: 'Jessica Gonzalez', image: './assets/images/Artist_Profile/Image 66.png' },
    { id: '3', title: 'Proident vel', artist: 'Jessica Gonzalez', image: './assets/images/Artist_Profile/Image 66.jpg' },
  ];

  const fansAlsoLike = [
    { id: '1', title: 'Magna nost', artist: 'Jessica Gonzalez', image: './assets/images/Artist_Profile/Image 66.jpg' },
    { id: '2', title: 'Exercitatio', artist: 'Brian Harris', image: './assets/images/Artist_Profile/Image 66.jpg' },
    { id: '3', title: 'Tempor vel', artist: 'Tyler Anderson', image: './assets/images/Artist_Profile/Image 66.jpg' },
  ];

  return (
    <ScrollView style={styles.container}>
      {/* Profile image section */}
      <View style={styles.profileSection}>
        <Image 
          source={{ uri: './assets/images/Artist_Profile/Image 63.png.jpg' }} // Thay thế bằng URL thực tế của hình ảnh
          style={styles.profileImage}
        />
        <Text style={styles.artistName}>Ryan Young</Text>
        <Text style={styles.followerCount}>65.1K Followers</Text>
        <TouchableOpacity style={styles.followButton}>
          <Text style={styles.followText}>Follow</Text>
        </TouchableOpacity>
      </View>

      {/* Popular Songs Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Popular</Text>
        {songs.map(song => (
          <View key={song.id} style={styles.songRow}>
            <Text style={styles.songTitle}>{song.title}</Text>
            <Text style={styles.songPlays}>{song.plays} plays</Text>
            <Text style={styles.songDuration}>{song.duration}</Text>
          </View>
        ))}
      </View>

      {/* Albums Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Albums</Text>
        <ScrollView horizontal>
          {albums.map(album => (
            <View key={album.id} style={styles.albumContainer}>
              <Image source={{ uri: album.image }} style={styles.albumImage} />
              <Text style={styles.albumTitle}>{album.title}</Text>
              <Text style={styles.albumArtist}>{album.artist}</Text>
            </View>
          ))}
        </ScrollView>
      </View>

      {/* About Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>About</Text>
        <Text style={styles.aboutText}>
          Ryan Young is an independent artist known for his diverse range of music, blending various genres into a unique sound. He has gained over 65K followers and continues to release popular tracks like "Let you free" and "Blinding Lights".
        </Text>
      </View>

      {/* Fans Also Like Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Fans also like</Text>
        <ScrollView horizontal>
          {fansAlsoLike.map(fan => (
            <View key={fan.id} style={styles.fanContainer}>
              <Image source={{ uri: fan.image }} style={styles.fanImage} />
              <Text style={styles.fanTitle}>{fan.title}</Text>
              <Text style={styles.fanArtist}>{fan.artist}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  profileSection: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 2,
    borderColor: '#ddd',
  },
  artistName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
  followerCount: {
    fontSize: 16,
    color: '#666',
    marginBottom: 10,
  },
  followButton: {
    backgroundColor: '#1DB954',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 50,
  },
  followText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  section: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  songRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  songTitle: {
    fontSize: 16,
  },
  songPlays: {
    color: '#666',
  },
  songDuration: {
    color: '#666',
  },
  albumContainer: {
    marginRight: 20,
  },
  albumImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  albumTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 5,
  },
  albumArtist: {
    fontSize: 12,
    color: '#666',
  },
  aboutText: {
    fontSize: 14,
    lineHeight: 20,
    color: '#666',
  },
  fanContainer: {
    marginRight: 20,
    alignItems: 'center',
  },
  fanImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  fanTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 5,
  },
  fanArtist: {
    fontSize: 12,
    color: '#666',
  },
});

export default ArtistProfile;
