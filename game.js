class Game{
constructor() {


}
getState() {

    var gameStateRef = database.ref('gameState');
    gameStateRef.on("value",function(data){
        gameState = data.val();
        console.log("gameState" + gameState);
    });

    }

updateState(state) {

    database.ref('/').update({
        gameState: state
        });

}  

start() {

if (gameState === 0) {

    

}

    }
}