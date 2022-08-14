'use strict';

const soldier = {
	health: 400,
	armor: 100
};

const soldierJohn = {
	health: 200,
};

soldierJohn.__proto__ = soldier;
console.log(soldierJohn.armor);