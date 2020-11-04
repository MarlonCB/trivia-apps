import Link from "next/link";
import Firm from "../components/firm/Firm.jsx";
import Header from "../components/header/Header.jsx";



export default function QuizPage({ datas }) {

    const invisible = "fixed top-0 invisible bg-white gap-2 h-screen w-screen"
    const visible = "fixed top-0 bg-white gap-2 h-screen w-screen"
    
    const [question, setQuestion] = React.useState(0)
    const [finalized, setFinalized] = React.useState(invisible)
    const [good, setGood] = React.useState(0)
    const [questions, setQuestions] = React.useState([])
    const [answers, setAnswers] = React.useState([])

    const dtanswers = []
    const dtquestion = []
    let contador = 0
    dtquestion.push(datas[question].question.replace(/&quot;/g, '"').replace(/&#039;/g, "'"))

    
    const  respond = (res) => {

        const correct = datas[question].correct_answer
       
        //console.log(dtquestion)
        
        if (question <= 8) {
            
            console.log("Respuesta correcta de la pregunta " + (question+1)+ ": " + correct)
            if (res === correct) {

                dtanswers.push('Good')
                setAnswers([
                    ...answers,
                    dtanswers
                ])
                setQuestion(question+1)
                setGood(good + 1)
            } 
            else if (res !== correct) {
                dtanswers.push('Bad')
                setAnswers([
                    ...answers,
                    dtanswers
                ])
                
                setQuestion(question+1)
               
            }
            
            
           

            
        } else {setFinalized(visible)}

        setQuestions([
            ...questions,
            dtquestion
        ])
        //setQuestion(question + 1)
        console.log(questions)
        console.log(answers)
    }

    return (
        <main className="h-screen">
            <Header title="Quiz | Trivia Challenge" />
            <div className="grid grid-rows-5 gap-2 h-full mx-10 py-10">

                <div className="row-span-1 -py-8">
                    <h5 className="text-left text-base font-medium text-gray-700">Category:</h5>
                    <h1 id="categoria" className=" animate-pulse text-left text-xl text-indigo-700 font-bold">
                        {datas[question].category}
                    </h1>
                </div>

                <div className="row-span-3 ">
                    <div className="flex items-center justify-center shadow-lg border rounded h-64 max-w-full my-2">
                        <h2 className="px-2 break-words text-gray-700 text-center text-lg font-semibold">
                            {datas[question].question.replace(/&quot;/g, '"').replace(/&#039;/g, "'")}
                        </h2>
                    </div>
                    <div className="text-center text-indigo-500 py-2">
                        {question + 1} of 10
                    </div>
                </div>

                <div className="row-span-1 flex space-x-16">
                    <button onClick={() => respond("False")} className="btn-circle-false focus:outline-none focus:shadow-outline">
                        False
                    </button>
                    <button onClick={() => respond("True")} className="btn-circle-true focus:outline-none focus:shadow-outline">
                        True
                    </button>
                </div>

            </div>
    
            <div className={finalized}>

                <div className="grid grid-rows-6 h-full mx-10 py-10 gap-2">
                    <div className="row-span-1 flex-col text-center">
                        <h2 className="text-3xl  text-indigo-700 font-bold">You scored</h2>
                        <span className="text-2xl text-indigo-700 font-bold">{good} / 10</span>
                    </div>

                    <div className="row-span-4 overflow-y-auto">
                        <div className="grid grid-cols-1 space-y-3">
                            {
                                console.log(answers),
                                questions.map(item => (
                                    
                                    <h4 className={answers[contador] == "Good" ? "text-green-500" : "text-red-500"} key={item}>{item+" "}
                                    <span className="text-xs p-1 bg-indigo-700 text-white rounded-full">{answers[contador++]}</span>
                                       
                                    </h4>
                                    
                                 ))
                            }
                        </div>
                    </div>

                    <div className="row-span-1 ">
                        <div className="flex items-center justify-center">
                            <Link className="w-full" href="/"><a className="btn-purple text-center">Play Again?</a></Link>
                        </div>
                    </div>

                </div>
               
                
               
               <Firm/>
            </div>

        </main>
    )
}

export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(`https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean`)
    const json = await res.json()
    const datas = json.results
    
    //console.log(data.results)
    // Pass data to the page via props
    return { props: { datas } }
}
