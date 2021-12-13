import React from 'react'
import "./Sidebar.css"


function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar_top">
                <img src="http://placehold.it/" alt="placeholder"/>
                <avatar className="sidebar_avatar"/>
                <h2>Jorge Zepeda</h2>
                <h2>jorgezepeda@gmail.com</h2> 

            </div>
        </div>
    )
}

export default Sidebar