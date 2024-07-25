function mostrartela(request, response){
    response.render('produto');
}

function adicionarproduto(request, response){
    console.log('ENTROU NA FUNÇÃO ADICIONAR PRODUTO');
    //console.log(request);
    response.redirect('/produto')
}

module.exports = {
    mostrartela,
    adicionarproduto
}