import React, { useEffect, useState } from "react"

const  App =()=> {
  const [posts,setPosts]=useState([])
  useEffect(()=>{
    const getPosts = async()=>{
      const response = await fetch(`${process.env.DB_HOST}/users`)
      const data = await response.json()
      setPosts(data)
    }
    getPosts()
  },[])
  return (
    <div>
      <p>je suis la</p>
      {
        posts && posts.map(post=>(
          <p key={post.id}>{post.firsname}</p>
        ))
      }
    </div>
  );
}

export default App;
