# Project

The first automated platform that connects customers and wall-artists to each other.

# Getting started

### Prerequisites

* GIT
* Node.JS
* NPM
* IDE Software (like VSCode)

### Getting Codebase Locally

1. Download ZIP file of project or clone directly in your IDE.
2. Run `npm install` to synchronize project dependencies.
3. Run `npm run dev` to start local development server.
4. Open `http://localhost:3000` in your browser to see the app.
5. Start working on the task.

# Conventions and Working Guide

To ensure a better developer experience and minimize issues during project development, it is important to follow the general rules:

1. Make sure your local `main` branch is in sync with the remote one by running `git pull origin main`.
2. Ensure you have installed all dependencies that may have been added by other developers before starting your task by running `npm install`.
3. Create new branch with following _the rules_: run `git checkout -b <<branch-name>>`.
4. Feel free to start adding new features.

### Commiting

Commits are important to differentiate, reveal and clearly check what is changed.

* Before writing code, break down the task into smaller parts in your mind.
* Work consistently and complete the task step by step.
* It's best to wrap each logical micro-task in one commit.
* Clearly define what has changed in each commit.
* Use verbs, like: `add`, `update`, `delete`, `change`, `create`.
* Ensure not to commit large files, like `node_moduls`.

### Branch Naming

There are several branch name prefixes depending on why you are creating a new branch and its purpose. By following these rules, it becomes easier to maintain the codebase and quickly find things when needed.

If you are:
* Adding a new feature, start branch name with `feat/` and add the task name with _kebab-case_ way.
* Changing, upgrading, reffactoring an exciting feature: `ref/`.
* Fixing a bug: `fix/_`.
* Adding or creating documentation: `docs/_`.

Examples: `fix/auth-error-bug`, `feat/auth-with-google`, `docs/navigation-guidline`.

### Publishing Local Changes

After fully completing taken task, you should publish your changes for everyone.

* Make sure changes does not include unexpected bugs or errors.
* Ensure you are on the task branch, not `main` branch.
* Publish changes by running `git push origin <<branch-name>>`
# GitHub Guide

### Creating Pull Request

Applying new feature or bug fix or documentation update on the `main` branch, should happend through `Pull Request`.

* Open Pull Request from _here_.
* Fill the `Title` and `Description` fields with following the _conventions_.
* Select yourself in `Assignees` window.
* Select one of leads in `Reviewers` window.
* Ensure you merging correct branch on the `main` branch.
* Create pull request and wait for the review.
* If needed, add comments on the PR.

### Merging

After receiving approval from the selected reviewer, simply click `Merge Pull Request`. The codebase will be updated, and the PR will automatically close.
