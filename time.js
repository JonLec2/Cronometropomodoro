window.onload = () => {
    h = 1;
    m = 0;
    s = 0;
    mls = 0;
    timeStarted = 0;
    time = document.getElementById("time");
    btnStart = document.getElementById("btn-start");
    btnStop = document.getElementById("btn-stop");
    btnReset = document.getElementById("btn-reset");
    btnStart.addEventListener("click", start);
    btnStop.addEventListener("click", stop);
    btnReset.addEventListener("click", reset);
    
 };

 var w=0
 const music = new Audio('alarma.mp3');

 function delay(n){
   return new Promise(function(resolve){
       setTimeout(resolve,n*1000);
   });
}

 async function write() {
    let ht, mt, st, mlst;
    mls++;
 
    if (mls > 99) {
       s--;
       mls = 0;
    }
    if (s < 0) {
       m--;
       s = 59;
    }
    if (m <0) {
       h--;
       m = 59;
    }

    

    if (h<0 && w===0){
        document.getElementById("mensaje").innerHTML="Descanso"
        music.play()
        music.loop=false
        w=w+1
        reset(0,10)
        await delay(4)
        start()
       
    }

   
    if(h<0 && w===1){
      document.getElementById("mensaje").innerHTML="¡Hora de estudiar¡"
      music.play()
      music.loop=false
      w=w-1
      reset(1,0)
      await delay(4)
      start()
        
       
    }

    console.log(w)
   

    if (h > 24) h = 0;
 
    mlst = ('0' + mls).slice(-2);
    st = ('0' + s).slice(-2);
    mt = ('0' + m).slice(-2);
    ht = ('0' + h).slice(-2);
 
    time.innerHTML = `${ht}:${mt}:${st}`;
 }
 
 function start() {
    write();
    timeStarted = setInterval(write, 10);
    btnStart.removeEventListener("click", start);
 }
 
 function stop() {
    clearInterval(timeStarted);
    btnStart.addEventListener("click", start);
 }
 
 function reset(hora,minutos) {
    clearInterval(timeStarted);
    time.innerHTML = "00:00:00"
    h = hora;
    m = minutos;
    s = 0;
    mls = 0;
    btnStart.addEventListener("click", start);
 }

 
