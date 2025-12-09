<!--
Sync Impact Report:
Version change: None -> 1.0.0
List of modified principles:
- Atomic Git Operations
- Content Location and Format
- Chapter Structure
- Chatbot Architecture
- Frontend Color Scheme
- Chatbot Pre-Chapter Validation
- Mandatory Git Workflow
- Self-Correction and Constitution Adherence
Added sections: All (initial content)
Removed sections: None
Templates requiring updates:
- .specify/templates/plan-template.md (⚠ pending review)
- .specify/templates/spec-template.md (⚠ pending review)
- .specify/templates/tasks-template.md (⚠ pending review)
- .specify/templates/commands/*.md (⚠ pending review)
- README.md (⚠ pending review)
Follow-up TODOs:
- TODO(RATIFICATION_DATE): Original adoption date needs to be determined.
- TODO(AMENDMENT_APPROVAL_PROCESS): The approval process for amendments needs to be defined.
- TODO(AMENDMENT_NOTICE_PERIOD): The notice period for amendments needs to be defined.
- TODO(COMPLIANCE_REVIEW_FREQUENCY): The frequency of compliance reviews needs to be defined.
-->
# Physical AI Book – Constitution (December 2025)

## Preamble

This Constitution outlines the core principles, values, and guidelines that govern the development, maintenance, and evolution of the Physical AI Book project. It serves as a foundational document for all contributors and stakeholders, ensuring alignment and consistency in decision-making.

## Principles

### 1. Atomic Git Operations
**Non-negotiable Rule:** Files MUST NOT be deleted or renamed without a preceding Git commit.
**Rationale:** To ensure a clear, traceable history of file management and prevent accidental data loss.

### 2. Content Location and Format
**Non-negotiable Rule:** All book content MUST reside exclusively within the `/content` folder and be formatted as Markdown (`.md`) files.
**Rationale:** To maintain a consistent and organized project structure, facilitating content management and automated processing.

### 3. Chapter Structure
**Non-negotiable Rule:** Each chapter MUST correspond to exactly one Markdown file, named sequentially (e.g., `01-chapter-title.md`, `02-another-chapter.md`).
**Rationale:** To enforce a clear and predictable chapter organization, aiding navigation and version control.

### 4. Chatbot Architecture
**Non-negotiable Rule:** The chatbot implementation MUST be 100% local, utilizing Jan.ai and Retrieval-Augmented Generation (RAG) exclusively. No external cloud APIs (e.g., Gemini) are permitted for chatbot functionality.
**Rationale:** To ensure data privacy, minimize external dependencies, and control operational costs, while leveraging local processing capabilities.

### 5. Frontend Color Scheme
**Non-negotiable Rule:** The frontend's color scheme MUST adhere strictly to dark mode with a blue/green palette.
**Rationale:** To ensure visual consistency and enhance user experience, aligning with project branding and aesthetic preferences.

### 6. Chatbot Pre-Chapter Validation
**Non-negotiable Rule:** Prior to adding any new chapter, the chatbot MUST be tested with the question: “Explain the difference between ROS 2 services and actions.” If the chatbot's response is incorrect or slow, the issue MUST be resolved before proceeding with chapter integration.
**Rationale:** To ensure the chatbot's accuracy and performance remain high, providing a reliable and responsive learning tool for users.

### 7. Mandatory Git Workflow
**Non-negotiable Rule:** Git is mandatory from day one of development. Every change, no matter how small, MUST be accompanied by a single, clearly messaged commit.
**Rationale:** To maintain a granular, understandable, and revertible project history, fostering collaboration and simplifying debugging.

### 8. Self-Correction and Constitution Adherence
**Non-negotiable Rule:** In instances of confusion or uncertainty regarding project direction or implementation, contributors MUST pause their work and re-read this Constitution.
**Rationale:** To reinforce core principles, ensure alignment with project goals, and promote independent problem-solving rooted in established guidelines.

## Governance

### Amendment Procedure
This Constitution may be amended by a TODO(AMENDMENT_APPROVAL_PROCESS): The approval process for amendments needs to be defined. of the core project team. Proposed amendments must be circulated to all stakeholders at least TODO(AMENDMENT_NOTICE_PERIOD): The notice period for amendments needs to be defined. prior to a vote.

### Versioning
The Constitution follows Semantic Versioning.
- **MAJOR** version increments indicate backward-incompatible changes to core principles or governance.
- **MINOR** version increments indicate additions of new principles, significant expansions of guidance, or changes to non-core governance.
- **PATCH** version increments indicate clarifications, wording corrections, typo fixes, or other non-semantic refinements.

### Compliance
Adherence to this Constitution is mandatory for all contributions. Regular reviews will be conducted TODO(COMPLIANCE_REVIEW_FREQUENCY): The frequency of compliance reviews needs to be defined. to ensure ongoing compliance and relevance.

## Metadata
- **Ratification Date:** TODO(RATIFICATION_DATE): Original adoption date needs to be determined.
- **Last Amended Date:** 2025-12-09
- **Constitution Version:** 1.0.0