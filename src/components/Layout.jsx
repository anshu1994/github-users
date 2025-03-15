import React, { useEffect } from "react";
import "../../styles.css";
import UserCards from "./UserCards";
import Shimmer from "./Shimmer";
import { useState,useEffect } from "react";
import { githubUserURL } from "../utils/consts";

const Layout = ()=>{
    const [listOfUsers, setListOfUsers] = useState([]); 
    const [filteredUsers,setFilteredUsers] = useState([]);
    const [searchText,setSearchText] = useState("")

    async function fetchData(){
    const data = await fetch(githubUserURL);
    const fecthedData = await data.json();
    console.log("gettng this from useeffect",fecthedData);
    setListOfUsers(fecthedData)
    setFilteredUsers(fecthedData);
}

    useEffect(()=>{
        fetchData();
    },[]);
    if(filteredUsers.length === 0){
        return <Shimmer/>
    }
    return (
        <div>
            <div className="search-layout">
                <input className="search-input" type="text" value={searchText} placeholder="Search" onChange={(e)=>{
                    setSearchText(e.target.value)
                }}></input>
                <button className="search-button" onClick={()=>{
                    const filteredList = listOfUsers.filter((item)=>item?.login.toUpperCase().includes(searchText.toUpperCase()));
                    setFilteredUsers(filteredList)}}> Search </button>
            </div>
            <div className="layout">
                {filteredUsers.map((item)=><UserCards key={item?.id} cardData={item} />)}
            </div>
        </div>
    )
}

export default Layout;