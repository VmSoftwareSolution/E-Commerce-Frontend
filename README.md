# EcommerceFront

This repository is for creating to e-commerce platform, that with a any type things, basically it a template e-commerce platform

## Table of Contents
- [Branch Naming Conventions](#branch-naming-conventions)
- [Frontend Setup and Dependencies](#frontend-setup-and-dependencies)
- [Commit Message Structure](#commit-message-structure)

## Branch Naming Conventions

In our project, we adhere to well-defined branch naming conventions to ensure a consistent and organized workflow. Our branch names are structured to provide clear information about their purpose and context.

[type]-[hu-name]-[plane]

### Naming Format

Our branch names follow the format:

- **`type`**: Represents the type of branch. We use `FT` for Feature branches.

    - **FT**: For developing new features.
    - **FX**: For bug fixes or issue resolution.
    - **DOC**: For changes or updates to the project documentation.
    - **RF**: For refactoring code without changing its functionality.
    - **TS**: For creating or updating unit/integration tests.
    - **CI**: For changes related to CI/CD pipelines.
    - **HF**: For urgent fixes applied directly to production.
    - **CR**: For non-functional tasks like dependency updates or code cleanup.
    - **REL**: For preparing code for a new version release.
    - **SP**: For research or exploration of a potential solution before implementation.
    - **BR**: For creating or validating bug reports.
    - **MG**: For merging changes from different branches or resolving conflicts.
    - **ST**: For visual or design-related updates.
    - **CFG**: For configuration or setup tasks.


- **`hu-name`**: Stands for the Hypothetical User Story name, which provides context for the branch.

- **`plane`**: Indicates the plane number associated with the task or issue.

### Examples

- **Feature Branch Example:**

  - Branch Name: `FT-ECOMM-38`
  - Purpose: Development of a feature related to task ECOMM-38.


By adhering to these branch naming conventions, we enhance clarity and traceability within our development process.


## Frontend Setup and Dependencies

To set up and run this project, follow these steps:

1. **Clone the Repository**: Colone this project repository for your local machine using Git. You can do this by running the following command in your terminal.

   ```
   https://github.com/VmSoftwareSolution/E-Commerce-Frontend.git
   ```

2. **Install Angular Cli**: The Angular CLI is a tool for Angular development. It helps create projects, manage dependencies, and run the development server.
   
   ```
   npm install -g @angular/cli
   ```
3. **Install Dependencies**: Angular projects use external libraries. This command downloads those libraries, listed in package.json, into your project.


   ```
   npm install
   ```
4. **Running the Project**: This starts the Angular development server. It compiles your code, serves it locally, and opens it in your browser.
  
   ```
   ng serve
   ```

## Commit Message Structure
Each commit message should follow a standardized structure to ensure consistency, clarity, and proper tracking of changes in the repository. The message structure consists of two main parts: Type and Subject.


- **`Type`**: specifies the category of change made in the commit. It is written in uppercase letters, followed by a colon and a space. Each type corresponds to a different kind of modification or action. The following types are used in our project:

  - **FEATURE**: For developing new features.
  - **FIX**: For bug fixes or issue resolution.
  - **DOCS**: For changes or updates to the project documentation.
  - **REFACTOR**: For refactoring code without changing its functionality.
  - **TEST**: For creating or updating unit/integration tests.
  - **CI**: For changes related to CI/CD pipelines.
  - **HOTFIX**: For urgent fixes applied directly to production.
  - **CHORE**: For non-functional tasks like dependency updates or code cleanup.
  - **RELEASE**: For preparing code for a new version release.
  - **SP**: For research or exploration of a potential solution before implementation.
  - **BUGREPORT**: For creating or validating bug reports.
  - **MERGE**: For merging changes from different branches or resolving conflicts.
  - **STYLES**: For visual or design-related updates.
  - **CONFIGURATION**: For configuration or setup tasks.

- **`Subject`**: The subject is a concise description of the change made in the commit. It provides a brief summary of what was done, making it easy to understand the purpose of the commit. Here are the guidelines for writing the subject:

- The subject should be in lowercase, unless it is a proper noun or acronym (e.g., Angular, API).
- The subject should start with a verb in the imperative mood (e.g., Add, Fix, Update, etc.).
- The subject should be brief and specific, ideally 50 characters or fewer.
- Avoid ending the subject with a period.

### Examples of Correct Commit Messages

Here are some examples of correctly formatted commit messages:

- **`Feature-related Commit`**: (FEATURE): Add user authentication

- **`Bug Fix Commit`**: (FIX): Resolve issue with database connection

- **`Documentation Commit`**: (DOCS): Update API documentation

- **`Refactoring Commit`**: (REFACTOR): Simplify data processing logic

- **`Hotfix Commit`**: (HOTFIX): Fix crash on login screen
