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

    const csvData = header + "\n" + rows.join("\n");

    const csv = document.getElementById("csv");
    csv.value = csvData;
}

const form = document.querySelector("form");
form.addEventListener("submit", event => {
    event.preventDefault();
    jsonToCSV();
});