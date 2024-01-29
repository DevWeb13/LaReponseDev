// src/types/project.ts

import type { JsonValue } from '@prisma/client/runtime/library';

export type PageType = {
  image: string;
  description: string;
  url: string;
  features: string[];
};

export type ProjectType = {
  id: string;
  name: string;
  description: string;
  image: string;
  url: string;
  pages: JsonValue;
  github: string;
  date: string;
  category: string;
  technologies: string[];
  logo: string;
  sonarCloudProjectKey: string;
};
