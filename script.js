/* =====================================
   HAPPY ANNIVERSARY
   Bebe ❤️ Bubuu
===================================== */

// Semua Scene

const scenes=document.querySelectorAll(".scene");

// Pindah Scene
function nextScene(number){

const current = document.querySelector(".scene.active");
const next = document.getElementById("scene" + number);

if(!current || !next){
    console.log("Scene tidak ditemukan");
    return;
}

current.classList.remove("active");
next.classList.add("active");

}

// Typing Cover

const coverText=

"ga terasa yaa bubuu... udaa satu tahun kita lewatin semuanya bersama. Hari ini bebee punya hadiah kecil buat kamu ❤️";

let typingIndex=0;

function typing(){

if(typingIndex<coverText.length){

document.getElementById("typing").innerHTML+=coverText.charAt(typingIndex);

typingIndex++;

setTimeout(typing,40);

}

}

typing();

// Love Letter

const loveLetter=

`Hai Bubuu...

Ga terasa yaa...

26 Juni 2025 menjadi salah satu hari paling berharga buat bebee.

Hari dimana kita resmi jadi "kita".

Terima kasih udah bertahan sejauh ini.

Terima kasih udah tetap memilih bebee walaupun bebee masih banyak kurangnya.

bebee tau bebee belum sempurna.

Masih sering bikin kamu kesel.

Masih sering bikin kamu sedih.

Tapi percaya...

bebee selalu berusaha jadi yang terbaik buat kamu.

Semoga anniversary pertama ini bukan yang terakhir.

Semoga kita masih bisa ngerayain anniversary ke-2.

Ke-5.

Ke-10.

Dan seterusnya.

bebee sayang kamu.

Happy 1st Anniversary Bubuu ❤️`;

function openLetter(){

nextScene(3);

typeLetter();

}

let letterIndex=0;

function typeLetter(){

if(letterIndex<loveLetter.length){

document.getElementById("letterText").innerHTML+=loveLetter.charAt(letterIndex);

letterIndex++;

setTimeout(typeLetter,25);

}

}
/* =====================================
   GALLERY
===================================== */

const gallery = [

"photo1.jpg",

"photo2.jpg",

"photo3.jpg",

"maya.jpg"

];

let galleryIndex = 0;

function nextPhoto(){

galleryIndex++;

if(galleryIndex >= gallery.length){

galleryIndex = 0;

}

document.getElementById("galleryImage").src = gallery[galleryIndex];

}

function prevPhoto(){

galleryIndex--;

if(galleryIndex < 0){

galleryIndex = gallery.length - 1;

}

document.getElementById("galleryImage").src = gallery[galleryIndex];

}

/* =====================================
   COUNTDOWN
===================================== */

const startDate = new Date("2025-06-26T21:33:00");

function updateCountdown(){

const now = new Date();

let diff = now - startDate;

const days = Math.floor(diff / (1000*60*60*24));

diff %= (1000*60*60*24);

const hours = Math.floor(diff / (1000*60*60));

diff %= (1000*60*60);

const minutes = Math.floor(diff / (1000*60));

diff %= (1000*60);

const seconds = Math.floor(diff / 1000);

document.getElementById("countdown").innerHTML =

`${days} Hari <br>
${hours} Jam ${minutes} Menit ${seconds} Detik ❤️`;

}

setInterval(updateCountdown,1000);

updateCountdown();

/* =====================================
   REASONS
===================================== */

const reasons=[

"Karena senyummu selalu bikin hari aku lebih baik ❤️",

"Karena kamu selalu perhatian 🤍",

"Karena kamu selalu sabar 🌸",

"Karena kamu menerima aku apa adanya 🫶",

"Karena kamu selalu ada saat aku butuh ☁️",

"Karena kamu cantik tanpa harus jadi siapa-siapa 🌷",

"Karena kamu bikin aku nyaman 🧸",

"Karena kamu adalah rumah ❤️"

];

let reasonIndex = 0;

function showReason(){

document.getElementById("reasonTitle").innerHTML=

`Alasan ${reasonIndex+1}`;

document.getElementById("reasonText").innerHTML=

reasons[reasonIndex];

}

function nextReason(){

reasonIndex++;

if(reasonIndex>=reasons.length){

reasonIndex=0;

}

showReason();

}

function previousReason(){

reasonIndex--;

if(reasonIndex<0){

reasonIndex=reasons.length-1;

}

showReason();

}

showReason();
/* =====================================
   MEMORY BOX
===================================== */

function openGift(){

const gift=document.getElementById("giftMessage");

const box=document.getElementById("giftBox");

box.innerHTML="❤️";

box.style.transform="scale(1.3)";

gift.style.display="block";

}

/* =====================================
   TRANSISI SCENE
===================================== */
/* =====================================
   LOVE BUTTON
===================================== */

const endButton=document.querySelector("#scene10 button");

if(endButton){

endButton.addEventListener("click",()=>{

alert("❤️\n\nHappy 1st Anniversary Bubuu\n\nTerima kasih udah bertahan selama satu tahun.\nbebee berharap website kecil ini bisa bikin kamu senyum.\n\nI Love You ❤️");

});

}

/* =====================================
   EFEK HATI
===================================== */

function createHeart(){

const heart=document.createElement("div");

heart.innerHTML="❤️";

heart.style.position="fixed";

heart.style.left=Math.random()*window.innerWidth+"px";

heart.style.top=window.innerHeight+"px";

heart.style.fontSize=(20+Math.random()*20)+"px";

heart.style.pointerEvents="none";

heart.style.transition="3s linear";

heart.style.zIndex="9999";

document.body.appendChild(heart);

setTimeout(()=>{

heart.style.top="-100px";

heart.style.opacity="0";

heart.style.transform="rotate(360deg)";

},100);

setTimeout(()=>{

heart.remove();

},3000);

}

setInterval(createHeart,1500);

/* =====================================
   ENTER KEY
===================================== */

document.addEventListener("keydown",(e)=>{

if(e.key==="Enter"){

const active=document.querySelector(".scene.active");

const number=parseInt(active.id.replace("scene",""));

if(number<10){

nextScene(number+1);

}

}

});

/* =====================================
   START
===================================== */

console.log("❤️ Happy Anniversary Bubuu ❤️");
