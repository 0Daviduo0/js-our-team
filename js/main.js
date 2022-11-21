// Creo l'array contentente la lista delle persone appartenenti al team
let cardsContainer = document.getElementById("cards_container");
const teamMembers = [
    {
        "nome" : "Wayne",
        "cognome" : "Barnett",
        "ruolo" : "Founder & CEO",
        "img" : "wayne-barnett-founder-ceo.jpg",
    },
    {
        "nome" : "Angela",
        "cognome" : "Caroll",
        "ruolo" : "Chief editor",
        "img" : "angela-caroll-chief-editor.jpg",
    },
    {
        "nome" : "Walter",
        "cognome" : "Gordon",
        "ruolo" : "Office Manager",
        "img" : "walter-gordon-office-manager.jpg",
    },
    {
        "nome" : "Angela",
        "cognome" : "Lopez",
        "ruolo" : "Social media Manager",
        "img" : "angela-lopez-social-media-manager.jpg",
    },
    {
        "nome" : "Scott",
        "cognome" : "Estrada",
        "ruolo" : "Developer",
        "img" : "scott-estrada-developer.jpg",
    },
    {
        "nome" : "Barbara",
        "cognome" : "Ramos",
        "ruolo" : "Graphic Designer",
        "img" : "barbara-ramos-graphic-designer.jpg",
    }
]

for (let i = 0; i < teamMembers.length; i++){
    let member = teamMembers[i];
    console.log(member.nome, member.cognome, member.ruolo, member.img);

    let memberContainer = document.createElement("div");
    memberContainer.classList.add("member_container");

    let memberImg = document.createElement("img");
    memberImg.classList.add("img");
    memberImg.src = `img/${member.img}`;

    let memberNameSurname = document.createElement("div");
    memberNameSurname.classList.add("name_surname");
    memberNameSurname.innerHTML += `${member.nome} ${member.cognome}`;

    let memberRole = document.createElement("div");
    memberRole.classList.add("role");
    memberRole.innerHTML += `${member.ruolo}`;

    cardsContainer.appendChild(memberContainer);
    memberContainer.appendChild(memberImg);
    memberContainer.appendChild(memberNameSurname);
    memberContainer.appendChild(memberRole);
}

