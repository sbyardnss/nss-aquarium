import { getFish } from "./database.js"

export const mostHolyFish = () => {
    // 3, 6, 9, 12, etc... fish
    const holyFish = [];
    const fishes = getFish();
    for (const fish of fishes) {
        if (fish.size % 3 ===0) {
            holyFish.push(fish);
        }
    }

    return holyFish
}

export const soldierFish = () => {
    const soldiers = [];
    const fishes = getFish();

    for (const fish of fishes) {
        if (fish.size % 5 === 0) {
            soldiers.push(fish);
        }
    }
    return soldiers
}

export const nonHolyFish = () => {
    const regulars = [];
    const fishes = getFish();
    for (const fish of fishes) {
        if ((fish.size % 3 !== 0) && (fish.size % 5 !== 0)) {
            regulars.push(fish);
        }
    }
    // Any fish not a multiple of 3 or 5
    return regulars
}






export const fishList1 = () => {
    const fishes = mostHolyFish();
    let htmlString = '<article class="fishTank">'
    for (const fish of fishes) {
        htmlString += `<section class="fish card">
        <div><img  class="fishImg" src="${fish.image}" /></div>
        <div class="fish__name">holy boy ${fish.name}</div>
        <div class="fish__species">${fish.species}</div>
        <div class="fish__length">${fish.size} feet</div>
        <div class="fish__diet">${fish.food}</div>
        </section>`
    }
    htmlString += `</article>`

    return htmlString
}


export const fishList2 = () => {
    const fishes = soldierFish();
    let htmlString = '<article class="fishTank">'
    for (const fish of fishes) {
        htmlString += `<section class="fish card">
        <div><img  class="fishImg" src="${fish.image}" /></div>
        <div class="fish__name">soulja boy ${fish.name}</div>
        <div class="fish__species">${fish.species}</div>
        <div class="fish__length">${fish.size} feet</div>
        <div class="fish__diet">${fish.food}</div>
        </section>`
    }
    htmlString += `</article>`

    return htmlString
}

export const fishList3 = () => {
    const fishes = nonHolyFish();
    let htmlString = '<article class="fishTank">'
    for (const fish of fishes) {
        htmlString += `<section class="fish card">
        <div><img  class="fishImg" src="${fish.image}" /></div>
        <div class="fish__name">UNHOLY${fish.name}</div>
        <div class="fish__species">${fish.species}</div>
        <div class="fish__length">${fish.size} feet</div>
        <div class="fish__diet">${fish.food}</div>
        </section>`
    }
    htmlString += `</article>`

    return htmlString
}