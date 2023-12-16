import React from 'react'
import { doGet } from './servis'
import { useEffect } from 'react'
import { useState } from 'react'
import User from './User'

const Users = () => {


  const [Users, setUsers] = useState([])

  async function getUsers() {
    await doGet('/users').then((res) => setUsers(res.data))
  }




  useEffect(() => {
    getUsers()
  }, [])






  return (

    <div className="col-12">
      <h2 className='text-center text-light my-5'>Users</h2>
      <div className="row">
        {
          Users.map((item, index) => <User key={index} item={item} />)
        }
      </div>
    </div>


  )
}

export default Users