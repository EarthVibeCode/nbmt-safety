#!/bin/bash
# Run before each push: stamps a new version so phones auto-reload to the latest build.
cd "$(dirname "$0")"
V=$(date +%Y%m%d%H%M%S)
echo "{\"v\":\"$V\"}" > version.json
for f in index.html fire/index.html traffic/pass.html traffic/race.html; do
  sed -i -E "s/(const BUILD = ')[0-9]+(')/\1$V\2/" "$f"
  sed -i -E "s/(\.(webp|jpg|png|mp4|svg))\?b=[0-9]+/\1/g; s/(src|href|poster)=\"(\.\.\/)?(img\/[^\"?]+|favicon\.svg)\"/\1=\"\2\3?b=$V\"/g" "$f"
done
sed -i -E "s/race_i18n\.js(\?b=[0-9]+)?\"/race_i18n.js?b=$V\"/" traffic/race.html
echo "version $V"
