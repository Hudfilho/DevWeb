const body = document.body;
const div_container = document.createElement('div');
div_container.id = 'container';
body.appendChild(div_container);

const cria_cartao = (entrada) => { 

    const container_atleta = document.createElement('div');
    container_atleta.style.width = '20rem';
    container_atleta.style.backgroundColor = 'yellow';
    container_atleta.style.textAlign = 'center';
    container_atleta.style.margin = 'auto';
    
    const titulo = document.createElement('h3');
    titulo.innerHTML = entrada.nome;
    const imagem = document.createElement('img');
    imagem.src = entrada.imagem;
    imagem.alt = `foto de ${entrada.nome}`;
    const descricao = document.createElement('p');
    descricao.innerHTML = entrada.descricao;

    container_atleta.appendChild(titulo);
    container_atleta.appendChild(imagem);
    container_atleta.appendChild(descricao);
    div_container.appendChild(container_atleta);
}

// texto alternativo das imagens
// cor de fundo do container
// largura fixa
// conteudo centralizado
// container atleta centralizado na pag


//atletas.forEach((atleta) => {cria_cartao(atleta)});

/*
let i = 0;

while(i < atletas.length);{
    cria_cartao(atletas[i]);
    console.log(i);
    i++;
}

do{
    cria_cartao(atletas[i]);
    console.log(i);
    i++;
}while(i < atletas.length);
*/

/*
for(let indice = 0; indice < atletas.length; indice++){
    cria_cartao(atletas[indice]);
    console.log('loop for ', indice);
}
*/

/*
for(let indice = atletas.length -1; indice > -1 ; indice--){
    cria_cartao(atletas[indice]);
    console.log('loop for ', indice);
} 
*/

for(const atleta of atletas){
    cria_cartao(atleta);
    console.log('loop for of ', atleta.id)
}