import React from "react";
function Card({username,btntext='visit me!'}) {
    return (
         <>
      <div className="flex justify-center mt-10 ">

        <div className="w-80 bg-white rounded-xl shadow-lg overflow-hidden">

          <img
            src="https://plus.unsplash.com/premium_photo-1661963063875-7f131e02bf75?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D"
            alt="card"
            className="w-full h-48 object-cover"
          />

          <div className="p-5">

            <h2 className="text-2xl font-bold mb-2">
              {username}
            </h2>

            <p className="text-gray-600">
              This is a simple card component
            </p>

            <button className="mt-4 bg-blue-500 text-white px-5 py-2 rounded-lg">
             {btntext}
            </button>

          </div>

        </div>

      </div>
</>
    )
}
export default Card;