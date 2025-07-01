import { useForm } from "react-hook-form"
import { Link } from 'react-router-dom';

function Login() {

    const {
        register,
        handleSubmit,

        formState: { errors },
    } = useForm();
    const onSubmit = (data) => console.log(data)
    return (
        <>
            <div>
                <dialog id="my_modal_1" className="modal bg-slate-100 border text-black">
                    <div className="modal-box   rounded-2xl ">
                        <div className="flex">
                            <h3 className="font-bold text-2xl">Login!</h3>
                            <button
                                type="button"
                                className="btn  py-3.5  flex mb-9 mx-85  font-semibold text-black rounded-2xl"
                                onClick={() => document.getElementById("my_modal_1").close()}
                            >
                                ✕
                            </button>
                        </div>



                        <div className="modal-action">

                            <form onSubmit={handleSubmit(onSubmit)} method="dialog" className="container gap-3 flex flex-col " >
                                <label htmlFor="username">Username</label>
                                <input
                                    id="username"
                                    className="border rounded-2xl p-2"
                                    placeholder="Enter Your Email"
                                    type="text"
                                    {...register("username", { required: true })}
                                />
                                {errors.username && <span className="text-red-400">This field is required</span>}
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

                                <p className="text-sm text-gray-700 text-center">
                                    Not Registered?{" "}
                                    <Link
                                        to="/Signup"
                                        className="text-blue-500 hover:underline" >
                                        Signup
                                    </Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </dialog>
            </div>
        </>
    );
}

export default Login;
