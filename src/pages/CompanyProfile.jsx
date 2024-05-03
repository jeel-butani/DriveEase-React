import React from "react";

const CompanyProfile = () => {
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
            <p className="text-center text-gray-600 mb-1">XYZ</p>
            <p className="text-center text-gray-600 mb-4">
              Company | Rajkot, Gujarat
            </p>
          </div>
          <div className="lg:col-span-3">
            <div className="bg-white rounded shadow p-4">
              <div className="mb-8">
                <div className="flex mb-4">
                  <div className="w-1/3">
                    <p className="font-semibold">Company Name</p>
                  </div>
                  <div className="w-2/3">
                    <p className="text-gray-600">XYZ</p>
                  </div>
                </div>
                <hr className="my-4" />
                <div className="flex mb-4">
                  <div className="w-1/3">
                    <p className="font-semibold">GST Number</p>
                  </div>
                  <div className="w-2/3">
                    <p className="text-gray-600">1234 5678 9012</p>
                  </div>
                </div>
                <hr className="my-4" />
                <div className="flex mb-4">
                  <div className="w-1/3">
                    <p className="font-semibold">Email</p>
                  </div>
                  <div className="w-2/3">
                    <p className="text-gray-600">xyz@gmail.com</p>
                  </div>
                </div>
                <hr className="my-4" />
                <div className="flex mb-4">
                  <div className="w-1/3">
                    <p className="font-semibold">Owner Name</p>
                  </div>
                  <div className="w-2/3">
                    <p className="text-gray-600">Johnatan Smith</p>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyProfile;
