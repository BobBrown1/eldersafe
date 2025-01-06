import {fetchPersonalInfo, fetchRooms} from './rooms';

export const questions = {
    "Bedroom": [
        {question: "It is easy for me to get in and out of my bed", id: 0},
        {question: "My room has secure, non-slip flooring (rug edges are secured to the ground to keep from bunching up)", id: 1},
        {question: "My room contains a nightlight for easy navigation at night", id: 2},
        {question: "My room contains flashlights in case of a power outage", id: 3},
        {question: "I keep a phone by my bedside for easy communication at night", id: 4},
        {question: "The walkways in my bedroom are free of clutter", id: 5},
        {question: "It is easy to turn on/off the lights from my bed", id: 6}
    ],
    "Bathroom": [
        {question: "My bathroom contains grab bars in the shower and near the toilet", id: 0},
        {question: "My bathroom contains a non-slip mat in the shower", id: 1},
        {question: "My bathroom contains a shower chair", id: 2},
        {question: "My bathroom contains a raised toilet seat", id: 3},
        {question: "My bathrom floor has a non-slip surface outside of the shower", id: 4},
    ],
    "Living Room": [
        {question: "My chairs and couches are easy to get in and out of", id: 0},
        {question: "My living room has clear pathways to walk through", id: 1},
        {question: "My living room is free of loose cords and cables", id: 2},
        {question: "My living room contains a phone or digital device to call for help", id: 3},
        {question: "My doorbell and smoke alarm have visual indicators for the hearing impaired", id: 4},
    ],
    "Kitchen": [
        {question: "My kitchen contains non-slip mats in front of the sink and stove", id: 0},
        {question: "Commonly used items are stored in easy-to-reach places", id: 1},
        {question: "My kitchen has proper lighting for clear visibility", id: 2},
        {question: "My kitchen contains a fire extinguisher", id: 3},
        {question: "My kitchen contains easy-to-use appliances and utensils", id: 4}
    ],
    "Stairway": [
        {question: "My stairs have handrails on at least one side", id: 0},
        {question: "My stairs contain non-slip treads on each step for improved traction", id: 1},
        {question: "My stairs are well lit and free of clutter", id: 2},
        {question: "My stairs contain bright tape on the edges of each step", id: 3},
    ],
    "Home Exterior/Garage": [
        {question: "My garage is free of clutter", id: 0},
        {question: "I have handrails/grab bars near steps", id: 1},
        {question: "I have exterior lighting", id: 2},
    ]
}

export const important = {
    "Vision": [
        {question: "My room contains a nightlight for easy navigation at night", id: 2, room: "Bedroom"},
        {question: "My room contains flashlights in case of a power outage", id: 3, room: "Bedroom"},
        {question: "My living room has clear pathways to walk through", id: 1, room: "Living Room"},
        {question: "My kitchen has proper lighting for clear visibility", id: 2, room: "Kitchen"},
        {question: "My kitchen contains easy-to-use appliances and utensils", id: 4, room: "Kitchen"},
        {question: "My stairs are well lit and free of clutter", id: 2, room: "Stairway"},
        {question: "My stairs contain bright tape on the edges of each step", id: 3, room: "Stairway"},
    ],
    "Mobility": [
        {question: "My bed is a manageable height for easy entry and exit", id: 0, room: "Bedroom"},
        {question: "My room has secure, non-slip flooring (rug edges are secured to the ground to keep from bunching up)", id: 1, room: "Bedroom"},
        {question: "My bathroom contains grab bars in the shower and near the toilet", id: 0, room: "Bathroom"},
        {question: "My bathroom contains a non-slip mat in the shower", id: 1, room: "Bathroom"},
        {question: "My bathroom contains a shower chair", id: 2, room: "Bathroom"},
        {question: "My bathroom contains a raised toilet seat", id: 3, room: "Bathroom"},
        {question: "My chairs and couches are easy to get in and out of", id: 0, room: "Living Room"},
        {question: "My living room has clear pathways to walk through", id: 1, room: "Living Room"},
        {question: "My living room is free of loose cords and cables", id: 2, room: "Living Room"},
        {question: "My kitchen contains non-slip mats in front of the sink and stove", id: 0, room: "Kitchen"},
        {question: "My stairs have handrails on at least one side", id: 0, room: "Stairway"},
        {question: "My stairs contain non-slip treads on each step for improved traction", id: 1, room: "Stairway"},
        {question: "My stairs are well lit and free of clutter", id: 2, room: "Stairway"},
        {question: "I have handrails/grab bars near steps", id: 1, room: "Home Exterior/Garage"},
    ],
    "Hearing": [
        {question: "My doorbell and smoke alarm have visual indicators for the hearing impaired", id: 4, room: "Living Room"},
    ]
}

