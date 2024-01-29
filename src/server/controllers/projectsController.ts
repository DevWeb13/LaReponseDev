// src/server/controllers/projectsController.ts

import { server$ } from '@builder.io/qwik-city';

// import Project from '../models/Project';
// import connect from '../connect-db';
import { ProjectType, PageType } from '~/types/project';

async function getPrismaClient() {
  if (process.env.VERCEL_ENV) {
    // Vérifiez si vous êtes sur Vercel
    const { PrismaClient } = await import('@prisma/client/edge');
    return new PrismaClient();
  } else {
    const { PrismaClient } = await import('@prisma/client');
    return new PrismaClient();
  }
}

export const getAllProjects = server$(
  async (): Promise<ProjectType[] | null> => {
    console.log('DATABASE_URL:', process.env.DATABASE_URL);
    const prisma = await getPrismaClient();

    try {
      const projects = await prisma.project.findMany();
      console.log('projects:', projects);

      return projects.map((project) => {
        // Transformer les pages pour chaque projet
        const serializedPages = project.pages
          .map((page) => {
            if (page && typeof page === 'object') {
              const typedPage = page as PageType;
              return {
                image: typedPage.image,
                description: typedPage.description,
                url: typedPage.url,
                features: typedPage.features,
              };
            }
            return null;
          })
          .filter((page): page is PageType => page !== null) as PageType[];

        // Retourner le projet avec les pages transformées
        return {
          ...project,
          pages: serializedPages,
        };
      });
    } catch (error) {
      console.error('Erreur lors de la récupération des projets :', error);
      return null;
    }
  }
);

export const getOneProject = server$(
  async (id: string): Promise<ProjectType | null> => {
    const prisma = await getPrismaClient();

    try {
      const project = await prisma.project.findUnique({
        where: { id: id },
      });

      if (project && Array.isArray(project.pages)) {
        const serializedPages = project.pages
          .map((page) => {
            if (page && typeof page === 'object') {
              const typedPage = page as PageType;
              return {
                image: typedPage.image,
                description: typedPage.description,
                url: typedPage.url,
                features: typedPage.features,
              };
            }
            return null;
          })
          .filter((page): page is PageType => page !== null) as PageType[]; // Ajout d'une assertion de type

        const transformedProject: ProjectType = {
          ...project,
          pages: serializedPages,
        };

        return transformedProject;
      }
      return null;
    } catch (error) {
      console.error('Erreur lors de la récupération du projet :', error);
      return null;
    }
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
