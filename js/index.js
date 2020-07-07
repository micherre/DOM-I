const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
// let logo = document.getElementById("logo-img");
// logo.setAttribute('src', siteContent["nav"]["img-src"])

const headerLinks = document.getElementsByTagName('a');
// console.log(header);
headerLinks[0].textContent = 'Services';
headerLinks[1].textContent = 'Product';
headerLinks[2].textContent = 'Vision';
headerLinks[3].textContent = 'Features';
headerLinks[4].textContent = 'About';
headerLinks[5].textContent = 'Contact';

headerLinks[0].style.color = 'Green';
headerLinks[1].style.color = 'Green';
headerLinks[2].style.color = 'Green';
headerLinks[3].style.color = 'Green';
headerLinks[4].style.color = 'Green';
headerLinks[5].style.color = 'Green';

const logo = document.querySelector('.logo');
// console.log(logo);
logo.setAttribute('src', 'img/logo.png');
// // logo.style.width = '20%';

// const header = document.querySelector('header');
// // header.style.display = 'flex'; 
// // header.style.wrap =
// console.log(header);

const nav = document.querySelector('nav');
const newEl = document.createElement('a');
const secondNewEl = document.createElement('a');
newEl.setAttribute('href', '#');
secondNewEl.setAttribute('href', '#');
newEl.textContent = "Start";
newEl.style.color = "Green";
secondNewEl.textContent = "End";
secondNewEl.style.color = "Green";
nav.appendChild(secondNewEl);
nav.prepend(newEl);

console.log(newEl);
// nav.prepend("'a href='#'");
// headerLinks[6].textContent = 'blob';

const headerText = document.querySelector('h1');
headerText.textContent = 'DOM Is Awesome';
// console.log(headerText);

const button = document.querySelector('button');
button.textContent = "Get Started";

const mainImg = document.getElementById("cta-img");
mainImg.setAttribute('src', 'img/header-img.png');

const textBlocks = document.getElementsByClassName("text-content");
// console.log(textBlocks);

const textBlockOne = textBlocks[0];
const textBlockTwo = textBlocks[1];
const textBlockThree = textBlocks[2];
const textBlockFour = textBlocks[3];
const textBlockFive = textBlocks[4];

// console.log(textBlockOne);

textBlockOne.querySelector('h4').textContent = 'Features';
textBlockTwo.querySelector('h4').textContent = 'About';
textBlockThree.querySelector('h4').textContent = 'Services';
textBlockFour.querySelector('h4').textContent = 'Product';
textBlockFive.querySelector('h4').textContent = 'Vision';

textBlockOne.querySelector('p').textContent = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
textBlockTwo.querySelector('p').textContent = 'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
textBlockThree.querySelector('p').textContent = 'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
textBlockFour.querySelector('p').textContent = 'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
textBlockFive.querySelector('p').textContent = 'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';

const middleImg = document.getElementById("middle-img");
middleImg.setAttribute('src', 'img/mid-page-accent.jpg');

const contactSection = document.getElementsByClassName("contact");
console.log(contactSection);
console.log(contactSection[0]);


// const addressLineOne = contactSection[0][1];
// const addressLineTwo = contactSection[0][2];
// const addressLineThree = contactSection [0][3];
// console.log(addressLineOne);
const contactArray = Array.from(contactSection);
console.log(contactArray); 

document.querySelector('.contact h4').textContent = 'Contact';
document.querySelector('.contact p').textContent = '123 Way 456 Street Somewhere, USA';

document.querySelector('footer p').textContent = 'Copyright Great Idea! 2018';

// console.log(contactSection[0].h4);
// contactSection[0][2].textContent = '1 (888) 888-8888';
// contactSection.querySelector('h4').textContent = 'Contact';
// contactSection.querySelector('p').textContent = '123 Way 456 Street <br> Somewhere, USA';