const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/user");
const config = require("../config/key")

const register = (req, res) => {
  const { password } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 10);
  User.create(
    { ...req.body, password: hashedPassword, peran: 3 },
    (error, doc) => {
      if (error) return res.json(error);
      return res.status(201).json({ message: "User created" });
    }
  );
};

const login = (req,res) =>{
  return User.findOne(
    {
        email: req.body.email
    },
    function(err, userData) {
        if (err) return res.status(500).send('Internal server error.')
        if (!userData) return res.status(404).send('User not found.')

        const passwordIsValid = bcrypt.compareSync(
            req.body.password,
            userData.password
        )

        if(!passwordIsValid){
          res.status(200).send({msg:"Wrong Password!"})
        }

        const token = jwt.sign(
            { userData },config.secret,
            {
                expiresIn: 86400
            }
        )

        res.status(200).send({
            message: 'Success',
            token
        })
    }
)
}


module.exports = {
    register,
    login
};