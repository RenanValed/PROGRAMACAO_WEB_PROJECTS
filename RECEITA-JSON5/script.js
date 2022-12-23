const carregarDiv = (cs, idDiv, theads = [], keys = []) => {
    document.getElementById(idDiv).style.display = 'block';
    let thead = document.querySelector(`#${idDiv} thead tr`);
    thead.innerHTML = '';
    for (th of theads) {
        thead.innerHTML += `<th>${th}</th>`;    
    }
    let tbody = document.querySelector(`#${idDiv} tbody`);
    const itensHtml = cs.map( item => `<tr>` + keys.map(key => `<td>${item[key]}</td>`).join("") + `</tr>`); 
    tbody.innerHTML = `${itensHtml.join("\n")}`;
 }