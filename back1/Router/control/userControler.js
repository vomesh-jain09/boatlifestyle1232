
const bcrypt = require('bcrypt');
const Users = require('../control/db');
const { validationResult } = require("express-validator");
const jwt = require('jsonwebtoken');
const nodemailer = require("nodemailer");

// Get all users
async function getAlluser(req, res) {
    try {
        const data = await Users.find();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

// Get a single user by ID
async function singleuser(req, res) {
    const id = req.params.id; 
    try {
        const user = await Users.findById(id);
        if (!user) {
            return res.status(404).json({ 
                sucess:false,
                errmsg: 'User not found' 
            });
        }
        res.status(200).json({
            sucess:true,
            data:{user}
        });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

// Register a new user
async function registeruser(req, res) {
    const result = validationResult(req);
    if (!result.isEmpty()) {
        return res.status(400).json({ errors: result.array() });
    }

    const data = req.body;
    try {
        const existingUser = await Users.findOne({ email: data.email });
        if (existingUser) {
            return res.status(400).json({
                sucess:false,
                errmsg: 'Email already exists',
            })
        }

        const hashpass = bcrypt.hashSync(data.password, 10);
        const obj = { ...data, password: hashpass };

        const newuser = await Users.create(obj);
        res.status(201).json({
            sucess:true,
            data:{newuser}
        })
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

// Log in a user
async function loginUser(req, res) {
    const data = req.body;
    try {
        const user = await Users.findOne({ email: data.email });
        if (!user) {
            return res.status(404).json({ sucess:false,errmsg: 'No user found' });
        }

        const isMatch = bcrypt.compareSync(data.password, user.password);
        if (!isMatch) {
            return res.status(401).json({sucess:false, errmsg: 'Wrong password' });
        }

        const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET );
        
        res.status(299).json({
            sucess:true,
            data:{user,token}
        })
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

// Update a user
async function updateUser(req, res) {

    const id = req.params.id; // Use params or query
    const data = req.body;
    try {
        const updateduser = await Users.findByIdAndUpdate(id, data, { new: true });
        if (!updateduser) {
            return res.status(404).json({ sucess:"false",
                errmsg: 'User not found'
             });
        }
        res.status(200).json(updateduser);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

// Delete a user
async function deleteUser(req, res) {
    const id = req.params.id; // Use params or query
    try {
        const deleteduser = await Users.findByIdAndDelete(id);
        if (!deleteduser) {
            return res.json({
                sucess:false,
                errmsg:"no user found"
            })
        }
        res.status(200).json({
            sucess:true,
            msg:"deleted successfully"
        })
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
}


async function sendEmail(req, res) {
    const data = req.body;
    const transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      secure: false, // true for port 465, false for other ports
      auth: {
        user: "vomeshjain1@gmail.com", 
        pass: "Vomesh@123", 
      },
    });
  
    try {
      // Send mail with defined transport object
      const info = await transporter.sendMail({
        from: '"Maddison Foo Koch 👻" ', 
        to: "vomeshjain00700@gmail.com", 
        subject: "Hello ✔", 
        text: "Hello world?", // plain text body
        html: "<b>Hello world?</b>", // html body
      });
  
      res.status(200).json({ message: 'Email sent successfully', messageId: info.messageId });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ error: 'Failed to send email' });
    }
  }
module.exports = {
    getAlluser,
    registeruser,
    updateUser,
    deleteUser,
    loginUser,
    singleuser,
    sendEmail
};
