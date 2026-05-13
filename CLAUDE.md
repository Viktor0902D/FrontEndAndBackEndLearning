# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Running Projects

No build system or package manager at repo root. Each folder is a standalone static exercise.

- **Primary method:** Open `index.html` in a browser directly, or use VS Code Live Server extension.
- **Optional static server:** `live-server .` from inside a project folder (requires `npm install -g live-server`).
- No test commands exist. Do not introduce test tooling without user approval.

## Repo Structure

Personal front-end learning log. Each top-level folder is an independent mini-project or JS concept exercise — no shared code, no bundler, no module imports between folders.

| Folder | Type |
|---|---|
| `tribute page`, `Counter`, `review carousel`, `aside navbar`, `Our menu`, `Video`, `silicon valley remake` | Static UI exercises (HTML/CSS/JS) |
| `CSSVariables`, `DrumKit` | CSS/DOM practice |
| `Closures`, `ThisProblem`, `ThePrototypeChain`, `PracticesCallApplyAndBind`, `OperatorExercises` | JS concept drills (plain `.js` files) |
| `Asynchronous JS` | Callbacks, promises, async/await examples + mini-projects (`theGameEngine`, `validationLibrary`, `theKitshenSink`) |
| `ES6Modules` | Module syntax practice |
| `JavaScript30` | Wes Bos JS30 challenge exercises |
| `VanillaJSProjects` | Larger projects: `WeatherApp`, `InteractivePokedex` |
| `APIsPracticing` | API-focused JS files (fetch, REST patterns) — current active branch |
| `.sixth` | Misc/overflow exercises |

## Conventions

- **Entry point:** `index.html` per project folder. JS/CSS colocated in same folder.
- **Folder names have spaces** — quote paths when running shell commands.
- **Assets** live in `images/`, `sounds/`, or `videos/` subfolders within each project. Update relative references in HTML/CSS/JS when moving files.
- JS files are plain scripts (no ES modules) unless the project is explicitly in `ES6Modules/`.
- No linter config. No formatter config.
