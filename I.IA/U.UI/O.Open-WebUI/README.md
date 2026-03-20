
## 🚀 **The Easiest: Open WebUI with Ollama**

Since you already have Ollama running with Mistral, here's the complete setup for Open WebUI:

```bash
# 1. Install Python if not already
brew install python

# 2. Install Open WebUI
pip install open-webui

# 3. Make sure Ollama is running
ollama serve

# 4. In another terminal, start Open WebUI
open-webui serve
```

Then open your browser to `http://localhost:8080`

## 📦 **Alternative: Docker-based UI (if you want Podman)**

Since you have Podman working, you could run Open WebUI in a container:

```bash
# Using Podman (since Docker isn't available)
podman run -d -p 3000:8080 \
  -v open-webui:/app/backend/data \
  --name open-webui \
  ghcr.io/open-webui/open-webui:main
```

## 🔧 **Configuration for Your Setup**

### Connect Open WebUI to your existing Ollama:
```bash
# When running Open WebUI, specify your Ollama host
OPENWEBUI_OLLAMA_BASE_URL=http://127.0.0.1:11434 open-webui serve
```

### Or set environment variable:
```bash
export OPENWEBUI_OLLAMA_BASE_URL=http://127.0.0.1:11434
open-webui serve
```

## 🏁 Running

```bash
open-webui serve
```
<details>

