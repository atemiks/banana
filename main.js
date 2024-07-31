const links = [
    'https://t.me/OfficialBananaBot/banana?startapp=referral=RJLG4E', // i
    'https://t.me/OfficialBananaBot/banana?startapp=referral=7SJPLC',
    'https://t.me/OfficialBananaBot/banana?startapp=referral=RJLG4E', // i
    'https://t.me/OfficialBananaBot/banana?startapp=referral=C9A9M76',
];

const defaultLink = links[0];
const cta = document.getElementById('cta');

const getRandomNumber = () => {
    return Math.floor(Math.random() * links.length);
};

const redirectUser = () => {
    const randomNumber = getRandomNumber();
    const target = links[randomNumber];
    window.location.replace(target);
};

cta.addEventListener('click', redirectUser);
