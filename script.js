var minuto  = new Number();
var segundo = new Number();
var time    = new Number();

var pause = 0;
var x = 0;
function parar(){
   pause = parseInt($('#pause').val());
   if(pause === 0){
      x = 0;
   }

   if(x===0){
      $('#pause').val('1');
      $('#btnPause').html('Play');
      $('#btn').removeClass('disabled');
      x = 1;
   }else{
      $('#pause').val('0');
      $('#btnPause').html('Pause');

      x = 0;
      cronometro(2);
   }
}



function cronometro(aux){
   if(aux == 1){
      minuto = parseInt(($('#minutos').val() === '' ? 0 : $('#minutos').val()));
      segundo = parseInt(($('#segundos').val() === '' ? 0 : $('#segundos').val()));

      if(segundo != 0 || minuto != 0){
         segundo = segundo +1;
         $('#pause').val('0');
         $('#btn').addClass('disabled');
         $('#btnPause').html('Pause');
         $('#btnPause').removeClass('hide');
         $('#btnStop').removeClass('hide');
      }

      if(segundo >60 || minuto > 60 || segundo< 0 || minuto < 0){
         alert("Erro! Confira o registro informado!");
         stop();
      }

   }
   if(aux == 2){

      $('#btn').addClass('disabled');
   }

   if(minuto > 0 && segundo === 0){
      segundo = 60;
      minuto--;
   }
   if((segundo-1)>=0){
      segundo=segundo-1;
      if(segundo == 0 && minuto == 0){
         time="00:00";
         $('#btn').removeClass('disabled');
      }else if(segundo <10 && minuto === 0){
         time="0"+segundo;
      }else if (minuto >= 1){
         time=(minuto < 10 ? '0'+minuto : minuto)+":"+(segundo < 10 ? '0'+segundo : segundo);
      }else{
         time = segundo;
      }
      pause = parseInt($('#pause').val());
      if(pause === 0){
         tempo.innerText=time;
         setTimeout('cronometro();',1000);
      }
   }
}

function stop(){
   location.reload();
}