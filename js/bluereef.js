
var $productos = $('.productos')
var $peces = ['producto.png','producto2.png','producto3.png']



$('#peces').on({
    'click': function(){
        $($productos).attr('src','img/producto.png');
    }
});

$('#corales').on({
    'click': function(){
        $($productos).attr('src','img/producto2.png');
    }
});

$('#invertebrados').on({
    'click': function(){
        $($productos).attr('src','img/producto3.png');
    }
});