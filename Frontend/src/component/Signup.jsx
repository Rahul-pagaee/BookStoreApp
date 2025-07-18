import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

function Signup() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const navigate = useNavigate();

    const onSubmit = async (data) => {
        const userInfo = {
            fullname: data.fullname,
            email: data.email,
            password: data.password,
        };

        await axios
            .post("http://localhost:3000/user/signup", userInfo)
            .then((res) => {
                if (res.data) {
                    toast.success("Sign up successful!");
                    localStorage.setItem("Users", JSON.stringify(res.data.user));
                    navigate("/"); // redirect to home or any page
                }
            })
            .catch((error) => {
                if (error.response) {
                    console.log(error);
                    toast.error(error.response.data.message);
                }
            });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white text-black p-5 rounded-2xl shadow-lg w-11/12 max-w-md">
                {/* Top: Title and Close Button */}
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-2xl font-bold">Signup</h3>
                    <Link to="/">
                        <button
                            type="button"
                            className="btn text-xl font-semibold text-black"
                        >
                            ✕
                        </button>
                    </Link>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
                    <label htmlFor="fullname">Name</label>
                    <input
                        id="fullname"
                        type="text"
                        placeholder="Enter your name"
                        className="border p-2 rounded-xl"
                        {...register("fullname", { required: true })}
                    />
                    {errors.fullname && (
                        <span className="text-red-400">This field is required</span>
                    )}

                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        type="text"
                        placeholder="Enter your email"
                        className="border p-2 rounded-xl"
                        {...register("email", { required: true })}
                    />
                    {errors.email && (
                        <span className="text-red-400">This field is required</span>
                    )}

                    <label htmlFor="password">Password</label>
                    <input
                        id="password"
                        type="password"
                        placeholder="Enter your password"
                        className="border p-2 rounded-xl"
                        {...register("password", { required: true })}
                    />
                    {errors.password && (
                        <span className="text-red-400">This field is required</span>
                    )}

                    <button
                        type="submit"
                        className="bg-blue-500 text-white py-2 mt-4 rounded-xl"
                    >
                        Signup
                    </button>

                    <p className="text-sm text-gray-700 text-start mt-2">
                        Already registered? <Link to="/login" className="text-blue-600">Login</Link>
                    </p>
                </form>
            </div>
        </div>
    );
}

export default Signup;
