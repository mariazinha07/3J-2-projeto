async function redesFavoritas(){
    const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/redes-favoritas.json'
    const res = await fetch (url);
    const dados = await redesFavoritas.json();
    const redes = Object.keys(dados);
    const valores = Object.values(dados);

    const infos = [
        {
            values: valores,
            labels: redes,
            type: 'pie',
            textinfo: 'label+percent'
        }
    ];
}