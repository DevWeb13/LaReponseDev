// src/server/controllers/projectsController.ts

import { server$ } from '@builder.io/qwik-city';
import { PrismaClient } from '@prisma/client';

import Project from '../models/Project';
// import connect from '../connect-db';
import { ProjectType } from '~/types/project';

export const getAllProjects = server$(
  async (): Promise<ProjectType[] | null> => {
    const prisma = new PrismaClient();
    const projects = await prisma.project.findMany();

    if (projects) {
      return projects;
    }
    return null;
  }
);

// export const getOneProject = async (
//   id: string
// ): Promise<ProjectType | null> => {
//   await connect();
//   const project = await Project.findOne({ _id: id });
//   if (project) {
//     const transformedProject: ProjectType = {
//       ...project.toObject(),
//       _id: project._id.toString(),
//       pages: project.pages.map((page) => ({
//         ...page.toObject(),
//         _id: page._id?.toString(),
//       })),
//     };
//     return transformedProject;
//   }
//   return null;
// };

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
