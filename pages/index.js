import React, { Fragment } from 'react'
import fetch from 'isomorphic-fetch'
import { ListUsers } from '../components/ListUsers.js'

const Index = ({ users }) => {
  return <ListUsers users={users} />
}

export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const users = await res.json()

  if (!users) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      users,
    },
  }
}

export default Index
