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
$(document).ready(function () {
    $('.ocultarfundo').live('click', function () {
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
$(document).ready(function () {
    $('.button-left').click(function () {
        $('.sidebar').toggleClass('fliph');
    });

});