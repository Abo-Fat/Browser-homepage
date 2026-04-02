# Browser Homepage

A customizable browser start page with a starry dark UI, multi-engine search, dashboard widgets, and an interactive terminal.

## Features

- Multi-engine search: `Bing`, `Google`, `Scholar`, `Gemini`, `Copilot`, `Translate`
- Gemini quick flow: copy query to clipboard and open Gemini in a new tab
- Dashboard widgets:
  - Clock/date
  - Network latency panel (YouTube/Scholar/Gemini/Bilibili)
  - Command terminal
- Dock shortcuts and folder-style popup links
- Starry dark theme background
- Terminal command system with history (`ArrowUp`/`ArrowDown`)
- Terminal `Tab` completion (`Shift+Tab` for reverse cycling)

## Terminal Commands

- `help` show grouped help
- `clear` clear terminal output
- `cal <expr>` calculate expression (supports `+ - * / ^`, parentheses, `log2`)
- `weather` query current Beijing weather (Open-Meteo)
- `ping <url>` test latency
- `open <alias|url>` open target in a new tab
- `search <engine> <query>` search with selected engine
- `theme [name|list|reset]` switch/list themes
- `time [zone|alias|list]` show current time by timezone

### `open` Aliases

- `yt`, `youtube`
- `gh`, `github`
- `bili`, `bilibili`
- `notion`
- `gemini`
- `pku`

### `theme` Presets

- `stars` (default)
- `aurora`
- `ember`

Theme selection is persisted in `localStorage` under key `homepage_theme`.

### `time` Alias Examples

- `local`, `beijing`, `shanghai`, `tokyo`, `seoul`, `singapore`
- `london`, `paris`, `ny`, `newyork`, `la`, `losangeles`, `utc`
- You can also pass a standard IANA zone, e.g. `Europe/Berlin`.

## Tab Completion Behavior

- `Tab` completes command or argument and cycles candidates
- `Shift+Tab` cycles backward
- Supported completion contexts:
  - command name
  - `open` targets
  - `search` engine
  - `theme` option
  - `time` alias

## Project Structure

```text
.
|- index.html
|- README.md
`- assets/
   |- css/
   |  `- style.css
   `- js/
      `- main.js
```

## Run

Open `index.html` directly, or run a local static server:

```bash
python -m http.server 8080
```

Then visit `http://localhost:8080`.

## Notes

- Weather and latency commands depend on external network availability.
- Browser security/CORS behavior may affect latency measurements.
- Clipboard permission affects Gemini copy-first flow.
