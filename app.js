const API_KEY = '05cfbe1fb7ac37b7fb40096245e3da57';

function exibeFilmes () {
    let divTela = document.getElementById('tela');
    let texto = '';

    // Montar texto HTML das noticias
    let dados = JSON.parse(this.responseText);
    for (i=0; i< dados.results.length; i++){
        let filme = dados.results[i];

        texto = texto + `
        <div class="col-12 col-sm-12 col-md-12 col-lg-3">
            <div class="card-deck">
            <div class="card">
            <img class= "align=left" "card-img-top" src="https://themoviedb.org/t/p/w600_and_h900_bestv2${filme.poster_path}" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">${dados.results[i].title}</h5>

            </div>
            </div>
            </div>
            </div>          
        `;
    };

    // Preencher a DIV com o texto HTML
    divTela.innerHTML = texto;
}

function executaPesquisa () {
    let query = document.getElementById('txtPesquisa').value;

    let xhr = new XMLHttpRequest ();
    xhr.onload = exibeFilmes;
    xhr.open ('GET', `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${query}`);
    xhr.send ();
}

document.getElementById('btnPesquisa').addEventListener('click',executaPesquisa);




/*DESTAQUEEES*/


function nosCinemas() {
    let divTela = document.getElementById('tela');
    let texto = '';

    let dados = JSON.parse(this.responseText);
    for (i = 0; i < dados.results.length; i++) {
        let filme = dados.results[i];

        texto = texto + `
        <div class="col-12 col-sm-12 col-md-12 col-lg-3">
            <div class="card-deck">
            <div class="card">
            <img class= "align=left" "card-img-top" src="https://themoviedb.org/t/p/w600_and_h900_bestv2${filme.poster_path}" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">${dados.results[i].title}</h5>
                <h6 class="card-title">${dados.results[i].overview}</h6>
                <h7 class="card-title">${dados.results[i].release_date}</h7>
                

            </div>
            </div>
            </div>
            </div>
        `
    }


    /*DIV com HTML */
    divTela.innerHTML = texto
}
function noscinemas2() {
    let xhr = new XMLHttpRequest();
    xhr.onload = nosCinemas;
    xhr.open('GET', `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`);
    xhr.send();
}



/*      HOME PAGE       */ 


function carrega() {
    let divTela = document.getElementById('carregafilmes');
    let texto = '';

    let dados = JSON.parse(this.responseText);
    for (i = 0; i < dados.results.length; i++) {
        let filme = dados.results[i];

        texto = texto + `
        <div class="col-12 col-sm-12 col-md-12 col-lg-3">
            <div class="card-deck">
            <div class="card">
            <img class= "align=left" "card-img-top" src="https://themoviedb.org/t/p/w600_and_h900_bestv2${filme.poster_path}" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">${dados.results[i].title}</h5>

            </div>
            </div>
            </div>
            </div>
        `
    }


    /*DIV com HTML */
    divTela.innerHTML = texto
}
function carregamais() {
    let xhr = new XMLHttpRequest();
    xhr.onload = carrega;
    xhr.open('GET', `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`);
    xhr.send();
}

document.getElementById('carregarmais').addEventListener('click',carregamais);


/*          PROXIMAS ESTREIAS           */

function proxEstreia() {
    let divTela = document.getElementById('tela');
    let texto = '';

    let dados = JSON.parse(this.responseText);
    for (i = 0; i < dados.results.length; i++) {
        let filme = dados.results[i];

        texto = texto + `
        <div class="col-12 col-sm-12 col-md-12 col-lg-3">
            <div class="card-deck">
            <div class="card">
            <img class= "align=left" "card-img-top" src="https://themoviedb.org/t/p/w600_and_h900_bestv2${filme.poster_path}" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">${dados.results[i].title}</h5>

            </div>
            </div>
            </div>
            </div>
        `
    }


    /*DIV com HTML */
    divTela.innerHTML = texto
}
function proxEstreia2() {
    let xhr = new XMLHttpRequest();
    xhr.onload = nosCinemas;
    xhr.open('GET', `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`);
    xhr.send();
}