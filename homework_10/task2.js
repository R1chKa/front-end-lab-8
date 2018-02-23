function showResult(fighter) {
  console.log("Fighter", fighter.getName());
  console.log("- Combat stats:", fighter.getCombatHistory());
  console.log("- Properties:", fighter.getStats());
}

function fighter(fighterProp) {
  let combatHistory = {
    wins: 0,
    loses: 0
  };

  let stats = {
    name: fighterProp.name,
    attack: fighterProp.attack,
    hp: fighterProp.hp
  };

  getName = () => stats.name;

  fight = enemy => {
    if (!block()) {
      enemy.getStats().hp -= stats.attack;
      if (enemy.getStats().hp === 0) {
        combatHistory.wins++;
        enemy.getCombatHistory().loses++;
        console.log(
          `${stats.name} fatal hit ${stats.attack} damage to ${
            enemy.getStats().name
          }`
        );
        return true;
      } else {
        console.log(
          `${stats.name} hit ${stats.attack} damage to ${enemy.getStats().name}`
        );
        return true;
      }
    } else {
      console.log(
        `${enemy.getStats().name} block ${stats.attack} damage from ${
          stats.name
        }`
      );
      return false;
    }
  };

  block = () => Math.random() >= 0.5; // random true or false

  getStats = () => stats;

  getCombatHistory = () => combatHistory;

  return {
    getName,
    fight,
    block,
    getStats,
    getCombatHistory
  };
}

var fighter1 = fighter({ name: "John", attack: 100, hp: 100 });
var fighter2 = fighter({ name: "Kayn", attack: 50, hp: 300 });
var fighter3 = fighter({ name: "Bill", attack: 40, hp: 100 });

fighter1.fight(fighter2);
fighter1.fight(fighter3);

showResult(fighter1);
showResult(fighter2);
showResult(fighter3);
