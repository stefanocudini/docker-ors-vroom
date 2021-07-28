
const fs = require('fs');
const axios = require('axios');
const polyline = require('@mapbox/polyline');

const revcc = cc => {
    return [cc[1], cc[0]];
};
const distance = (pA, pB) => {

  const p1 = revcc(pA)
    , p2 = revcc(pB);

  const deg2rad = deg => {
      return deg * (Math.PI / 180);
    }
    , R = 6371797 // Radius of the earth in m
    , dLat = deg2rad(p2[0] - p1[0]) // deg2rad below
    , dLon = deg2rad(p2[1] - p1[1])
    , a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(p1[0])) * Math.cos(deg2rad(p2[0])) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2)
    , c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return Math.round(R * c);
};

const filename = 'cuneo1';
const {routes} = JSON.parse(fs.readFileSync(__dirname+`/${filename}_output.json`).toString());

const {steps, geometry} = routes[0];

const linestring = polyline.toGeoJSON(geometry);

const {coordinates} = linestring;

const pointA = steps[1].location
	, pointB = steps[2].location
	, pointC = steps[3].location
	, pointD = steps[4].location;

//console.log(JSON.stringify(linestring,null))
console.log(pointA, pointB)
/*
let lineIndexStart = 0;

let lineIndexA = 0
	, lastDist = 0
	, lastLoc;
for (let index = lineIndexStart; index < coordinates.length; index += 1) {
	
	const loc = coordinates[index];

	if (lastLoc) {
		if(distance(pointA, loc) > distance(pointA, lastLoc)) {
			//se si allontana dal punto
			lineIndexA = index; //indice prosizione precedente
			break;
		}
	}
	lastLoc = loc;
}
console.log(lineIndexA)
return
//cerca secondo punto da tagliare partendo dal primo
for (let index = lineIndexA; index < coordinates.length; index += 1) {
	
	const loc = coordinates[index];

	if (lastLoc) {
		if(distance(pointB, loc) > distance(pointB, lastLoc)) {
			//se si allontana dal punto
			lineIndexB = index;
			break;
		}
	}
	lastLoc = loc;
}

//cut line by lineIndexA to lineIndexB
const newCoords = coordinates.slice(lineIndexA, lineIndexB + 1);

const newLinestring = {
	type: 'LineString',
	coordinates: newCoords
};
console.log('CUTTED line')
console.log(JSON.stringify(newLinestring))
*/

const ORS_HOST = 'localhost:8080';
const orsUrl = `http://${ORS_HOST}/ors/v2/directions/driving-car/geojson`;
const msg = {
	instructions: false,
	coordinates: [pointA, pointB]
};
axios.post(orsUrl, msg).then(resp => {
  
  console.log(JSON.stringify(resp.data));

}, err => {
  console.log(err.data);
});//*/