import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const pageSchema = new Schema({
  image: { type: String, required: true },
  description: { type: String, required: true },
  url: { type: String, required: true },
  features: { type: Array, required: true },
});

const projectSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  url: { type: String, required: true },
  pages: [pageSchema],
  github: { type: String, required: true },
  date: { type: String, required: true },
  category: { type: String, required: true },
  technologies: { type: Array, required: true },
  logo: { type: String, required: true },
  sonarCloudProjectKey: { type: String, required: true },
});

const Project = mongoose.model('Project', projectSchema);

export default Project;
