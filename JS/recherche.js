const input = document.querySelector('#games');
const suggestions = document.querySelector('.suggestions ul');

const games = ["Ghost Recon Breakpoint", "Watch dogs legion", "F1 2022", "Project cars 3", "Call Of Duty Modern Warfare", "Atomic Heart", "Dead By Daylight", "Resident Evil Village", "Sonic Frontiers", "Rayman Legends", "FIFA 23", "NBA 2K23","Grand Theft Auto V", "Red Dead Redemption 2", "Minecraft", "God Of War", "Counter Strike GO", "Valorant", "Planet Zoo", "Transport Fever 2", "Path Of Exile", "Diablo III", "Escape The Backrooms", "Phasmophobia", "Hogwarts Legacy: L'Héritage De Poudlard", "The Witcher 3: Wild Hunt", "World Of Warcraft: DragonFlight", "Final Fantasy XIV: Endwalker", "League Of Legends", "Heores Of The Storm", "Age Of Empire IV", "Starcraft II: Legacy Of The Void", "Construction Simulator", "Microsoft Flight Simulator", "PGA Tour 2K23", "Monster Supercross", "Total War Warhammer 3", "Company Of Heroes 3"];

function search(str) {
    let results = [];
    const val = str.toLowerCase();

    for (i = 0; i < games.length; i++) {
        if (games[i].toLowerCase().indexOf(val) > -1) {
            results.push(games[i]);
        }
    }

    return results;
}

function searchHandler(e) {
    const inputVal = e.currentTarget.value;
    let results = [];
    if (inputVal.length > 0) {
        results = search(inputVal);
    }
    showSuggestions(results, inputVal);
}

function showSuggestions(results, inputVal) {

    suggestions.innerHTML = '';

    if (results.length > 0) {
        for (i = 0; i < results.length; i++) {
            let item = results[i];
            let itemWhitoutSpace = item.replace(/ /g, "_")
            let page;
            let j = 0
            // Highlights only the first match
            // TODO: highlight all matches
            const match = item.match(new RegExp(inputVal, 'i'));
            item = item.replace(match[0], `<strong>${match[0]}</strong>`);
            for (j = 0; j < games.length; j++) {
                if (games[j] == results[i]) {
                    switch (j) {
                        case 0:
                        case 1: page = "html jeux console/page principal/jeuxactionconsole.html"
                        break;
                        case 2:
                        case 3: page = "html jeux console/page principal/jeuxcourseconsole.html"
                        break;
                        case 4:
                        case 5: page = "html jeux console/page principal/jeuxfpsconsole.html"
                        break;
                        case 6:
                        case 7: page = "html jeux console/page principal/jeuxhorreurconsole.html"
                        break;
                        case 8:
                        case 9: page = "html jeux console/page principal/jeuxmultiplatformesconsole.html"
                        break;
                        case 10:
                        case 11: page = "html jeux console/page principal/jeuxsportconsole.html"
                        break;
                        case 12:
                        case 13: page = "html jeux pc/page principal/jeuxpcaction.html"
                        break;
                        case 14:
                        case 15: page = "html jeux pc/page principal/jeuxpcaventure.html"
                        break;
                        case 16:
                        case 17: page = "html jeux pc/page principal/jeuxpcfps.html"
                        break;
                        case 18:
                        case 19: page = "html jeux pc/page principal/jeuxpcgestion.html"
                        break;
                        case 20:
                        case 21: page = "html jeux pc/page principal/jeuxpchack'nslash.html"
                        break;
                        case 22:
                        case 23: page = "html jeux pc/page principal/jeuxpchorreur.html"
                        break;
                        case 24:
                        case 25: page = "html jeux pc/page principal/jeuxpcjeuxderole.html"
                        break;
                        case 26:
                        case 27: page = "html jeux pc/page principal/jeuxpcmmo.html"
                        break;
                        case 28:
                        case 29: page = "html jeux pc/page principal/jeuxpcmoba.html"
                        break;
                        case 30:
                        case 31: page = "html jeux pc/page principal/jeuxpcrts.html"
                        break;
                        case 32:
                        case 33: page = "html jeux pc/page principal/jeuxpcsimulation.html"
                        break;
                        case 34:
                        case 35: page = "html jeux pc/page principal/jeuxpcsport.html"
                        break;
                        case 36:
                        case 37: page = "html jeux pc/page principal/jeuxpcstrategie.html"
                        break;
                    
                        default: document.location.href = "html/404.html";
                            break;
                    }
                    if (page != null) {
                        break;
                    }
                }    
            }
            console.log(j);
            suggestions.innerHTML += `<a href="${page}#${j%2 == 0 ? '' : itemWhitoutSpace}"><li>${item}</li></a>`;
        }
        suggestions.classList.add('has-suggestions');
    } else {
        results = [];
        suggestions.innerHTML = '';
        suggestions.classList.remove('has-suggestions');
    }
}

function useSuggestion(e) {
    input.value = e.target.innerText;
    input.focus();
    suggestions.innerHTML = '';
    suggestions.classList.remove('has-suggestions');
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);