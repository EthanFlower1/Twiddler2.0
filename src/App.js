import React from 'react';
import './App.css';
import {db} from './firebase-config';
import Header from './components/Header';
import TweetForm from './components/TweetForm';
import Tweet from './components/Tweet';
import FriendsList from './components/FriendsList';
import { faker } from '@faker-js/faker';
import profilePicture from './Assets/profilePic.png';
//import timeago from 'timeago.js';

// import {
//   get,
//    collection,
//    getDocs,
//     getDoc,
//     addDoc,
//     updateDoc,
//     deleteDoc,
//     doc }
// from 'firebase/firestore';

// strategy is to replace friends Array with collection from the database

function App() {

  const fakefriendsArray = [];


// //generating fake tweets
  for (var i = 0; i < 100; i++) {
    fakefriendsArray.push(
      {
        username: faker.name.findName(),
        profilePicture: profilePicture,
        message: faker.hacker.phrase(),
        timeStamp: new Date(),
        id: Math.floor(Math.random() * 10000000000),
      })
  }

//set state
  const [ isHome , setIsHome] = React.useState(true);
  const [friendsArray, setFriendsArray] = React.useState(fakefriendsArray);
  const [formData, setFormData] = React.useState({
    username: '',
    message:'',
    profilePicture: profilePicture,
    timeStamp: new Date(),
    id: Math.floor(Math.random() * 10000000000),
  })


//generate all my tweets
  const tweets = friendsArray.map( person =>(
     <Tweet
        username={'@'+ person.username.split(" ").join("")}
        message={person.message}
        timeStamp={person.timeStamp}
        key={person.id}

    />))
//change page on click event
    function changePage(e, string) {
      console.log(string)
      if (string === 'home') {
      setIsHome(true);
    } else {
      setIsHome(false);
    }
      //need to make it button specific
    }

    function onChange(e, key) {
      setFormData( prevData => ({
        ...prevData,
        [key]: e.target.value
      }))
    }

    function onSubmit(e) {
      if (formData.username.length > 3 && formData.message.length > 5) {
        e.preventDefault();
        setFriendsArray( prevData => [formData, ...prevData] )
      } else {
        alert("⚠️ Invalid Username or Password, Username's must be at least 3 characters long and Messages have a minimum of 5 characters")
      }
    }


return (

  <div className="App">

      <Header clickHandler={changePage}/>

      <main>
        { //conditional Rendering
        isHome ? "" : <FriendsList clickHandler={changePage} friendsArray={friendsArray} />
        }
        { //conditional Rendering
        isHome ? <section><TweetForm submitHandler={function (e) {onSubmit(e)}} formData={formData} onChange={onChange}/> {tweets} </section> : ''
        }
     </main>

  </div>
  )
}

export default App;


// const tweets = collection(db, 'tweets');

// const  getAllTweets = () => { //this returns a promise, but I just want the obj
//   return getDocs(tweets);
// };
// getAllTweets().then(value => console.log()


// create
// addBooks = (newBook) => {
//   return addDoc(bookCollectionRef, newBook);
// };
// update
// updateBook = (id, updatedBook) => {
//   const bookDoc = doc(db, "books", id);
//   return updateDoc(bookDoc, updatedBook);
// };
// delete
// deleteBook = (id) => {
//   const bookDoc = doc(db, "books", id);
//   return deleteDoc(bookDoc);
// };
// read
// getAllBooks = () => {
//   return getDocs(bookCollectionRef);
// };

// getBook = (id) => {
//   const bookDoc = doc(db, "books", id);
//   return getDoc(bookDoc);
// };