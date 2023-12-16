import React from 'react'
import { Switch, Link, Route } from 'react-router-dom'
import Posts from './Posts'
import Todos from './Todos'
import Users from './Users'
import OnePost from './OnePost'
const App = () => {


    return (
        <div className='container my-3'>
            <Link to='/' className='btn btn-outline-dark text-light border mx-3'>Home</Link>
            <Link to='/posts' className='btn btn-outline-dark text-light border'>Posts</Link>
            <Link to='/todos' className='btn btn-outline-dark text-light border mx-3'>Todos</Link>
            <Link to='/users' className='btn btn-outline-dark text-light border'>Users</Link>

            <Switch>
                <Route path='/posts/:id' component={OnePost} />
                <Route path='/posts' component={Posts} />
                <Route path='/todos' component={Todos} />
                <Route path='/users' component={Users} />
            </Switch>
        </div>
    )
}

export default App