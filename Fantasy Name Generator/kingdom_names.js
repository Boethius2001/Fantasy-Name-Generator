const NameCount = 5;
function GetKingdom(){
    let NameArea = document.getElementById("box1");
    const NameFirst = ["Eld",
    "Val",
    "Drak",
    "Thal",
    "Nor",
    "Cyr",
    "Ald",
    "Myth",
    "Sol",
    "Ar"];    
    const NameLast = ["oria",
    "mar",
    "dorn",
    "wyn",
    "helm",
    "dor",
    "land",
    "oria",
    "gard",
    "en"];
    let FullNames = [];
    NameArea.innerHTML = " ";
    for(i=0;i<NameCount;i++){
        let RandomizerFirst = Math.floor(Math.random() * NameFirst.length);
        let RandomizerLast = Math.floor(Math.random() * NameLast.length);
        let Fname = NameFirst[RandomizerFirst] + NameLast[RandomizerLast];
        FullNames.push(Fname);
    }
    for(e=0;e<NameCount;e++){
        NameArea.innerHTML += `<li><h2>${FullNames[e]}</h2></li>`;
    }
}