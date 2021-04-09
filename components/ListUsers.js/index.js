import React, { Fragment } from 'react'
import Router from 'next/router'

export const ListUsers = ({ users}) => {
  return (
    <Fragment>
      {
        users.map((user) => (
          <div className="row" key={user.id}>
            <ul className="list-group col-md-4">
              <li className="list-group-item mb-2 hover"
                  onClick={() => Router.push('/users/[id]', `/users/${user.id}`)}>
                <h5>{user.name}</h5>
                <p>{user.email}</p>
              </li>
            </ul>
          </div>
        ))
      }
    </Fragment>
  )
}
