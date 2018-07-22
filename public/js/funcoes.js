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

function mascaraData(val) {
    var pass = val.value;
    var expr = /[0123456789]/;
  
    for (i = 0; i < pass.length; i++) {
      // charAt -> retorna o caractere posicionado no índice especificado
      var lchar = val.value.charAt(i);
      var nchar = val.value.charAt(i + 1);
  
      if (i == 0) {
        // search -> retorna um valor inteiro, indicando a posição do inicio da primeira
        // ocorrência de expReg dentro de instStr. Se nenhuma ocorrencia for encontrada o método retornara -1
        // instStr.search(expReg);
        if ((lchar.search(expr) != 0) || (lchar > 3)) {
          val.value = "";
        }
  
      } else if (i == 1) {
  
        if (lchar.search(expr) != 0) {
          // substring(indice1,indice2)
          // indice1, indice2 -> será usado para delimitar a string
          var tst1 = val.value.substring(0, (i));
          val.value = tst1;
          continue;
        }
  
        if ((nchar != '/') && (nchar != '')) {
          var tst1 = val.value.substring(0, (i) + 1);
  
          if (nchar.search(expr) != 0)
            var tst2 = val.value.substring(i + 2, pass.length);
          else
            var tst2 = val.value.substring(i + 1, pass.length);
  
          val.value = tst1 + '/' + tst2;
        }
  
      } else if (i == 4) {
  
        if (lchar.search(expr) != 0) {
          var tst1 = val.value.substring(0, (i));
          val.value = tst1;
          continue;
        }
  
        if ((nchar != '/') && (nchar != '')) {
          var tst1 = val.value.substring(0, (i) + 1);
  
          if (nchar.search(expr) != 0)
            var tst2 = val.value.substring(i + 2, pass.length);
          else
            var tst2 = val.value.substring(i + 1, pass.length);
  
          val.value = tst1 + '/' + tst2;
        }
      }
  
      if (i >= 6) {
        if (lchar.search(expr) != 0) {
          var tst1 = val.value.substring(0, (i));
          val.value = tst1;
        }
      }
    }
  
    if (pass.length > 10)
      val.value = val.value.substring(0, 10);
    return true;
  }

    let tamanho = document.querySelectorAll("#pagamento").length
    let dataSistema = new Date();	 
    
		for(i = 0; i < tamanho; i++){
			let dataR = document.querySelectorAll("#pagamento")[i].firstChild.textContent,
        		data1 = moment(dataR, "DD/MM/YYYY hh:mm"),
				data2 = moment(dataSistema, "DD/MM/YYYY hh:mm"),
				diferenca = data2.diff(data1, 'days');

			if(diferenca >= 30){
				document.querySelectorAll("#pagamento")[i].style.backgroundColor="rgb(201, 48, 44)";
      }
    }
    
    for(i = 0; i < tamanho; i++){
      let dataR = document.querySelectorAll('#pagamento')[i].firstChild.textContent;
      let cor = document.querySelectorAll('#pagamento')[i].style.backgroundColor;
        if(cor == ''){
          let botao = document.querySelectorAll('#botaoValida')[i];
          let disabled = document.createAttribute('disabled')
          
          botao.setAttributeNode(disabled);
        }
    }