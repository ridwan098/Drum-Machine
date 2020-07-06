// by ridwan
import React, { Component } from 'react';
import Drumpad from './components/Drumpad/Drumpad';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            display: '',
            sound: sound1,
            soundName: 'sound 1',
            sliderVal: 0.3
        };

        this.handleDisplay = this.handleDisplay.bind(this);
        this.changeSound = this.changeSound.bind(this);
    }
    handleDisplay(data) {
        this.setState({ display: data });
    }

    changeSound(e) {
        let toPlay1 = this.state.sound === sound1 ? sound2 : sound1;
        let soundName1 = this.state.soundName === 'sound 1' ? 'sound 2' : 'sound 1';
        this.setState({ sound: toPlay1, soundName: soundName1 })
    }

    render() {
        let displayDrumpad = this.state.sound.map((drumObj, i, drumPadsArr) => {
            return (<Drumpad
                keyCode={drumPadsArr[i].keyCode}
                keyChar={drumPadsArr[i].keyChar}
                id={drumPadsArr[i].id}
                url={drumPadsArr[i].url}
                displayCallback={this.handleDisplay}
            />)

        })
        return (
            <div id='drum-machine'>
                {/*Top section*/}
                <div id='header'>
                    <h1>Drum Machine</h1>
                    <h3>by <a href='https://ridwan.co.uk' target='_blank' rel="noopener noreferrer">Ridwan</a></h3>
                    <p>playing: <b>{this.state.soundName}</b></p>
                </div>

                {/*sound name */}
                <div id='display'>
                    <p>{this.state.display}</p>
                </div>

                {/*Drum machine section*/}
                <div id='keys'>{displayDrumpad}</div>

                {/*sound choices and volumew */}
                <div className="volume-slider">
                    <button onClick={this.changeSound} id='soundButton'>Change Sound</button>
                </div>

                <div class="container" style={{ 'margin-top': 20 }}><small>Copyright © <a href="https://ridwan.co.uk" target="_blank" rel="noopener noreferrer">Ridwan
            Gbadamosi</a> 2020</small></div>

            </div>
        );
    }

}


export default App;




const sound1 = [{
    keyCode: 81,
    keyChar: 'Q',
    id: 'Heater-1',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
}, {
    keyCode: 87,
    keyChar: 'W',
    id: 'Heater-2',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
}, {
    keyCode: 69,
    keyChar: 'E',
    id: 'Heater-3',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
}, {
    keyCode: 65,
    keyChar: 'A',
    id: 'Heater-4',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
}, {
    keyCode: 83,
    keyChar: 'S',
    id: 'Clap',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
}, {
    keyCode: 68,
    keyChar: 'D',
    id: 'Open-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
}, {
    keyCode: 90,
    keyChar: 'Z',
    id: "Kick-n'-Hat",
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
}, {
    keyCode: 88,
    keyChar: 'X',
    id: 'Kick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
}, {
    keyCode: 67,
    keyChar: 'C',
    id: 'Closed-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
},
];

const sound2 = [{
    keyCode: 81,
    keyChar: 'Q',
    id: 'Chord-1',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3'
}, {
    keyCode: 87,
    keyChar: 'W',
    id: 'Chord-2',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3'
}, {
    keyCode: 69,
    keyChar: 'E',
    id: 'Chord-3',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3'
}, {
    keyCode: 65,
    keyChar: 'A',
    id: 'Shaker',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3'
}, {
    keyCode: 83,
    keyChar: 'S',
    id: 'Open-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3'
}, {
    keyCode: 68,
    keyChar: 'D',
    id: 'Closed-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'
}, {
    keyCode: 90,
    keyChar: 'Z',
    id: 'Punchy-Kick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3'
}, {
    keyCode: 88,
    keyChar: 'X',
    id: 'Side-Stick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3'
}, {
    keyCode: 67,
    keyChar: 'C',
    id: 'Snare',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3'
}];