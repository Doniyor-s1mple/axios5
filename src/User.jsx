import React from 'react'

const User = ({ item }) => {
    return (



        <div className="col-3">
            <div className="row">
                <div className="col-4">
                    <div className="card my-2">
                        <div className="card-body">
                            <h4>{item.id}</h4>
                            <h4>{item.name}</h4>
                            <h4>{item.username}</h4>
                            <h4>{item.email}</h4>
                            <h4>{item.address.street}</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>



    )
}

export default User