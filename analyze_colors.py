from collections import Counter
import struct

def get_dominant_colors(image_path, num_colors=3):
    try:
        with open(image_path, 'rb') as f:
            data = f.read()
    except FileNotFoundError:
        print(f"Error: File not found at {image_path}")
        return []

    # minimal png parser to get palette or raw pixels would be hard without PIL
    # but we can try to just look for chunks if it's simple, or better:
    # use a simple heuristic or just ask the user if we can't use PIL.
    # Wait, standard python lib doesn't have image processing.
    # I should check if PIL/Pillow is installed.
    pass

if __name__ == "__main__":
    # Check for PIL
    try:
        from PIL import Image
        img = Image.open("public/images/favicon.png")
        img = img.convert("RGB")
        img = img.resize((50, 50)) # resize to speed up
        pixels = list(img.getdata())
        counts = Counter(pixels)
        num_colors = 10
        common = counts.most_common(num_colors)
        print("Dominant Colors:")
        for color, count in common:
            print(f"#{color[0]:02x}{color[1]:02x}{color[2]:02x}")
    except ImportError:
        print("PIL not installed.")
