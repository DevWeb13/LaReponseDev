// src/server/models/User.ts

import mongoose from 'mongoose';

const { Schema } = mongoose;

const UserSchema = new Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    image: {
      type: String,
    },
  },
  { timestamps: true }
);

const User = mongoose.model('User', UserSchema);

export default User;
