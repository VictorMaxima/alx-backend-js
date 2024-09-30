console.log("new to node")
import {taskFirst, taskNext} from './0-constants.js';
import taskBlock from './1-block-scoped.js'
import getSumOfHoods from './3-default-parameter.js';
import getSanFranciscoDescription from './6-string-interpolation.js';
import getBudgetForCurrentYear from './8-getBudgetCurrentYear.js';
console.log(getBudgetForCurrentYear(2100, 5200, 1090));
console.log(taskFirst());
console.log(taskBlock(false));
console.log(taskBlock(true))
console.log(getSumOfHoods(34));
console.log(getSumOfHoods(34,3));
console.log(getSumOfHoods(34,3,4));
console.log(getSanFranciscoDescription());