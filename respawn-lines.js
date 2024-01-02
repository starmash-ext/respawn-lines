!function() {

  SWAM.on("gameRunning",async function () {
    const previousGamesPrep = Games.prep;
    const createSprite = ({color,x,y, height,width}) => {
      var sprite = new PIXI.Sprite(PIXI.Texture.WHITE);
      sprite.tint = color; //Change with the color wanted
      sprite.alpha = 0.3;
      sprite.width = width;
      sprite.height = height;
      sprite.x = x
      sprite.y = y
      sprite.roundPixels = true
      return sprite
    }
    const blueXSpawn = createSprite({color:0x0000FF, x:0,y:-config.mapHeight/2, height:config.mapHeight,width:1/game.graphics.layers.groundobjects.scale.x})
    const redXSpawn = createSprite({color:0xFF0000, x:-1024,y:-config.mapHeight/2, height:config.mapHeight,width:1/game.graphics.layers.groundobjects.scale.x})
    const blueYSpawn = createSprite({color:0x0000FF, y:0, x:0,  width:config.mapWidth/2,height:1/game.graphics.layers.groundobjects.scale.y})
    const redYSpawn = createSprite({color:0xFF0000, y:-512, x:-1024 - config.mapWidth/2,width:config.mapWidth/2,height:1/game.graphics.layers.groundobjects.scale.y})
    Games.prep = () => {
      previousGamesPrep();
      if (game.gameType === 2) {
        game.graphics.layers.groundobjects.addChild(redXSpawn)
        game.graphics.layers.groundobjects.addChild(blueXSpawn)
        game.graphics.layers.groundobjects.addChild(redYSpawn)
        game.graphics.layers.groundobjects.addChild(blueYSpawn)
      } else {
        game.graphics.layers.groundobjects.removeChild(redXSpawn)
        game.graphics.layers.groundobjects.removeChild(blueXSpawn)
        game.graphics.layers.groundobjects.removeChild(redYSpawn)
        game.graphics.layers.groundobjects.removeChild(blueYSpawn)
      }
    }
    SWAM.on("rendererResized", async function () {
      redXSpawn.width = 1/game.graphics.layers.groundobjects.scale.x
      blueXSpawn.width = 1/game.graphics.layers.groundobjects.scale.x
      redYSpawn.height = 1/game.graphics.layers.groundobjects.scale.y
      blueYSpawn.height = 1/game.graphics.layers.groundobjects.scale.y
    })
  });

  SWAM.registerExtension({
      name: "Add CTF respawn lines",
      id: "respawn-lines",
      description: "CTF Respawn lines",
      author: "Debug",
      version: "1.0"
  });

}();
    
