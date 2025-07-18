import Users from "../model/user.model.js";
import bcryptjs from "bcryptjs"
export const signup = async (req, res) => {

    try {
        const { fullname, email, password } = req.body
        const user = await Users.findOne({ email })
        if (user) {
            return res.status(400).json({ message: "User already exist" })
        }
        const hashpassword = await bcryptjs.hash(password, 10)
        const createUser = new Users({
            fullname: fullname,
            email: email,
            password: hashpassword
        })
        await createUser.save();
        res.status(201).json({
            message: "User created succesfully", user: {
                id: createUser._id,
                email: createUser.email,
                fullname: createUser.fullname,
                password: createUser.password
            }
        })

    } catch (error) {
        console.log("error", error)
        res.status(500).json({ message: "Internal serves error" })
    }
};

export const login = async (req, res) => {
    try {
        const { email, password } = req.body
        const user = await Users.findOne({ email })
        const ismatch = await bcryptjs.compare(password, user.password)
        if (!user || !ismatch) {
            return res.status(400).json("invalid usernmae or password")
        } else {
            res.status(200).json({
                message: "login successfully",
                user: {
                    _id: user._id,
                    email: user.email,
                    password: user.password
                },
            })
        }

    } catch (error) {
        console.log("error", error)
        res.send(500).json({ message: "internal issue" })
    }
}