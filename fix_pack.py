import os
import zipfile
import urllib.request
import shutil
from PIL import Image

zip_path = r"d:\My Projects\Minecraft Portfolio\website\public\downloads\streamer-pvp-edit.zip"
temp_dir = "temp_pack"
dark_dir = "dark_pack"

print("Downloading Default-Dark-Mode for 1.21...")
dark_zip = "dark.zip"
dark_url = "https://cdn.modrinth.com/data/6SLU7tS5/versions/tPC8gaIQ/Default-Dark-Mode-26.2-2026.6.0.zip"
urllib.request.urlretrieve(dark_url, dark_zip)

print("Extracting Dark Pack...")
with zipfile.ZipFile(dark_zip, 'r') as z:
    z.extractall(dark_dir)

print("Extracting Streamer Pack...")
with zipfile.ZipFile(zip_path, 'r') as z:
    z.extractall(temp_dir)

print("Copying and tinting 1.21 GUI sprites...")
src_sprites = os.path.join(dark_dir, "assets", "minecraft", "textures", "gui", "sprites", "container")
dst_sprites = os.path.join(temp_dir, "assets", "minecraft", "textures", "gui", "sprites", "container")

if not os.path.exists(dst_sprites):
    os.makedirs(dst_sprites)

# Copy inventory and a few others, and tint them purple
for file in os.listdir(src_sprites):
    if file.endswith(".png"):
        s_path = os.path.join(src_sprites, file)
        d_path = os.path.join(dst_sprites, file)
        
        try:
            img = Image.open(s_path).convert("RGBA")
            pixels = img.load()
            for y in range(img.height):
                for x in range(img.width):
                    r, g, b, a = pixels[x, y]
                    if a > 0:
                        # Tint purple/blue for "branding"
                        pixels[x, y] = (int(r * 0.7), int(g * 0.4), int(b * 0.9), int(a * 0.9))
            img.save(d_path)
        except Exception as e:
            print("Skipped", file, e)

print("Fixing font...")
# For the font, if the default.json override didn't work nicely, we can remove it
# Or we can put a proper faithful-like TTF configuration.
# But for now, let's just delete the font folder we added previously so we don't break chat.
bad_font_dir = os.path.join(temp_dir, "assets", "minecraft", "font")
if os.path.exists(bad_font_dir):
    shutil.rmtree(bad_font_dir)
    
print("Re-zipping pack...")
with zipfile.ZipFile(zip_path, 'w', zipfile.ZIP_DEFLATED) as zipf:
    for root, dirs, files in os.walk(temp_dir):
        for file in files:
            file_path = os.path.join(root, file)
            arcname = os.path.relpath(file_path, temp_dir)
            zipf.write(file_path, arcname)

print("Done! Cleaning up...")
shutil.rmtree(temp_dir)
shutil.rmtree(dark_dir)
os.remove(dark_zip)