export const exclusions = [
    {question: "My bathroom contains grab bars in the shower and near the toilet", id: 0, exclusion: "mobility", room: "Bathroom"},
    {question: "My bathroom contains a shower chair", id: 2, exclusion: "mobility", room: "Bathroom"},
    {question: "My bathroom contains a raised toilet seat", id: 3, exclusion: "mobility", room: "Bathroom"},
    {question: "My doorbell and smoke alarm have visual indicators for the hearing impaired", id: 4, exclusion: "hearing", room: "Living Room"},
    {question: "My stairs contain bright tape on the edges of each step", id: 3, exclusion: "vision", room: "Stairway"},
    {question: "I have handrails/grab bars near steps", id: 1, exclusion: "mobility", room: "Home Exterior/Garage"},
]

export const hazardsDict = {
    "Bedroom": [
        {hazard: "Your bed is not easy to get in and out of", questionID: 0},
        {hazard: "Your room does not have secure, non-slip flooring (rug edges are not secured to the ground)", questionID: 1},
        {hazard: "Your room does not contain any nightlights for easy navigation at night", questionID: 2},
        {hazard: "Your room does not contain flashlights in case of a power outage", questionID: 3},
        {hazard: "You do not keep a phone by your bedside for easy communication at night", questionID: 4},
        {hazard: "The walkways in your bedroom are not free of clutter", questionID: 5},
        {hazard: "It is not easy to turn on/off the lights from your bed", questionID: 6}
    ],
    "Bathroom": [
        {hazard: "Your bathroom does not contain grab bars in the shower and near the toilet", questionID: 0},
        {hazard: "Your bathroom does not contain a non-slip mat in the shower", questionID: 1},
        {hazard: "Your bathroom does not contain a shower chair", questionID: 2},
        {hazard: "Your bathroom does not contain a raised toilet seat", questionID: 3},
        {hazard: "Your bathroom floor does not have a non-slip surface outside of the shower", questionID: 4},
    ],
    "Living Room": [
        {hazard: "Your chairs and couches are not easy to get in and out of", questionID: 0},
        {hazard: "Your living room does not have clear pathways to walk through", questionID: 1},
        {hazard: "Your living room is not free of loose cords and cables", questionID: 2},
        {hazard: "Your living room does not contain a phone or digital device to call for help", questionID: 3},
        {hazard: "Your doorbell and smoke alarm do not have visual indicators for the hearing impaired", questionID: 4},
    ],
    "Kitchen": [
        {hazard: "Your kitchen does not contain non-slip mats in front of the sink and stove", questionID: 0},
        {hazard: "Commonly used items are not stored in easy-to-reach places", questionID: 1},
        {hazard: "Your kitchen does not have proper lighting for clear visibility", questionID: 2},
        {hazard: "Your kitchen does not contain a fire extinguisher", questionID: 3},
        {hazard: "Your kitchen does not contain easy-to-use appliances and utensils", questionID: 4},
    ],
    "Stairway": [
        {hazard: "Your stairs do not have handrails on at least one side", questionID: 0},
        {hazard: "Your stairs do not contain non-slip treads on each step for improved traction", questionID: 1},
        {hazard:  "Your stairs are not well lit and free of clutter", questionID: 2},
        {hazard: "Your stairs do not contain bright tape on the edges of each step", questionID: 3},
    ],
    "Home Exterior/Garage": [
        {hazard: "Your garage is not free of clutter", questionID: 0},
        {hazard: "You do not have handrails/grab bars near steps", questionID: 1},
        {hazard: "You do not have exterior lighting", questionID: 2},
    ]
}

