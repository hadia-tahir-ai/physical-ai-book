---

description: "Task list for Physical AI & Humanoid Robotics Digital Book feature implementation"
---

# Tasks: Physical AI & Humanoid Robotics Digital Book

**Input**: Design documents from `/specs/001-physical-ai-book/`
**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md, quickstart.md

**Tests**: Test tasks will be included for verification purposes.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Path Conventions

- **Single project**: `src/`, `tests/` at repository root
- **Web app**: `backend/src/`, `frontend/src/`
- **Mobile**: `api/src/`, `ios/src/` or `android/src/`
- Paths shown below assume single project - adjust based on plan.md structure

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and basic structure

- [x] T001 Create Docusaurus 3 project using `npx create-docusaurus@latest my-website classic` at repository root.
- [x] T002 Install project dependencies by running `npm install` at repository root.
- [x] T003 [P] Create custom CSS file at `src/css/custom.css`.
- [x] T005 Configure `docusaurus.config.js` to enforce dark mode by setting `themeConfig.colorMode.disableSwitch = true` and `themeConfig.colorMode.defaultMode = 'dark'` in `docusaurus.config.js`.

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure that MUST be complete before ANY user story can be implemented

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [x] T007 Apply custom color palette (Electric Blue, Cyber Green, GitHub Dark, code block dark) in `src/css/custom.css`.

**Checkpoint**: Foundation ready - user story implementation can now begin in parallel

---

## Phase 3: User Story 1 - Read the Digital Book (Priority: P1) 🎯 MVP

**Goal**: User can browse through the 13 chapters using the sidebar, read the content, and view the code blocks and diagrams within each chapter. The visual experience is consistent with the specified dark mode theme and color scheme.

**Independent Test**: Can be tested by deploying the Docusaurus static site with the chapter content and verifying that all pages are accessible, readable, and visually correct.

### Implementation for User Story 1

- [x] T008 [US1] Create the `docs/` directory at repository root.
- [x] T009 [US1] Create 13 chapter markdown files (e.g., `01-why-physical-ai.md`) and an introduction markdown file in `docs/`.
- [x] T010 [US1] Ensure each chapter markdown file in `docs/` contains a minimum of three code blocks and one diagram or table.
- [x] T011 [US1] Visually audit the deployed site to confirm 100% compliance with the specified dark-mode-only theme, color palette, logo, and navbar layout.
- [x] T012 [US1] Verify all 13 chapter markdown files are present in the final build and accessible via the sidebar navigation.

**Checkpoint**: At this point, User Story 1 should be fully functional and testable independently

---

## Phase N: Polish & Cross-Cutting Concerns

**Purpose**: Improvements that affect multiple user stories

- [ ] T021 Run `npm run build` and verify successful static site generation into the `build` directory.

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion - BLOCKS all user stories
- **User Stories (Phase 3+)**: All depend on Foundational phase completion
- **Polish (Final Phase)**: Depends on all desired user stories being complete

### User Story Dependencies

- **User Story 1 (P1)**: Can start after Foundational (Phase 2) - No dependencies on other stories

### Within Each User Story

- Tests (if included) MUST be written and FAIL before implementation
- Models before services
- Services before endpoints
- Core implementation before integration
- Story complete before moving to next priority

### Parallel Opportunities

- T003 (within Setup) can run in parallel.
- Once Foundational phase completes, User Story 1 tasks can be initiated.

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup
2. Complete Phase 2: Foundational (CRITICAL - blocks all stories)
3. Complete Phase 3: User Story 1
4. **STOP and VALIDATE**: Test User Story 1 independently
5. Deploy/demo if ready

### Incremental Delivery

1. Complete Setup + Foundational → Foundation ready
2. Add User Story 1 → Test independently → Deploy/Demo (MVP!)

### Parallel Team Strategy

With multiple developers:

1. Team completes Setup + Foundational together
2. Once Foundational is done:
   - Developer A: User Story 1
3. Stories complete and integrate independently

---

## Notes

- [P] tasks = different files, no dependencies
- [Story] label maps task to specific user story for traceability
- Each user story should be independently completable and testable
- Verify tests fail before implementing
- Commit after each task or logical group
- Stop at any checkpoint to validate story independently
- Avoid: vague tasks, same file conflicts, cross-story dependencies that break independence