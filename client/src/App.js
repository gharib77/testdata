import React, { useEffect, useState } from "react"

const  App =()=> {
  const [posts,setPosts]=useState([])
  useEffect(()=>{
    const getPosts = async()=>{
      const response = await fetch(`${process.env.DB_HOST}/users`)
      //const response = await fetch(`http://localhost:5002/users`)
      const data = await response.json()
      setPosts(data)
    }
    getPosts()
  },[])
  return (
    <div>
      <p>je suis la</p>
      {
        posts && posts.map(item=>(
          <p key={item.id}>{item.firstname}</p>
        ))
      }
    </div>
  );
}

export default App;
