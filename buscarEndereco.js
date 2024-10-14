export function buscarEndereco(cep, sucesso, erro){
    const URL_API =  `https://brasilapi.com.br/api/cep/v2/${cep}`

const requisicao = new XMLHttpRequest();

requisicao.open('GET', URL_API)

requisicao.onload = () => {
    if(requisicao.status === 200)  {
        const endereco = JSON.parse(requisicao.responseText)
        sucesso(endereco)
    } else {
        const erro = JSON.parse(requisicao.responseText)
        erro(mensagemErro)
    }
}
requisicao.send() // resposta esta indo como string por conta do responseText
//Colocar o JSON.parse para virar objeto
}