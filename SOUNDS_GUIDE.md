# Guide des Effets Sonores du Jeu

## Sons Intégrés

### 🎯 Attaques du Joueur
- **sfx28-attack-338386.mp3** : Son joué lors des attaques du joueur
  - Attaque à distance (touche O)
  - Attaque à courte portée (niveau 3)
  - Fireballs

### 👾 Ennemis
- **8-bit-laser-151672.mp3** : Son de tir des ennemis
- **givedamage.mp3** : Son de mort des ennemis

### 💥 Dégâts et Combat
- **givedamage.mp3** : Son joué quand le joueur prend des dégâts
  - Contact avec les pics
  - Tiles dangereuses
  - Flèches ennemies

### 🎵 Sons Ambiants
- **retro-jump-3-236683.mp3** : Son de saut/mouvement vertical
- **retro-coin-4-236671.mp3** : Son de collecte (potions de soin)

### 🐉 Boss/Dragons
- **dragon-breathing-fire-364475.mp3** : Souffle de dragon (fireballs)
- **dragon-growl-364483.mp3** : Grognement de dragon (disponible pour futurs boss)

## Contrôles des Sons

Le système de sons est géré par la classe `SoundManager` qui permet de :
- Ajuster le volume général
- Ajuster le volume des effets sonores
- Arrêter tous les sons
- Jouer des sons spécifiques

## Utilisation

Tous les sons sont automatiquement joués lors des actions correspondantes. Aucune configuration supplémentaire n'est nécessaire.

## Fichiers Audio

Tous les fichiers audio sont stockés dans le dossier `assets/sounds/` :
- sfx28-attack-338386.mp3
- 8-bit-laser-151672.mp3
- givedamage.mp3
- retro-jump-3-236683.mp3
- retro-coin-4-236671.mp3
- dragon-breathing-fire-364475.mp3
- dragon-growl-364483.mp3
