var PlayNineGame = React.createClass({

    getInitialState: function () {
        return {
            selectedNumbers: [],
            numberOfStars: Math.floor(Math.random() * (9 - 1 + 1) + 1),
            correct: null
        }
    },

    selectNumber: function (selectedNumber) {
        // If selected number already is in array, user cant select it again
        if (this.state.selectedNumbers.indexOf(selectedNumber) !== -1) { return }
        this.setState({
            selectedNumbers: this.state.selectedNumbers.concat(selectedNumber),
            correct: null
        });
    },

    unSelectNumber: function (unSelectedNumber) {
        var selectedNumbersCopy = this.state.selectedNumbers;
        var unSelectedNumberIndex = selectedNumbersCopy.indexOf(unSelectedNumber);
        selectedNumbersCopy.splice(unSelectedNumberIndex, 1);

        this.setState({
            selectedNumbers: selectedNumbersCopy,
            correct: null
        });
    },

    checkAnswer: function(){
        var selectedNumbersSum = 0;
        for(i = 0; i < this.state.selectedNumbers.length; i +=1) {
            selectedNumbersSum += this.state.selectedNumbers[i];
        }

        var correct = selectedNumbersSum === this.state.numberOfStars;
        this.setState({ correct: correct });
    },

    render: function () {
        var selectedNumbers = this.state.selectedNumbers;
        var numberOfStars = this.state.numberOfStars;
        var correct = this.state.correct;

        return (
            <div>
                <h2>Play Nine</h2>
                <PlayNineStarsFrame numberOfStars={ numberOfStars } />
                <PlayNineButtonFrame selectedNumbers={ selectedNumbers } checkAnswer={ this.checkAnswer } correct={ correct } />
                <PlayNineAnswerFrame selectedNumbers={ selectedNumbers } unSelectNumber={ this.unSelectNumber } />
                <PlayNineNumbersFrame selectedNumbers={ selectedNumbers } selectNumber={ this.selectNumber } />
            </div>
        )
    }

});

ReactDOM.render(<PlayNineGame />, document.getElementById('play-nine'));