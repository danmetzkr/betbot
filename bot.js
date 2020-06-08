(function(virtualdoc) {

  function initBot(){    
    var teams = $("div.ipe-SoccerGridContainer").find("div.ipe-SoccerGridColumn div.ipe-SoccerGridCell");
    
    if(teams.length > 0){
      
      var team1 = teams.eq(0).text();
      var team2 = teams.eq(1).text();
    
      toastr.success("<b>Jogo localizado:</b><br>"+team1+" vs "+team2, 'BetBot', {
        tapToDismiss: true,
        showMethod: 'fadeIn',
        showDuration: 300,
        progressBar: true,
        positionClass: 'toast-top-center',
      });
      
    }else{
      toastr.error("<b>Erro</b><br>Entre em jogo de futebol para iniciar o bot.", 'BetBot', {
        tapToDismiss: true,
        showMethod: 'fadeIn',
        showDuration: 300,
        progressBar: true,
        positionClass: 'toast-top-center',
      });
    }
    
  }

  function loadToastr(){
    var script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/js/toastr.min.js';
    script.onload = initBot;
    virtualdoc.body.appendChild(script);
    
    var link = document.createElement('link');
    link.rel  = 'stylesheet';
    link.type = 'text/css';
    link.href = 'https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.css';
    virtualdoc.body.appendChild(link);
  }

  if(typeof jQuery == 'undefined'){
    var script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.4/jquery.min.js';
    script.onload = loadToastr;
    virtualdoc.body.appendChild(script);
  }else{
    loadToastr();
  }
})(document)
