# Assessment 1: Clone Tasks

Two React projects for the Web Dev II Clone Tasks assessment. Each page is based on the supplied task specification, wireframes, images, and text.

## Projects

| Task | Project | Description |
| --- | --- | --- |
| Task 1: Layout in React | [Erased Tapes](task-1-layout-in-react/erased-tapes/) | Music blog page with article columns, an album gallery, author information, comments, and a footer. |
| Task 2: Responsive Layouts | [watch.it](task-2-responsive-layouts/watch-it/) | Movie page with six reusable cards and mobile, tablet, and desktop layouts. |

The original task specifications are available in [Task 1 README](task-1-layout-in-react/README.md) and [Task 2 README](task-2-responsive-layouts/README.md). Please also read the full assessment brief on Ultra.

## Repository structure

```text
assessment-1-clone-tasks/
|-- README.md
|-- task-1-layout-in-react/
|   |-- README.md
|   |-- assets/
|   |-- wireframes/
|   `-- erased-tapes/
`-- task-2-responsive-layouts/
    |-- README.md
    |-- assets/
    |-- wireframes/
    `-- watch-it/
```

Each React project contains its own `src`, `public`, and `package.json` files. The task-level `assets` and `wireframes` folders contain the supplied reference material.

## Requirements

- Node.js and npm compatible with the Vite version in each project's `package.json`.
- A modern web browser.
- Internet access to load the Google Fonts used by the pages.

Run the commands below from the folder containing this README. Each project must have its dependencies installed separately.

## Run Task 1: Erased Tapes

```powershell
cd task-1-layout-in-react/erased-tapes
npm install
npm run dev
```

Open the local URL printed in the terminal. Stop the development server with `Ctrl+C`.

## Run Task 2: watch.it

From the folder containing this README, open a separate terminal and run:

```powershell
cd task-2-responsive-layouts/watch-it
npm install
npm run dev
```

Open the local URL printed in that terminal. If another development server is running, Vite may select a different port.

## Project commands

Run these inside either React project folder:

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the development server. |
| `npm run lint` | Check the source with ESLint. |
| `npm run build` | Generate the production site in `dist`. |
| `npm run preview` | Preview the production build locally after building. |

## Layout and implementation

Both projects use function-based React components, CSS, and Vite. Task 1 uses a three-column article layout, CSS Grid for album covers, and Flexbox for supporting sections. Task 2 stores movie content in an array and renders reusable cards using props and `.map()`.

Task 2 uses the following viewport ranges:

| Viewport width | Layout |
| --- | --- |
| Below 720px | One column of movie cards; genre navigation hidden. |
| 720px to below 1024px | Two columns of movie cards; genre navigation visible. |
| 1024px and above | Full-width featured card, two cards side by side, then three horizontal cards. |

Task 1 uses Protest Guerrilla and Josefin Sans. Task 2 uses Teko and Lato. Fonts are loaded from Google Fonts.

These are front-end layout exercises. The displayed search and watch buttons do not implement movie search or video streaming.

## Final checks

- Run lint and the production build in each project.
- Compare Task 1 against its desktop wireframe.
- Check Task 2 at 360px, 719px, 720px, 1023px, 1024px, and a wider desktop viewport.
- Check image loading, text readability, keyboard focus, and horizontal overflow.
- Keep source acknowledgements immediately before borrowed or heavily adapted code, following the assessment brief. For AI-assisted code, include the tool name and actual prompt. The brief limits external content, including AI-generated code, to 25% of the submission.

## Submission

Commit and push both project folders to the official Web Dev II GitHub repository, then submit the repository URL through Ultra. The assessment brief is the authority for deadlines and submission requirements.
