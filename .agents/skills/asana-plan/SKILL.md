---
name: asana-plan
description: Create and manage Asana tasks via MCP, following a structured process for backlog, bugs, and design tasks. Use when automating Asana task creation from Figma links or screenshots.
---


# IMPORTANT: ALWAYS create tasks in the Asana project "AI PROJEKT" (project ID: 1213097315704457). Do NOT create tasks in "Design System" or any other project. This is a hard rule for all task creation.

# Asana-plan Skill Instructions

This skill automates the creation of tasks in the Asana project "AI PROJEKT" (project ID: 1213097315704457) using MCP. Use this skill when a user requests a new Asana task and provides a Figma link or screenshots.

**Important:** Due to strict HTML/XML parsing in the Asana API, use the plain text `notes` field for the task description instead of `html_notes`. Structure the content as described below, but do not use HTML tags.

## Purpose
Create a fully described Asana task in the "AI PROJEKT" project, using the provided design context. Only return the task ID and direct link in the chat.

## Hard stop rule
- Only attempt to fetch Figma design context once. If it fails, do NOT create an Asana task. Instead, ask the user to try again later or provide screenshots.

## Step-by-step process

1. **Check for Figma link or screenshots (optional)**
   - If missing, proceed to create the task with the available information.

2. **Extract key information**
   - Identify the component, variants/states, text, spacing, typography, colors, and any design rules (e.g., padding, radius, tokens).

3. **Classify the task**
   - Choose one: component, bug, change, or tech debt.

4. **Select or create section in Asana**
   - Use "Components" for components, "Bugs" for bugs, or create a new section (1–3 words) if needed.

5. **Create the Asana task**
   - Project: "AI PROJEKT" (ID: 1213097315704457)
   - Generate a unique task ID
   - Title: short unique ID + human-readable name (e.g., ID-Q9K76 Checkbox)
   - Status: "Mangler"


6. **Update the task with a full description**
    - Use the following plain text template in the `notes` field (do not use HTML tags):

Problem: (short description)
Scope:
   - Includes: ...
   - Excludes: ...
Acceptance criteria:
   - ...
Definition of Done:
   - ...
Decision note: (short)
Links:
   - Figma: FIGMA_URL
   - Docs: docs/components/COMPONENT.md
   - ADR: docs/decisions/ADR-xxxx-title.md (if relevant)
   - PR template: .github/pull_request_template.md

7. **Create detailed subtasks**
   - Always create subtasks for every task, with enough detail so the developer knows exactly how to build it in the project. Example subtasks:
     - Docs: Write or update documentation for the component
     - Decision (ADR): Document architectural decisions if needed
     - Implementation: Step-by-step instructions for building the component, including states, accessibility, and integration
     - Review: Code review and QA steps

8. **Return only**
   - The Asana task ID
   - The direct link to the task
   - Then stop
