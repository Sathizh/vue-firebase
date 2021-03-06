import firebase from 'firebase'
import { ref, onUnmounted } from 'vue'

const config={
    apiKey: "AIzaSyB82KL0buk4dZJJ6dj-nnrsxT0OxeZdgjw",
    authDomain: "vue-firebase-631f7.firebaseapp.com",
    projectId: "vue-firebase-631f7",
    storageBucket: "vue-firebase-631f7.appspot.com",
    messagingSenderId: "219179299438",
    appId: "1:219179299438:web:d182a4a1b00bbefe61ec7f",
    measurementId: "G-QN8RGDQEFE"
};
  
const firebaseApp = firebase.initializeApp(config)

const db = firebaseApp.firestore()
const usersCollection = db.collection('users')

export const createUser = user => {
    return usersCollection.add(user)
}

export const getUser = async id => {
    const user = await usersCollection.doc(id).get()
    return user.exists ? user.data() : null
}

export const updateUser = (id, user) => {
    return usersCollection.doc(id).update(user)
    
}

export const deleteUser = id => {
    return usersCollection.doc(id).delete()
}

export const useLoadUsers = () => {
    const users = ref([])
    const close = usersCollection.onSnapshot(snapshot => {
        users.value = snapshot.docs.map(doc =>({ id: doc.id, ...doc.data()}))
    })
    onUnmounted(close);
    return users
}