const bcrypt = require('bcrypt');
const usermodel = require('../models/usermodel');
const jwt = require('jsonwebtoken');

const userlogindata = async (req, res) => {
    try {
        // Validate input
        if (!req.body.email || !req.body.password) {
            return res.status(400).json({ success: false, error: "Email and password are required" });
        }

        const password = String(req.body.password); // Convert to string if not already

        // Find user by email
        let user = await usermodel.findOne({ email: req.body.email });

        if (user) {
            const hashedPassword = String(user.password); // Convert to string if not already

            console.log("User-provided password:", password);
            console.log("Stored hashed password:", hashedPassword);

            // Compare hashed password
            let passCompare = password===hashedPassword;

            if (passCompare) {
                const data = {
                    user: {
                        id: user.id,
                    }
                };
                const token = jwt.sign(data, 'secret_ecom');
                return res.json({ success: true, token });
            } else {
                console.log("Password comparison failed");
                return res.json({
                    success: false,
                    error: "wrong password",
                });
            }
        } else {
            return res.json({
                success: false,
                error: "wrong email Id",
            });
        }
    } catch (err) {
        console.error("Error during user login:", err);
        res.status(500).json({ success: false, error: "Internal Server Error" });
    }
};



module.exports = userlogindata;
