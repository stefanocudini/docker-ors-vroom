'use strict';

//for docs: 
//	https://openrouteservice.org/dev/#/api-docs/v2/directions/{profile}/post

module.exports = {
	"preference": "fastest",//"shortest",
    "options": {
        "vehicle_type": "hgv",
        "profile_params": {
            "restrictions": {
                "height": "5",
                "length": "5",
                "weight": "5",
                "width": "5"
            }
        }
    }
};