
// const nodemailer = require("nodemailer");
// app.use(express.json());
// const transporter = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//         user: "wearepixelflow@gmail.com",
//         pass: "vajq domp ggyi wwpz"
//     }
// });



// const express = require("express");
// const cors = require("cors");
// const mongoose = require("mongoose");
// const User = require("./userModel");

// const app = express();

// app.use(cors());
// app.use(express.json());

// // MongoDB Connection
// // mongoose.connect(
// //   "mongodb+srv://tony_stark_db_user:Abhi1308@cluster0.gxs9z3m.mongodb.net/loginDB?retryWrites=true&w=majority&appName=Cluster0"
// // )

// // .then(() => {
// //     console.log("MongoDB Connected ✅");
// // })
// // .catch((err) => {
// //     console.log(err);
// // });

// app.get("/", (req, res) => {
//     res.send("Server Running Successfully 🚀");
// });

// // app.post("/signup", async (req, res) => {
// //     try {
// //         const user = new User(req.body);

// //         await user.save();

// //         console.log("User Saved:", req.body);

// //         res.json({
// //             success: true,
// //             message: "Account Created Successfully!"
// //         });

// //     } catch (error) {
// //         console.log(error);

// //         res.status(500).json({
// //             success: false,
// //             message: "Error saving user"
// //         });
// //     }
// // });
// // app.post("/signup", (req, res) => {
// //     console.log("User Data:", req.body);

// //     res.json({
// //         success: true,
// //         message: "Account Created Successfully!"
// //     });
// // });



// app.post("/signup", async (req, res) => {

//     const { firstname, email } = req.body;

//     try {

//         await transporter.sendMail({
//             from: "YOUR_GMAIL@gmail.com",
//             to: email,
//             subject: "Welcome to PixelFlow 🚀",
//             html: `
//                 <h2>Hello ${firstname} 👋</h2>
//                 <p>Your account has been created successfully.</p>
//                 <p>Welcome to PixelFlow 🚀</p>
//             `
//         });

//         console.log("Email sent to:", email);

//         res.json({
//             success: true,
//             message: "Account Created Successfully! Check your inbox 📧"
//         });

//     } catch (error) {

//         console.log(error);

//         res.status(500).json({
//             success: false,
//             message: "Email sending failed"
//         });
//     }
// });
// app.listen(5000, () => {
//     console.log("Server running on port 5000");
// });



const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();

app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "wearepixelflow@gmail.com",
        pass: "vajq domp ggyi wwpz"
    }
});

app.get("/", (req, res) => {
    res.send("Server Running Successfully 🚀");
});

app.post("/signup", async (req, res) => {

    const { firstname, email } = req.body;

    try {

        await transporter.sendMail({
            from: `"PixelFlow 🚀" <wearepixelflow@gmail.com>`,
            to: email,
            subject: "Welcome to PixelFlow 🚀",
           html: `
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; background: #f8f9fa; border-radius: 12px;">

    <h1 style="color:#7b2fbe; text-align:center;">
        Welcome to PixelFlow 🚀
    </h1>

    <p>Hi <b>${firstname}</b>,</p>

    <p>
        Thank you for creating an account with <b>PixelFlow</b>.
        Your registration has been completed successfully.
    </p>

    <p>
        We're excited to have you join our community.
        You can now access our platform and stay tuned for future updates and features.
    </p>

    <div style="background:#ffffff; padding:15px; border-radius:8px; margin:20px 0;">
        <h3 style="margin-top:0;">Account Details</h3>
        <p><b>Name:</b> ${firstname}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Status:</b> Successfully Registered ✅</p>
    </div>

    <p>
        If you did not create this account, please ignore this email.
    </p>

    <hr>

    <p style="text-align:center; color:#666;">
        © 2026 PixelFlow | Web Development & Video Editing
    </p>

</div>
`
        });

        console.log("Email sent to:", email);

        res.json({
            success: true,
            message: "Account Created Successfully! Check your inbox 📩"
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            success: false,
            message: "Email sending failed"
        });
    }
});

app.listen(5000, () => {
    console.log("Server running on port 5000");
});