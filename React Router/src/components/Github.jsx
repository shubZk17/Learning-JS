import React from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    //const[data, setData] = useState([])

    // useEffect(()=>{
    //   fetch('https://api.github.com/users/shubZk17')
    //   .then(response=> response.json())
    //   .then(data =>{
    //     console.log(data);
    //     setData(data)
    //   })
    // },[])
  return (
    <div className='text-center m-4 bg-gray-500 text-white'>Github 
     <p>Followers: {data.followers}</p>
            <p>Following: {data.following}</p>
            <p>Public Repos: {data.public_repos}</p></div>
  )
}

export default Github

export const githubinfoloader = async () => {
    const response = await fetch('https://api.github.com/users/shubZk17')
    return response.json()
}