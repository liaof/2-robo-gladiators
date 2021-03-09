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
    while (playerHealth > 0 && enemyHealth > 0) {
        var promptFight = window.prompt('Would you like FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');
  
        // if player picks "skip" confirm and then stop the loop
        if (promptFight === "skip") {
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");
            // if yes (true), leave fight
            if (confirmSkip) {
                window.alert(playerName + ' has decided to skip this fight. Goodbye!');
                playerMoney = playerMoney - 10;
                console.log("playerMoney", playerMoney)
                break;
            }
        }
  
      // player's attack
        enemyHealth = enemyHealth - playerAttack;
        console.log(
            playerName + ' attacked ' + enemyName + '. ' + enemyName + ' now has ' + enemyHealth + ' health remaining.'
        );
  
      // check enemy's health
        if (enemyHealth <= 0) {//if enemy is dead
            window.alert(enemyName + ' has died!');
            playerMoney = playerMoney + 20;
            break;
        }   
        else {
            window.alert(enemyName + ' still has ' + enemyHealth + ' health left.');
        }
  
      // enemy's attack
        playerHealth = playerHealth - enemyAttack;
        console.log(
            enemyName + ' attacked ' + playerName + '. ' + playerName + ' now has ' + playerHealth + ' health remaining.'
        );
  
      // check player's health
        if (playerHealth <= 0) {
            window.alert(playerName + ' has died!');
            // leave while() loop if player is dead
            break;
        } 
        else {
            window.alert(playerName + ' still has ' + playerHealth + ' health left.');
        }
    }
};

for(var i = 0; i < enemyNames.length; i++) {
    console.log(enemyNames[i]);
    console.log(i);
    console.log(enemyNames[i] + " is at " + i + " index");
}

for(var i = 0; i < enemyNames.length; i++) {
    if (playerHealth > 0) {
        window.alert("Welcome to Robot Gladiators! Round " + (i + 1)); 
        // reset enemyHealth before starting new fight
        enemyHealth = 50;
        fight(enemyNames[i]);
      }
    else {
        window.alert("You have lost your robot in battle! Game Over!");
        break;
    }
}