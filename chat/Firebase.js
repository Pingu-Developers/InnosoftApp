import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDocs, getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBoUQ1NSxZuqVTeKRQrUc3B_Ze1gf5Tuzc",
  authDomain: "innosoftchat.firebaseapp.com",
  databaseURL: "https://innosoftchat-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "innosoftchat",
  storageBucket: "innosoftchat.appspot.com",
  messagingSenderId: "205864331835",
  appId: "1:205864331835:web:8e130dad29c0dc40d70a1e",
  measurementId: "G-D7DJJTR69E"
};

// initialize firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth();

export const database = getFirestore();

export async function getMessages(db) {
  const messagesCol = collection(db, 'messages');
  const messageSnapshot = await getDocs(messagesCol);
  const messageList = messageSnapshot.docs.map(doc => doc.data());
  return messageList;

}