```lua
Loading WEBUI_SECRET_KEY from file, not provided as an environment variable.
Generating a new secret key and saving it to /Users/boreal/.webui_secret_key
Loading WEBUI_SECRET_KEY from /Users/boreal/.webui_secret_key
INFO  [alembic.runtime.migration] Context impl SQLiteImpl.
INFO  [alembic.runtime.migration] Will assume non-transactional DDL.
INFO  [alembic.runtime.migration] Running upgrade  -> 7e5b5dc7342b, init
INFO  [alembic.runtime.migration] Running upgrade 7e5b5dc7342b -> ca81bd47c050, Add config table
INFO  [alembic.runtime.migration] Running upgrade ca81bd47c050 -> c0fbf31ca0db, Update file table
INFO  [alembic.runtime.migration] Running upgrade c0fbf31ca0db -> 6a39f3d8e55c, Add knowledge table
Creating knowledge table
Migrating data from document table to knowledge table
INFO  [alembic.runtime.migration] Running upgrade 6a39f3d8e55c -> 242a2047eae0, Update chat table
Converting 'chat' column to JSON
Renaming 'chat' column to 'old_chat'
Adding new 'chat' column of type JSON
Dropping 'old_chat' column
INFO  [alembic.runtime.migration] Running upgrade 242a2047eae0 -> 1af9b942657b, Migrate tags
INFO  [alembic.runtime.migration] Running upgrade 1af9b942657b -> 3ab32c4b8f59, Update tags
Primary Key: {'name': None, 'constrained_columns': []}
Unique Constraints: [{'name': 'uq_id_user_id', 'column_names': ['id', 'user_id']}]
Indexes: [{'name': 'tag_id', 'column_names': ['id'], 'unique': 1, 'dialect_options': {}}]
Creating new primary key with 'id' and 'user_id'.
Dropping unique constraint: uq_id_user_id
Dropping unique index: tag_id
INFO  [alembic.runtime.migration] Running upgrade 3ab32c4b8f59 -> c69f45358db4, Add folder table
INFO  [alembic.runtime.migration] Running upgrade c69f45358db4 -> c29facfe716b, Update file table path
INFO  [alembic.runtime.migration] Running upgrade c29facfe716b -> af906e964978, Add feedback table
INFO  [alembic.runtime.migration] Running upgrade af906e964978 -> 4ace53fd72c8, Update folder table and change DateTime to BigInteger for timestamp fields
INFO  [alembic.runtime.migration] Running upgrade 4ace53fd72c8 -> 922e7a387820, Add group table
INFO  [alembic.runtime.migration] Running upgrade 922e7a387820 -> 57c599a3cb57, Add channel table
INFO  [alembic.runtime.migration] Running upgrade 57c599a3cb57 -> 7826ab40b532, Update file table
INFO  [alembic.runtime.migration] Running upgrade 7826ab40b532 -> 3781e22d8b01, Update message & channel tables
INFO  [alembic.runtime.migration] Running upgrade 3781e22d8b01 -> 9f0c9cd09105, Add note table
INFO  [alembic.runtime.migration] Running upgrade 9f0c9cd09105 -> d31026856c01, Update folder table data
INFO  [alembic.runtime.migration] Running upgrade d31026856c01 -> 018012973d35, Add indexes
INFO  [alembic.runtime.migration] Running upgrade 018012973d35 -> 3af16a1c9fb6, update user table
INFO  [alembic.runtime.migration] Running upgrade 3af16a1c9fb6 -> 38d63c18f30f, Add oauth_session table
INFO  [alembic.runtime.migration] Running upgrade 38d63c18f30f -> a5c220713937, Add reply_to_id column to message
INFO  [alembic.runtime.migration] Running upgrade a5c220713937 -> 37f288994c47, add_group_member_table
[]
INFO  [alembic.runtime.migration] Running upgrade 37f288994c47 -> 2f1211949ecc, Update messages and channel member table
INFO  [alembic.runtime.migration] Running upgrade 2f1211949ecc -> b10670c03dd5, Update user table
INFO  [alembic.runtime.migration] Running upgrade b10670c03dd5 -> 90ef40d4714e, Update channel and channel members table
INFO  [alembic.runtime.migration] Running upgrade 90ef40d4714e -> 3e0e00844bb0, Add knowledge_file table
INFO  [alembic.runtime.migration] Running upgrade 3e0e00844bb0 -> 6283dc0e4d8d, Add channel file table
INFO  [alembic.runtime.migration] Running upgrade 6283dc0e4d8d -> 81cc2ce44d79, Update channel file and knowledge table
INFO  [alembic.runtime.migration] Running upgrade 81cc2ce44d79 -> c440947495f3, Add chat_file table
INFO  [alembic.runtime.migration] Running upgrade c440947495f3 -> 374d2f66af06, Add prompt history table
INFO  [alembic.runtime.migration] Running upgrade 374d2f66af06 -> 8452d01d26d7, Add chat_message table
INFO  [alembic.runtime.migration] Running upgrade 8452d01d26d7 -> f1e2d3c4b5a6, Add access_grant table
INFO  [alembic.runtime.migration] Running upgrade f1e2d3c4b5a6 -> a1b2c3d4e5f6, Add skill table
INFO  [alembic.runtime.migration] Running upgrade a1b2c3d4e5f6 -> b2c3d4e5f6a7, add scim column to user table
WARNI [open_webui.env] 

WARNING: CORS_ALLOW_ORIGIN IS SET TO '*' - NOT RECOMMENDED FOR PRODUCTION DEPLOYMENTS.

WARNI [langchain_community.utils.user_agent] USER_AGENT environment variable not set, consider setting it to identify your requests.

 ██████╗ ██████╗ ███████╗███╗   ██╗    ██╗    ██╗███████╗██████╗ ██╗   ██╗██╗
██╔═══██╗██╔══██╗██╔════╝████╗  ██║    ██║    ██║██╔════╝██╔══██╗██║   ██║██║
██║   ██║██████╔╝█████╗  ██╔██╗ ██║    ██║ █╗ ██║█████╗  ██████╔╝██║   ██║██║
██║   ██║██╔═══╝ ██╔══╝  ██║╚██╗██║    ██║███╗██║██╔══╝  ██╔══██╗██║   ██║██║
╚██████╔╝██║     ███████╗██║ ╚████║    ╚███╔███╔╝███████╗██████╔╝╚██████╔╝██║
 ╚═════╝ ╚═╝     ╚══════╝╚═╝  ╚═══╝     ╚══╝╚══╝ ╚══════╝╚═════╝  ╚═════╝ ╚═╝


v0.8.8 - building the best AI user interface.

https://github.com/open-webui/open-webui

Downloading (incomplete total...):   0%|                                                                            | 0.00/190 [00:00<?, ?B/s]Warning: You are sending unauthenticated requests to the HF Hub. Please set a HF_TOKEN to enable higher rate limits and faster downloads.it/s]
WARNI [huggingface_hub.utils._http] Warning: You are sending unauthenticated requests to the HF Hub. Please set a HF_TOKEN to enable higher rate limits and faster downloads.
Fetching 30 files: 100%|██████████████████████████████████████████████████████████████████████████████████████| 30/30 [00:10<00:00,  2.83it/s]
Download complete: : 931MB [00:10, 87.5MB/s]             ██████████████████████████████                       | 22/30 [00:10<00:02,  2.97it/s]
Loading weights: 100%|███████████████████████████████████████████| 103/103 [00:00<00:00, 5311.14it/s, Materializing param=pooler.dense.weight]
BertModel LOAD REPORT from: /Users/boreal/.cache/huggingface/hub/models--sentence-transformers--all-MiniLM-L6-v2/snapshots/c9745ed1d9f207416be6d2e6f8de32d1f16199bf
Key                     | Status     |  | 
------------------------+------------+--+-
embeddings.position_ids | UNEXPECTED |  | 

Notes:
- UNEXPECTED	:can be ignored when loading from different task/architecture; not ok if you expect identical arch.
INFO:     Started server process [87308]
INFO:     Waiting for application startup.
2026-03-19 16:21:40.382 | INFO     | open_webui.utils.logger:start_logger:198 - GLOBAL_LOG_LEVEL: INFO
2026-03-19 16:21:40.382 | INFO     | open_webui.main:lifespan:627 - Installing external dependencies of functions and tools...
2026-03-19 16:21:40.389 | INFO     | open_webui.utils.plugin:install_frontmatter_requirements:434 - No requirements found in frontmatter.
```

