let NameCount = 5;

function RandomDragonName(){

    let NameArea = document.getElementById("box1");
    
    const DragonNameFirst = ["Drak",
        "Ver","Zal","Ryth","Glae",
        "Kel","Vol","Eld","Skal",
        "Bryn","Fal","Sar","Ne",
        "Myr","Thal","Vor","Nar",
        "Fal","Mor","Halth","Mal"];

    const DragonNameLast = ["nor",
        "myr","rith","orn","dr",
        "gar","ran","dor",
        "thar","goth","mor","gan",
        "nor","ith","oth","mir",
        "gar","or","thor"];

    let DragonNames = [];

    for(i=0; i<NameCount; i++){
        let RandomizerFirst = Math.floor(Math.random() * DragonNameFirst.length);
        let RandomizerLast = Math.floor(Math.random() * DragonNameLast.length);
        let Dname = DragonNameFirst[RandomizerFirst] + DragonNameLast[RandomizerLast];
        DragonNames.push(Dname);
    }
    NameArea.innerHTML = " ";

    for(c=0; c<DragonNames.length; c++){
        NameArea.innerHTML += `<li><h2>${DragonNames[c]}</h2></li>`;
    }

}