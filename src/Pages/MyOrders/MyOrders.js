import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import Swal from 'sweetalert2'

const MyOrders = () => {
  const {user} = useAuth();
  const [orders, setOrders] = useState([])

  useEffect(() => {
    fetch('https://possessed-beast-94788.herokuapp.com/manage-order')
    .then(res => res.json())
    .then(data => setOrders(data.filter(item => item.email === user.email)))
  }, [])

  

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure you want to delete ?");
    if (proceed) {
      const url = `https://possessed-beast-94788.herokuapp.com//order/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                  )
            const remaining = orders.filter((order) => order._id !== id);
            setOrders(remaining);
          }
        });
    }
  };

  return (
    <div>
      <div className="w-3/4 mx-auto">
      <h1 className="mb-8 text-4xl text-center">My Orders</h1>
      {orders.map((order) => (
        <div class="flex" key={order._id}>
          <img className="rounded h-14 w-24 mr-2 mb-2" src={order.service.img} alt="" />
          <h3 className="flex-grow border-2 pl-4 rounded mb-4 mr-2 py-4">{order.Name}</h3>
          <button
            className="px-8 flex-none rounded mb-4 mr-2 py-4 bg-green-500"
          >
            {order.status}
          </button>
          <button
            onClick={() => handleDelete(order._id)}
            className="px-8 flex-none rounded mb-4 py-4 bg-red-500"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
    </div>
  );
};

export default MyOrders;
