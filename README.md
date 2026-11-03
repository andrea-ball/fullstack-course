# Purpose of this project
To freshen skills in React, but also get more up to date on JavaScript and TypeScript. Figuring out how they all work together in harmony <3

Follows along with the fullstackopen.com course.

# Folder structure
Each part of the course has its own folder in the structure. "Examples" folders follow along with the course and act as notes as well as live
examples covered in the course.

Named folders within each part refer to a specific exercise/project within that part. 

# Creating a new app folder
To spin up a new app folder within a part, run the following commands:
`npm create vite@latest [folderName] -- --template react`
`cd [folderName]`
`npm install`

Use `npm run dev` to run the selected app from its high-level folder.

## Copying an existing app into a new part
For a continuation of a project in a new part, use these commands instead:
`cp -r part[1]/[folderName] part[2]/[folderName]`
`rm -rf part[2]/[folderName]/node_modules`
`cd part[2]/[folderName]`
`npm install`

This will copy the app files into the new part folder structure, remove and reinstall the node_modules folder and dependencies. 