import React from "react";
import "../../styles.css";

const UserCards = (props)=>{
    const {cardData}=props;
    return (
        <div className="card-layout">
            <img src={cardData.avatar_url} alt="developer's image"></img>
            <p>User Name: {cardData.login}</p>
            <a href={cardData.html_url} target="_blank">GitHub Profile</a>
        </div>
    )
}

export default UserCards;