import { Navigate, useNavigate } from "react-router-dom";

export default function Home () {
  const navigate = useNavigate()

  return (
    <>
    <h1>Home</h1>
    <img src="https://picsum.photos/200/300" alt="" />
    <p>Lorem picsum</p>
    <button onClick={ () => navigate('/about') }>About</button>
    </>
  )
}