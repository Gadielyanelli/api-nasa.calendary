import React from 'react';
import { View, ActivityIndicator, ScrollView, Text, Image } from 'react-native';

import { styles } from '../componentes/usuario';
import useFetch from './useFetch'; 

export default function Index() {  
  const { data, carga } = useFetch(); 
  const datos = data as{ date: string; explanation: string; title: string; url: string } | null; 

  if (carga) { 
    return (
      <View style={styles.cargandoContainer}>
        <ActivityIndicator size="large" color="#3ceb25" />
      </View>
    );
  }

  return ( 
    <View style={styles.container}> 
      <ScrollView>
        <View style={styles.headerRow}> 
          <Image source={require('../../assets/images/favicon-192.png')} style={styles.logo} />
          <Text style={styles.title}>La nasa wachin</Text>
        </View>
        <View style={styles.card}> 
          <Text style={styles.date}>{datos?.date}</Text> 
          <Text style={styles.value}>{datos?.title}</Text>
          <Image source={{ uri: datos?.url }} style={styles.image} />
          <Text style={styles.explanation}>{datos?.explanation}</Text>
        </View>
      </ScrollView>
    </View>
  );
}