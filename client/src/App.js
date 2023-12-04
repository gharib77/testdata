import React, { useEffect, useState } from "react"
const  App =()=> {
  const [posts,setPosts]=useState([])
  useEffect(()=>{
    const getPosts = async()=>{
      const response = await fetch(`https://testdata-server.vercel.app/users`)
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
