// pause.js
import * as fct from "./fonctions.js";

export default class PauseManager extends Phaser.Scene {
  constructor() {
    super({ key: "PauseScene" });
  }

  init(data) {
    // On enregistre le niveau depuis lequel la pause a été déclenchée
    this.currentLevel = data.from;
  }

  create() {
    // Mettre en pause la musique de fond
    const music = this.registry.get('backgroundMusic');
    if (music && music.isPlaying) {
      music.pause();
    }
    
    // Fond semi-transparent qui recouvre l'écran
    this.add.rectangle(640, 365, 1280, 720, 0x000000, 0.6);

    // Titre Pause
    this.add.text(540, 250, "Pause", {
      fontSize: "64px",
      fontFamily: "Arial",
      color: "#ffffff"
    });

    // Texte instructions
    const btnResume = this.add.text(450, 380, "Appuie sur A ou I pour reprendre la partie", {
      fontSize: "28px",
      color: "#ffffff"
    });
    btnResume.setInteractive({ useHandCursor: true });
    btnResume.on('pointerover', () => btnResume.setColor('#ffcc00'));
    btnResume.on('pointerout', () => btnResume.setColor('#ffffff'));
    btnResume.on('pointerdown', () => this.resumeGame());

    const btnQuit = this.add.text(450, 430, "Appuie sur F ou M pour retourner au menu", {
      fontSize: "28px",
      color: "#ffffff"
    });
    btnQuit.setInteractive({ useHandCursor: true });
    btnQuit.on('pointerover', () => btnQuit.setColor('#ffcc00'));
    btnQuit.on('pointerout', () => btnQuit.setColor('#ffffff'));
    btnQuit.on('pointerdown', () => this.quitGame());

    // Créer les touches pour pouvoir les vérifier dans update()
    this.keyI = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.I);
    this.keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
    this.keyM = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.M);
    this.keyF = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
  }

  resumeGame() {
    // Reprendre la musique de fond
    const music = this.registry.get('backgroundMusic');
    if (music && music.isPaused) {
      music.resume();
    }
    
    this.scene.stop(); // ferme la scène Pause
    this.scene.resume(this.currentLevel); // reprend le niveau courant
  }

  quitGame() {
    // Arrêter la musique de fond
    const music = this.registry.get('backgroundMusic');
    if (music) {
      music.stop();
      this.registry.set('backgroundMusic', null);
    }
    
    // Réinitialiser toutes les stats du registry
    this.registry.set('playerHealth', 5);
    this.registry.set('playerMaxHealth', 5);
    this.registry.set('playerLevel', 1);
    this.registry.set('playerXP', 0);
    this.registry.set('enemiesKilled', 0);
    
    // Réinitialiser les skills
    this.registry.set('skillPointsAvailable', 0);
    this.registry.set('skillForce', 0);
    this.registry.set('skillVitesse', 0);
    this.registry.set('skillVie', 0);
    
    // Réinitialiser les potions
    fct.resetNbPotions();
    
    // Stopper la scène HUD
    this.scene.stop('hud');
    
    // Stopper la scène de pause et le niveau actuel
    this.scene.stop();
    this.scene.stop(this.currentLevel);
    
    // Retourner au menu
    this.scene.start("menu");
  }

  update() {
    // Touche I ou A → Reprendre le jeu
    if (Phaser.Input.Keyboard.JustDown(this.keyI) || Phaser.Input.Keyboard.JustDown(this.keyA)) {
      this.resumeGame();
    }

    // Touche M ou F → Quitter vers menu principal
    if (Phaser.Input.Keyboard.JustDown(this.keyM) || Phaser.Input.Keyboard.JustDown(this.keyF)) {
      this.quitGame();
    }
  }
}