
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDnVWa_9GR0XP5R1Y3DxDbusFPNlDMFVNQ",
  authDomain: "fir-firebase-9e199.firebaseapp.com",
  databaseURL: "https://fir-firebase-9e199-default-rtdb.firebaseio.com",
  projectId: "fir-firebase-9e199",
  storageBucket: "fir-firebase-9e199.appspot.com",
  messagingSenderId: "396231685393",
  appId: "1:396231685393:web:819d7f8003ba5ab69588b0",
  measurementId: "G-Q56Q8DMTXW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);