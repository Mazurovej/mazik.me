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
    id: "core-economy",
    name: "Core Economy",
    hook: "A high-performance, asynchronous economy system for large networks.",
    description: "Built for massive player bases, Core Economy handles thousands of transactions per second without dropping server TPS. It integrates seamlessly with Redis for cross-server synchronization.",
    tags: ["Spigot API", "Java", "Redis", "MySQL"],
    features: [
      "Fully asynchronous database operations",
      "Cross-server balance synchronization via Redis",
      "Extensive developer API",
      "Customizable messages and formatting",
    ],
    techStack: ["Java 17", "Spigot API", "HikariCP", "Jedis"],
    overview: "Managing an economy on a network with hundreds of concurrent players is challenging. Traditional economy plugins often rely on synchronous file saves or blocking database calls. Core Economy solves this by keeping a fast cache in memory and dispatching all updates asynchronously to a MySQL database, with Redis pub/sub keeping multiple servers in sync.",
    devNotes: [
      {
        title: "How it works",
        content: "When a transaction occurs, the local server cache is updated instantly. An event is published to Redis, and a background thread queues the SQL update. Other servers listen to the Redis channel and invalidate or update their local caches accordingly."
      },
      {
        title: "Challenges",
        content: "Handling race conditions during rapid rapid-fire transactions across different servers was tricky. Implemented an optimistic locking strategy combined with a distributed Redis lock for critical operations."
      }
    ],
    githubUrl: "https://github.com",
    demoUrl: "https://example.com",
    isPopular: true,
    version: "v2.1.4",
    price: "$14.99",
    stars: 4.9
  },
  {
    id: "advanced-gui-skript",
    name: "Advanced GUI Framework",
    hook: "A powerful Skript-based GUI creation tool.",
    description: "Stop writing boilerplate Skript code for inventories. This framework provides an intuitive API to create multi-page, interactive GUIs with complex item updating logic.",
    tags: ["Skript", "GUI", "API"],
    features: [
      "Declarative GUI creation syntax",
      "Automatic pagination",
      "Dynamic item updating",
      "Click cooldowns and anti-dupe protections"
    ],
    techStack: ["Skript 2.7", "SkQuery", "SkBee"],
    overview: "Writing GUIs in plain Skript can quickly turn into a massive unreadable file with hundreds of format slot effects. This framework abstracts all that away into clean functions.",
    devNotes: [
      {
        title: "Interesting Solutions",
        content: "To prevent item duping (a common issue in Skript GUIs), I hooked into packet-level events to cancel clicks before they even reach the server's main thread processing logic."
      }
    ],
    demoUrl: "https://example.com",
    version: "v1.0.2",
    price: "Free",
    stars: 5.0
  }
];
