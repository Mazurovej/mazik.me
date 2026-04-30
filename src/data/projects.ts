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
}

export const projects: Project[] = [
  {
    id: "mazu-api",
    name: "mazuAPI",
    hook: "An API for Minigame servers.",
    description: "A powerful API for minigame servers, that provides solutions for my text and logic problems in PlaceholderAPI.",
    tags: ["PlaceholderAPI", "Minecraft 1.13+", "Spigot", "Paper"],
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
    version: "v0.0.3",
    price: "FREE",
    stars: 1.0
  },
];
