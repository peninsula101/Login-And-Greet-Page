let inputElement = document.getElementById("inputElement");
let signInTextElement = document.getElementById("signInText");

function signIn() {
    let inputValue = inputElement.value;
    signInTextElement.innerHTML = "Hi " + `<span style='color:violet;'>${inputValue}</span>` + ",Verifying your account...";
    signInTextElement.style.color = "blue";
}
