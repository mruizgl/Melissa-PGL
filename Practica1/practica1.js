    const DOM = {
        table : document.getElementById("tabla"),
    }

    function generateTable() {
    let max = 10;
    let num = 2;
    let contain = "";
    for (let i = 0; i <= max; i++) {
        contain+= num + " * "+i+ " = " +(i*num) + "\n";
    }
    DOM.table.innerHTML = contain;

    }

    generateTable()