export const products = {
    "Bedroom": [
        {name: "Night Light", link: "https://amzn.to/46dzA3P", hazardID: 2,
        description: "Small, plug-in LEDs lights turn on automatically when they sense motion.",
        image: require("../assets/products/night-light.png")
    },
        {name: "Flash Light", link: "https://amzn.to/3PEmA02", hazardID: 3,
        description: "Rechargeable LED flashlights are easy to use and perfect for power outages.",
        image: require("../assets/products/flashlight.png")
    },
        {name: "Bed Rail", link: "https://amzn.to/45a34OI", hazardID: 0,
        description: "A bed rail provides support when getting in and out of bed.",
        image: require("../assets/products/bed-rail.png")
    },
    ],
    "Bathroom": [
        {name: "Grab Bars", link: "https://amzn.to/3PFKDeX", hazardID: 0,
        description: "A set of grab bars can be installed in the shower and near the toilet.",
        image: require("../assets/products/grab-bars.png")
    },
        {name: "Non-Slip Mat", link: "https://amzn.to/46jfXr1", hazardID: 1,
        description: "A non-slip mat can be placed in the shower to prevent slipping.",
        image: require("../assets/products/bathtub-non-slip.png")
    },
        {name: "Shower Chair", link: "https://amzn.to/48zCSzY", hazardID: 2,
        description: "A shower chair can be used to sit down while showering.",
        image: require("../assets/products/shower-chair.png")
    },
        {name: "Raised Toilet Seat", link: "https://amzn.to/3ZUNSnL", hazardID: 3,
        description: "A toilet seat extension makes it easier to sit down and stand up.",
        image: require("../assets/products/toilet-seat.png")
    },
        {name: "Non-Slip Floor Mat", link: "https://amzn.to/3ZCieuV", hazardID: 4,
        description: "A non-slip mat can be placed directly outside of the shower to prevent slipping.",
        image: require("../assets/products/bathroom-non-slip.png")
    }
    ],
    "Living Room": [
        {name: "Senior Phone", link: "https://amzn.to/48FWwdJ", hazardID: 3,
        description: "A phone with large buttons and a bright screen is easier to use than regular phones.",
        image: require("../assets/products/senior-phone.png")
    },
        {name: "Visual Smoke Detector", link: "https://amzn.to/3ZJQxk2", hazardID: 4,
        description: "A smoke detector that flashes light in addition to sounding an alarm is easier to notice.",
        image: require("../assets/products/smoke-detector.png")
    }
    ],
    "Kitchen": [
        {name: "Non-Slip Mat", link: "https://amzn.to/3ZDRI4o", hazardID: 0,
        description: "A non-slip mat can be placed in front of the sink and stove to prevent slipping.",
        image: require("../assets/products/kitchen-non-slip.png")
    },
        {name: "Easy-to-Use Utensils", link: "https://amzn.to/3F5eJDT", hazardID: 4,
        description: "Special utensils with larger handles are easier to use and hold.",
        image: require("../assets/products/utensils.png")
    },
    ],
    "Stairway": [
        {name: "Non-Slip Treads", link: "https://amzn.to/3tdjRTz", hazardID: 1,
        description: "Non-slip treads can be placed on steps to prevent slipping.",
        image: require("../assets/products/stair-treads.png")
    },
        {name: "Bright Tape", link: "https://amzn.to/3rEVspJ", hazardID: 3,
        description: "Bright tape can be placed on the edges of steps to improve visibility.",
        image: require("../assets/products/bright-tape.png")
    }
    ],
    "Home Exterior/Garage": [
        {name: "Handrails", link: "https://amzn.to/3RJSivB", hazardID: 1,
        description: "Handrails can be installed near steps for extra support.",
        image: require("../assets/products/grab-bars.png")
    },
        {name: "Exterior Lighting", link: "https://amzn.to/3F5eTLv", hazardID: 2,
        description: "Motion sensor exterior lighting can be installed near entrances/exits for easier navigation at night.",
        image: require("../assets/products/exterior-lighting.png")
    },
    ]
}

export const roomQuestionNumbers = {
    "Bedroom": [0, 1, 2, 3, 4, 5, 6],
    "Bathroom": [0, 1, 2, 3, 4],
    "Living Room": [0, 1, 2, 3, 4],
    "Kitchen": [0, 1, 2, 3, 4],
    "Stairway": [0, 1, 2, 3],
    "Home Exterior/Garage": [0, 1, 2]
}

export default function algo() {
    fetchRooms().then((rooms) => {
            if (rooms == null) {
                return 0;
            }
            const roomList = JSON.parse(rooms);
            let score = 0;
            let possible = 0;
            for (let i = 0; i < roomList.length; i++) {
                possible += questions[roomList[i].type].length;
                const answers = roomList[i].answers;
                score += answers.length;
            }
            return Math.round((score / possible) * 100);
    });
}