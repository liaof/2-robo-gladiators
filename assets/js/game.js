// You can also log multiple values at once like this
//console.log(playerName, playerAttack, playerHealth);
var playerName = window.prompt("What is your robot's name?");

var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

var randomNumber = function(min, max) {
    //Math.random returns 0<=i<1 

    //returns a random number between max and min
    var value = Math.floor(Math.random() * 2(max-min+1)+min) ;
    return value;
};

var fight = function(enemyName) {
    while (playerHealth > 0 && enemyHealth > 0) {
        var promptFight = window.prompt('Would you like FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');
  
        // if player picks "skip" confirm and then stop the loop
        if (promptFight === "skip") {
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");
            // if yes (true), leave fight
            if (confirmSkip) {
                window.alert(playerName + ' has decided to skip this fight. Goodbye!');
                playerMoney = Math.max(0, playerMoney - 10);
                console.log("playerMoney", playerMoney)
                break;
            }
        }
  
      // player's attack
        var damage = randomNumber(playerAttack - 3, playerAttack);
        enemyHealth = Math.max(0, enemyHealth - damage);;
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
        var damage = randomNumber(enemyAttack - 3, enemyAttack);
        playerHealth = Math.max(0, playerHealth - damage);
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



var startGame = function () {
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;
    for(var i = 0; i < enemyNames.length; i++) {
        if (playerHealth > 0) {
            window.alert("Welcome to Robot Gladiators! Round " + (i + 1)); 
            // reset enemyHealth before starting new fight
            enemyHealth = randomNumber(40,60);
            fight(enemyNames[i]);

            //calls the shop after every fight but only if there is one more enemy left hence the < and not <=
            //calls the shopt if the player still has health left
            if (i <enemyNames.length-1 && playerHealth >0) {
                //ask if player wants to use store before next round
                var storeConfirm = window.confirm("Would you like to visit the store before the next fight?");
                if (storeConfirm){
                    shop();
                }
            }
        }
        else {
            window.alert("You have lost your robot in battle! Game Over!");
        break;
        }
    }
    endGame();
};

var endGame = function() {
    if (playerHealth>0) {
        window.alert("Great job, you've survived the game! You now have a score of"+playerMoney+".");
    }
    else {
        window.alert("Thank you for playing Robot Gladiators! Come back soon!")
    }

    var playAgainConfirm = window.confirm("Would you like to play again?");

    if(playAgainConfirm){
        startGame();
    }
    else {
        window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    }
};

var shop = function () {
    console.log ("entered the shop");
    var shopOptionPrompt = window.prompt ("wWould you like to REFILL your health, UPGRADE your attack, or lEAVE the fight");
    switch (shopOptionPrompt) {
        //no code for case "REFILL" so it reads the code of the immediate next case
        case "REFILL":
        case "refill":
            if (playerMoney >= 7) {
                window.alert("Refilling player's health by 20 for 7 dollars.");
            
                // increase health and decrease money
                playerHealth = playerHealth + 20;
                playerMoney = playerMoney - 7;
            }
            else {
                window.alert("You don't have enough money!");
            }
            break;
        case "UPGRADE":
        case "upgrade":
            if (playerMoney >= 7) {
                window.alert("Upgrading player's attack by 6 for 7 dollars.");
            
               // increase attack and decrease money
                playerAttack = playerAttack + 6;
                playerMoney = playerMoney - 7;
            }
            else {
                window.alert("You don't have enough money!");
            }
            break;
        case "LEAVE":
        case "leave":
            window.alert("Leaving the store.");
            break;
        default:
            window.alert("You did not pick a valid option. Try again.");
      
            // call shop() again to force player to pick a valid option
            shop();
            break;
        }
}

startGame();