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

// Vérifiez si le modèle existe déjà avant de le créer
export default mongoose.models.User || mongoose.model('User', UserSchema);
