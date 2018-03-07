function tableCreate() {
    var gridSize = document.getElementById('grid').value;
    var paint = document.getElementById("paint");
    var tbl = document.createElement("table");
    var tblBody = document.createElement("tbody");
    for (var j = 0; j < gridSize; j++) {
        var row = document.createElement("tr")
        for (var i = 0; i < gridSize; i++) {
            var cell = document.createElement("td");
            cell.setAttribute("id", j.toString() + '-' + i.toString());
            cell.style.background = "transparent";
            row.appendChild(cell);
        }
        tblBody.appendChild(row);
    }
    tbl.appendChild(tblBody);
    paint.appendChild(tbl);
    tbl.setAttribute("border", "2");
    document.getElementById("startDrow").disabled = true;
    document.getElementById("reset").disabled = false;
    document.getElementById("startColor").disabled = false;
}
function checkValidation(){
	var gridSize = document.getElementById('grid').value;
	if(!(gridSize<100 && gridSize >3)){
		document.getElementById("startDrow").disabled = true;
	}else{
		document.getElementById("startDrow").disabled = false;
	}
}

function tableReset() {
    var tab = document.getElementsByTagName('table');
    for (var i = 0; i < tab.length; i++) {
        tab[i].remove();
    }
    document.getElementById("startDrow").disabled = false;
    document.getElementById("reset").disabled = true;
    document.getElementById("startColor").disabled = true;

}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function startColoring() {
	document.getElementById("startColor").disabled = true;
	document.getElementById("reset").disabled = false;
    var i = 0;
    var j = 0;
    var col = document.getElementsByTagName('td');
    var gridSize = document.getElementById('grid').value;
    function myLoop() {
        setTimeout(function() {
            var div = col[i].getAttribute("id").split('-');
            if (div[1] == j) {
                col[i].style.background = getRandomColor();
            }
            i++;
            if (i < col.length) {
                myLoop();
            } else if (j < col.length) {
                i = 0;
                j++;
                myLoop();
            }
        }, 1500 / gridSize);
    }
    myLoop();
}

function disabled() {
    var gridSize = document.getElementById('grid').value;
    document.getElementById("startColor").disabled = true;
    document.getElementById("reset").disabled = true;
    if (gridSize >= 4 && gridSize <= 100) {
        document.getElementById("startColor").disabled = false;
        document.getElementById("reset").disabled = false;
    }
}