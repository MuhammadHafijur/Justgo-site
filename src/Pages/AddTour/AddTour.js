import React from "react";
import { useForm } from "react-hook-form";

const AddTour = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
<div className="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
  <div className="container max-w-screen-lg mx-auto">
    <div>
      <h2 className="font-semibold text-xl text-gray-600">Booking Form</h2>
      <p className="text-gray-500 mb-6">Book Your Favorite Destination.</p>

      <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
        <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
          <div className="text-gray-600">
            <p className="font-medium text-lg">Personal Details</p>
            <p>Please fill out all the fields.</p>
          </div>

          <div className="lg:col-span-2">
            <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
              <div className="md:col-span-5">
                <label htmlFor="full_name">Full Name</label>
                <input {...register("Name", { required: true, maxLength: 20 })} type="text" id="full_name" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"  />
              </div>

              <div className="md:col-span-5">
                <label htmlFor="desc">Description</label>
                <textarea {...register("Description")} type="text" id="desc" className="h-20 border mt-1 rounded px-4 w-full bg-gray-50"  placeholder="Description" />
              </div>
              <div className="md:col-span-5">
                <label htmlFor="price">Price</label>
                <input {...register("Price")} type="number" id="price" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"  placeholder="Price" />
              </div>
              <div className="md:col-span-5">
                <label htmlFor="img-url">Image url</label>
                <input {...register("img")} type="text" id="img-url" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"  placeholder="Img url" />
              </div>


              {/* <div className="md:col-span-5">
                <label htmlFor="email">Email Address</label>
                <input type="text" name="email" id="email" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"  placeholder="email@domain.com" />
              </div>

              <div className="md:col-span-3">
                <label htmlFor="address">Address / Street</label>
                <input type="text" name="address" id="address" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"  placeholder="" />
              </div>

              <div className="md:col-span-2">
                <label htmlFor="city">City</label>
                <input type="text" name="city" id="city" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"  placeholder="" />
              </div>

              <div className="md:col-span-2">
                <label htmlFor="country">Country / region</label>
                <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                  <input name="country" id="country" placeholder="Country" className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"  />
                  <button tabIndex="-1" className="cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-red-600">
                    <svg className="w-4 h-4 mx-2 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  </button>
                  <button tabIndex="-1" htmlFor="show_more" className="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-300 hover:text-blue-600">
                    <svg className="w-4 h-4 mx-2 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg>
                  </button>
                </div>
              </div>

              <div className="md:col-span-2">
                <label htmlFor="state">State / province</label>
                <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                  <input name="state" id="state" placeholder="State" className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"  />
                  <button tabIndex="-1" className="cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-red-600">
                    <svg className="w-4 h-4 mx-2 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  </button>
                  <button tabIndex="-1" htmlFor="show_more" className="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-300 hover:text-blue-600">
                    <svg className="w-4 h-4 mx-2 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg>
                  </button>
                </div>
              </div>

              <div className="md:col-span-1">
                <label htmlFor="zipcode">Zipcode</label>
                <input type="text" name="zipcode" id="zipcode" className="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder=""  />
              </div> */}

              <div className="md:col-span-5">
                <div className="inline-flex items-center">
                  <input type="checkbox" name="billing_same" id="billing_same" className="htmlForm-checkbox" />
                  <label htmlFor="billing_same" className="ml-2">My billing address is different than above.</label>
                </div>
              </div>

              <div className="md:col-span-5 text-right">
                <div className="inline-flex items-end">
                  <input type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" />
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>

    {/* <a href="/" target="_blank" className="md:absolute bottom-0 right-0 p-4 float-right">
      <img src={plane} alt="Buy Me A Coffee" className="bg-gray-800 transition-all rounded-full w-14 -rotate-45 hover:shadow-sm shadow-lg ring hover:ring-4 ring-white" />
    </a> */}
  </div>
</div>
        </form>
  );
};

export default AddTour;





{/* <form onSubmit={handleSubmit(onSubmit)}>
        <input className='bg-gray-200' {...register("Name", { required: true, maxLength: 20 })} placeholder="Name" />
        <textarea className='bg-green-200' {...register("Description")} placeholder="Description" />
        <input className='bg-red-200' type="number" {...register("Price")} placeholder="Price" />
        <input className='bg-green-200' {...register("img")} placeholder="Image url" />
        <input className='bg-indigo-200' type="submit" />
      </form> */}
