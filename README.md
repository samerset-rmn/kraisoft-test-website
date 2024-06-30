# game.play

Web site for a test assignment in Kraisoft. Contains a page with a simple game and a feedback form page.

- [Getting started](#getting-started)
- [Implementation details](#implementation-details)
  - [Game field](#game-field)
  - [Contact us form](#contact-us-form)
- [Additional project features (not required by the task)](#additional-project-features-not-required-by-the-task)
  - [Project structure](#project-structure)
  - [TypeScript](#typescript)
  - [ESLint](#eslint)
  - [Playwright](#playwright)
  - [Pre-push](#pre-push)

## Getting started

1. Clone the repository
2. Run `npm ci`
3. Run `npm run dev`
4. Open the site at `http://localhost:3000/kraisoft-test-website`

Or you can just open the deployed site by the link: [https://samerset-rmn.github.io/kraisoft-test-website/](https://samerset-rmn.github.io/kraisoft-test-website/).

## Implementation details

In the codebase you can find comments that starts with a keyword **NOTE**. They are used to explain some decisions and implementation details.

Below I explain some of them in more detail.

### Game field

Why did I shoose [@dnd-kit](https://github.com/clauderic/dnd-kit) library? I was making a decision with the following in mind:

1. Game should support touch events (website has responsive design and should work on mobile devices)
2. Game should support keyboard events (for accessibility)
3. Library should be actively maintained, performant and have a small bundle size
 
At first I wanted to use native [Drag and Drop browser API](https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API), but it has some limitations. For example: doesn't support touch and keyboard events, doesn't support parent boundary restriction. Many features can be done only with hacks. So I decided to use a library.
 
[react-draggable](https://github.com/react-grid-layout/react-draggable?tab=readme-ov-file) is a good library that still actively maintained and has a low bundle size. But as far I can see it doesn't support keyboard events.
 
[react-beautiful-dnd](https://github.com/atlassian/react-beautiful-dnd) is made by Attlasian, but has a big bundle size.
 
[dnd-kit](https://github.com/clauderic/dnd-kit) looks like a good choice. It has support for touch and keyboard events, has a small bundle size (also modular and tree-shakeable), is well maintained, can potentially be framework agnostic, finally it's flexible enough for custom logic. So I stick with this library.

### Contact us form

Forms are a common part of the web that have to be implemented in a good way. We need to consider form validation (we can't trust HTML validation), error handling, submit handling, form state management etc. Doing it from scratch can be a time consuming task. So I decided to use a library for that.

My favorite library for this so far is [react-hook-form](https://react-hook-form.com/). Unlike Formik, it has a smaller bundle size, is actively maintained and has a good documentation. It may have some problems with complex forms (e.g. multi step one) that require some additional logic, but for simple forms it's a good choice.

## Additional project features (not required by the task)

### Project structure

I divide components into "dumb" and "smart" ones. "Dumb" components are just presentational components that don't have any logic, only markup and styles. "Smart" components are containers that have logic and pass it to "dumb" components. This approach was introduced by Dan Abramov a long time ago in his [blog post](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0). Its main idea is to separate concerns and make components more reusable.

* **playwright** – Playwright tests
* **public** – static files
* **src** - project main codebase
  * **declarations** – TypeScript declarations
  * **features** - feature folders. Each feature has its own folder with components, hooks, utils etc. I prefer this approuch because it makes navigating in the codebase easier. We know that each feature contains all the necessary code in one place.
  * **pages** – Nextjs pages
  * **shared** - shared components, hooks, utils etc. Can be used anywhere in the project.

### TypeScript

I'm using TypeScript in the project. It helps to catch errors at compile time, makes code more readable and maintainable. For me TypeScript makes writing code much faster because of autocompletion and type checking. Overall it's just good.

### ESLint

For linting I'm using ESLint with TypeScript config. One more tool that helps to catch errors and make code more consistent. Also I use `import/order` rule that helps to keep imports clean and more readable.

### Playwright

Playwright is an end-to-end testing tool. This means that it can open a browser, navigate to a page, interact with it, and check the results. It's a good way to test the whole application and make sure everything works as expected. I wrote some tests for the main features of the website. 

I didn't enable code coverage because it's not necessary for this project. I also didn't add unit tests, but it's not a problem to add them.

### Pre-push

I added a [pre-push](https://github.com/dflourusso/pre-push) hook that runs linter, build and tests before pushing the code to the repository. This helps to prevent pushing broken code to the repository.