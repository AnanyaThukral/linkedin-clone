import React from 'react'
import { Avatar } from '@material-ui/core'
import './Sidebar.css'
import BookmarkIcon from '@material-ui/icons/Bookmark';

const Sidebar = () => {

    //reusable returns JSX
    const recentItem =(topic)=>{
       return (
        <div className="sidebar-recentItem">
            <span className = "sidebar-hash">#</span>
            <p>{topic}</p>
        </div>
       )
    }

    return (
        <div className="sidebar">
            <div className="sidebar-top">
                <img src="https://png.pngtree.com/thumb_back/fh260/background/20200714/pngtree-modern-double-color-futuristic-neon-background-image_351866.jpg" alt="" />
                <Avatar className = "sidebar-avatar"/>
                <h2>Ananya Thukral</h2>
                <h4>Web Designer and Developer</h4>

                <div className="sidebar-stats">
                    <div className="sidebar-stat">
                        <p>Who viewed you</p>
                        <p className = "sidebar-statnumber">147</p>
                    </div>
                    <div className="sidebar-stat">
                        <p>Views of your post</p>
                        <p className = "sidebar-statnumber">788</p>
                    </div>
                </div>
            </div>
            <div className="sidebar-bottom">
                <p>Recent</p>
                {recentItem("reactjs")}
                {recentItem('programming')}
                {recentItem('design')}
                {recentItem('developer')}
                {recentItem('softwareengineering')}
            </div>
        </div>
    )
}

export default Sidebar
