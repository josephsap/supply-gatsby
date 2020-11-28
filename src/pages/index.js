import React from "react"
import Container from '../components/container';

export default function Home() {
  return (
    <Container>
      <div style={{ color: `purple` }}>
        <h1>Hello Gatsby!</h1>
        <img src="https://source.unsplash.com/random/400x200" alt="" />
      </div>
    </Container>
  )
}