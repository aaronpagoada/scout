import bcrypt from 'bcryptjs';
import mongoose from 'mongoose';

const User = mongoose.model('User'); // created in tripModel.ks

// start session - LOG IN / REGISTER
const startAuthenticatedSession = (req, user) => {
  return new Promise((resolve, reject) => {
    req.session.regenerate((err) => {
      if (err) {
        reject(err); 
      } else {
        req.session.user = user;
        resolve(user); 
      }
    });
  });
};

// end session - LOG OUT
const endAuthenticatedSession = (req) => {
  return new Promise((resolve, reject) => {
    req.session.destroy((err) => {
      if (err) {
        reject(err);
      } else {
        resolve(); 
      }
    });
  });
};
