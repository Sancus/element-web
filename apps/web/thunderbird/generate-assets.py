#!/usr/bin/env python3
"""Regenerate the placeholder brand assets for the chat.thunderbird.net deployment.

These are deliberately neutral: a speech-bubble glyph rather than either the
Element logo (trademarked) or the Thunderbird bird (denotes the mail client, and
is not this deployment's to claim). Replace them wholesale when design supplies
a real mark; nothing else needs to change, the filenames are fixed by
res/manifest.json and src/vector/index.html.

Usage: python3 apps/web/thunderbird/generate-assets.py
"""

import os

from PIL import Image, ImageDraw

INK = (37, 51, 63)
PAPER = (255, 255, 255)
ICON_SIZES = (24, 120, 144, 152, 180, 512, 1024)

RES = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "res")


def draw_icon() -> Image.Image:
    """A rounded tile carrying a speech bubble, drawn oversized for downsampling."""
    s = 1024
    img = Image.new("RGBA", (s, s), (0, 0, 0, 0))
    d = ImageDraw.Draw(img)
    d.rounded_rectangle([0, 0, s - 1, s - 1], radius=round(s * 0.22), fill=INK)

    body_w, body_h = round(s * 0.58), round(s * 0.40)
    left, top = (s - body_w) // 2, round(s * 0.25)
    d.rounded_rectangle(
        [left, top, left + body_w, top + body_h],
        radius=round(body_h * 0.32),
        fill=PAPER,
    )

    # Tail, tucked under the left of the bubble and overlapping it by a pixel so
    # the join does not show a seam after downsampling.
    tail_x = left + round(body_w * 0.22)
    tail_y = top + body_h
    d.polygon(
        [
            (tail_x, tail_y - 2),
            (tail_x + round(body_w * 0.26), tail_y - 2),
            (tail_x + round(body_w * 0.04), tail_y + round(s * 0.15)),
        ],
        fill=PAPER,
    )
    return img


def draw_background(width: int = 1920, height: int = 1200) -> Image.Image:
    """Light vertical wash, so the dark wordmark stays legible over it."""
    column = Image.new("RGB", (1, height))
    start, end = (247, 249, 251), (219, 228, 235)
    for y in range(height):
        t = y / (height - 1)
        column.putpixel(
            (0, y),
            tuple(round(a + (b - a) * t) for a, b in zip(start, end)),
        )
    return column.resize((width, height), Image.BILINEAR)


def main() -> None:
    master = draw_icon()
    icons_dir = os.path.join(RES, "vector-icons")
    for size in ICON_SIZES:
        path = os.path.join(icons_dir, f"{size}.png")
        master.resize((size, size), Image.LANCZOS).save(path, optimize=True)
        print(f"wrote {os.path.relpath(path)}")

    backgrounds_dir = os.path.join(RES, "themes", "element", "img", "backgrounds")
    path = os.path.join(backgrounds_dir, "thunderbird-auth.jpg")
    draw_background().save(path, quality=88, optimize=True)
    print(f"wrote {os.path.relpath(path)}")


if __name__ == "__main__":
    main()
