// Creo l'array contentente la lista delle persone appartenenti al team

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
        "img" : "angela-lopez-social-media-manager",
    },
    {
        "nome" : "Scott",
        "cognome" : "Estrada",
        "ruolo" : "Developer",
        "img" : "scott-estrada-developer",
    },
    {
        "nome" : "Barbara",
        "cognome" : "Ramos",
        "ruolo" : "Graphic Designer",
        "img" : "barbara-ramos-graphic-designer",
    }
]

for (let i = 0; i < teamMembers.length; i++){
    let member = teamMembers[i];
    console.log(member.nome, member.cognome, member.ruolo, member.img);
}