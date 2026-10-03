"""Rebuild the bookmarklet URL in bookmarklet.html from src/bookmarklet.js.

Usage: python3 build.py   (requires: npx terser)
"""
import re, subprocess, urllib.parse, pathlib

root = pathlib.Path(__file__).parent
minified = subprocess.run(
    ["npx", "--yes", "terser@5", "src/bookmarklet.js", "-c", "-m"],
    cwd=root, check=True, capture_output=True, text=True,
).stdout.strip()
url = "javascript:" + urllib.parse.quote(minified, safe="()'*!~-_.")
page = root / "bookmarklet.html"
html = page.read_text(encoding="utf-8")
html = re.sub(r'(<a class="bm" id="bm" href=")[^"]*(")', lambda m: m.group(1) + url + m.group(2), html)
html = re.sub(r'(<textarea id="c"[^>]*>)[^<]*(</textarea>)', lambda m: m.group(1) + url + m.group(2), html)
page.write_text(html, encoding="utf-8")
print(f"bookmarklet.html updated ({len(url):,} chars)")
