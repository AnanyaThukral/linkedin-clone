import React, {useState, useEffect} from 'react'
import CreateIcon from "@material-ui/icons/Create"
import './Feed.css'
import InputOption from './InputOption'
import ImageIcon from '@material-ui/icons/Image';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import Post from './Post'
import db from './firebase'
import firebase from 'firebase'

const Feed = () => {

    //useState is a react hook
    const [input, setInput] = useState('')
    const[posts, setPosts] = useState([])

    //get posts from database
    const getPosts = () => {
        //onSnapshot real time listener connection
        db.collection('posts')
        .orderBy('timestamp',"desc") 
        .onSnapshot(snapshot=>{
            const tempPosts = snapshot.docs.map(doc=>(
                {
                    id:doc.id,
                    data:doc.data()
                }
            ))
            setPosts(tempPosts) //update state
        })
    }

    //passed of a blank dependency
    useEffect(()=>{
        getPosts()
    }, [])

    const sendPost = (e)=>{
        e.preventDefault();
        //adding a new object to the database collection docs
        db.collection('posts').add({
            name: 'Ananya Thukral',
            description: 'this is test',
            message: input,
            photourl: "",
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })

        setInput('') //clear the input after submit
    }

    return (
        <div className = "feed">
            <div className="feed-inputContainer">
                <div className="feed-input">
                    <CreateIcon/>
                    <form>
                        <input value = {input} onChange = {e => setInput(e.target.value)} type = "text"/>
                        <button onClick = {sendPost} type="submit">Send</button>
                    </form>
                </div>
                <div className="feed-inputOptions">
                    <InputOption title = "Photo" Icon={ImageIcon} color="#70B5F9"/>
                    <InputOption title = "Video" Icon={SubscriptionsIcon} color="#E7A33E"/>
                    <InputOption title = "Video" Icon={EventNoteIcon} color="#C0CbCd"/>
                    <InputOption title = "Video" Icon={CalendarViewDayIcon} color="#7fC15e"/>
                </div>
            </div>
            {/*Posts*/}
            {posts.map(({id,data: {name, description, message, photourl}})=>(
                <Post
                    key ={id}
                    name = {name}
                    description = {description}
                    message = {message}
                    photourl = {photourl}                
                />
            ))}
        </div>
    )
}

export default Feed

