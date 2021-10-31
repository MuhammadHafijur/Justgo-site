import React, { useEffect, useState } from "react";
import useServices from "../../hooks/useServices";
import Swal from 'sweetalert2'

const ManageTour = () => {
  const [services, setServices] = useServices();
  const [orders, setOrders] = useState([])

  useEffect(() => {
    fetch('https://possessed-beast-94788.herokuapp.com/manage-order')
    .then(res => res.json())
    .then(data => setOrders(data))
  }, [])

  const handleStatus = (id) => {
    console.log('hitted')
    const updateInfo = {
      status: "approved"
    }
    const url = `https://possessed-beast-94788.herokuapp.com/approve/${id}`;
    fetch(url, { 
      method: "PUT",
      headers: {
        'content-type': 'application/json'
    },
    body: JSON.stringify(updateInfo)
    })
    .then(res => res.json())
    .then(data => {
      if (data.modifiedCount > 0) {
        Swal.fire(
          'Update Successful!',
          'Your order has been updated.',
          'success'
        )
        fetch('https://possessed-beast-94788.herokuapp.com/manage-order')
                        .then(res => res.json())
                        .then(data => setOrders(data))
      }
    })
  }


  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure you want to delete ?");
    if (proceed) {
      const url = `https://possessed-beast-94788.herokuapp.com/${id}`;
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
            const remaining = services.filter((service) => service._id !== id);
            setServices(remaining);
          }
        });
    }
  };

  return (
    <div className="w-3/4 mx-auto">
      <h1 className="mb-8 text-4xl text-center">Manage All Tour</h1>
      {orders.map((order) => (
        <div class="flex" key={order._id}>
          <img className="rounded h-14 w-24 mr-2 mb-2" src={order.service.img} alt="" />
          <h3 className="flex-grow border-2 pl-4 rounded mb-4 mr-2 py-4">{order.Name}</h3>
          <button
            onClick={() => handleStatus(order._id)}
            className="px-8 flex-none rounded mb-4 mr-2 py-4 bg-green-500"
          >
            {order.status === "Approved" ? "Approved" : order.status}
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
  );
};

export default ManageTour;
