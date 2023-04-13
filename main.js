const quizData=[
    {
        question: 'Beşi beş kuruştan beş yumurta kaç kuruş eder?',
        a:'1',
        b:'5',
        c:'10',
        d:'25',
        e:'15',
        correct:'b',
    },
    {
        question: 'Matematikte hangi adda bir sayı grubu vardır?',
        a:'Samimi Sayılar',
        b:'Dürüst Sayılar',
        c:'İçten Sayılar',
        d:'Doğal Sayılar',
        e:'Korkunç Sayılar',
        correct:'d',
    },
    {
        question: 'Türkiye`deki illerin plaka kodlarının toplamı nedir?',
        a:'5543',
        b:'4432',
        c:'3321',
        d:'2210',
        e:'2844',
        correct:'c',
    },
    {
        question: 'Üçün üç katından ikinin iki  katı çıkartılırsa sonuç kaç olur?',
        a:'1',
        b:'2',
        c:'23',
        d:'7',
        e:'5',
        correct:'e',
    },
    {
        question: 'Yarısı doldurulmuş bir bardağın ne kadarı boştur?',
        a:'altıda üçü',
        b:'üçte üçü',
        c:'beşte üçü',
        d:'dörtte üçü',
        e:'yedide üçü',
        correct:'a',
    },
]

const quiz = document.getElementById("quiz")
const answerEls = document.querySelectorAll(".answer") 
const questionEl = document.getElementById("question")
const a_text = document.getElementById("a_text")
const b_text = document.getElementById("b_text")
const c_text = document.getElementById("c_text")
const d_text = document.getElementById("d_text")
const e_text = document.getElementById("e_text")
const submitBtn = document.getElementById("submit")


let currentQuiz = 0
let score=0

loadQuiz()

function loadQuiz(){
    const currentQuizData= quizData[currentQuiz]

    deselectedAnswers()

    questionEl.innerText= currentQuizData.question
    a_text.innerText= currentQuizData.a
    b_text.innerText= currentQuizData.b
    c_text.innerText= currentQuizData.c
    d_text.innerText= currentQuizData.d
    e_text.innerText= currentQuizData.e
}

function deselectedAnswers(){

    answerEls.forEach(answerEl=> answerEl.checked = false)
}

function getSelected(){
    let answer

    answerEls.forEach(answerEl=>{
        if(answerEl.checked){
            answer= answerEl.id
        }
    })
    return answer
    
}


submitBtn.addEventListener("click",()=>{
    const answer = getSelected()


    if(answer){
        if(answer===quizData[currentQuiz].correct){
            score++
        }
        currentQuiz++

        if(currentQuiz<quizData.length){
            loadQuiz()
        }else{
            quiz.innerHTML = `
            <h2>Test Tamamlandı, ${score*20} puan aldınız.🥳 </h2>
            <button class="submit" onClick="location.reload()">Tekrar Dene ↩️ </button>
            `
        }
    }
})
