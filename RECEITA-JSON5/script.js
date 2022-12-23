async function carregarCervejas(){

    try{
        let res = await fetch("https://random-data-api.com/api/v2/users?size=2&is_xml=true")

        usuarios = await res.json()

        carregarDiv(usuarios)
    }catch(err){
        document.getElementById("PerfisDiv").innerHTML = "Fudeu..."
    }

}