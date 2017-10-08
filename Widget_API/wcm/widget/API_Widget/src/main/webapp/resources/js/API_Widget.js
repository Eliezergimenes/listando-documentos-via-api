var MyWidget = SuperWidget.extend({
    //variáveis da widget
    variavelNumerica: null,
    variavelCaracter: null,

    //método iniciado quando a widget é carregada
    init: function() {
    	console.log("WIDGET INIADA");
    },
  
    //BIND de eventos
    bindings: {
        local: {
        	'btn-click' : ['click_CarregaArquivos']
        },
        global: {}
    },
 
CarregaArquivos : function() {
    	
    	$.ajax({
    		async : false,
    		type : "GET",
    		dataType : "json",
    		url : '/api/public/ecm/document/listDocument/2537',
    		success: function (retorno) {
    			
    			//limpar listagem
    			$(".arquivos").remove();
    			    			
				$.each(retorno.content,function(k,v){
					console.log(v.description);
					//interagir com o HTML
					$("#arquivosEncontrados").append('<li class="list-group-item arquivos">'+v.description+'</li>');
				})
			}
    	});
   }

});

