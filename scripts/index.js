const jsonToCSV = () => {

    let jsonData = undefined;

    try {
        jsonData = JSON.parse(document.getElementById("json").value);
    }

    catch(error) {
        alert(`${error.message}`);
        return;
    }

    const header = Object.keys(jsonData[0]).join(",");

    const rows = [];

    for (let i = 0; i < jsonData.length; i++) {
        rows.push(Object.values(jsonData[i]).join(","));
    }

    document.getElementById("csv").value = header + "\n" + rows.join("\n");
}

const form = document.querySelector("form");
form.addEventListener("submit", event => {
    event.preventDefault();
    jsonToCSV();
});

const clearBtn = document.querySelector('input[type="button"]');
clearBtn.addEventListener("click", () => {
    document.getElementById("json").value = "";
    document.getElementById("csv").value = "";
});