    const DOM = {
        table : document.getElementById("tabla"),
    }

    function generateTable() {
    let max = 10;
    let num = 2;
    let contain = "";
    let elFila = document.createElement("tr");
    let elCol = document.createElement("td");
    elFila.appendChild(elCol);
    
    for (let i = 0; i <= max; i++) {
        
        contain+= num + " * "+i+ " = " +(i*num) + "\n";
        elCol.innerHTML = contain;
        elFila.appendChild(elCol);
        DOM.table.appendChild(elFila);
        
    }
    DOM.table.innerHTML = contain;

    }

    generateTable()