import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as thunks from '../../thunks';
import QuestionCard from '../QuestionCard';

class CosmosQuiz extends Component {
    constructor() {
        super();
        this.state = {
            selectedAnswer: '',
            options: [],
            correct: false,
            dataArr: [],
            answerImage: '',
            correctAnswer: ''
        }
    }

    componentDidMount = async () => {
        const { getApollo, getOrion, getMilkyway, getNebula, getGalaxy, getStars } = this.props;
        const { dataArr } = this.state;
        if (dataArr.length === 0) {
            await getApollo();
            await getOrion();
            await getMilkyway();
            await getNebula();
            await getGalaxy();
            await getStars();
        }
    }

    resetQuestions = () => {
        this.setState({
            selectedAnswer: '',
            options: [],
            correct: false,
            answerImage: ''
        });
    }

    generateRandomQuestion = () => {
        const randomNum = Math.floor((Math.random() * 100));
        return randomNum;
    }

    generateRandomCategory = () => {
        const catArr = ['apollo', 'orion', 'milkyway', 'nebula', 'galaxy', 'stars'];
        const randomNum = Math.floor(Math.random() * Math.floor(6));
        return catArr[randomNum];
    }

    generateQuestion = () => {
        const { dataArr, options } = this.state;
        let correctObj;
        const randomCat = this.generateRandomCategory();
        dataArr.map( async obj => {
            for (var p in obj) {
                if (p === randomCat) {
                    correctObj = obj[p].items[this.generateRandomQuestion()];
                    console.log(correctObj.data[0].title)
                    await this.setState({ answerImage: correctObj.links[0].href });
                    await this.setState({ correctAnswer: correctObj.data[0].title });
                    // console.log(this.state.correctAnswer)
                }
            }
            return correctObj;
        });
        if (correctObj) {
            options.push(correctObj.data[0].title);
            console.log(correctObj)
        }
        return correctObj;
    }

    randomizeOptions = (optionsArr) => {
        let j, x, i;
        for (i = optionsArr.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = optionsArr[i];
            optionsArr[i] = optionsArr[j];
            optionsArr[j] = x;
        }
        return optionsArr;
    }

    generateOptions = () => {
        const { options, dataArr } = this.state;
        for(let i = 0; i < 3; i++) {
            const randomNum = this.generateRandomQuestion();
            const randomCat = this.generateRandomCategory();
            dataArr.map(obj => {
                for (var p in obj) {
                    if (p === randomCat) {
                        console.log(i)
                        options.push(obj[p].items[randomNum].data[0].title);
                    }
                }
            });
        }
        // console.log('options: ', options)
        this.randomizeOptions(options);
    }

    render() {
        const { dataArr, options, correctAnswer, answerImage } = this.state;
        const { apollo, orion, milkyway, nebula, galaxy, stars } = this.props;
        if (stars.length !== 0 && apollo.length !== 0 && dataArr.length === 0) {
            dataArr.push({ apollo }, { orion }, { milkyway }, { nebula }, { galaxy }, { stars });
        }

        if (options.length === 0) {
            { this.generateQuestion() }
            { this.generateOptions() }

        }

        const displayCurrentQuestion = () => (<QuestionCard options={options} correctAnswer={correctAnswer} answerImage={answerImage} />);


    return (
      <div>
        <h1>Cosmos Quiz</h1>
        {displayCurrentQuestion}
      </div>
    );
  }
}

export const mapStateToProps = state => ({
    isLoading: state.isLoading,
    error: state.error,
    apollo: state.apollo20,
    orion: state.orion,
    milkyway: state.milkyway,
    nebula: state.nebula,
    galaxy: state.galaxy,
    stars: state.stars
});

export const mapDispatchToProps = dispatch => ({
    getApollo: () => dispatch(thunks.getApollo20()),
    getOrion: () => dispatch(thunks.getOrion()),
    getMilkyway: () => dispatch(thunks.getMilkyway()),
    getNebula: () => dispatch(thunks.getNebula()),
    getGalaxy: () => dispatch(thunks.getGalaxy()),
    getStars: () => dispatch(thunks.getStars())
});

export default connect(mapStateToProps, mapDispatchToProps)(CosmosQuiz);