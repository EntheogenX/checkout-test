const express = require('express');
const signInRouter = express.Router();
const jwt = require('jsonwebtoken');
const config = require('../config/config');
const expressJwt = require('express-jwt');

const checkToken = expressJwt({ secret: config.secrets.JWT_PUBLIC_KEY })

signInRouter.post('/login', function (req, res, next) {
    const username = req.body.email
    const password = req.body.password
    const userId = "2012";

    // Fields are missing
    if (!username || !password) {
        res.status(400).send('You need a username and password')
    }
    // Wrong credentials
    else if (username != "admin" || password != "password") {
       res.status(401).send('Invalid Username or Password')
    }
    // Create JWT.
    else {
      const token = signToken(userId);
      res.json({token: token});
    }
});

const jwtValid = (req, res, next) => {
    req.headers.authorization = 'Bearer ' + req.cookies.jwt
    checkToken(req, res, next)
}

const signToken = (id) => jwt.sign(
  {id},
  config.secrets.JWT_PRIVATE_KEY,
  {expiresIn: config.expireTime, algorithm: 'RS256'}
);

module.exports = {signInRouter, jwtValid};
