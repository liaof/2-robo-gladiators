// You can also log multiple values at once like this
//console.log(playerName, playerAttack, playerHealth);
var playerInfo = {
    name: window.prompt("What is your robot's name?"),
    health: 100,
    attack: 10,
    money: 10
};

var enemyInfo = [
    {
      name: "Roborto",
      attack: 12
    },
    {
      name: "Amy Android",
      attack: 13
    },
    {
      name: "Robo Trumble",
      attack: 14
    }
];

var randomNumber = function(min, max) {
    //Math.random returns 0<=i<1 

    //returns a random number between max and min
    var value = Math.floor(Math.random() * 2(max-min+1)+min) ;
    return value;
};

var fight = function(enemyName) {
    while (playerInfo.health > 0 && enemyHealth > 0) {
        var promptFight = window.prompt('Would you like FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');
  
        // if player picks "skip" confirm and then stop the loop
        if (promptFight === "skip") {
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");
            // if yes (true), leave fight
            if (confirmSkip) {
                window.alert(playerInfo.name + ' has decided to skip this fight. Goodbye!');
                playerInfo.money= Math.max(0, playerInfo.money - 10);
                console.log("playe rMoney", playerInfo.money)
                break;
            }
        }
  
      // player's attack
        var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);
        enemyHealth = Math.max(0, enemyHealth - damage);;
        console.log(
            playerInfo.name + ' attacked ' + enemyName + '. ' + enemyName + ' now has ' + enemyHealth + ' health remaining.'
        );
  
      // check enemy's health
        if (enemyHealth <= 0) {//if enemy is dead
            window.alert(enemyName + ' has died!');
            playerInfo.money = playerInfo.money + 20;
            break;
        }   
        else {
            window.alert(enemyName + ' still has ' + enemyHealth + ' health left.');
        }
  
      // enemy's attack
        var damage = randomNumber(enemyAttack - 3, enemyAttack);
        playerInfo.health = Math.max(0, playerInfo.health - damage);
        console.log(
            enemyName + ' attacked ' + playerInfo.name + '. ' + playerInfo.name + ' now has ' + playerInfo.health + ' health remaining.'
        );
  
      // check player's health
        if (playerInfo.healthh <= 0) {
            window.alert(playerInfo.name + ' has died!');
            // leave while() loop if player is dead
            break;
        } 
        else {
            window.alert(playerInfo.name + ' still has ' + playerInfo.health + ' health left.');
        }
    }
};



var startGame = function () {
    playerInfo.health = 100;
    playerInfo.attack = 10;
    playerInfo.money = 10;
    for(var i = 0; i < enemyNames.length; i++) {
        if (playerInfo.health > 0) {
            window.alert("Welcome to Robot Gladiators! Round " + (i + 1)); 
            // reset enemyHealth before starting new fight
            enemyHealth = randomNumber(40,60);
            fight(enemyNames[i]);

            //calls the shop after every fight but only if there is one more enemy left hence the < and not <=
            //calls the shopt if the player still has health left
            if (i <enemyNames.length-1 && playerInfo.health >0) {
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
    if (playerInfo.health>0) {
        window.alert("Great job, you've survived the game! You now have a score of"+playerInfo.money+".");
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
            if (playerInfo.money >= 7) {
                window.alert("Refilling player's health by 20 for 7 dollars.");
            
                // increase health and decrease money
                playerInfo.health = playerInfo.health + 20;
                playerInfo.money = playerInfo.money - 7;
            }
            else {
                window.alert("You don't have enough money!");
            }
            break;
        case "UPGRADE":
        case "upgrade":
            if (playerInfo.money >= 7) {
                window.alert("Upgrading player's attack by 6 for 7 dollars.");
            
               // increase attack and decrease money
                playerInfo.attack = playerInfo.attack + 6;
                playerInfo.money = playerInfo.money - 7;
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