</details>

<image src=images/open-WebUI.png width='80%' height='80%' > </image>


## 🧮 Web Search Enabled

Persistent `web search enabled` by default has been a highly requested feature in Open WebUI , and there are actually several ways to achieve this depending on how "always-on" you want it to be.

Here is the breakdown of the best methods, from the simplest to the most advanced:

| Method | Complexity | Persistence | Best For |
| :--- | :--- | :--- | :--- |
| **Chat Toggle (Manual)** | Very Easy | Single Chat | Testing or occasional use. |
| **Model Default Settings** | Easy | Per Model | Making web search the default for a specific AI model. |
| **URL Bookmarklet** | Easy | Per Session (via click) | Quick access from your browser bookmarks. |
| **Custom Filter (Advanced)** | Hard | System-Wide | Enabling it automatically for all users and chats without clicking. |

### 1. The Manual Way (Standard Method)
This is the default way to enable web search. In any chat, simply click the **`+` button** next to the message input and toggle the **"Web Search" switch** on . However, this setting only lasts for that specific conversation and needs to be re-enabled for new chats.

### 2. Make it the Default for a Specific Model (Recommended)
The cleanest way to have web search "always on" is to configure it directly in the settings for the `mistral` model you're using. According to the official Open WebUI documentation, you can set default features that apply to every new conversation with that model .

1.  Go to **Admin Panel** → **Settings** → **Models**.
2.  Select your `mistral` model.
3.  Under **Default Features**, check the box for **Web Search** .

Now, any new chat you start with the Mistral model will have web search enabled by default. You can still toggle it off manually if needed.

### 3. Use a Special URL (Best for Browser Search)
You can create a custom search engine in your browser that automatically activates web search. This is perfect for using Open WebUI directly from your browser's address bar .

1.  In your browser's search engine settings (e.g., Chrome's "Manage search engines"), add a new one with the following details:
    *   **Search Engine:** `Open WebUI (Web Search)`
    *   **Keyword:** `ow` (or any shortcut you prefer)
    *   **URL:** `http://localhost:3000/?web-search=true&q=%s` 
        *   *Note: Replace `localhost:3000` with your Open WebUI URL if it's different.*
2.  Now, typing `ow what is the weather` in your address bar will open a new chat in Open WebUI with web search already enabled for that query.

### 4. The Developer Approach (Filters)
For a truly "always-on" experience that requires no user interaction, you can use a custom **Filter**. This involves writing a small piece of Python code that runs in the background. The community has shared examples of filters that force web search to be enabled on every message .

