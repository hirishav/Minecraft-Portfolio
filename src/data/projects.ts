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
    id: "mrkipachu-edit",
    name: "Streamer PvP Edit",
    category: "Resource Pack",
    shortDescription: "A bespoke mashup and edit pack for content creation.",
    description: "I created a custom edited pack blending the best elements of various PvP packs while adding unique branding and stream-friendly modifications. It ensures consistent visibility during intense gaming sessions.",
    image: "/images/projects/mrkipachu.png",
    features: [
      "Stream-friendly contrast",
      "Custom branded GUI and inventory",
      "Clean chat fonts",
      "Short swords and low-fire"
    ],
    languages: ["JSON", "Properties"],
    minecraftVersion: "1.20+",
    status: "Completed",
    demoUrl: "/downloads/streamer-pvp-edit.zip",
    howToUse: `Custom Minecraft Resource Pack: Streamer PvP Edit

WHAT THIS PACK DOES:
This is a streamer-friendly PvP edit pack, blending the best elements of competitive packs with custom branding.
Description from pack: Streamer PvP Edit
[Made By Rishav]

WHERE TO LOOK FOR CHANGES:
- Open your inventory to see the custom branded GUI.
- Look at the chat for cleaner fonts.
- Use swords or flint & steel to notice the short swords and low-fire effects.

SUPPORTED VERSION:
This pack supports Minecraft version(s): 1.21 - 1.21.1 (Format: 34)

HOW TO TEST IT:
1. Copy the parent folder ("Streamer PvP Edit") or the ZIP file of this pack.
2. Press Win + R, type %appdata%\.minecraft\resourcepacks, and hit Enter.
3. Paste the folder/ZIP file into the resourcepacks directory.
4. Launch Minecraft (ensure you are using a supported version mentioned above).
5. Go to Options > Resource Packs.
6. Find this pack in the list of available packs on the left side and click the arrow to move it to the "Selected" side.
7. Click "Done" and enjoy!
`
  },
  {
    id: "senpaispider-1m",
    name: "Rishav's 1M PvP Edit",
    category: "Resource Pack",
    shortDescription: "A highly optimized PvP texture pack designed for high framerates.",
    description: "I built this custom PvP edit focusing on competitive gameplay. It features low-fire modifications, optimized FPS elements, and clean weapon models designed specifically for high-level competitive PvP. The pack includes custom crosshairs, highlighted ores for UHC, and custom skies.",
    image: "/images/projects/senpaispider.png",
    features: [
      "Low-fire and short swords for PvP",
      "Custom 1M special diamond tools",
      "Highlight ores and clear glass",
      "Optimized for 1.8.9 and 1.20+"
    ],
    languages: ["JSON", "MCMETA"],
    minecraftVersion: "1.8.9 - 1.20.4",
    status: "Completed",
    demoUrl: "/downloads/rishavs-1m-pvp-edit.zip",
    howToUse: `Custom Minecraft Resource Pack: Rishav's 1M PvP Edit

WHAT THIS PACK DOES:
This is a highly optimized PvP texture pack designed for competitive gameplay, UHC, and high framerates.
Description from pack: Rishav's 1M PvP Edit
[Made By Rishav]

WHERE TO LOOK FOR CHANGES:
- Look at ores while mining; they are highlighted for easy visibility.
- Use diamond tools to see the custom '1M Special' models.
- Experience combat with low-fire and short swords, plus a beautiful custom skybox.

SUPPORTED VERSION:
This pack supports Minecraft version(s): 1.21.4 (Format: 46)

HOW TO TEST IT:
1. Copy the parent folder ("Rishav's 1M PvP Edit") or the ZIP file of this pack.
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
  }
];
