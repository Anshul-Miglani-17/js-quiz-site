const c_ans=['B','B','A'];
const form = document.querySelector('.quiz-form');
const quiz = document.querySelector('.quiz');
const result = document.querySelector('.result');
const re = document.querySelector('.butt');


form.addEventListener('submit',e =>{
    e.preventDefault();
    let score=0;
    let u_ans=[form.q1.value,form.q2.value,form.q3.value];
    u_ans.forEach((ans,ind)=>{
        if(c_ans[ind]===ans) score++;
    })
    //console.log(result);
    score=score/c_ans.length *100;
    //esult.querySelector('span').innerText=`${score}%`;
    result.classList.remove('d-none');
    quiz.classList.add('d-none');
    scrollTo(0,0);
    //console.log(result);

    let c=0;
    const t=setInterval(()=>{

        result.querySelector('span').innerText=`${c}%`;

        if(Math.ceil(score)===c){
            clearInterval(t);
            re.classList.remove('d-none');
        }else{
            c++;
        }
    },10);
});

re.addEventListener('click',()=>{
    quiz.classList.remove('d-none');
    result.classList.add('d-none');
    re.classList.add('d-none');
})

// setTimeout(() => {
//     alert('add');
// }, 5000);


