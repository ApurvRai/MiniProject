!function() {
    var t=function(t)
  { 
    var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document;
      return e.querySelector(t)},e=function(t) {
        return window.getComputedStyle(t)},i=function(t,e){
            return Math.floor(Math.random()(e-t+1))+t},s=function(t,e){
                return 4*t+e
            };
    function n(){
       this.cells=function(t){
          return(arguments.length>1&&void 0!==arguments[1]?arguments[1]:document).querySelectorAll(t)
             }(".cell"),this.tiles=[0,0,0,0].map((function(t){
               return[0,0,0,0]})),this.merged=[0,0,0,0].map((function(t){
                 return[0,0,0,0]})),this.resetMerged=function(){
                   this.merged=[0,0,0,0].map((function(t){
                     return [0,0,0,0]}))},this.getRandomAvailableCell=function(){
                       var t=i(0,3),e=i(0,3);return this.empty(t,e)?{r:t,c:e}:!!this.tiles.some((function(t){
                         return t.some((function(t){
                          return 0===t}))}))&&this.getRandomAvailableCell()},this.empty=function(t,e){
                            return 0===this.tiles[t][e]}}function l(){
                                var i=this;this.tileMap=new n,this.board=t(".gameboard"),this.boundaries={minX:0,minY:0,maxX:3,maxY:3},this.ismoving=!1,this.GameOver=!1,this.newTilePositions=[],this.moved=!1,this.score=0,this.canMove={up:function(t,e){
                                       