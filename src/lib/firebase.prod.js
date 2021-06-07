import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// 1) when seeding the database you'll have to uncomment this!
// import { seedDatabase } from '../seed';

const config = {
  apiKey: 'AIzaSyCP3MOmoEcuZv2GVkNDNLJLH_MGBFLz-kE',
  authDomain: 'netflix-53d74.firebaseapp.com',
  databaseURL: '',
  projectId: 'netflix-53d74',
  storageBucket: 'netflix-53d74.appspot.com',
  messagingSenderId: '180408423527',
  appId: 'G-NZ6GFZPX7P',
};

const firebase = Firebase.initializeApp(config);
// 2) when seeding the database you'll have to uncomment this!
// seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data

export { firebase };
