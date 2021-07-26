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
      ArrowLeft: (keydown) => keydown && this.moveByCellOnSurface('left', 'grass'),
      ArrowRight: (keydown) => keydown && this.moveByCellOnSurface('right', 'grass'),
      ArrowUp: (keydown) => keydown && this.moveByCellOnSurface('up', 'grass'),
      ArrowDown: (keydown) => keydown && this.moveByCellOnSurface('down', 'grass'),
    });
  }

  moveByCellOnSurface(dir, surface) {
    const dirs = {
      left: [-1, 0],
      right: [1, 0],
      up: [0, -1],
      down: [0, 1],
    };

    const { player } = this;

    if (player && player.motionProgress === 1) {
      const canMove = player.moveByCellCoord(
        dirs[dir][0],
        dirs[dir][1],
        (cell) => cell.findObjectsByType(surface).length,
      );

      if (canMove) {
        player.setState(dir);
        player.once('motion-stopped', () => player.setState('main'));
      }
    }
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
