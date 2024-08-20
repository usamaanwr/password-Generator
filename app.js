let inputslider = document.getElementById(`inputslider`);
let slidervalue = document.getElementById(`slidervalue`);
let passbox = document.getElementById(`passbox`);
let lowercase = document.getElementById(`lowercase`);
let Upercase = document.getElementById(`Upercase`);
let Number = document.getElementById(`Number`);
let Symbol = document.getElementById(`Symbol`);
let genbtn = document.getElementById(`genbtn`);
let copyicon = document.getElementById(`copyicon`)

slidervalue.textContent = inputslider.value;
inputslider.addEventListener(`input`, () => {
    slidervalue.textContent = inputslider.value;
});

genbtn.addEventListener(`click`, () => {
    passbox.value = generatePassword();
})
let lowerchars = "abcdefghijklomopqrstuvwxyz";
let Uperchars = "ABCDEFGHIJKLMONPQRSTUVWXYZ";
let allNumber = "0123456789"
let allsymbols = "!@#$%^&*"
function generatePassword() {
    let genPassword = "";
    let allchars = "";

    allchars += lowercase.checked ? lowerchars : "";
    allchars += Upercase.checked ? Uperchars : "";
    allchars += Number.checked ? allNumber : "";
    allchars += Symbol.checked ? allsymbols : "";
    if (allchars == "" || allchars.length == 0) {
        return genPassword;
    }
    let i = 1;
    while (i<=inputslider.value) {
        genPassword += allchars.charAt(Math.floor(Math.random() * allchars.length));
        i++;
    }

    return genPassword;
}

copyicon.addEventListener(`click`,() =>{
    if(passbox.value != "" || passbox.value.length >=1){
        navigator.clipboard.writeText(passbox.value);
        copyicon.innerHTML = "check";
        copyicon.title = "password copied";
        setTimeout(()=>{
            copyicon.innerHTML = "content_copy";
            copyicon.title = ""
        },3000)

    }
})