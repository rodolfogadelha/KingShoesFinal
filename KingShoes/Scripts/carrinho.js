//      soma dos produtos parcial
var sum = 0;

$('#adicionar').click(function(){
    $('select :selected').each(function() {
        sum += (Number($(this).val()));
        n = sum.toFixed(2);
    });  
     $("#valorParcial").html(n);
});