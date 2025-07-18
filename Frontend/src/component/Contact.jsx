import { useForm } from "react-hook-form";
import { Link } from "react-router-dom"

Link
function Contact() {
    const {
        register,
        handleSubmit,

        formState: { errors },
    } = useForm();
    const onSubmit = (data) => console.log(data)
    return (<>
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white text-black p-5 rounded-2xl shadow-lg w-11/12 max-w-md">
                <div className="flex ">
                    <h3 className="text-2xl font-bold mb-4">Contact Us </h3>
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

                    <label htmlFor="mail">Gmail</label>
                    <input
                        id="mail"
                        type="text"
                        placeholder="Enter Your Username"
                        className="border p-2 rounded-xl"
                        {...register("mail", { required: true })}

                    />
                    {errors.mail && <span className="text-red-400">This field is required</span>}


                    <label htmlFor="password">Message</label>
                    <input
                        id="msg"
                        type="text-area"
                        placeholder="Enter Your Massage"
                        className="border p-2 rounded-xl"
                        {...register("msg", { required: true })}

                    />
                    {errors.msg && <span className="text-red-400">This field is required</span>}

                    <button
                        type="submit"
                        className="bg-blue-500 text-white py-2 mt-4 rounded-xl"
                    >
                        Submit
                    </button>

                    <p className="text-sm text-gray-700 text-start mt-2 ">
                        Already registered?{" "}

                    </p>

                </form>
            </div>
        </div>
    </>
    )
}

export default Contact