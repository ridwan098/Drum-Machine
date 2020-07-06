import React from 'react';

class DrumPad extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.changeDisplay = this.changeDisplay.bind(this);
        this.playSound = this.playSound.bind(this);
    }

    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyPress);
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeyPress);
    }

    handleClick(e) {
        this.playSound();
        this.changeDisplay(this.props.id);

        var toFocus = document.getElementById(this.props.id);
        toFocus.focus();
        setTimeout(function () { toFocus.blur(); }, 100);
    }

    handleKeyPress(e) {
        if (e.keyCode === this.props.keyCode) {
            this.playSound();
            this.changeDisplay(this.props.id);

            var toFocus = document.getElementById(this.props.id);
            toFocus.focus();
            setTimeout(function () { toFocus.blur(); }, 100);

        }
    }

    changeDisplay(value) {
        this.props.displayCallback(value);
    }

    playSound(e) {
        const sound = document.getElementById(this.props.keyChar);
        sound.currentTime = 0;
        sound.play();
    }

    render() {
        return (
            <button class="drum-pad" id={this.props.id} onClick={this.handleClick} onKeyDown={this.handleKeyPress}>
                {this.props.keyChar}
                <audio className='clip' id={this.props.keyChar} src={this.props.url}></audio>
            </button>
        )
    }
};


export default DrumPad;
