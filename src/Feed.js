import React, { useEffect, useState } from 'react'
import './Feed.css'
import CreateIcon from '@material-ui/icons/Create'
import ImageIcon from '@material-ui/icons/Image'
import SubscriptionsIcon from '@material-ui/icons/Subscriptions'
import EventNoteIcon from '@material-ui/icons/EventNote'
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay'
import InputOption from './InputOption'
import Post from './Post'
import firebase from 'firebase/app'
import { collection, addDoc } from "firebase/firestore"; 
import { db } from './firebase'


function Feed() {
  const [input, setInput] = useState('');
  const [posts, setPosts] = useState([]);

 // getPosts
 const postRef = collection(db, "posts");
 const q = query(postRef, orderBy("timestamp", "desc"));
 useEffect(() => {
   const getPost = onSnapshot(q, (snapshot) => {
     setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })));
   });
   return () => {
     getPost();
   };
 }, []);

  const sendPost = (e) => {
    e.preventDefault();

    addDoc(postRef, {
      name: "Stefan Tumey",
      description: "This is a test",
      message: input,
      photoUrl: "",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error.message);
      });

    setInput("");
  };

  return (
    <div className="feed">
        <div className='feed__inputContainer'>
            <div className='feed__input'>
                <CreateIcon />

                <form>
                    <input value={input} onChange={e => setInput(e.target.value)} type='text' />
                    <button onClick={sendPost} type='submit'>Send</button>
                </form>
            </div>
            <div className='feed__inputOptions'>
                <InputOption Icon={ImageIcon} title='Photo' 
                color='#70B5F9' />
                <InputOption Icon={SubscriptionsIcon} title='Video' 
                color='#E7A33E' />
                <InputOption Icon={EventNoteIcon} title='Event' 
                color='#C0CBCD' />
                <InputOption Icon={CalendarViewDayIcon} title='Write article' 
                color='#7FC15E' />
            </div>
        </div>
        {posts.map(({ id, data: {name, description, message, photoUrl }}) => (
          <Post 
            key={id}
            name={name}
            description={description}
            message={message}
            photoUrl={photoUrl}/>
        ))}
    </div>
  )
}

export default Feed