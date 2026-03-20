let count = 0;
const value = document.querySelector(".count");
const buttons = document.querySelectorAll(".buttons button");
buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        const styles = e.currentTarget.classList;
        if (styles.contains("decrease")) {
            count--;
        }
        else if (styles.contains("increase")) {
            count++;
        }
        else {
            count = 0;
        }
        value.textContent = count;
        if (count > 0) {
            value.style.color = "green";
        }
        else if (count < 0) {
            value.style.color = "red";
        }
        else {
            value.style.color = "black";
        }
    })
});
