import React, { useEffect, useState } from "react"
const  App =()=> {
  const [posts,setPosts]=useState([])
  const URL_HOST="https://testdata-server.vercel.app"
  //const URL_HOST="http://localhost:5003/users"
  useEffect(()=>{
    const getPosts = async()=>{
      const response = await fetch(`${URL_HOST}/users`)
      const data = await response.json()
      setPosts(data)
    }
    getPosts()
  },[])
  const addStudent = ()=>{
    fetch(`${URL_HOST}/create`,{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify({firstname:"test1",lastname:"test2",age:34})
    })
    .then(response=>response.json())
    .then(res=>console.log(res))

  }
  return (
    <div>
      <p>je suis la</p>
      <button onClick={addStudent}>create</button>
      {
        posts && posts.map(item=>(
          <p key={item.id}>{item.firstname}</p>
        ))
      } 
    </div>
  );
}

export default App;
