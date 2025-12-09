---
id: 001
title: Create Digital Book Specification
stage: spec
date: 2025-12-09
surface: agent
model: gemini
feature: 001-physical-ai-book
branch: 001-physical-ai-book
user: user
command: /sp.specify
labels: [spec, docusaurus, chatbot]
links:
  spec: specs/001-physical-ai-book/spec.md
  ticket: null
  adr: null
  pr: null
files:
 - specs/001-physical-ai-book/spec.md
 - specs/001-physical-ai-book/checklists/requirements.md
tests:
 - "None"
---

## Prompt

it is too long , i cannot write all here , thats why i made a file named prompt.txt and put all specifications there .

```text
1. Project Identity

Name: Physical AI & Humanoid Robotics – From Simulation to Embodied Intelligence
Type: Interactive digital book + 100% local AI chatbot
Hosting: Static site (GitHub Pages / local)
Framework: Docusaurus 3 (classic template)
Primary Toolchain: Node.js + npm + Git + Jan.ai (local only)
Zero cloud APIs allowed after launch (Gemini CLI permitted ONLY during one-time content generation)

exact UI & Visual Identity
Default theme: Dark mode only (light mode disabled)
Primary color: Electric Blue #0062FF
Secondary color: Cyber Green #00F2A3
Background: GitHub Dark #0d1117
Code background: #161b22
Font: Inter (default Docusaurus)
Logo: Minimalist humanoid silhouette (white on blue)
Navbar: Fixed, contains only “Physical AI Book” + GitHub link + “Ask AI” button
Sidebar: Collapsible, exactly 13 chapters + Intro
Every page has floating chat button (bottom-right)

Chatbot Specification
Name: Asisstant
Engine: Jan.ai (desktop app) – 100% local, 0% cloud
Model: Llama-3.2-8B-Instruct-Q6_K or Qwen2.5-14B-Instruct-Q5_K_M
RAG: Enabled with all files from /docs folder
API: OpenAI-compatible server on http://127.0.0.1:1337
System prompt (exact):

text:You are Asisstant, the ultimate expert teaching the Physical AI & Humanoid Robotics course.
You have perfect knowledge of ROS 2, Isaac Sim, Jetson kits, and offline VLA.
Never hallucinate commands or package names.
Always reference the exact chapter when possible.
If unsure, say “Check the official ROS 2 docs” with link.

Test question (Constitution Rule 6):
“Explain the difference between ROS 2 services and actions”
→ Must answer correctly < 3 seconds before any new chapter is added

Content Specification (13 Chapters – Exact Titles & Scope)
text01-why-physical-ai.md           → Embodied intelligence, why humanoids win
02-humanoid-landscape.md        → Unitree G1, Figure 02, Tesla Optimus, Atlas (2025 state)
03-ros2-crash-course.md         → Nodes, Topics, Services, Actions (table + diagram)
04-ros2-packages.md             → colcon build, Python nodes, launch files
05-urdf-mastery.md              → Full humanoid URDF from scratch
06-gazebo-ignition.md           → Worlds, plugins, sensor simulation
07-unity-digital-twin.md        → ROS-TCP-Connector lightweight alternative
08-isaac-sim.md                 → Omniverse, USD assets, synthetic data
09-isaac-ros.md                 → VSLAM, Isaac Perceptor, hardware acceleration
10-nav2-bipedal.md              → SMACC, locomotion pipelines
11-vla-models.md                → RT-2, OpenVLA, how they work
12-offline-voice-to-action.md   → Whisper tiny + local LLM → ROS actions
13-capstone-jetson.md           → Full $700 kit build + final project


Every chapter must contain:

At least 3 code blocks
At least 1 diagram/table

All file names and paths are hardcoded above → no typos possible
Chatbot is local → no quota, no downtime
RAG auto-updates → chatbot never outdated
Constitution + this spec = two immutable sources of truth
```

## Response snapshot

Specification created successfully for branch `001-physical-ai-book`.

- **Spec File**: `specs/001-physical-ai-book/spec.md`
- **Validation**: `specs/001-physical-ai-book/checklists/requirements.md` (All checks passed)

The specification is complete and has passed all quality checks. It is now ready for the planning phase. You can proceed with `/sp.plan`.

## Outcome

- ✅ Impact: High. Generated a comprehensive and validated feature specification from a detailed but unstructured user prompt.
- 🧪 Tests: N/A for spec stage.
- 📁 Files: 2 files created.
- 🔁 Next prompts: /sp.plan
- 🧠 Reflection: The initial script for creating the feature failed due to PowerShell argument parsing. Manually creating the directories and files was a successful workaround. The user's prompt was extremely detailed, which made spec generation straightforward.

## Evaluation notes (flywheel)

- Failure modes observed: PowerShell script failure with multi-line string arguments.
- Graders run and results (PASS/FAIL): Manual validation against checklist: PASS.
- Prompt variant (if applicable): N/A
- Next experiment (smallest change to try): Investigate a more robust way to pass multi-line strings to PowerShell scripts, perhaps by writing to a temp file first.
