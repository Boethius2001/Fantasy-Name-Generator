const NameCount = 5;

function GetLordName(){
    let NameArea = document.getElementById("box1");
    let TitleCheck = document.getElementById("GetChecked");

    const NamesFirst = ["Mal","Thar","Grim","Vorn","Dread",
        "Noct","Vex","Mor","Sable","Zhul"];

    const NamesLast = ["thos","var","loth","drak","mar",
        "nok","gash","rax","zor","mal"];

    const LordTitles = ["Lord of Shadows",
        "The Eternal Warlord",
        "Master of the Abyss",
        "The Void Reaper",
        "Harbinger of Doom",
        "Emperor of Nightmares",
        "The Soul Devourer",
        "Bringer of Despair",
        "The Black Sovereign",
        "Tyrant of the Dark Realms"];

    let FullNames = [];

    NameArea.innerHTML = " ";

    for(i=0; i<NameCount; i++){
        let RandomizerFirst = Math.floor( Math.random() * NamesFirst.length);
        let RandomizerLast = Math.floor( Math.random() * NamesLast.length);
        let RandomizerTitles = Math.floor( Math.random() * LordTitles.length);

        if(!TitleCheck.checked){
            let Lname = NamesFirst[RandomizerFirst] + NamesLast[RandomizerLast];
            FullNames.push(Lname);
        }
        else{
            let Lname = NamesFirst[RandomizerFirst] + NamesLast[RandomizerLast];
            Lname += " "+LordTitles[RandomizerTitles];
            FullNames.push(Lname);
        }

    }

    for(e=0; e < NameCount; e++){
        NameArea.innerHTML += `<li><h2>${FullNames[e]}</h2></li>`;
    }

    console.log(FullNames)

}