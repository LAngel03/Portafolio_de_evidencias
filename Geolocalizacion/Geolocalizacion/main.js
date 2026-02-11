const coordenadas=document.getElementById("parrafo")
const enlace=document.getElementById("enlace")

const localizar=()=>{
    if(navigator.geolocation){
        coordenadas.innerText="Localizando Coordenadas..."

        //vamos a localizar las coordenadas desde el navegador
        navigator.geolocation.getCurrentPosition(
            (posicion)=>{
                const latitud=posicion.coords.latitude
                const longitud=posicion.coords.longitude

                coordenadas.innerText="Latitud : "+latitud+" , Longitud : "+longitud+" presicion : "+posicion.coords.accuracy
                enlace.href="https://www.google.com/maps?q="+latitud+","+longitud
                enlace.style.display="block"
                //alert("coordenadas lat: "+latitud+", lon : "+longitud)
            },
            ()=>{})
    }else{

    }
}