```python
# Simplified example from community discussion 
# This is an advanced method requiring technical knowledge.
from open_webui.utils.middleware import chat_web_search_handler

class Filter:
    async def inlet(self, body, __user__, __request__, __event_emitter__):
        # This forces web search to be considered enabled
        await chat_web_search_handler(__request__, body, {"__event_emitter__": __event_emitter__}, __user__)
        return body
```

### 5. Upcoming Native Feature
It's worth noting that the community has been actively discussing this. There is a merged pull request (#9370) that aims to add an **"Always-On Web Search" option in User Settings** . This feature will likely be available in an upcoming release, making this process even simpler.

### Next Steps
For your use case, I would strongly recommend starting with **Method 2 (Model Default Settings)** . It's the most straightforward and aligns perfectly with how you described the Ollama app's behavior. Once you set it there, you won't have to think about it again.



# :books: References

```bash
pip install open-webui
```
<details>

```lua
Collecting open-webui
  Downloading open_webui-0.8.10-py3-none-any.whl.metadata (24 kB)
Collecting accelerate (from open-webui)
  Downloading accelerate-1.13.0-py3-none-any.whl.metadata (19 kB)
Collecting aiocache (from open-webui)
  Downloading aiocache-0.12.3-py2.py3-none-any.whl.metadata (8.3 kB)
Collecting aiofiles (from open-webui)
  Downloading aiofiles-25.1.0-py3-none-any.whl.metadata (6.3 kB)
Collecting aiohttp==3.13.2 (from open-webui)
  Downloading aiohttp-3.13.2-cp312-cp312-macosx_11_0_arm64.whl.metadata (8.1 kB)
Collecting alembic==1.18.4 (from open-webui)
  Downloading alembic-1.18.4-py3-none-any.whl.metadata (7.2 kB)
Collecting anthropic (from open-webui)
  Downloading anthropic-0.86.0-py3-none-any.whl.metadata (3.0 kB)
Collecting apscheduler==3.11.2 (from open-webui)
  Downloading apscheduler-3.11.2-py3-none-any.whl.metadata (6.4 kB)
Requirement already satisfied: argon2-cffi==25.1.0 in /opt/homebrew/Caskroom/miniforge/base/lib/python3.12/site-packages (from open-webui) (25.1.0)
Collecting asgiref==3.11.1 (from open-webui)
  Downloading asgiref-3.11.1-py3-none-any.whl.metadata (9.3 kB)
Collecting async-timeout (from open-webui)
  Using cached async_timeout-5.0.1-py3-none-any.whl.metadata (5.1 kB)
Collecting authlib==1.6.9 (from open-webui)
  Downloading authlib-1.6.9-py2.py3-none-any.whl.metadata (9.8 kB)
Collecting azure-ai-documentintelligence==1.0.2 (from open-webui)
  Downloading azure_ai_documentintelligence-1.0.2-py3-none-any.whl.metadata (53 kB)
Collecting azure-identity==1.25.2 (from open-webui)
  Downloading azure_identity-1.25.2-py3-none-any.whl.metadata (90 kB)
Collecting azure-storage-blob==12.28.0 (from open-webui)
  Downloading azure_storage_blob-12.28.0-py3-none-any.whl.metadata (26 kB)
Collecting bcrypt==5.0.0 (from open-webui)
  Downloading bcrypt-5.0.0-cp39-abi3-macosx_10_12_universal2.whl.metadata (10 kB)
Collecting black==26.1.0 (from open-webui)
  Downloading black-26.1.0-cp312-cp312-macosx_11_0_arm64.whl.metadata (88 kB)
Collecting boto3==1.42.62 (from open-webui)
  Downloading boto3-1.42.62-py3-none-any.whl.metadata (6.7 kB)
Requirement already satisfied: brotli==1.1.0 in /opt/homebrew/Caskroom/miniforge/base/lib/python3.12/site-packages (from open-webui) (1.1.0)
Collecting chardet==5.2.0 (from open-webui)
  Downloading chardet-5.2.0-py3-none-any.whl.metadata (3.4 kB)
Collecting chromadb==1.5.2 (from open-webui)
  Downloading chromadb-1.5.2-cp39-abi3-macosx_11_0_arm64.whl.metadata (7.2 kB)
Collecting cryptography (from open-webui)
  Downloading cryptography-46.0.5-cp311-abi3-macosx_10_9_universal2.whl.metadata (5.7 kB)
INFO: pip is looking at multiple versions of open-webui to determine which version is compatible with other requirements. This could take a while.
Collecting open-webui
  Downloading open_webui-0.8.9-py3-none-any.whl.metadata (24 kB)
  Downloading open_webui-0.8.8-py3-none-any.whl.metadata (24 kB)
Collecting alembic==1.18.3 (from open-webui)
  Downloading alembic-1.18.3-py3-none-any.whl.metadata (7.2 kB)
Collecting authlib==1.6.7 (from open-webui)
  Downloading authlib-1.6.7-py2.py3-none-any.whl.metadata (9.8 kB)
Collecting azure-identity==1.25.1 (from open-webui)
  Downloading azure_identity-1.25.1-py3-none-any.whl.metadata (88 kB)
Collecting boto3==1.42.44 (from open-webui)
  Downloading boto3-1.42.44-py3-none-any.whl.metadata (6.8 kB)
...
  Attempting uninstall: rich
    Found existing installation: rich 14.0.0
    Uninstalling rich-14.0.0:
      Successfully uninstalled rich-14.0.0
ERROR: pip's dependency resolver does not currently take into account all the packages that are installed. This behaviour is the source of the following dependency conflicts.
apio 1.2.1 requires requests==2.32.4, but you have requests 2.32.5 which is incompatible.
apio 1.2.1 requires rich==14.0.0, but you have rich 13.9.4 which is incompatible.
Successfully installed Events-0.5 Mako-1.3.10 Shapely-2.1.2 XlsxWriter-3.2.9 accelerate-1.13.0 aiocache-0.12.3 aiofiles-25.1.0 aiohappyeyeballs-2.6.1 aiohttp-3.13.2 aiosignal-1.4.0 alembic-1.18.3 annotated-doc-0.0.4 annotated-types-0.7.0 anthropic-0.86.0 apscheduler-3.11.2 asgiref-3.11.1 async-timeout-5.0.1 authlib-1.6.7 av-17.0.0 azure-ai-documentintelligence-1.0.2 azure-core-1.39.0 azure-identity-1.25.1 azure-storage-blob-12.28.0 backoff-2.2.1 bcrypt-5.0.0 bidict-0.23.1 black-26.1.0 boto3-1.42.44 botocore-1.42.71 build-1.4.0 cffi-2.0.0 chardet-5.2.0 chromadb-1.4.1 cryptography-46.0.5 ctranslate2-4.7.1 dataclasses-json-0.6.7 ddgs-9.10.0 docstring-parser-0.17.0 docx2txt-0.9 durationpy-0.10 ecdsa-0.19.1 einops-0.8.2 emoji-2.15.0 et-xmlfile-2.0.0 fake-useragent-2.2.0 fastapi-0.128.5 faster-whisper-1.2.1 filelock-3.25.2 filetype-1.2.0 flatbuffers-25.12.19 fpdf2-2.8.5 frozenlist-1.8.0 fsspec-2026.2.0 ftfy-6.3.1 google-api-core-2.30.0 google-api-python-client-2.193.0 google-auth-2.49.1 google-auth-httplib2-0.3.0 google-auth-oauthlib-1.3.0 google-cloud-core-2.5.0 google-cloud-storage-3.9.0 google-crc32c-1.8.0 google-genai-1.62.0 google-resumable-media-2.8.0 googleapis-common-protos-1.72.0 grpcio-1.78.0 hf-xet-1.4.2 html5lib-1.1 httplib2-0.31.2 httptools-0.7.1 httpx-sse-0.4.3 huggingface-hub-1.7.1 importlib-resources-6.5.2 isodate-0.7.2 itsdangerous-2.2.0 jiter-0.13.0 jmespath-1.1.0 joblib-1.5.3 kubernetes-35.0.0 langchain-1.2.9 langchain-classic-1.0.1 langchain-community-0.4.1 langchain-core-1.2.20 langchain-text-splitters-1.1.0 langdetect-1.0.9 langgraph-1.0.10 langgraph-checkpoint-4.0.1 langgraph-prebuilt-1.0.8 langgraph-sdk-0.3.12 langsmith-0.7.21 ldap3-2.9.1 llvmlite-0.46.0 loguru-0.7.3 lxml-6.0.2 markdown-3.10.1 marshmallow-3.26.2 mcp-1.26.0 mmh3-5.2.1 mpmath-1.3.0 msal-1.35.1 msal-extensions-1.3.1 msoffcrypto-tool-6.0.0 multidict-6.7.1 mypy-extensions-1.1.0 networkx-3.6.1 nltk-3.9.2 numba-0.64.0 oauthlib-3.3.1 olefile-0.47 onnxruntime-1.24.1 open-webui-0.8.8 openai-2.29.0 opencv-python-4.13.0.92 opencv-python-headless-4.13.0.92 openpyxl-3.1.5 opensearch-protobufs-0.19.0 opensearch-py-3.1.0 opentelemetry-api-1.40.0 opentelemetry-exporter-otlp-proto-common-1.40.0 opentelemetry-exporter-otlp-proto-grpc-1.40.0 opentelemetry-proto-1.40.0 opentelemetry-sdk-1.40.0 opentelemetry-semantic-conventions-0.61b0 orjson-3.11.7 ormsgpack-1.12.2 pandas-3.0.0 pathspec-1.0.4 peewee-3.19.0 peewee-migrate-1.14.3 pillow-12.1.0 posthog-5.4.0 primp-1.1.3 propcache-0.4.1 proto-plus-1.27.1 pyarrow-20.0.0 pyasn1-0.6.3 pyasn1-modules-0.4.2 pybase64-1.4.3 pyclipper-1.4.0 pycrdt-0.12.46 pydantic-2.12.5 pydantic-core-2.41.5 pydantic-settings-2.13.1 pydub-0.25.1 pyjwt-2.11.0 pymdown-extensions-10.20.1 pymysql-1.1.2 pypandoc-1.16.2 pypdf-6.7.0 pypdfium2-5.6.0 pypika-0.51.1 pyproject_hooks-1.2.0 python-dotenv-1.2.2 python-engineio-4.13.1 python-iso639-2026.1.31 python-jose-3.5.0 python-magic-0.4.27 python-mimeparse-2.0.0 python-multipart-0.0.22 python-oxmsg-0.0.2 python-pptx-1.0.2 python-socketio-5.16.1 pytokens-0.4.1 pytube-15.0.0 pyxlsb-1.0.10 rank-bm25-0.2.2 rapidfuzz-3.14.3 rapidocr-onnxruntime-1.4.4 redis-7.3.0 regex-2026.2.28 requests-2.32.5 requests-oauthlib-2.0.0 requests-toolbelt-1.0.0 restrictedpython-8.1 rich-13.9.4 rsa-4.9.1 s3transfer-0.16.0 safetensors-0.7.0 scikit-learn-1.8.0 scipy-1.17.1 sentence-transformers-5.2.2 sentencepiece-0.2.1 shellingham-1.5.4 simple-websocket-1.1.0 socksio-1.0.0 soundfile-0.13.1 sqlalchemy-2.0.46 sse-starlette-3.3.3 starlette-0.52.1 starlette-compress-1.7.0 starsessions-2.2.1 sympy-1.14.0 tenacity-9.1.4 threadpoolctl-3.6.0 tiktoken-0.12.0 tokenizers-0.22.2 torch-2.10.0 transformers-5.1.0 typer-0.24.1 typer-slim-0.24.0 typing-inspect-0.9.0 typing-inspection-0.4.2 tzlocal-5.3.1 unstructured-0.18.31 unstructured-client-0.42.10 uritemplate-4.2.0 uuid-utils-0.14.1 uvicorn-0.40.0 uvloop-0.22.1 validators-0.35.0 watchfiles-1.1.1 websockets-15.0.1 wrapt-2.1.2 wsproto-1.3.2 xlrd-2.0.2 xxhash-3.6.0 yarl-1.23.0 youtube-transcript-api-1.2.4
```


</details>
