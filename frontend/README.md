# ClaimIQ frontend

React and Vite serve the landing page at `/` and the document chat workspace at
`/chat`. The landing page uses TypeScript; the existing chat components use JSX.
Tailwind handles landing-page utilities, with dedicated CSS for the workspace.

## Run locally

Start the backend services as described in [the backend README](../backend/README.md),
then run these commands from `frontend/`:

```bash
npm ci
npm run dev
```

The API defaults to `http://localhost:8000`. To use another backend, set
`VITE_API_URL` in `.env.local` before starting Vite:

```dotenv
VITE_API_URL=http://localhost:8000
```

Only the API URL belongs in the browser environment. Provider credentials and
LiteLLM keys are configured in the backend.

## Upload and chat flow

Upload a PDF from the sidebar, then wait for indexing to finish. A successful
upload means the background job has been queued; questions unlock when the
document is ready. Indexing can be cancelled while it is queued or running.

Chats query the shared knowledge base with Gemini or OpenAI through LiteLLM.
Conversations with messages are saved to MongoDB and appear in the recent-chat
list. A new empty conversation stays local until its first message is sent.

## Checks and build

```bash
npm run lint
npm run build
```

The current ESLint configuration checks JavaScript and JSX. Vite builds both
JavaScript and TypeScript sources. Production hosting must serve `index.html`
for `/chat` so direct links to the workspace work.
