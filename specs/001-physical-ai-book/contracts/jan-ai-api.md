# API Contract: Jan.ai Local Chat Endpoint

This document specifies the API contract for the OpenAI-compatible endpoint provided by the local Jan.ai server, which the frontend chat widget will consume.

-   **Endpoint**: `POST http://127.0.0.1:1337/v1/chat/completions`
-   **Content-Type**: `application/json`

## Request Body

The request body MUST conform to the OpenAI Chat Completions API format.

```json
{
  "model": "llama-3.2-8b-instruct-q6_k",
  "messages": [
    {
      "role": "system",
      "content": "You are Asisstant, the ultimate expert teaching the Physical AI & Humanoid Robotics course..."
    },
    {
      "role": "user",
      "content": "Hello! Can you tell me about ROS 2?"
    }
  ],
  "stream": false
}
```

### Fields

-   `model` (string, required): The name of the model to use. Per the spec, this will be a model like `Llama-3.2-8B-Instruct-Q6_K`.
-   `messages` (array, required): An array of message objects representing the conversation history.
    -   `role` (string, required): The role of the author, one of "system", "user", or "assistant".
    -   `content` (string, required): The content of the message.
-   `stream` (boolean, optional): Should be set to `false` for simple request/response.

## Success Response (200 OK)

A successful response will return a JSON object containing the assistant's reply.

```json
{
  "id": "chatcmpl-xxxxxxxx",
  "object": "chat.completion",
  "created": 1677652288,
  "model": "llama-3.2-8b-instruct-q6_k",
  "choices": [
    {
      "index": 0,
      "message": {
        "role": "assistant",
        "content": "Of course! ROS 2 (Robot Operating System 2) is a flexible framework for writing robot software..."
      },
      "finish_reason": "stop"
    }
  ],
  "usage": {
    "prompt_tokens": 8,
    "completion_tokens": 9,
    "total_tokens": 17
  }
}
```

### Key Fields

-   `choices[0].message.content`: This field contains the text of the assistant's response.

## Error Response

If the local Jan.ai server is not running or another error occurs, the `fetch` call will fail, and the frontend must handle this gracefully by displaying an informative error message to the user.
