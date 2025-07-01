import React from "react";
import { useForm } from "react-hook-form"
import { Link } from "react-router-dom";
import Login from "./Login"
function Signup() {
    const {
        register,
        handleSubmit,

        formState: { errors },
    } = useForm();
    const onSubmit = (data) => console.log(data)
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white text-black p-5 rounded-2xl shadow-lg w-11/12 max-w-md">
                <div className="flex ">
                    <h3 className="text-2xl font-bold mb-4">Signup</h3>
                    <Link to={"/"}>
                        <button className="btn mt-2 flex mb-9 mx-70 font-semibold text-black  rounded-2xl  ">
                            ✕
                        </button>

                    </Link></div>

                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
                    <label htmlFor="name">Name</label>
                    <input
                        id="name"
                        type="text"
                        placeholder="Enter Your Name"
                        className="border p-2 rounded-xl"
                        {...register("name", { required: true })}

                    />
                    {errors.name && <span className="text-red-400">This field is required</span>}

                    <label htmlFor="username">Usernmae</label>
                    <input
                        id="username"
                        type="text"
                        placeholder="Enter Your Username"
                        className="border p-2 rounded-xl"
                        {...register("username", { required: true })}

                    />
                    {errors.password && <span className="text-red-400">This field is required</span>}


                    <label htmlFor="password">Usernmae</label>
                    <input
                        id="password"
                        type="text"
                        placeholder="Enter Your Password"
                        className="border p-2 rounded-xl"
                        {...register("password", { required: true })}

                    />
                    {errors.password && <span className="text-red-400">This field is required</span>}

                    <button
                        type="submit"
                        className="bg-blue-500 text-white py-2 mt-4 rounded-xl"
                    >
                        Signup
                    </button>

                    <p className="text-sm text-gray-700 text-start mt-2 ">
                        Already registered?{" "}

                    </p>

                </form>
            </div>
        </div>
    );
}

export default Signup;
