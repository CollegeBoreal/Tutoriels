
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
```

</details>
