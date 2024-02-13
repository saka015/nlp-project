import  { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
  });



  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value }); // Changed from square brackets to parentheses
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); //synthetic event
    console.log(
      JSON.stringify({
        name: credentials.name,
        email: credentials.email,
        password: credentials.password,
      })
    );

    const response = await fetch("/api/createuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: credentials.name,
        email: credentials.email,
        password: credentials.password,
      }),
    });
    const json = await response.json();
    console.log(json);

    if (!json.success) {
      alert("Enter valid credentials!");
    }

    if (json.success) {
      navigate("/loginuser");
    }
  };

 

  return (
    <div className="pt-12">
      <div className="min-h-[70vh]">
        <div className="bg-slate-800 rounded-3xl sm:mx-96 sm:mt-10 my-4 flex min-h-full flex-1 flex-col justify-center px-2 py-2 lg:px-4">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="mt-6 py-1   text-center text-2xl font-bold leading-9 tracking-tight  text-blue-200">
              Create a new account
            </h2>
          </div>

          <div className="mt-4 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="text-left block text-sm font-medium leading-6 text-blue-100"
                >
                  Name
                </label>
                <div className="mt-2">
                  <input
                    onChange={onChange}
                    value={credentials.name}
                    id="name"
                    name="name"
                    type="text" // Changed from type="name" to type="text"
                    autoComplete="name"
                    required
                    className="px-2 text-md block w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-blue-300 placeholder:text-blue-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="text-left block text-sm font-medium leading-6 text-blue-100"
                >
                  Email
                </label>
                <div className="mt-2">
                  <input
                    onChange={onChange}
                    value={credentials.email}
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="px-2 text-md block w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-blue-300 placeholder:text-blue-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-6 text-blue-100"
                  >
                    Password
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    onChange={onChange}
                    value={credentials.password}
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="px-2 text-md block w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-blue-300 placeholder:text-blue-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
             hover:bg-[#1B1A55] bg-[#535C91] btn  "
                >
                  Register
                </button>
              </div>
            </form>

            <p className="mt-10 text-center text-sm text-blue-500">
              Already a member?{" "}
              <Link
                to="/loginuser"
                className="font-semibold leading-6 text-red-200 hover:text-green-500"
              >
                Login!
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
