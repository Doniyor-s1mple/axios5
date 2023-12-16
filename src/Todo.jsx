import React from 'react'

const Todo = ({ item }) => {
    
    return (
        <div className="row">

            <div className="col-9">
                <div className='d-flex text-light'>

                    <input type="checkbox" className='check mx-3' checked={item.completed} />
                    <h4>{item.id}. {item.title}</h4>
                </div>
            </div>
        </div>
    )
}

export default Todo