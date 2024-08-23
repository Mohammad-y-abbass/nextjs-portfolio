import React from 'react';
import { CgWorkAlt } from 'react-icons/cg';
import { FaReact } from 'react-icons/fa';
import { LuGraduationCap } from 'react-icons/lu';

export const experiencesData = [
  {
    title: 'Software Developer',
    location: 'Remote',
    description:
      'Currentntly working as a software developer for a programming community called big data specialist. I have been working on creating a platform for sharing programming related content.',
    icon: React.createElement(LuGraduationCap),
    date: 'August 2023 - present',
  },
  {
    title: 'Software Developer Intern',
    location: 'Lebanon',
    description:
      'I worked as a software developer for a startup called Bracket Technologies. During the internship I worked on creating a flight and hotel booking platform.',
    icon: React.createElement(CgWorkAlt),
    date: 'June 2023 - August 2023',
  },
];
