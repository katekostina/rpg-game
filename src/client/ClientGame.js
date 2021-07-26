import ClientEngine from './ClientEngine';
import ClientWorld from './ClientWorld';
import levelCfg from '../configs/world.json';
import sprites from '../configs/sprites';
import gameObjects from '../configs/gameObjects.json';

class ClientGame {
  constructor(cfg) {
    Object.assign(this, {
      cfg,
      // cfg for now just point to { tagId: 'game' }
      gameObjects,
      // object with description of game objects and their characteristics
      player: null,
    });
    this.engine = this.createEngine();
    this.map = this.createWorld();
    this.initEngine();
  }

  setPlayer(player) {
    this.player = player;
  }

  createWorld() {
    return new ClientWorld(this, this.engine, levelCfg);
  }

  createEngine() {
    return new ClientEngine(document.getElementById(this.cfg.tagId), this);
  }

  initEngine() {
    this.engine.loadSprites(sprites).then(() => {
      this.map.init();
      this.engine.on('render', (_, time) => {
        this.engine.camera.focusAtGameObject(this.player);
        this.map.render(time);
      });
      this.engine.start();
      this.initKeys();
    });
  }

  initKeys() {
    this.engine.input.onKey({
      ArrowLeft: (keydown) => keydown && this.player.moveByCellOnSurface('left', 'grass'),
      ArrowRight: (keydown) => keydown && this.player.moveByCellOnSurface('right', 'grass'),
      ArrowUp: (keydown) => keydown && this.player.moveByCellOnSurface('up', 'grass'),
      ArrowDown: (keydown) => {
        if (keydown) {
          this.player.moveByCellOnSurface('down', 'grass');
        }
      },
    });
  }

  getWorld() {
    return this.map;
  }

  static init(cfg) {
    if (!ClientGame.game) {
      ClientGame.game = new ClientGame(cfg);
      // cfg for now just point to { tagId: 'game' }
    }
  }
}

export default ClientGame;
