# Feature Specification: Physical AI & Humanoid Robotics Digital Book

**Feature Branch**: `001-physical-ai-book`  
**Created**: 2025-12-09  
**Status**: Draft  
**Input**: User description: "1. Project Identity..." (from prompt.txt)

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Read the Digital Book (Priority: P1)

A user navigates to the digital book's URL. They can browse through the 13 chapters using the sidebar, read the content, and view the code blocks and diagrams within each chapter. The visual experience is consistent with the specified dark mode theme and color scheme.

**Why this priority**: The core value of the project is the book itself. Without the ability to read the content, no other feature matters.

**Independent Test**: Can be tested by deploying the Docusaurus static site with the chapter content and verifying that all pages are accessible, readable, and visually correct.

**Acceptance Scenarios**:

1.  **Given** a user has the URL, **When** they open it, **Then** they see the homepage with the "Physical AI Book" title, a dark theme, and electric blue accents.
2.  **Given** a user is on any page, **When** they use the sidebar, **Then** they can navigate to any of the 13 chapters or the Introduction.
3.  **Given** a user is viewing a chapter, **When** they scroll, **Then** they can see formatted code blocks and at least one diagram or table.

---

### User Story 2 - Interact with the Local AI Chatbot (Priority: P2)

While reading, a user has a question. They click the floating "Ask AI" button, which connects to their local Jan.ai instance. They ask a question about the book's content and receive a relevant, context-aware answer based on the book's RAG-enabled documents.

**Why this priority**: The integrated AI chatbot is the key interactive element that differentiates this from a standard digital book.

**Independent Test**: Can be tested by running the Docusaurus site and a local Jan.ai server. The test is successful if the "Ask AI" button opens a chat interface that can answer questions based on the `/docs` content.

**Acceptance Scenarios**:

1.  **Given** a user is on any page, **When** they click the "Ask AI" button, **Then** a chat interface appears.
2.  **Given** the user has Jan.ai running locally, **When** they ask the chatbot "Explain the difference between ROS 2 services and actions", **Then** they receive a correct answer in under 3 seconds.
3.  **Given** the user asks a question related to a specific chapter, **When** the chatbot answers, **Then** the answer references the relevant chapter.

---

### Edge Cases

-   What happens if the user does not have Jan.ai running when they click the "Ask AI" button? The interface should display a clear error message instructing them to start their local server.
-   How does the system handle a chapter file that is missing or empty? Docusaurus should handle this by either showing an error or an empty page, but the build process should validate that all 13 chapter files exist.
-   What if a code block contains a syntax error? The markdown renderer should still display the code as-is, without breaking the page layout.

## Requirements *(mandatory)*

### Functional Requirements

-   **FR-001**: System MUST be a static website generated using Docusaurus 3 (classic template).
-   **FR-002**: Website UI MUST be exclusively dark mode; light mode must be disabled.
-   **FR-003**: The visual theme MUST use the exact color palette: Electric Blue (`#0062FF`) as primary, Cyber Green (`#00F2A3`) as secondary, GitHub Dark (`#0d1117`) for background, and `#161b22` for code blocks.
-   **FR-004**: The navbar MUST be fixed and contain only the title "Physical AI Book", a link to a GitHub repository, and an "Ask AI" button.
-   **FR-005**: A floating chat button MUST be present on the bottom-right of every page.
-   **FR-006**: The chat button MUST trigger an interface to connect to an OpenAI-compatible API server at `http://127.0.0.1:1337`.
-   **FR-007**: The book MUST be structured into exactly 13 chapters plus an introduction, with filenames and titles as specified in the prompt.
-   **FR-008**: Each of the 13 chapter markdown files MUST contain a minimum of three code blocks and one diagram or table.
-   **FR-009**: The AI chatbot, named "Asisstant", MUST use the exact system prompt provided in the user's description.
-   **FR-010**: All content from the `/docs` folder MUST be used to enable Retrieval-Augmented Generation (RAG) for the chatbot.

### Key Entities

-   **Digital Book**: The primary entity, a collection of static pages generated from markdown files. It has a specific visual identity (theme, colors, fonts, logo).
-   **Chapter**: A markdown file within the `/docs` directory. Each chapter has a title, scope, code blocks, and diagrams/tables.
-   **AI Chatbot ("Asisstant")**: A client-side feature that connects to a local AI model via an API. It is defined by its engine (Jan.ai), model (Llama/Qwen), system prompt, and RAG data source.

## Success Criteria *(mandatory)*

### Measurable Outcomes

-   **SC-001**: The Docusaurus project MUST build successfully into a set of static files that can be hosted on GitHub Pages or served locally.
-   **SC-002**: A visual audit of the deployed site confirms 100% compliance with the specified dark-mode-only theme, color palette, logo, and navbar layout.
-   **SC-003**: The chatbot MUST pass the constitution test: it must answer "Explain the difference between ROS 2 services and actions" correctly within 3 seconds.
-   **SC-004**: All 13 chapter markdown files, with their specified names, MUST be present in the final build and accessible via the sidebar navigation.
-   **SC-005**: No cloud-based APIs are called by the application after the initial content generation phase is complete. All chatbot functionality relies exclusively on the local Jan.ai server.
