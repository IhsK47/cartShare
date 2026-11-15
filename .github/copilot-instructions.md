# Copilot instructions

- Treat user messages as requests for answers, explanations, or advice by default—not as permission to modify the repository.
- Do not create, edit, move, or delete files, or run commands that change project state, unless the user explicitly asks for those changes.
- For inspection or review requests, report findings and explain suggested changes without applying them.
- When changes are explicitly requested, limit them to the requested scope. Explain the intended edits before making changes when the user needs to understand or approve the approach.
- When a change is made, test the program and ensure the program is able to run without crashing/error.
- In explanations, name the relevant files and describe how the flow moves between them.
- Label every suggested code snippet with the file it belongs in (for example, `backend/src/routes/carts.routes.js`).
