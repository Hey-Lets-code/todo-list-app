# TO-DO List Application

## Overview
This project is a To-Do List Application built with React, Material-UI and Typescript. It allows users to manage their tasks, including creating, editing, and deleting tasks. All tasks are stored in the browser's LocalStorage for persistence.

**Deployed**[https://todo-list-qbkmdggo0-leticias-projects-75b084f9.vercel.app](https://todo-list-qbkmdggo0-leticias-projects-75b084f9.vercel.app)

#### Register
![Register](https://github.com/user-attachments/assets/55338f94-40ea-4b78-a3a3-99734c1f336b)

#### Login 
![Login](https://github.com/user-attachments/assets/b25163da-6e04-4929-9bb3-5447dd9cb13c)

#### Create to-do item
![Adicionar](https://github.com/user-attachments/assets/b071e370-c3d3-4ba8-8916-6c985e3d3a68)

#### Edit to-do item
![Edição](https://github.com/user-attachments/assets/a2a04c5b-1911-4eea-a5db-64f605d2a5c0)

#### Delete to-do item
![Deletar](https://github.com/user-attachments/assets/c16a51ad-0080-4ae5-ac35-eca1e77f3efb)

#### Search Field
![campo-de-pesquisa](https://github.com/user-attachments/assets/04890a1b-ce58-4807-8782-77aaf528333f)


## Features
The application includes the following features:

1. **Login**
   - A screen with fields for email and password.
   - Only the interface is implemented; authentication logic is not implemented yet.

2. **User Registration**
   - A screen with fields for name, email, and password.
   - Only the interface is implemented; registration logic is not implemented yet.

3. **Task List**
   - A screen that lists all created tasks.
   - Each task displays the title, color, and description.

4. **Task Management**
   - A form to create new tasks.
   - A form to edit existing tasks.
   - Functionality to delete tasks.
   - Each task includes the following fields: title, color (using a color picker), and description.
   - Tasks are saved to and loaded from LocalStorage.

## Technical Details
- **Framework**: React
- **UI Components**: Material-UI
- **Data Storage**: Browser's LocalStorage
- **Language**: TypeScript
- **Testing**: Jest

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/todo-list-app.git
   cd todo-list-app
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Start the development server:
   ```sh
   npm start
   ```
   
For a project with React, Material-UI, React Router, TypeScript, and Jest, you will need the following dependencies:

### Main Dependencies

1. **React** and **React DOM**:
   ```sh
   npm install react react-dom
   ```

2. **Material-UI** (including icons):
   ```sh
   npm install @mui/material @emotion/react @emotion/styled @mui/icons-material
   ```

3. **React Router**:
   ```sh
   npm install react-router-dom
   ```

4. **TypeScript** (if it's not already installed):
   ```sh
   npm install typescript
   ```

5. **Type Definitions for TypeScript**:
   ```sh
   npm install --save-dev @types/react @types/react-dom @types/react-router-dom
   ```

6. **Jest** and **React Testing Library** for tests:
   ```sh
   npm install --save-dev jest @testing-library/react @testing-library/jest-dom @testing-library/user-event @types/jest
   ```

### Commands to Install All Dependencies

You can install all the dependencies at once with the following commands:

```sh
npm install react react-dom @mui/material @emotion/react @emotion/styled @mui/icons-material react-router-dom typescript
npm install --save-dev jest @testing-library/react @testing-library/jest-dom @testing-library/user-event @types/jest @types/react @types/react-dom @types/react-router-dom
```

## Usage
1. Open your browser and navigate to `http://localhost:3000`.
2. Use the login and registration interfaces to create a new user (only the interface is functional).
3. Create, edit, and delete tasks using the provided forms and task list interface.

## Development Status
The testing phase is currently under development.

## Contributing
Contributions are welcome! Please fork the repository and create a pull request with your changes.

