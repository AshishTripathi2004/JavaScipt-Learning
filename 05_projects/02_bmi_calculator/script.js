const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const height = parseInt(document.querySelector("#height").value);
    const weight = parseInt(document.querySelector("#weight").value);
    const res = document.querySelector("#result");

    if (height === "" || height < 0 || isNaN(height)) {
        res.innerHTML = "<span>Oops....Invalid Height...<span>";
    } else if (weight === "" || weight < 0 || isNaN(weight)) {
        res.innerHTML = "<span>Oops....Invalid Weight...<span>";
    } else {
        const bmi = (weight / ((height * height) / 1000)).toFixed(2);
        res.innerHTML = `BMI = ${bmi}`;
    }
});
