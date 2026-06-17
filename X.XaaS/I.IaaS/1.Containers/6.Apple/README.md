# Apple Container

### Step 1: Download the Signed DMG/PKG Installer

Because the tool relies on a signed system installer to configure background services properly on macOS, you must download the package from the official source:

1. Go to the official repository releases page on GitHub: `https://github.com/apple/container/releases`
2. Scroll down to the **Assets** section of the latest release.
3. Download the signed `.dmg` or `.pkg` installer file specifically built for your architecture (optimized for Apple Silicon).

### Step 2: Install the Package

1. Double-click the downloaded `.dmg` file to open it.
2. Double-click the setup wizard inside (or drag the application to your `Applications` folder, depending on the bundle type).
3. Follow the guided installation prompts. This process will automatically place the `container` command into your system’s executable binary path (usually `/usr/local/bin/container`).

### Step 3: Verify and Start the System

Open your macOS Terminal app and execute the following commands to initialize the background daemon:

```bash
# Initialize and start the container subsystem backend
container system start
```
<details><summary>🪵 Log</summary>
  
```
Launching container-apiserver...
Testing access to container-apiserver...
Verifying machine API server is running...
No default kernel configured.
Install the recommended default kernel from [https://github.com/kata-containers/kata-containers/releases/download/3.28.0/kata-static-3.28.0-arm64.tar.zst]? [Y/n]: y
Installing kernel...
```
  
</details>

```
# Verify the CLI tool works and check for active environments
container list --all

```

If it successfully returns table headers (`ID IMAGE OS ARCH STATE IP`), the `container` command is properly installed and active on your MacBook.

***

### 1. Starting the Container System

Once the DMG installer is run and the application is set up, you initiate the Container backend with the following command:

```bash
container system start

```

### 2. Verifying the Installation

To confirm that the background system started successfully and to list all currently running containers, run:

```bash
container list --all

```

*Expected output (if empty):* `ID  IMAGE  OS  ARCH  STATE  IP`

### 3. Creating and Managing full Linux Environments (`container machine`)

The article highlights how `container machine` functions similarly to WSL2 or Lima by giving control to the image's own init system (like `systemd`) and auto-mounting your macOS `$HOME` directory.

**Create a new machine:**

```bash
container machine create alpine:latest --name dev

```

**Enter the machine via an interactive shell:**

```bash
container machine run -n dev

```

### 4. Inside the Container Environment

Once inside the interactive environment, you can run normal Linux terminal utilities. The system automatically mirrors your Mac user profile, so checking your user context should reflect your host data:

```bash
whoami
# (Outputs your macOS username instead of root)

pwd
# (Outputs your Mac home directory path, e.g., /Users/<your-username>)

```
