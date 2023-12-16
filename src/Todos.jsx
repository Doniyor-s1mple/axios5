import React from 'react'
import { useState } from 'react'
import Todo from './Todo'
import { doGet } from './servis'
import { useEffect } from 'react'

const Todos = () => {

  const [Todos, setTodos] = useState([])
  const [data, setData] = useState([])
  const [Users, setUsers] = useState([])
  const [page, setPage] = useState(1)

  async function getTodos() {
    const res = await doGet('/todos')
    setTodos(res.data.filter((item, index) => index >= 0 && index < 10))
    setData(res.data)
  }

  async function getUsers() {
    const res = await doGet('/users')
    setUsers(res.data)
  }

  useEffect(() => {
    getTodos()
    getUsers()
  }, [])

  const filter = (userId) => {
    return data.filter(item => item.userId === parseInt(userId) || userId === '')
  }

  function userSelect(event) {
    var userId = event.target.value
    var res = filter(userId)
    setTodos(res)
  }

  var onPrev = () => {
    setPage(prev => prev - 1)
    if (page < 2) {
      setPage(1)
    }
  }

  var onNext = () => {
    setPage(prev => prev + 1)
  }


  return (
    <div>
      <h2 className='text-center text-light my-5'>Todos</h2>

      <div className="row">
        <div className="col-1">
          <button className='btn btn-danger'>reset</button>
        </div>
        <div className="col-3">
          <select id="" className='form-control' onChange={userSelect}>
            <option value={""}>All</option>
            {
              Users.map((item, index) => <option key={index} id={item.id} value={item.id}>
                {item.name}
              </option>)
            }
          </select>
        </div>
        <div className="col-3">
          <div className="d-flex">
            <h4 className='text-light mx-3'>Competed:</h4>
            <input type="checkbox" style={{transform:"scale(2)"}} />
          </div>
        </div>
      </div>
      <div className="row my-5">
        {
          Todos.map((item, index) => <Todo key={index} item={item} />)
        }
      </div>
      <div className="d-flex">
        <button className='btn btn-info' onClick={onPrev}>Back</button>
        <h3 className='text-light text-center mx-5'>{page}</h3>
        <button className='btn btn-info mx-4' onClick={onNext}>Next</button>
      </div>
    </div>
  )
}

export default Todos