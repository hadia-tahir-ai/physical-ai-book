---
id: 001
title: Initialize Constitution with User Principles
stage: constitution
date: 2025-12-09
surface: agent
model: gemini-1.5-pro
feature: none
branch: main
user: user
command: sp.constitution , # Physical AI Book – Constitution (December 2025),1. NEVER delete or rename files without a git commit first 2. All book content lives ONLY in the /content folder as .md files 3. One chapter = exactly one markdown file (01-xxx.md, 02-xxx.md …) 4. Chatbot is 100% local → Jan.ai + RAG only (no Gemini, no cloud APIs) 5. Dark mode + blue/green palette is the law 6. Before add any new chapter, test the chatbot with this question: “Explain the difference between ROS 2 services and actions” → If the answer is wrong or slow, fix it first 7. Git is mandatory from day 1 → every change = one commit with clear message 8. If feel confused → stop and read this constitution again follow these 8 rules .
labels: [constitution, principles, setup]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
  - .specify/memory/constitution.md
tests:
null
---

## Prompt

# Physical AI Book – Constitution (December 2025),1. NEVER delete or rename files without a git commit first 2. All book content lives ONLY in the /content folder as .md files 3. One chapter = exactly one markdown file (01-xxx.md, 02-xxx.md …) 4. Chatbot is 100% local → Jan.ai + RAG only (no Gemini, no cloud APIs) 5. Dark mode + blue/green palette is the law 6. Before add any new chapter, test the chatbot with this question: “Explain the difference between ROS 2 services and actions”  → If the answer is wrong or slow, fix it first 7. Git is mandatory from day 1 → every change = one commit with clear message 8. If feel confused → stop and read this constitution again   follow these 8 rules .

## Response snapshot

The constitution has been initialized to version 1.0.0 with your specified principles. This is considered a major version bump as it's the first official version with defined core principles.

**Files flagged for manual follow-up:**
- `.specify/templates/plan-template.md`: Review needed for alignment with new principles.
- `.specify/templates/spec-template.md`: Review needed for alignment with new principles.
- `.specify/templates/tasks-template.md`: Review needed for alignment with new principles.
- `.specify/templates/commands/*.md`: Review needed for outdated references.
- `README.md`: Review needed for principle references.

**Suggested commit message:**
`docs: initialize constitution to v1.0.0 with core principles`

## Outcome

- ✅ Impact: Initialized the project constitution with user-defined principles, setting foundational guidelines for development.
- 🧪 Tests: No automated tests were applicable or run for this task.
- 📁 Files: Modified 1 file: .specify/memory/constitution.md
- 🔁 Next prompts: Review and update related templates (.specify/templates/*) and project documentation (README.md) to align with the new constitution.
- 🧠 Reflection: The user provided the constitution content interactively, requiring careful parsing and mapping to the template structure. The tool should be flexible enough to accept direct content or guided input for placeholder filling.

## Evaluation notes (flywheel)

- Failure modes observed: Initial attempt to output constitution content led to truncation and user cancellation due to incorrect tool usage for large output.
- Graders run and results (PASS/FAIL): N/A
- Prompt variant (if applicable): N/A
- Next experiment (smallest change to try): Improve prompt parsing to differentiate between constitution content and command arguments.
