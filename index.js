data = null

speed = "?"
line = "?"
trainType = "Zug"

start = "?"
destination = "?"

setInterval(function() {
    fetch('http://localhost:5000/api/getTripInfo')
	    .then(response => response.json())
	    .then(resData => {
            console.log(resData.trip)
            line = resData.trip.vzn
            start = resData.trip.stops[0].station.name
            destination = resData.trip.stopInfo.finalStationName
            console.log(`Line: ${line}`)
            document.getElementById("data-line").textContent = trainType + " " + line;
            document.getElementById("data-fromTo").textContent = start + " -> " + destination;
        })
	    .catch(err => console.error(err));
},1000)

setInterval(function() {
    fetch('http://localhost:5000/api/getStatus')
	    .then(response => response.json())
	    .then(resData => {
            console.log(resData.trip)
            speed = resData.speed
            trainType = resData.trainType
            console.log(`Speed: ${speed}`)
            document.getElementById("data-speed").textContent = "Geschwindigkeit: " + speed + " km/h";
        })
	    .catch(err => console.error(err));
},1000)