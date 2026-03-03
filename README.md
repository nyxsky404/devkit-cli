## Devkit CLI

`devkit` is a small developer utility toolkit CLI that bundles together handy commands for inspecting files, working with timestamps and hashes, and calling a few external APIs (GitHub, OpenWeatherMap, Quotable, JokeAPI).

### Setup

- **Prerequisites**
  - **Node.js**: v18+ recommended
  - **npm** (bundled with Node)

- **Install dependencies**

```bash
npm install
```

- **Build the CLI**

```bash
npm run build
```

- **Link globally (optional, for `devkit` on your PATH)**

```bash
npm link
```

After linking you can run `devkit` from anywhere. Without linking, you can use `npx devkit` from the project root after building.

- **Environment variables**
  - **`OPENWEATHER_API_KEY`**: required for the `weather` command (from OpenWeatherMap).

```bash
export OPENWEATHER_API_KEY="your-openweathermap-api-key"
```

### Available Commands

All commands are invoked as subcommands of `devkit`:

- **`devkit greet <name>`**  
  Personalized greeting that adapts to the current time of day.

- **`devkit fileinfo <filepath>`**  
  Show size, extension, last modified date, and line count for a file.

- **`devkit github <username>`**  
  Fetch a GitHub user's basic profile, followers count, public repos, and profile URL.

- **`devkit weather <city>`**  
  Show current weather for a city using OpenWeatherMap (requires `OPENWEATHER_API_KEY`).

- **`devkit quote`**  
  Display a random inspirational quote using the Quotable API.

- **`devkit joke`**  
  Display a random programming joke from JokeAPI.

- **`devkit sysinfo`**  
  Print OS, CPU, RAM, uptime, and Node.js version.

- **`devkit base64 <mode> <text>`**  
  Base64 encode or decode text.
  - **mode**: `encode` or `decode`

- **`devkit hash <text> [options]`**  
  Compute a hash for the given text.
  - **`-a, --algo <algorithm>`**: `md5` or `sha256` (default: `sha256`)

- **`devkit timestamp`**  
  Show the current time in ISO, Unix seconds, and local time formats.

### Example Usage

```bash
# Greeting
devkit greet nyxsky404

# Inspect a file
devkit fileinfo src/cli.ts

# GitHub user info
devkit github nyxsky404

# Current weather (requires OPENWEATHER_API_KEY)
devkit weather "Pune"

# Random quote and joke
devkit quote
devkit joke

# System information
devkit sysinfo

# Base64 encode / decode
devkit base64 encode "hello world"
devkit base64 decode "aGVsbG8gd29ybGQ="

# Hash text
devkit hash "my-secret"
devkit hash "my-secret" --algo md5

# Timestamps
devkit timestamp
```

