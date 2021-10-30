const modal = document.querySelector("#modal");
const modalHeading = modal.querySelector("h1");
const modalText = modal.querySelector(".modal-content div");

const buttons = document.querySelectorAll("button");

buttons.forEach(button =>
{
    button.onclick = () => {

        modal.style.display = "block";
        modalHeading.innerText = button.parentElement.querySelector("h1").innerText;
        modalText.innerHTML = button.parentElement.querySelector(".modal-text").innerHTML;
    }
})

window.onclick = function (event)
{
    if (event.target === modal)
    {
        modal.style.display = "none";
    }
}