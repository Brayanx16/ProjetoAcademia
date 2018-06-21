
$('[data-toggle="tooltip"]').tooltip();

function verificaNumero(e) {
    if (e.whitch != 8 && e.whitch != 0 && (e.whitch < 48 || e.whitch > 57)) {
        return false;
    }
}

$(document).ready(function () {
    $("#cpf").keypress(verificaNumero);
    $("#telefone").keypress(verificaNumero);
    $("#cep").keypress(verificaNumero);
});

function FormataCPF(evt) {
    vr = (navigator.appName == 'Netscape') ? evt.target.value : evt.srcElemente.value;
    if (vr.length == 3) vr = vr + ".";
    if (vr.length == 7) vr = vr + ".";
    if (vr.length == 11) vr = vr + "-";
    return vr;
}

function FormataTelefone(evt) {
    vr = (navigator.appName == 'Netscape') ? evt.target.value : evt.srcElemente.value;
    if (vr.length == 2) vr = "(" + vr + ") ";
    if (vr.length == 3) vr = vr + " ";
    if (vr.length == 6) vr = vr + " ";
    if (vr.length == 11) vr = vr + "-";
    return vr;
}

function FormataCEP(evt) {
    vr = (navigator.appName == 'Netscape') ? evt.target.value : evt.srcElemente.value;
    if (vr.length == 2) vr = vr + ".";
    if (vr.length == 6) vr = vr + "-";
    return vr;
}

function formataData(data = new Date()){
    var dia = data.getDate();
    var mes = data.getMonth()+1;
    var ano = data.getFullYear();

    if(dia.toString().length == 1){
        dia = '0'+dia;
    }if(mes.toString().length == 1){
        mes = '0'+mes;
    }

    return dia+'/'+mes+'/'+ano;
}

    console.log(document.querySelector("#pagamento").textContent);


/*$(document).ready(function () {
    $('.ocultarfundo').on('click', function () {
        $('.barra').toggleClass("barraoculta"); //classe onde a barra fica transparente, ou de outra forma.
    });
});
$(window).scroll(function () {

    if ($(this).scrollTop() > 10) {
        $('.navbar').fadeOut();
    }
    else {
        $('.navbar').fadeIn();
    }
});*/

/*$(document).ready(function () {
    $('.button-left').click(function () {
        $('.sidebar').toggleClass('fliph');
    });

});*/