enchant();

var stage, game;

gsettings = {
  width:320
    ,height: 320
    ,fps: 1
}

labelSettings = {
  color:"#000000"
    ,font:"bold 32px fantasy"
    ,message: "ワレワレハウチュウジンダ..."
    ,height: 32
}

var eLabel = Class.create(Label,{
  initialize:function(ls){
    Label.call(this);
    this.color = ls.color;
    this.font = ls.font;
    this.height = ls.height;
    this.y = (game.height - this.height) / 2;
    this.message = ls.message;
    this.counter = 0;
    stage.addChild(this);
  },
onenterframe:function(){
  this.text = this.message.charAt(
    this.counter % this.message.length
    );

  this.text = this.message.substring(
    0,this.counter % this.message.length
    );
  this.counter++;
}
});

window.onload = function(){
  game = new Game(gsettings.width,gsettings.height);
  stage = game.rootScene;         
  game.fps = gsettings.fps;

  game.onload = function(){
    new eLabel(labelSettings);

  };  
  game.start();
};                              
