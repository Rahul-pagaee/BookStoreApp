import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import axios from "axios";
import toast from "react-hot-toast";
import { useAuth } from "../context/AuthProvider";

function Login() {
    const { setAuthUser } = useAuth(); // ✅ Use context
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        const userInfo = {
            email: data.email,
            password: data.password
        };


        await axios.post("http://localhost:3000/user/login", userInfo)
            .then((res) => {
                if (res.data.user.email == data.email) {
                    console.log("response data", res.data.user.email)
                    console.log("entered data", data.email)
                    toast.success('Login Successfully!');
                    localStorage.setItem("Users", JSON.stringify(res.data.user));
                    setAuthUser(res.data.user); // ✅ Set context value
                    document.getElementById("my_modal_1").close(); // ✅ Close modal after login
                } else {
                    toast.error("enter right data")
                }
            })
            .catch((error) => {
                if (error.response) {
                    console.log(error);
                    toast.error("Incorrect Email , Password", error.response.data.message);
                }
            });
    };

    return (
        <div>
            <dialog id="my_modal_1" className="modal bg-slate-100 border text-black">
                <div className="modal-box rounded-2xl">
                    {/* Header */}
                    <div className="flex justify-between items-center">
                        <h3 className="font-bold text-2xl">Login</h3>
                        <button
                            type="button"
                            className="btn font-semibold text-black rounded-2xl"
                            onClick={() => document.getElementById("my_modal_1").close()}
                        >
                            ✕
                        </button>
                    </div>

                    {/* Form */}
                    <div className="modal-action">
                        <form onSubmit={handleSubmit(onSubmit)} method="dialog" className="container gap-3 flex flex-col">
                            <label htmlFor="email">Email</label>
                            <input
                                id="email"
                                className="border rounded-2xl p-2"
                                placeholder="Enter Your Email"
                                type="text"
                                {...register("email", { required: true })}
                            />
                            {errors.email && <span className="text-red-400">This field is required</span>}

                            <label htmlFor="password">Password</label>
                            <input
                                id="password"
                                type="password"
                                placeholder="Enter Your Password"
                                className="border p-2 rounded-2xl"
                                {...register("password", { required: true })}
                            />
                            {errors.password && <span className="text-red-400">This field is required</span>}

                            <button type="submit" className="btn mt-6 font-semibold text-white bg-blue-500 rounded-2xl">
                                Login
                            </button>

                            <p className="text-sm text-gray-700 text-center mt-2">
                                Not Registered?{" "}
                                <Link to="/Signup" className="text-blue-500 hover:underline">
                                    Signup
                                </Link>
                            </p>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
}

export default Login;
