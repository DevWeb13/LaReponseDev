// src/server/controllers/projectsController.ts

const Project = require('../models/Project');
const connect = require('../connect-db');

import { ProjectType } from '~/types/project';

export const getAllProjects = async (): Promise<ProjectType[] | null> => {
  await connect();
  const projects = await Project.find();
  if (projects) {
    const transformedProjects: ProjectType[] = projects.map(
      (project: { toObject: () => any; _id: { toString: () => any } }) => ({
        ...project.toObject(),
        _id: project._id.toString(),
        pages: [],
      })
    );

    return transformedProjects;
  }
  return null;
};

export const getOneProject = async (
  id: string
): Promise<ProjectType | null> => {
  await connect();
  const project = await Project.findOne({ _id: id });
  if (project) {
    const transformedProject: ProjectType = {
      ...project.toObject(),
      _id: project._id.toString(),
      pages: project.pages.map(
        (page: { toObject: () => any; _id: { toString: () => any } }) => ({
          ...page.toObject(),
          _id: page._id?.toString(),
        })
      ),
    };
    return transformedProject;
  }
  return null;
};

// export const createProject = async (project) => {
//   try {
//     await connect();
//     const newProject = new Project(project);
//     await newProject.save();
//     return { success: true };
//   } catch (error) {
//     console.error(
//       "Erreur lors de l'interaction avec la base de données :",
//       error
//     );
//     return { success: false, error: error.message };
//   }
// };

// export const deleteProject = async (id: string) => {
//   try {
//     await connect();
//     await Project.deleteOne({ _id: id });
//     return { success: true };
//   } catch (error) {
//     console.error(
//       "Erreur lors de l'interaction avec la base de données :",
//       error
//     );
//     return { success: false, error: error.message };
//   }
// };
