const NameCount = 5;

function GetMaleName(){
    let NameArea = document.getElementById("box1");
    let TitleChecked = document.getElementById("GetChecked");
    let MaleNamesFirst = ["Thal",
    "Alar",
    "Gor",
    "Kayn",
    "Ber",
    "Dun",
    "Lor",
    "Rol",
    "Gar",
    "Val"];  
    let MaleNamesLast = ["ric",
    "thor",
    "grim",
    "dan",
    "gar",
    "mir",
    "win",
    "nor",
    "den",
    "mar"];
    let MaleTitles = ["Lord of the Shattered Isles",
        "Warden of the Northern Reaches",
        "Archmage of the Silver Spire",
        "Knight of the Crimson Blade",
        "Guardian of the Eternal Flame",
        "High King of the Shadowlands",
        "Commander of the Iron Legion",
        "Duke of the Ebon Keep",
        "Baron of the Darkwood",
        "Master of the Arcane Circle"
    ];
    let MaleFullNames = []; 
    NameArea.innerHTML = " ";
    for(i= 0; i <NameCount; i++){
        let NameRandomizerFirst = Math.floor(Math.random() * MaleNamesFirst.length);
        let NameRandomizerLast = Math.floor(Math.random() * MaleNamesLast.length);
        let TitleRandomizer = Math.floor(Math.random() * MaleTitles.length);  
        if(!TitleChecked.checked){
            let Mname = MaleNamesFirst[NameRandomizerFirst] + MaleNamesLast[NameRandomizerLast];
            MaleFullNames.push(Mname)
        }
        else{
            let Mname = MaleNamesFirst[NameRandomizerFirst] +
            MaleNamesLast[NameRandomizerLast] +" "+ MaleTitles[TitleRandomizer];
            MaleFullNames.push(Mname)
        }
    }
    for(c = 0; c <MaleFullNames.length; c++){
        NameArea.innerHTML += `<li><h2>${MaleFullNames[c]}</h2></li>`;
    }
}

function GetFemaleName(){
    let NameArea = document.getElementById("box1");
    let TitleChecked = document.getElementById("GetChecked");

    let FemaleNamesFirst = ["El",
    "Lyra",
    "Ser",
    "Nia",
    "Mae",
    "Ira",
    "Ada",
    "Rae",
    "Sel",
    "Vera"];  
    let FemaleNamesLast = ["ara",
    "wyn",
    "lin",
    "del",
    "ria",
    "sa",
    "mia",
    "ra",
    "tia",
    "na"];   
    let FemaleTitles = ["Mistress of the Enchanted Forest",
        "Lady of the Shimmering Veil",
        "Queen of the Midnight Realm",
        "High Priestess of the Moon Temple",
        "Guardian of the Sacred Grove",
        "Sorceress of the Hidden Isles",
        "Duchess of the Whispering Woods",
        "Warden of the Eternal Flame",
        "Empress of the Silver Crescent",
        "Commander of the Shadowguard"];    
    let FemaleFullNames = [];
    NameArea.innerHTML = " ";
    for(i=0; i < NameCount; i++){
        let NameRandomizerFirst = Math.floor(Math.random() * FemaleNamesFirst.length);
        let NameRandomizerLast = Math.floor(Math.random() * FemaleNamesLast.length);
        let TitleRandomizer = Math.floor(Math.random() * FemaleTitles.length);

        if(!TitleChecked.checked){
            let Fname = FemaleNamesFirst[NameRandomizerFirst] + FemaleNamesLast[NameRandomizerLast];
            FemaleFullNames.push(Fname);
        }
        else{
            let Fname = FemaleNamesFirst[NameRandomizerFirst] + FemaleNamesLast[NameRandomizerLast] +
            " "+FemaleTitles[TitleRandomizer];
            FemaleFullNames.push(Fname);
        }      
    }
    for(c = 0; c < NameCount; c++){
        NameArea.innerHTML += `<li><h2>${FemaleFullNames[c]}<h2></li>`
    }  
    
}