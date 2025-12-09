# Research & Decisions

This document records the technical research and decisions made during the planning phase for the Physical AI Digital Book feature.

## 1. Docusaurus Theming and Customization

**Task**: Determine how to enforce a dark-only theme in Docusaurus 3 and apply a custom color palette.

### Decision

-   **Disable Light Mode**: In `docusaurus.config.js`, set `themeConfig.colorMode.disableSwitch = true` and `themeConfig.colorMode.defaultMode = 'dark'`. This forces dark mode and hides the theme switcher.
-   **Custom Colors**: Modify the root CSS variables in `src/css/custom.css`. This is Docusaurus's recommended method for overriding theme colors.

### Rationale

This approach uses Docusaurus's built-in configuration and styling system, making it robust and easy to maintain. It avoids the need for complex component "swizzling" or external stylesheets, keeping the implementation clean and idiomatic to the framework.

### Alternatives Considered

-   **Component Swizzling**: Ejecting and modifying core theme components. This is more complex and can make future Docusaurus upgrades difficult. It was rejected as overkill for simple color changes.
-   **Global CSS Overrides**: Using `!important` tags to force styles. This is a brittle approach that leads to unmaintainable CSS and was rejected as poor practice.

---

## 2. Floating Chat Widget Implementation

**Task**: Determine the best way to implement a floating chat widget within a Docusaurus (React) site.

### Decision

-   A custom React component will be created for the chat widget.
-   This component will be added to the Docusaurus root layout by using the `docusaurus-theme-classic/lib/theme/Layout` component as a wrapper. This ensures it appears on every page.
-   The component will use fixed positioning (`position: fixed`) and a high `z-index` to float above all other content in the bottom-right corner.

### Rationale

Creating a custom React component provides full control over the UI and logic, which is necessary for integrating with the Jan.ai API. Using the root `Layout` component for placement is the standard Docusaurus pattern for injecting global components.

### Alternatives Considered

-   **Third-party Chat Widget Library**: Integrating a pre-built library. This was rejected because the core requirement is to connect to a *local* custom API endpoint, and most third-party widgets are designed for specific backend services.
-   **iframe-based Widget**: Embedding the chat in an iframe. This adds unnecessary complexity and can create issues with styling and cross-origin communication.

---

## 3. Local Chat API Integration

**Task**: Determine how to connect the React chat widget to the local OpenAI-compatible API provided by Jan.ai.

### Decision

-   The standard browser `fetch` API will be used within the React component to make HTTP POST requests to `http://127.0.0.1:1337/v1/chat/completions`.
-   The request body will follow the OpenAI Chat Completions API format, sending a list of messages (system prompt, user input, and conversation history).
-   The component will manage the loading, error, and success states of the API call to provide feedback to the user (e.g., showing a loading spinner).

### Rationale

The `fetch` API is a modern, native browser standard, requiring no external dependencies. Since the API is specified as OpenAI-compatible, using its documented request/response structure is the most direct path to integration. Error handling is crucial, especially since the local server might not always be running.

### Alternatives Considered

-   **Using a library like `axios`**: This would add a small external dependency. While `axios` offers some conveniences (like automatic JSON parsing), it's not strictly necessary for this use case. The native `fetch` API is sufficient and aligns with keeping the project lightweight.
-   **Using a dedicated OpenAI client library**: These libraries are typically designed for Node.js environments or for more complex use cases involving multiple API calls. For a single client-side endpoint, it's unnecessary overhead.
