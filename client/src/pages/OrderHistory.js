import React from 'react';
import { Link } from 'react-router-dom';

import { useQuery } from '@apollo/client';
import { QUERY_USER } from '../utils/queries';

function OrderHistory() {
  const { data } = useQuery(QUERY_USER);
  let user;

  if (data) {
    user = data.user;
  }

  return (
    <>
      <div className="container my-1">

        {user ? (
          <>
                <a href='/boards'>
                  <button className='arrow'>
                    <h1>⬅️</h1>
                  </button>
                </a>
            <h2>
              Order History for {user.firstName} {user.lastName}
            </h2>
            {user.orders.map((order) => (
              <section className='prouctContainer' id='history-container'>
              <div className='productCard' key={order._id}>
                <h3 id='text-align'>
                  {new Date(parseInt(order.purchaseDate)).toLocaleDateString()}
                </h3>
                <div className="flex-row">
                  {order.products.map(({ _id, image, name, price }, index) => (
                    <div key={index}>
                      <Link to={`/products/${_id}`} id='history-img'>
                        <img className='img-resize' id='history-card' alt={name} src={`/images/${image}`} />
                        <p>{name}</p>
                      </Link>
                      <div>
                        <span>${price}</span>
                      <h5>𝘽𝙖𝙮𝙡𝙚𝙚𝙨 𝘽𝙤𝙖𝙧𝙙𝙨</h5>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              </section>
            ))}
          </>
        ) : null}
      </div>
    </>
  );
}

export default OrderHistory;
