export interface Project {
  id: string;
  name: string;
  hook: string;
  description: string;
  tags: string[];
  features: string[];
  techStack: string[];
  overview: string;
  devNotes: {
    title: string;
    content: string;
  }[];
  githubUrl?: string;
  demoUrl?: string;
  isPopular?: boolean;
  version?: string;
  price?: string;
  stars?: number;
  images?: string[];
  icon?: string;
  accentColor?: string;
}

export const projects: Project[] = [
  {
    id: "mazu-api",
    name: "mazuAPI",
    hook: "An \"API\" for Minigame servers.",
    description: "A powerful API for minigame servers, that provides solutions for my text and logic problems in PlaceholderAPI.",
    tags: ["PlaceholderAPI", "Server ver 1.20+", "Spigot", "Paper"],
    features: [
      "Countdown functionality",
      "Simple conditionallogic handling within placeholders",
      "Customizable small caps formatting in placeholders",
      "Server status system for remote server statuses querying MOTD",
    ],
    techStack: ["Java 21", "Spigot API", "PlaceholderAPI"],
    overview: "Dealing with pretty small caps can be very troublesome, so i decided to fix that with this simple (api). But what it does is that it provides answers to most of the problems i encounter while managing a minigame server. For lobbies, you can easily show the status of the game servers and etc.",
    devNotes: [
      {
        title: "Installation",
        content: "1. Download the built plugin JAR.\n2. Put it in your server's `plugins` folder.\n3. Install PlaceholderAPI if it is not already on the server.\n4. Start the server once so LobbyManager generates `config.yml`.\n5. Edit the config to match your lobby, then restart or use `/lobby reload`."
      },
      {
        title: "Configuration",
        content: "The plugin generates a `config.yml` file where you can customize countdown strings and plugin messages.\n\n```yaml\n# mazuAPI Configuration\n\n# Messages for the countdown placeholder %mazuapi_countdown_<timestamp>%\ncountdown:\n  days: \"d\"\n  hours: \"h\"\n  minutes: \"m\"\n  seconds: \"s\"\n  expired: \"Expired\"\n  separator: \" \"\n\n# Messages for the plugin commands\nmessages:\n  reload: \"&a[mazuAPI] Configuration reloaded successfully!\"\n  no_permission: \"&c[mazuAPI] You do not have permission to execute this command.\"\n\nstatuser:\n  global-fallback: \"&cOffline\"\n  loading: \"&eLoading...\"\n  servers:\n    lobby:\n      reset-interval: 60\n      method: MOTD\n      address: \"127.0.0.1:25565\"\n    survival:\n      reset-interval: 60\n      method: COMMAND\n      address: \"none\"\n```"
      },
      {
        title: "Commands & Permissions",
        content: "*   `/mazuapi reload` - Reloads the `config.yml` file.\n*   `/setstatus <servername> <status>` - Sets the display status of a `COMMAND` method server.\n*   **Permission:** `mazuapi.admin` (Required for both commands)"
      },
      {
        title: "Placeholders",
        content: "| Placeholder                                               | Description                                                                                                                                                                | Usage Example                                                                   | Output Example     |\n| :-------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------ | :----------------- |\n| `%mazuapi_tosmallcaps_<text>%`                            | Converts raw text into Unicode Small Caps.                                                                                                                                 | `%mazuapi_tosmallcaps_Mazurovej Dev%`                                           | ᴍᴀᴢᴜʀᴏᴠᴇᴊ ᴅᴇᴠ      |\n| `%mazuapi_convertsmallcaps_{placeholder}%`                | Parses an internal placeholder first, then converts the result to Small Caps. (Ensure to use `{}` for the inner placeholder).                                              | `%mazuapi_convertsmallcaps_{player_name}%`                                      | ᴍᴀᴢᴜʀᴏᴠᴇᴊ          |\n| `%mazuapi_countdown_<timestamp>%`                         | Calculates time remaining until a date (Format: `yyyy-MM-dd HH:mm`). Outputs custom strings defined in `config.yml`.                                                       | `%mazuapi_countdown_2025-12-31 23:59%`                                          | 283d 6h 15m 30s    |\n| `%mazuapi_status_<servername>%`                           | Fetches the cached status or MOTD of a server configured in `config.yml`. Parses color codes correctly.                                                                    | `%mazuapi_status_mazurovej%`                                                    | &aOnline           |\n| `%mazuapi_if_empty_{placeholder}?{yes}:{no}%`             | Evaluates if the inner `{placeholder}` resolves to empty or null. Returns `{yes}` if it is empty, or `{no}` if it is not. Supports parsing placeholders in yes/no outputs. | `%mazuapi_if_empty_{vault_eco_balance}?{Mazurovej Broke}:{Mazurovej Rich}%`     | Mazurovej Rich     |\n| `%mazuapi_if_equals_{placeholder}={value}?{yes}:{no}%`    | Evaluates if the inner `{placeholder}` strictly equals the specified `{value}`.                                                                                            | `%mazuapi_if_equals_{player_name}=Mazurovej?{The Dev}:{Random Player}%`         | The Dev            |\n| `%mazuapi_if_contains_{placeholder}=>{value}?{yes}:{no}%` | Evaluates if the inner `{placeholder}` contains the specified `{value}`.                                                                                                   | `%mazuapi_if_contains_{player_name}=>Mazurovej?{Mazurovej Detected}:{Unknown}%` | Mazurovej Detected |\n"
      }
    ],
    githubUrl: "https://github.com",
    demoUrl: "https://example.com",
    isPopular: true,
    version: "v1.0.0",
    price: "FREE",
    stars: 1.0,
    images: [
      "/mazuAPI.jpg",
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=1600&q=80"
    ],
    icon: "/icon_mazuAPI.jpg",
    accentColor: "#5eead4"
  },
  {
    id: "lobby-sys",
    name: "Lobby System",
    hook: "A plugin that manages lobby servers.",
    description: "A powerful plugin that lets you manage your lobby servers with a simple configuration and commands.",
    tags: ["PlaceholderAPI", "Server ver 1.20+", "Spigot", "Paper"],
    features: [
      "Adds a easily editable scoreboard.",
      "Gives configurable join items, including a player-hider toggle.",
      "Adds double jump features.",
      "Simple lobby proteciton against average problems.",
    ],
    techStack: ["Java 21", "Spigot API", "PlaceholderAPI"],
    overview: "LobbyManager is a Spigot/Paper plugin for lobby and spawn servers. It handles spawn teleporting, join items, double jump, jump pads, a sidebar scoreboard, and lightweight lobby protections so players land in a polished hub instead of a normal survival world.",
    devNotes: [
      {
        title: "Installation",
        content: "1. Download the built plugin JAR.\n2. Put it in your server's `plugins` folder.\n3. Install PlaceholderAPI if it is not already on the server.\n4. Start the server once so LobbyManager generates `config.yml`.\n5. Edit the config to match your lobby, then restart or use `/lobby reload`."
      },
      {
        title: "Configuration",
        content: "The plugin generates a `config.yml` file where you can customize countdown strings and plugin messages.\n\n```yaml\n# LobbyManager Configuration\n# All features can be toggled without touching the code.\n\nmessages:\n  prefix: \"<gold>[Lobby]</gold> \"\n  no-permission: \"<red>You do not have permission to use this command.\"\n  reloaded: \"<green>LobbyManager configuration reloaded!\"\n  spawn-set: \"<green>Spawn point has been set!\"\n  teleport-spawn: \"<green>Teleported to spawn.\"\n  players-hidden: \"<red>Players are now hidden!\"\n  players-visible: \"<green>Players are now visible!\"\n  double-jump-enabled: \"<green>Double Jump enabled!\"\n  double-jump-disabled: \"<red>Double Jump disabled!\"\n  cooldown-active: \"<red>You must wait before using this again!\"\n\nmechanics:\n  void-fallback:\n    enabled: true\n    y-level: 0\n  teleport-on-join:\n    enabled: true\n  double-jump:\n    enabled: true\n    cooldown: 3.0 # in seconds\n    height: 1.0\n    forward-velocity: 1.5\n    particle: CLOUD\n    sound: ENTITY_BAT_TAKEOFF\n  jump-pads:\n    enabled: true\n    trigger-block: LIGHT_WEIGHTED_PRESSURE_PLATE\n    base-block: REDSTONE_BLOCK\n    strength: 2.0\n    sound: ENTITY_ENDER_DRAGON_FLAP\n\nworld-settings:\n  disable-hunger: true\n  disable-fall-damage: true\n  disable-block-break: true\n  disable-block-place: true\n  disable-weather-change: true\n  disable-pvp: true\n  join-effects:\n    - \"SPEED:1:99999\"\n    - \"JUMP_BOOST:1:99999\"\n    - \"NIGHT_VISION:1:99999\"\n\nitems:\n  enabled: true\n  join-items:\n    slot_0:\n      material: COMPASS\n      name: \"<gold>Server Selector</gold>\"\n      lore:\n        - \"<gray>Right-click to open!</gray>\"\n      custom-model-data: 0\n      action: \"COMMAND:menu\"\n      movable: false\n    slot_8:\n      material: LIME_DYE\n      name: \"<green>Player Hider (Visible)</green>\"\n      lore:\n        - \"<gray>Right-click to toggle players!</gray>\"\n      custom-model-data: 0\n      action: \"TOGGLE:player_hider\"\n      cooldown: 5.0 # in seconds\n      movable: false\n      toggle-off:\n        material: RED_DYE\n        name: \"<red>Player Hider (Hidden)</red>\"\n\nscoreboard:\n  enabled: true\n  refresh-rate: 20\n  disabled-worlds:\n    - \"world_nether\"\n  title: \"<gold><b>Lobby</b></gold>\"\n  lines:\n    - \"\"\n    - \"<gray>Player: <white>%player_name%\"\n    - \"<gray>Rank: <white>%vault_rank%\"\n    - \"\"\n    - \"<yellow>mc.example.com\"\n\nsocial:\n  join-message: \"<green>+ <gray>%player_name% joined the lobby!\"\n  quit-message: \"<red>- <gray>%player_name% left the lobby!\"\n  join-title:\n    enabled: true\n    title: \"<gold>Welcome!</gold>\"\n    subtitle: \"<gray>Enjoy your stay, %player_name%!</gray>\"\n    fade-in: 10\n    stay: 70\n    fade-out: 20\n  join-firework:\n    enabled: true\n\n```"
      },
      {
        title: "Commands & Permissions",
        content: "| Command | Permission | Description | Example |\n|---|---|---|---|\n| `/lobby` | none | Shows the plugin version in chat. | `/lobby` |\n| `/lobby reload` | `lobbymanager.admin` | Reloads the config and reapplies lobby settings. | `/lobby reload` |\n| `/setspawn` | `lobbymanager.admin` | Saves your current location as the lobby spawn. Player only. | `/setspawn` |\n| `/spawn` | `lobbymanager.spawn` | Teleports you to the configured spawn. Player only. | `/spawn` |\n| `/dj` | `lobbymanager.doublejump` | Toggles double jump for your player. Player only. | `/dj` |"
      },
      {
        title: "Troubleshooting",
        content: "- If `/spawn` does nothing, make sure you have run `/setspawn` at least once.\n- If placeholders show up as raw text, confirm PlaceholderAPI is installed and the needed expansions are present.\n- If join items are missing, check that `items` is `true`.\n- If double jump is not working, verify `double-jump` is `true` and the player has the permission `lobbymanager.doublejump`.\n- If scoreboard lines do not update, make sure the world is not listed under `disabled worlds`."
      }
    ],
    githubUrl: "https://github.com",
    demoUrl: "https://example.com",
    isPopular: true,
    version: "v1.0.0",
    price: "FREE",
    stars: 1.0,
    images: [
      "https://images.unsplash.com/photo-1627398242454-45a1465c2479?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=1600&q=80"
    ],
    icon: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?auto=format&fit=crop&w=80&q=80",
    accentColor: "#f43f5e"
  },
  {
    id: "smart-kick-redirect",
    name: "Smart Kick Redirect",
    hook: "A plugin that fallback within bungeecord.",
    description: "A small Bungee plugin that automatically redirects players who are kicked from a sub-server to a configured target server (for example, a lobby).",
    tags: ["Bungeecord"],
    features: [
      "Redirect kicked players to a specified target server.",
      "Two redirect modes: `FORCE` (always redirect) and `CONTAINS` (redirect only for matching kick messages).",
      "Customizable messages with legacy color codes and hex color support.",
      "Safety check to avoid redirect loops (won't redirect if kicked from the target server).",
    ],
    techStack: ["Java 21", "Bungeecord"],
    overview: "Ever met with being disconnected from your whole proxy? Well, this plugin fix that problem. It redirects all players to the servers that they were on before they got disconnected. It is simple and efficient.",
    devNotes: [
      {
        title: "Installation",
        content: "1. Download the built plugin JAR.\n2. Put it in your server's `plugins` folder.\n3. Install PlaceholderAPI if it is not already on the server.\n4. Start the server once so SmartKickRedirect generates `config.yml`.\n5. Edit `config.yml` to set `settings.target_server` and edit config, then restart the proxy."
      },
      {
        title: "Configuration",
        content: "The plugin generates a `config.yml` file where you can customize messages and behavior.\n\n```yaml\nsettings:\n  # The server name (from your proxy config) where players should be sent\n  target_server: \"lobby\"\n  \n  # How the plugin decides to move the player\n  # Options: [CONTAINS, FORCE]\n  mode: FORCE\n\n# --- Mode Logic ---\n\n# MODE: CONTAINS\n# The plugin will only move the player if the kick message includes these strings.\n# Useful if you want players to actually see 'Banned' or 'Whitelisted' messages \n# without being redirected.\ncontains_messages:\n  - \"Server closed\"\n  - \"Server is restarting\"\n  - \"Timed out\"\n  - \"Stopping\"\n  - \"Server is full\"\n\n# MODE: FORCE\n# If set to 'FORCE', the 'contains_messages' list is ignored.\n# Any kick from any sub-server will trigger an immediate move to the target_server.\n\n# --- User Experience ---\n\nmessages:\n  redirected: \n    - \"&6&l[!] &7The server you were on closed. Sending you to the &eLobby&7...\"\n    - \"&6&l[!] &6- &fThe reason you were kicked for is: &f%reason%\"\n  blacklisted_servers:\n    - \"staff_meeting\" # Players kicked from here won't be redirected (optional)\n```"
      },
      {
        title: "Commands & Permissions",
        content: "There are no commands needed for this plugin."
      },
      {
        title: "Troubleshooting",
        content: "- Players are not redirected: ensure `target_server` matches a server name in your proxy config.\n- No messages appear: check `redirected` in `config.yml` and confirm everything is allright.\n- Redirects fail intermittently: the plugin checks target server reachability with a 1s socket timeout, so network issues can block redirects.\n- Prevented redirect loops: if the kicked-from server equals `target_server`, redirection is intentionally skipped."
      }
    ],
    githubUrl: "https://github.com",
    demoUrl: "https://example.com",
    isPopular: true,
    version: "v1.0.0",
    price: "FREE",
    stars: 1.0,
    images: [
      "https://images.unsplash.com/photo-1627398242454-45a1465c2479?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=1600&q=80"
    ],
    icon: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?auto=format&fit=crop&w=80&q=80",
    accentColor: "#fbbf24"
  },
];
