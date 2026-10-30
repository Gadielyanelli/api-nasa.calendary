import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#11052f',
paddingHorizontal: 18,
paddingTop: 52,
paddingBottom: 24,
},
cargandoContainer: {
flex: 1,
justifyContent: 'center',
alignItems: 'center',
backgroundColor: '#081535',
},
headerRow: {
flexDirection: 'row',
alignItems: 'center',
justifyContent: 'center',
marginBottom: 18,
gap: 10,
},
logo: {
width: 34,
height: 34,
borderRadius: 17,
resizeMode: 'cover',
},
title: {
fontSize: 30,
fontWeight: '800',
color: '#e2e8f0',
textAlign: 'center',
letterSpacing: 0.5,
},
card: {
backgroundColor: '#1e293b',
borderRadius: 18,
padding: 18,
marginVertical: 8,
borderWidth: 1,
borderColor: '#334155',
},
date: {
color: '#94a3b8',
fontSize: 13,
marginBottom: 10,
fontWeight: '600',
},
value: {
color: '#f8fafc',
fontSize: 22,
fontWeight: '700',
marginBottom: 16,
},
image: {
width: '100%',
height: 300,
borderRadius: 14,
marginBottom: 16,
resizeMode: 'cover',
borderWidth: 1,
borderColor: '#3d4653',
},
explanation: {
color: '#aeaec7',
fontSize: 15,
lineHeight: 24,
},
});
