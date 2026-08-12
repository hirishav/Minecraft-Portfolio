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
    demoUrl: "https://spacexbot.netlify.app",
    howToUse: `SpaceX Discord Bot

Everything is mentioned in the website.
`
  },
  {
    id: "questforge",
    name: "QuestForge",
    category: "Plugin",
    shortDescription: "A dynamic, intelligent quest engine for Minecraft.",
    description: "QuestForge is a production-quality Minecraft Paper plugin. It features a modular architecture, dynamic daily/weekly quests generated based on player progression, and async SQLite storage.",
    image: "/images/projects/scifi_plugin.png",
    features: [
      "Dynamic Quest Generation",
      "Asynchronous Database (SQLite)",
      "Paginated GUI Menus",
      "PlaceholderAPI Integration"
    ],
    languages: ["Java", "Gradle"],
    minecraftVersion: "1.21.x",
    status: "Completed",
    demoUrl: "https://github.com/rishav/QuestForge",
    howToUse: `QuestForge Plugin

WHAT IT IS:
A dynamic quest engine for Minecraft Paper 1.21.x.

FEATURES:
- Asynchronous DB operations (0 lag!)
- Custom APIs for rewards and objectives
- Beautiful GUI Menus

HOW TO USE:
1. Drop the built QuestForge-1.0.0.jar into your \`plugins\` folder.
2. (Optional) Install PlaceholderAPI.
3. Restart the server.
4. Modify \`plugins/QuestForge/config.yml\` if needed.
5. In game, run \`/quests\` to open the main menu!
`
  }
];
