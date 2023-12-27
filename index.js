const punycode = require("punycode");
const concat = require("ffmpeg-concat");

const videos = [
    "media/BOY_7636_2.mp4",
    "media/BOY_7642_fixed.mp4",
    "media/BOY_7658_fixed.mp4",
];

const currentTransitions = [
    {   
        name: "circleOpen",duration: 1000,
    },{   
        name: "crossWarp",duration: 800,
    },{
        name: "directionalWarp",duration: 500,
        // pass custom params to a transition
        params: { direction: [1, -1] },
    },{
        name: "squaresWire",duration: 2000,
    },
];

var transitions = [];
for (var i = 0; i < videos.length - 1; i++) {
    // randomize select a transition
    var randomTransition =
        currentTransitions[Math.floor(Math.random() * currentTransitions.length)];
    transitions.push(randomTransition);
}

var concatVideos = async function () {
    // concat 3 mp4s together using 2 500ms directionalWipe transitions
    await concat({
        output: "test.mp4",
        videos: videos,
        transitions: transitions,
    });
};

concatVideos().catch(console.error);
