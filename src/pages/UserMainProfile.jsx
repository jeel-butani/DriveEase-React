import React from "react";

const UserMainProfile = () => {
  return (
    <section className="bg-gray-200 min-h-screen pt-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
          <div className="lg:col-span-1">
            <div className="mb-4">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                alt="avatar"
                className="rounded-full w-64 mx-auto"
              />
            </div>
            <p className="text-center text-gray-600 mb-1">Johnatan Smith</p>
            <p className="text-center text-gray-600 mb-4">
              User | Rajkot, Gujarat
            </p>
          </div>
          <div className="lg:col-span-3">
            <div className="bg-white rounded shadow p-4">
              <div className="mb-8">
                <div className="flex mb-4">
                  <div className="w-1/3">
                    <p className="font-semibold">Full Name</p>
                  </div>
                  <div className="w-2/3">
                    <p className="text-gray-600">Johnatan Smith</p>
                  </div>
                </div>
                <hr className="my-4" />
                <div className="flex mb-4">
                  <div className="w-1/3">
                    <p className="font-semibold">Birthdate</p>
                  </div>
                  <div className="w-2/3">
                    <p className="text-gray-600">11/11/2000</p>
                  </div>
                </div>
                <hr className="my-4" />
                <div className="flex mb-4">
                  <div className="w-1/3">
                    <p className="font-semibold">Email</p>
                  </div>
                  <div className="w-2/3">
                    <p className="text-gray-600">jonathansmith@gmail.com</p>
                  </div>
                </div>
                <hr className="my-4" />
                <div className="flex mb-4">
                  <div className="w-1/3">
                    <p className="font-semibold">Phone Number</p>
                  </div>
                  <div className="w-2/3">
                    <p className="text-gray-600">+91 8989101029</p>
                  </div>
                </div>
                <hr className="my-4" />
                <div className="flex mb-4">
                  <div className="w-1/3">
                    <p className="font-semibold">Location</p>
                  </div>
                  <div className="w-2/3">
                    <p className="text-gray-600">Rajkot</p>
                  </div>
                </div>
                <hr className="my-4" />
                <div className="flex mb-4">
                  <div className="w-1/3">
                    <p className="font-semibold">Aadhar Card Number</p>
                  </div>
                  <div className="w-2/3">
                    <p className="text-gray-600">1234 5678 9012</p>
                  </div>
                </div>
                <hr className="my-4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserMainProfile;
