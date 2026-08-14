export type Project = {
  id: string;
  name: string;
  category: "Plugin" | "Resource Pack" | "Texture Pack" | "Custom System" | "Other";
  shortDescription: string;
  description: string;
  image: string;
  features: string[];
  languages: string[];
  minecraftVersion: string;
  status: "Completed" | "In Development" | "Concept";
  demoUrl?: string;
  howToUse?: string;
};

export const projects: Project[] = [
  {
    id: "water-pvp",
    name: "Aquatic PvP Pack",
    category: "Resource Pack",
    shortDescription: "An aquatic-themed competitive PvP pack with smooth animations.",
    description: "I reimagined traditional PvP packs with a deep blue and aqua theme. The swords are styled as tridents and wave-blades, while the armor has a subtle flowing animation. Perfect for players who love an oceanic aesthetic.",
    image: "/images/projects/water_pvp.png",
    features: [
      "Aquatic themed weapon models",
      "Flowing armor animations",
      "Custom water drop particles",
      "Lightweight and FPS-friendly"
    ],
    languages: ["JSON", "GLSL"],
    minecraftVersion: "1.8.9",
    status: "Completed",
    demoUrl: "/downloads/aquatic-pvp-pack.zip",
    howToUse: `Custom Minecraft Resource Pack: Aquatic PvP Pack

WHAT THIS PACK DOES:
This is an aquatic-themed competitive PvP pack designed for smooth animations and deep blue aesthetics.
Description from pack: Aquatic PvP Pack
[Made By Rishav]

WHERE TO LOOK FOR CHANGES:
- Equip swords to see trident and wave-blade models.
- Wear armor to see subtle flowing animations.
- Check out the custom water drop particles and lightweight UI changes.

SUPPORTED VERSION:
This pack supports Minecraft version(s): 1.21.4 (Format: 46)

HOW TO TEST IT:
1. Copy the parent folder ("Aquatic PvP Pack") or the ZIP file of this pack.
2. Press Win + R, type %appdata%\.minecraft\resourcepacks, and hit Enter.
3. Paste the folder/ZIP file into the resourcepacks directory.
4. Launch Minecraft (ensure you are using a supported version mentioned above).
5. Go to Options > Resource Packs.
6. Find this pack in the list of available packs on the left side and click the arrow to move it to the "Selected" side.
7. Click "Done" and enjoy!
`
  },

  {
    id: "teenplayz-30k",
    name: "Vibrant Bedwars Pack",
    category: "Resource Pack",
    shortDescription: "A clean, vibrant texture pack for Bedwars and Skywars.",
    description: "A specialized pack made for fast-paced minigames. I focused on high contrast and vibrant colors to make targets pop in Bedwars and Skywars. Wool and clay blocks are distinctively bordered to make bridging easier.",
    image: "/images/projects/teenplayz.png",
    features: [
      "High-contrast, bordered blocks",
      "Custom sky overlays",
      "FPS boosting features",
      "Clean UI and font replacements"
    ],
    languages: ["JSON", "MCMETA"],
    minecraftVersion: "1.8.9 - 1.20+",
    status: "Completed",
    demoUrl: "/downloads/vibrant-bedwars-pack.zip",
    howToUse: `Custom Minecraft Resource Pack: Vibrant Bedwars Pack

WHAT THIS PACK DOES:
This is a clean, vibrant texture pack tailored specifically for fast-paced minigames like Bedwars and Skywars.
Description from pack: Vibrant Bedwars Pack
[Made By Rishav]

WHERE TO LOOK FOR CHANGES:
- Look at wool and clay blocks to see high-contrast borders for easier bridging.
- Look up to see the custom sky overlays.
- Check out the clean UI and font replacements in menus.

SUPPORTED VERSION:
This pack supports Minecraft version(s): 1.21.4 (Format: 46)

HOW TO TEST IT:
1. Copy the parent folder ("Vibrant Bedwars Pack") or the ZIP file of this pack.
2. Press Win + R, type %appdata%\.minecraft\resourcepacks, and hit Enter.
3. Paste the folder/ZIP file into the resourcepacks directory.
4. Launch Minecraft (ensure you are using a supported version mentioned above).
5. Go to Options > Resource Packs.
6. Find this pack in the list of available packs on the left side and click the arrow to move it to the "Selected" side.
7. Click "Done" and enjoy!
`
  },
  {
    id: "haiderplayz-ultimate",
    name: "Ultimate Survival Hybrid",
    category: "Resource Pack",
    shortDescription: "The ultimate survival and PvP hybrid pack for version 1.21+.",
    description: "This ultimate pack enhances the vanilla 1.21+ experience while adding crucial PvP optimizations. I overhauled the GUI, provided custom hit particles, and included emissive textures for competitive and casual play.",
    image: "/images/projects/haiderplayz.png",
    features: [
      "Custom GUI and hotbar replacements",
      "Animated critical hit particles",
      "Emissive textures (requires Optifine)",
      "1.21+ Vanilla-friendly"
    ],
    languages: ["JSON", "Properties"],
    minecraftVersion: "1.21+",
    status: "Completed",
    demoUrl: "/downloads/ultimate-survival-hybrid.zip",
    howToUse: `Custom Minecraft Resource Pack: Ultimate Survival Hybrid

WHAT THIS PACK DOES:
This is the ultimate survival and PvP hybrid pack, enhancing the vanilla experience with crucial optimizations.
Description from pack: Ultimate Survival Hybrid
[Made By Rishav]

WHERE TO LOOK FOR CHANGES:
- Check out the overhauled GUI and hotbar replacements.
- Attack entities to see the animated critical hit particles.
- Use Optifine to see the beautiful emissive glowing textures at night.

SUPPORTED VERSION:
This pack supports Minecraft version(s): 1.21.4 (Format: 46)

HOW TO TEST IT:
1. Copy the parent folder ("Ultimate Survival Hybrid") or the ZIP file of this pack.
2. Press Win + R, type %appdata%\.minecraft\resourcepacks, and hit Enter.
3. Paste the folder/ZIP file into the resourcepacks directory.
4. Launch Minecraft (ensure you are using a supported version mentioned above).
5. Go to Options > Resource Packs.
6. Find this pack in the list of available packs on the left side and click the arrow to move it to the "Selected" side.
7. Click "Done" and enjoy!
`
  },
  {
    id: "spacex",
    name: "SpaceX",
    category: "Other",
    shortDescription: "A multipurpose discord bot.",
    description: "SpaceX is a highly customizable, multipurpose Discord bot designed to manage and entertain your community.",
    image: "/images/projects/spacex.png",
    features: [
      "Advanced Moderation",
      "Custom Commands",
      "Economy System",
      "Music Features"
    ],
    languages: ["Python"],
    minecraftVersion: "N/A",
    status: "Completed",
  {
    id: "questforge",
    name: "QuestForge",
    category: "Plugin",
    shortDescription: "A dynamic, intelligent quest engine for Minecraft.",
    description: "QuestForge is a production-quality Minecraft Paper plugin built to revolutionize player engagement. Instead of static missions, it features a highly modular architecture that dynamically generates daily and weekly quests tailored to individual player progression. With fully asynchronous SQLite and MySQL database support, beautiful paginated GUI menus, and robust PlaceholderAPI integration, it offers a seamless and lag-free experience for any server.",
    image: "/images/projects/plugin1.jpg",
    features: [
      "Dynamic Quest Generation",
      "Asynchronous Database (SQLite/MySQL)",
      "Paginated & Animated GUI Menus",
      "Developer API for Custom Objectives",
      "PlaceholderAPI & Vault Integration"
    ],
    languages: ["Java", "Gradle"],
    minecraftVersion: "1.21.x",
    status: "Completed",
    demoUrl: "https://github.com/rishav/QuestForge",
    howToUse: `QuestForge Plugin

WHAT IT IS:
QuestForge is a production-quality, dynamic quest engine for Minecraft Paper 1.21.x. It automatically generates engaging daily and weekly quests based on player progression to keep your community active.

KEY FEATURES:
- Zero-Lag Performance: Fully asynchronous database operations (SQLite & MySQL support).
- Immersive GUIs: Beautiful, paginated, and animated inventory menus for tracking quests.
- Highly Customizable: Easily modify quest templates, rewards, and requirements via configuration files.
- Developer API: Allows custom objectives and rewards to be registered programmatically.
- Integrations: Native support for PlaceholderAPI and Vault for economy rewards.

HOW TO INSTALL & USE:
1. Download the latest \`QuestForge-1.0.0.jar\` from the GitHub Releases.
2. Drop the jar file into your server's \`plugins\` folder.
3. (Optional but recommended) Install \`PlaceholderAPI\` and \`Vault\` for extended functionality.
4. Restart your server to generate the default configuration files.
5. Customize your settings, quest templates, and rewards in \`plugins/QuestForge/config.yml\`.
6. Run \`/quests reload\` to apply any configuration changes.
7. In-game, players can use \`/quests\` to open the main menu and \`/quests active\` to view their current tasks!

COMMANDS & PERMISSIONS:
- \`/quests\` - Opens the main menu (Permission: \`questforge.use\`)
- \`/quests active\` - Opens the active quests menu (Permission: \`questforge.use\`)
- \`/quests reload\` - Reloads the plugin configurations (Permission: \`questforge.admin\`)
`
  },
  {
    id: "dungeoncore",
    name: "DungeonCore",
    category: "Plugin",
    shortDescription: "Procedurally generated instanced dungeons.",
    description: "DungeonCore is a massive, production-grade Minecraft Paper plugin that brings RPG-style instanced dungeons to your server. It features a robust procedural generation system that pieces together unique room templates, complete with custom mobs, complex multi-phase boss fights, an intuitive party system, and scalable difficulty levels—all backed by an asynchronous SQLite database for optimal performance.",
    image: "/images/projects/plugin2.jpg",
    features: [
      "Procedural Room Generation",
      "Dynamic Instancing System",
      "Multi-Phase Custom Bosses",
      "Party & Difficulty System",
      "Asynchronous Data Storage"
    ],
    languages: ["Java", "Gradle"],
    minecraftVersion: "1.21.x",
    status: "Completed",
    demoUrl: "https://github.com/rishav/DungeonCore",
    howToUse: `DungeonCore Plugin

WHAT IT IS:
DungeonCore is a massive procedural instanced dungeon system for Minecraft Paper 1.21.x. It provides an immersive RPG experience by generating unique, isolated dungeon layouts for parties to conquer.

KEY FEATURES:
- Dynamic Instancing: Completely isolated dungeon instances so multiple parties can run dungeons simultaneously without interference.
- Procedural Generation: Dungeons are built dynamically by stitching together various room templates, ensuring no two runs are exactly the same.
- Advanced Combat: Face off against custom mobs and engage in epic, multi-phase boss battles with unique mechanics and abilities.
- Party & Difficulty System: Built-in GUI-driven party management and scalable difficulty levels that adjust loot drops and mob strength.
- High Performance: Utilizes an asynchronous SQLite database to handle player data and instance tracking without lagging the main server thread.

HOW TO INSTALL & USE:
1. Compile the project via Gradle or download the built \`DungeonCore.jar\` from the GitHub Releases.
2. Drop the jar into your server's \`plugins\` folder.
3. Restart the server to generate the default folders and configuration files.
4. Add your custom room templates to the \`plugins/DungeonCore/structures\` folder.
5. Customize boss mechanics, mob stats, and loot tables in the respective YAML files.
6. In-game, use the \`/dungeon\` command to open the main menu, create a party, select your difficulty, and dive into a dungeon!

COMMANDS:
- \`/dungeon\` - Opens the main Dungeon GUI.
- \`/party create/invite/join\` - Manage your dungeon group.
- \`/dungeon leave\` - Exit your current instance safely.
`
  }
];
