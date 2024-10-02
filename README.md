# WallToDo - Work Sample for Recruitment

## Overview

**WallToDo** is a task management web application designed as a sample project for recruitment purposes. The project demonstrates proficiency in key front-end technologies such as React, Next.js, TypeScript, Redux Toolkit, and Tailwind CSS, along with drag-and-drop functionality using `dndkit`. The app allows users to manage tasks by adding, editing, and deleting items, and moving them across columns ('Todo', 'In Progress', and 'Completed').

## Features

- **Task Management**: Add, update, delete tasks with titles and deadlines.
- **Persian Date Support**: Use of Jalali calendar for managing task deadlines.
- **Drag-and-Drop**: Intuitive task organization across different statuses using `dndkit`.
- **State Management**: Redux Toolkit for centralized state management.
- **Responsive Design**: Styled with Tailwind CSS for a responsive and RTL (right-to-left) layout.
- **Task Statuses**: Automatically track task status and deadlines, with visual indicators for delayed tasks.

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **State Management**: [Redux Toolkit](https://redux-toolkit.js.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Drag-and-Drop**: [dndkit](https://dndkit.com/)
- **Date Picker**: [react-multi-date-picker](https://shahabyazdi.github.io/react-multi-date-picker/) for Jalali (Persian) calendar support
- **Font**: IRANSans Persian font.

## Folder Structure

src/
├── app/               # Application files
├── components/        # Reusable UI components
├── store/             # Redux slices and store setup
public/                # Public assets (icons, images)
README.md              # Project documentation


First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Contact
sepehriayeen96prgr@gmail.com