import React, {useState} from 'react';

export default function App() {
    const questions = [
        {
            questionText: 'What is the capital of France?',
            answerOptions: [
                {answerText: 'New York', isCorrect: false},
                {answerText: 'London', isCorrect: false},
                {answerText: 'Paris', isCorrect: true},
                {answerText: 'Dublin', isCorrect: false},
            ],
        },
        {
            questionText: 'Who is CEO of Tesla?',
            answerOptions: [
                {answerText: 'Jeff Bezos', isCorrect: false},
                {answerText: 'Elon Musk', isCorrect: true},
                {answerText: 'Bill Gates', isCorrect: false},
                {answerText: 'Tony Stark', isCorrect: false},
            ],
        },
        {
            questionText: 'The iPhone was created by which company?',
            answerOptions: [
                {answerText: 'Apple', isCorrect: true},
                {answerText: 'Intel', isCorrect: false},
                {answerText: 'Amazon', isCorrect: false},
                {answerText: 'Microsoft', isCorrect: false},
            ],
        },
        {
            questionText: 'How many Harry Potter books are there?',
            answerOptions: [
                {answerText: '1', isCorrect: false},
                {answerText: '4', isCorrect: false},
                {answerText: '6', isCorrect: false},
                {answerText: '7', isCorrect: true},
            ],
        },
    ];
    const [showscore , setshowscore] = useState(false)
    const [score,setscore] = useState(0)
    const [question,setquestion]=useState(0)
    const [number,setnumber] = useState(1)
    const handelchangequestion =(isCorrect) =>{
        setnumber(number+1)
        if (isCorrect===true){
            alert("True")
            setscore(score+1)
        }
        else {
            alert("False")
        }
        const nextquestion = question+1;
        if (nextquestion<questions.length){
            setquestion(nextquestion)
        }
        else {
            setshowscore(true)
        }


    }
    return (
        <div className='app'>
            {showscore ? (
                <div className='score-section'>You scored {score} out of {questions.length}</div>
            ) : (
                <>
                    <div className='question-section'>
                        <div className='question-count'>
                            <span>Question {number}</span>/{questions.length}
                        </div>
                        <div className='question-text'>{questions[question].questionText}</div>
                    </div>
                    <div className='answer-section'>
                        {questions[question].answerOptions.map((answerOptions) =>(
                            <button onClick={()=>handelchangequestion(answerOptions.isCorrect)}>{answerOptions.answerText}</button>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}