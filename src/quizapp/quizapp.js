import { LightningElement, track } from 'lwc';
import CORRECT_EMOJI from '@salesforce/resourceUrl/Correct';
import WRONG_EMOJI from '@salesforce/resourceUrl/Wrong';
export default class Quizapp extends LightningElement {

    @track isCorrect = false;
    @track isWrong = false;
    @track isDisabled = false;
    correctimg = CORRECT_EMOJI;
    wrongimg = WRONG_EMOJI;
    selected = {}
    correctAnswer = 0
    isSubmitted = false
    myQuestions = [
        {
            id: '1',
            ques: 'Who is the founder of Tesla ?',
            answers: [
                { value: "a", label: 'Elon Musk' },
                { value: "b", label: 'Steve Jobs' },
                { value: "c", label: 'Mark Zuckerberg' }
            ],
            correctAnswer: 'a',
            disabled: false
        },
        {
            id: '2',
            ques: 'Which of the below startup is related to to food delivery ?',

            answers: [
                { value: "a", label: 'Ola' },
                { value: "b", label: 'Swiggy' },
                { value: "c", label: 'Oyo' }
            ],
            correctAnswer: 'b',
            disabled: false
        },
        {
            id: '3',
            ques: 'Which is the highest valued cryptocurrency ?',
            answers: [
                { value: "a", label: 'Ethereum' },
                { value: "b", label: 'Cardano' },
                { value: "c", label: 'Bitcoin' }
            ],
            correctAnswer: 'c',
            disabled: false
        },
        {
            id: '4',
            ques: 'What color does yellow and green make?',
            answers: [
                { value: "a", label: 'Lime' },
                { value: "b", label: 'Ocean mist' },
                { value: "c", label: 'Maroon' }
            ],
            correctAnswer: 'a',
            disabled: false

        },
        {
            id: '5',
            ques: "If yesterday's tomorrow was Wednesday, then yesterday's day-after-tomorrow will be",
            answers: [
                { value: "a", label: 'Wednesday' },
                { value: "b", label: 'Thursday' },
                { value: "c", label: 'Friday' }
            ],
            correctAnswer: 'b',
            disabled: false
        }
    ]
    get allNotSelected() {
        return !(Object.keys(this.selected).length === this.myQuestions.length)

    }
    get isScoredFull() {
        return `slds-text-heading_large ${this.myQuestions.length === this.correctAnswer ?
            'slds-text-color_success' : 'slds-text-color_error'}`
    }
    changeHandler(event) {
        console.log("name", event.target.name)
        console.log("value", event.target.value)
        const { name, value } = event.target
        this.selected = { ...this.selected, [name]: value }

        const perfectAns = this.myQuestions.filter(trueAns => {
            return trueAns.id == event.target.name;
        })
        if (perfectAns[0].correctAnswer == event.target.value) {
            this.isCorrect = true;
            this.isWrong = false;
        }
        else {
            this.isWrong = true;
            this.isCorrect = false;
        }
        perfectAns[0].disabled = true;

        // this.myQuestions.forEach(correctAns => {
        //     if (correctAns.id == event.target.name) {
        //         correctAns.answers.forEach(crtAns => {
        //             if (event.target.value != crtAns.option) {
        //                 crtAns.disabled = true;

        //             }
        //         })

        //     }
        // })
    }
    submitHandler(event) {
        event.preventDefault()
        let correct = this.myQuestions.filter(item => this.selected[item.id] === item.correctAnswer)
        this.correctAnswer = correct.length;
        this.isSubmitted = true;
        this.isCorrect = false;
        this.isWrong = false;
        console.log("this.correctAnswer", this.correctAnswer)
    }
    resetHandler() {
        this.selected = {}
        this.correctAnswer = 0
        this.isSubmitted = false;
        this.isCorrect = false;
        this.isWrong = false;
        this.myQuestions.forEach(correctAns => {

            correctAns.disabled = false;
        })
    }
}