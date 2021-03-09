// You can also log multiple values at once like this
//console.log(playerName, playerAttack, playerHealth);
var playerName = window.prompt("What is your robot's name?");

var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function(enemyName) {
    window.alert("Welcome to Robot Gladiators!");
    var promptFight = window.prompt("Would you like to fight or skip this battle? Enter 'fight' or 'skip' to choose.").toLowerCase();

    //if player chooses to fight, then fight
    // === checks for value and data type
    if (promptFight === "fight"){
        enemyHealth = enemyHealth - playerAttack;
        console.log(
            playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
        );
        //check enemy health
        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died!");
        } 
        else {
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }
    
        // remove player's health by subtracting the amount set in the enemyAttack variable
        playerHealth = playerHealth - enemyAttack;
        console.log(
            enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
        );
    
        // check player's health
        if (playerHealth <= 0) {
            window.alert(playerName + " has died!");
        }   
        else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }
    } 
    // if player choses to skip
    else if (promptFight === "skip") {
        window.alert(playerName + " has chosen to skip the fight!");
        var confirmSkip = window.confirm ("Are you sure you'd like to quit");

        if (confirmSkip) {
            window.alert(playername + "has decided to skip this fight. Goodbye!");
            playerMoney= playerMoney-2;
        }
        else fight();
    } 
    else {
        window.alert("You need to choose a valid option. Try again!");
        fight();
    }
};

for(var i = 0; i < enemyNames.length; i++) {
    console.log(enemyNames[i]);
    console.log(i);
    console.log(enemyNames[i] + " is at " + i + " index");
}

for(var i = 0; i < enemyNames.length; i++) {
    fight(enemyNames[i]);
}