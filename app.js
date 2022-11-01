window.addEventListener('load', () => {
    let lon
    let lat

    let temperaturaValor = document.getElementById('temperatura-valor')
    let temperaturaDescripcion = document.getElementById('temperatura-descripcion')

    let ubicacion = document.getElementById('ubicacion')
    let iconoAnimado = document.getElementById('icono-animado')

    let vientoVelocidad = document.getElementById('viento-velocidad')


    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(posicion => {
            //console.log(posicion.coords.latitude)
            lon = posicion.coords.longitude
            lat = posicion.coords.latitude
            //ubicación actual    
            const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=30ab27eb8753a4478319a842ee5ce567`

            console.log(url)

            fetch(url)
                .then(response => {
                    return response.json()
                })
                .then(data => {
                    let temp = Math.round(data.main.temp)
                    temperaturaValor.textContent = `${temp} ° C`

                    let desc = data.weather[0].description
                    temperaturaDescripcion.textContent = desc.toUpperCase()
                    ubicacion.textContent = data.name

                    vientoVelocidad.textContent = `${data.wind.speed} m/s`

                    console.log(data.weather[0].main)
                    switch (data.weather[0].main) {
                        case 'Thunderstorm':
                            iconoAnimado.src = 'animated/thunder.svg'
                            console.log('TORMENTA');
                            break;
                        case 'Drizzle':
                            iconoAnimado.src = 'animated/rainy-2.svg'
                            console.log('LLOVIZNA');
                            break;
                        case 'Rain':
                            iconoAnimado.src = 'animated/rainy-7.svg'
                            console.log('LLUVIA');
                            break;
                        case 'Snow':
                            iconoAnimado.src = 'animated/snowy-6.svg'
                            console.log('NIEVE');
                            break;
                        case 'Clear':
                            iconoAnimado.src = 'animated/day.svg'
                            console.log('LIMPIO');
                            break;
                        case 'Atmosphere':
                            iconoAnimado.src = 'animated/weather.svg'
                            console.log('ATMOSFERA');
                            break;
                        case 'Clouds':
                            iconoAnimado.src = 'animated/cloudy-day-1.svg'
                            console.log('NUBES');
                            break;
                        default:
                            iconoAnimado.src = 'animated/cloudy-day-1.svg'
                            console.log('por defecto');
                    }

                })
                .catch(error => {
                    console.log(error)
                })
        })

    }
})


//2


let ubicacionElegida;
let botonBuscar = document.getElementById('buscar-lugar')


botonBuscar.addEventListener("click", () => {


    ubicacionElegida = prompt("Inserte Ciudad a buscar")

    let lon
    let lat

    let temperaturaValor2 = document.getElementById('temperatura-valor-2')
    let temperaturaDescripcion2 = document.getElementById('temperatura-descripcion-2')

    let ubicacion2 = document.getElementById('ubicacion-2')
    let iconoAnimado2 = document.getElementById('icono-animado-2')

    let vientoVelocidad2 = document.getElementById('viento-velocidad-2')



    console.log(ubicacionElegida)




    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(posicion => {

            lon = posicion.coords.longitude
            lat = posicion.coords.latitude

            const url = `https://api.openweathermap.org/data/2.5/weather?q=${ubicacionElegida}&units=metric&appid=30ab27eb8753a4478319a842ee5ce567`

            console.log(url)

            fetch(url)
                .then(response => {
                    return response.json()
                })
                .then(data2 => {
                    let temp2 = Math.round(data2.main.temp)
                    temperaturaValor2.textContent = `${temp2} ° C`

                    let desc = data2.weather[0].description
                    temperaturaDescripcion2.textContent = desc.toUpperCase()
                    ubicacion2.textContent = data2.name

                    vientoVelocidad2.textContent = `${data2.wind.speed} m/s`


                    switch (data2.weather[0].main) {
                        case 'Thunderstorm':
                            iconoAnimado2.src = '../animated/thunder.svg'
                            console.log('TORMENTA');
                            break;
                        case 'Drizzle':
                            iconoAnimado2.src = '../animated/rainy-2.svg'
                            console.log('LLOVIZNA');
                            break;
                        case 'Rain':
                            iconoAnimado2.src = '../animated/rainy-7.svg'
                            console.log('LLUVIA');
                            break;
                        case 'Snow':
                            iconoAnimado2.src = '../animated/snowy-6.svg'
                            console.log('NIEVE');
                            break;
                        case 'Clear':
                            iconoAnimado2.src = '../animated/day.svg'
                            console.log('LIMPIO');
                            break;
                        case 'Atmosphere':
                            iconoAnimado2.src = '../animated/weather.svg'
                            console.log('ATMOSFERA');
                            break;
                        case 'Clouds':
                            iconoAnimado2.src = '../animated/cloudy-day-1.svg'
                            console.log('NUBES');
                            break;
                        default:
                            iconoAnimado2.src = '../animated/cloudy-day-1.svg'
                            console.log('por defecto');
                    }

                })
                .catch(error => {
                    console.log(error)
                })
        })

    }
})