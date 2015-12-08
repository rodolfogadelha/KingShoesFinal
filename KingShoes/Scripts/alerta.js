$('#salvar').click(function() {
  
  var nome = $('#nome-cliente').val();
  var cpf = $('#cpf-cliente').val();
  
  if(nome.length < 3 || cpf.length < 14) {
    $('#erro').css('display','block').delay(5000).fadeOut();
  }else{
    $('#sucesso').css('display','block').delay(5000).fadeOut();
  }
});

$('#salvar-fornecedor').click(function() {
  
  var rep = $('#representante').val();
  var cnpj = $('#cnpj').val();
  var estadual = $('#insc-estadual').val();
  var tipo = $('#tipo-fornecedor').val();
  
  if(rep.length < 3 || cnpj.length < 18 || estadual.length < 18) {
    $('#erro').css('display','block').delay(5000).fadeOut();
  }else{
    $('#sucesso').css('display','block').delay(5000).fadeOut();
  }
});

$('#salvar-produto').click(function() {
  
  var produto = $('#nome-produto').val();
  var marca = $('#marca').val();
  var qtd = $('#quantidade').val();
  var cor = $('#cor').val();
  var preco = $('#preco').val();
  
  if(produto.length < 3 || marca.length < 3 || qtd.length < 1 || cor.length < 1 || preco.length < 1) {
    $('#erro').css('display','block').delay(5000).fadeOut();
  }else{
    $('#sucesso').css('display','block').delay(5000).fadeOut();
  }
});

$('#salvar-nota').click(function() {
  
  var compra = $('#preco-compra').val();
  var venda = $('#preco-venda').val();
  var data = $('#data-nota').val();
  var qtd = $('#qtd-nota').val();
  var status = $('#status-nota').val();
  
  if(compra.length < 3 || venda.length < 3 || data.length < 10 || qtd.length < 1 || status.length < 2) {
    $('#erro').css('display','block').delay(5000).fadeOut();
  }else{
    $('#sucesso').css('display','block').delay(5000).fadeOut();
  }
});