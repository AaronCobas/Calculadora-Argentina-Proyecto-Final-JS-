/* Fetch y API */
function tablaDolar(){
    const divDolar = document.getElementById("dolar")
fetch("https://criptoya.com/api/dolar") //Consutlo información externa
.then(response => response.json()) //Paso los datos json a objeto
.then(({oficial, solidario, blue, mep, ccl}) => { // Una vez que tengo los objetos, los uso para crear html(en este caso, una tabla) que los muestre
    divDolar.innerHTML = ""
    divDolar.innerHTML = `<table class="table table-striped-columns">
    <tr>
    <th>Tipo de dolar</th>
    <th>Valor</th>
    </tr>
    <tr>
        <td>Dolar Oficial</td>
        <td>${oficial}</td>
    </tr>
        <tr>
        <td>Dolar Solidario</td>
        <td>${solidario}</td>
    </tr>
    <tr>
    <td>Dolar Blue</td>
    <td>${blue}</td>
</tr>
<tr>
<td>Dolar Mep</td>
<td>${mep}</td>
</tr>
<tr>
<td>Dolar CCL</td>
<td>${ccl}</td>
</tr>
</table> `
})
}
tablaDolar()
setInterval(() => {
    tablaDolar()
}, 60000) // La tabla con los valores del Dolar se actualiza una vez por minuto