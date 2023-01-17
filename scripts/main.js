import { getFish } from './database.js'
import { mostHolyFish } from './fish.js'
import { soldierFish } from './fish.js'
import { nonHolyFish } from './fish.js'


const allFish = getFish()

for (const fish of allFish) {
    console.log(fish)
}

// Import the FishList function from the correct module
import { FishList } from './fishlist.js'
/*
    What is the CSS selector for the element where you
    want to display the fish?

    Use . for elements with a "class" attribute
    Use # for elements with an "id" attribute
 */
const parentHTMLElement = document.querySelector(".fishTank")


// parentHTMLElement.innerHTML = FishList()


import {fishList1} from './fish.js'
import {fishList2} from './fish.js'
import {fishList3} from './fish.js'

const parHTML1 = document.querySelector(".fishTank1")
const parHTML2 = document.querySelector(".fishTank2")
const parHTML3 = document.querySelector(".fishTank3")

parHTML1.innerHTML = fishList1();
parHTML2.innerHTML = fishList2();
parHTML3.innerHTML = fishList3();

