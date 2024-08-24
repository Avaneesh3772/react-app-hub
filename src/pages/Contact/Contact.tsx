import React from 'react'
import { useLoaderData } from 'react-router-dom';

const Contact = () => {
  const data:any = useLoaderData();
  return (
    <div>
      <h4>This is Contact Component</h4>
      Github Followers: {data.followers}
      <img
        src={data?.avatar_url || "null"} // Use || instead of :
        alt="avatar"
        width={300}
      />
    </div>
  )
}

export default Contact

export const githubInfoLoader = async () => {
  const response = await fetch('https://api.github.com/users/ihamidch');
  const data = await response.json();
  return data;
};