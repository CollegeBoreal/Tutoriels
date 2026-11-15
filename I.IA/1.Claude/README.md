# Claude Code: macOS Installation & HDL Engineering Setup

A quick-reference guide for installing Anthropic's **Claude Code** CLI on macOS and configuring an optimal Hardware Description Language (HDL) development workflow.

---

## 1. Installing Claude Code on macOS

Choose either the official native installer or Homebrew to set up the `claude` CLI:

* **Native Installer (Recommended — includes auto-updates):**
  ```bash
  curl -fsSL https://claude.ai/install.sh | bash
  ```
* **Homebrew (Requires manual `brew upgrade --cask claude-code`):**
  ```bash
  brew install --cask claude-code
  ```

### Quick Start & Diagnostics
```bash
claude --version        # Verify installation
claude doctor           # Check environment and dependencies
cd /path/to/project && claude   # Launch inside your project directory
```

---

## 2. Best IDE Integration: VS Code

**Visual Studio Code** offers the deepest native integration for Claude Code:
* **Quick Launch:** Press `Cmd+Esc` (macOS) to open Claude Code synced to your current file and selection.
* **Automatic Diagnostics:** Claude automatically reads workspace structure and compiler/linter errors from the **Problems** panel without manual copy-pasting. *(JetBrains IDEs are also supported via plugins and `/ide`).*

---

## 3. Optimal HDL Setup (VHDL, Verilog, SystemVerilog)

Ground Claude Code with deterministic CLI compilers and Language Servers so it can iteratively **Edit $\rightarrow$ Lint $\rightarrow$ Simulate $\rightarrow$ Fix** without hallucinating signal widths or timing logic.

### A. IDE & Language Servers (LSP)
* **Commercial:** **Sigasi Visual HDL** (deep UVM/mixed-language intelligence and AI agent grounding).
* **Open-Source:**
  * **VHDL:** `vhdl_ls` (rust_hdl) + *VHDL LS* extension.
  * **Verilog / SystemVerilog:** `verible` or `svls` + *Verilog-HDL/SystemVerilog* extension.

### B. CLI Verification & Simulation Loop
* **Fast Linting:** Use **Verilator** (`verilator --lint-only -Wall`) for Verilog/SV or **GHDL** (`ghdl -a`) for VHDL so Claude catches syntax and width mismatches in milliseconds.
* **Python Testbenches (`cocotb`):** Pair Claude with **cocotb**. Claude excels at writing Python testbenches, drivers, and monitors to verify RTL modules and parse assertion failures autonomously.
* **Synthesis:** Run **Yosys + nextpnr** (open-source) or vendor batch Tcl scripts (`vivado -mode batch -source build.tcl`) so Claude can inspect resource and timing logs via stdout.

### C. Repository Rules (`CLAUDE.md`)
Place a `CLAUDE.md` file in your repository root to enforce hardware coding standards and verification commands automatically:

```markdown
# Hardware Design Rules & Workflow
- **Standards:** Synchronous resets only; separate sequential (`always_ff`) and combinational (`always_comb`) logic; explicit bit widths (no inferred latches).
- **Verification Loop:** After ANY change to `.vhd`, `.v`, or `.sv` files, run `make lint` and `make sim` (cocotb). Do not finish until both pass with zero warnings.
```
