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

# Verify the CLI tool works and check for active environments
container list --all

```

If it successfully returns table headers (`ID IMAGE OS ARCH STATE IP`), the `container` command is properly installed and active on your MacBook.
