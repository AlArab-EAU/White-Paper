#!/bin/bash
# Generate key futuristic visuals for the AlArab Whitepaper site
set -e
OUT=/home/z/my-project/public/images

# Hero: futuristic Arabian gulf city at night, deep blue + gold
z-ai image -p "Ultra futuristic Arabian Gulf megacity skyline at night, twin skyscrapers, holographic Arabic geometric patterns floating in dark navy blue sky, gold accents, deep navy blue color palette, cinematic, hyper-detailed, sci-fi concept art, no text" -o "$OUT/hero-city.png" -s 1440x720 &

# Golden City district - financial towers
z-ai image -p "Futuristic financial district in virtual metaverse, golden skyscrapers with glass facades, dark blue sky, holographic data streams, Arabic geometric accents, gold and navy blue palette, cinematic concept art, no text" -o "$OUT/district-golden.png" -s 1024x1024 &

# Culture Plaza district
z-ai image -p "Futuristic virtual museum and art gallery plaza, Arabic architecture with modern twist, dark blue ambient lighting with gold accents, floating digital art installations, concept art, no text" -o "$OUT/district-culture.png" -s 1024x1024 &

# Digital Souk district
z-ai image -p "Futuristic Arabian virtual marketplace, neon blue and gold glowing stalls, holographic product displays, dark blue night ambience, sci-fi bazaar concept art, no text" -o "$OUT/district-souk.png" -s 1024x1024 &

# Creative District
z-ai image -p "Futuristic creative district with digital film studios, music halls, gaming arenas, neon blue and purple lighting, holographic cinema screens, dark navy blue ambience, concept art, no text" -o "$OUT/district-creative.png" -s 1024x1024 &

wait
echo "All district images generated."
ls -la "$OUT"/district-*.png "$OUT"/hero-city.png
