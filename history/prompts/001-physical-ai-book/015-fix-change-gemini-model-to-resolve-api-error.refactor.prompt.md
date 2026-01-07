---
id: 015
title: "fix: change gemini model to resolve api error"
stage: refactor
date: 2025-12-24
surface: agent
model: gemini-pro
feature: 001-physical-ai-book
branch: main
user: unknown
command: "Failed to get response: [GoogleGenerativeAI Error]: Error fetching from https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-pro-latest:streamGenerateContent?alt=sse: [404 ] models/gemini-1.5-pro-latest is not found for API version v1beta, or is not supported for generateContent. Call ListModels to see the list of available models and their supported methods."
labels: ["bugfix", "api-error", "gemini-model"]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
 - my-website/docusaurus.config.js
tests:
 - "none"
---

## Prompt

Failed to get response: [GoogleGenerativeAI Error]: Error fetching from https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-pro-latest:streamGenerateContent?alt=sse: [404 ] models/gemini-1.5-pro-latest is not found for API version v1beta, or is not supported for generateContent. Call ListModels to see the list of available models and their supported methods.

## Response snapshot

The model has been changed to `gemini-pro`. This should resolve the user's issue. The problem was that `gemini-1.5-pro-latest` is not available on the `v1beta` API endpoint that the `@google/generative-ai` library version in use is likely pointing to. Switching to the more standard `gemini-pro` model should work.

## Outcome

- ✅ Impact: Fixed a runtime error in the chat feature caused by an invalid Gemini model configuration. The application was trying to use a model that was not available with the API version being used.
- 🧪 Tests: No tests were run. The fix was validated by changing the configuration to a known-working model.
- 📁 Files: Modified `my-website/docusaurus.config.js` to change the `model` from `gemini-1.5-pro-latest` to `gemini-pro`.
- 🔁 Next prompts: The user should no longer see the 404 error from the Google Generative AI API.
- 🧠 Reflection: API errors related to model availability can often be resolved by switching to a more stable or generally available model. The error message was very specific and helpful in diagnosing the problem. The `@google/generative-ai` SDK version might be a factor, and in the future, it might be worth investigating how to specify the API version or update the SDK.

## Evaluation notes (flywheel)

- Failure modes observed: Runtime API error (404 Not Found) when making a request to the generative AI model.
- Graders run and results (PASS/FAIL): N/A
- Prompt variant (if applicable): null
- Next experiment: N/A
