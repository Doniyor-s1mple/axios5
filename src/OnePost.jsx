import React from 'react'
import { doGet } from './servis'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

const OnePost = ({ match }) => {

    const [Post, setPost] = useState('')
    const [User, setUser] = useState('')

    async function getOnePost(id) {
        const OnePost = await doGet('/posts/' + id)
        setPost(OnePost.data)
        const postuser = await doGet('/users/' + OnePost.data.userId)
        setUser(postuser.data)
    }

    useEffect(() => {
        getOnePost(match.params.id)
    })

    return (
        <div className='row my-5'>
            <div className="col-3">
                <div className="card">
                    <div className="card-header">
                        {User.name}
                    </div>
                    <div className="card-body">
                        {User.phone}
                    </div>
                </div>
            </div>
            <div className="col-9">
                <div className="card">
                    <div className="card-header">
                        {Post.id}. {Post.title}
                    </div>
                    <div className="card-body">
                        {Post.body}
                    </div>
                </div>

            </div>
            <div className="row my-5">
                <div className="col-md-3">
                    <Link to='/posts' className='btn btn-outline-dark text-light'>Back</Link>
                </div>
            </div>

        </div>
    )
}

export default OnePost