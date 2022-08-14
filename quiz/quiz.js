// function create(question_id,question,option_array,answer_id){
//     const main = document.getElementById('main');

//     let quiz = `<section class="p_quiz_main">`
//             +`<h1>Q${question_id}</h1>`
//             +`<p>${question}</p>`
//             +`<img src="../assets/img/quiz/${question_id}.png">`
//             +`<h2>A</h2>`
//             +`</div>`
//             +`<ul class="p_quiz_main_option">`;

//     option_array.forEach(function(option,index){
//         quiz += `<li class="p_quiz_main_item list_${question_id}_${index}" onclick='select(${question_id},${index},${answer_id})'>${option}</li>`;
//     })

//         quiz += `</ul>`;

//     main.insertAdjacentHTML('beforeend',quiz);
// }

// create(1,'日本のIT人材が2030年には最大どれくらい不足すると言われているでしょうか？',['約28万人','約79万人','約183万人'],1)
// create(2,'既存業界のビジネスと、先進的なテクノロジーを結びつけて生まれた、新しいビジネスのことをなんと言うでしょう？',['INTECH','BIZZTECH','X-TECH'],2)
// create(3,'IoTとは何の略でしょう？',['Internet of Things','Integrate into Technology','Information  on Tool'],0)
// create(4,'日本が目指すサイバー空間とフィジカル空間を高度に融合させたシステムによって開かれる未来社会のことをなんと言うでしょうか？',['Society 5.0','CyPhy','SDGs'],0)
// create(5,'イギリスのコンピューター科学者であるギャビン・ウッド氏が提唱した、ブロックチェーン技術を活用した「次世代分散型インターネット」のことをなんと言うでしょう？',['Web3.0','NFT','メタバース'],0)
// create(6,'先進テクノロジー活用企業と出遅れた企業の収益性の差はどれくらいあると言われているでしょうか？',['約2倍','約5倍','約11倍'],1)

// function select(question_id,option_id,answer_id){
//     const choice = document.querySelector(`.list_${question_id}_${option_id}`)
//     console.log(choice)
//     if(option_id === answer_id){
//         console.log('正解')
//         choice.style.borderColor = '#3366FF'
//         choice.style.backgroundColor = '#eee'
//     }else{
//         console.log('不正解')
//         choice.style.borderColor = '#3366FF'
//         choice.style.backgroundColor = '#eee'
//     }
// 

'use strict';

const quiz_area = document.getElementById('quizPage');

let quiz = [
    {
        number: 1,
        question:'日本のIT人材が2030年には最大どれくらい不足すると言われているでしょうか？',
        picture: 0,
        option1:'約28万人',
        option2:'約79万人',
        option3:'約183万人',
        answer:'約79万人',
        quote:'経済産業省 2019年3月 － IT 人材需給に関する調査',
    },

    {
        number: 2,
        question:'既存業界のビジネスと、先進的なテクノロジーを結びつけて生まれた、新しいビジネスのことをなんと言うでしょう？',
        picture: 0,
        option1:'INTECH',
        option2:'BIZZTECH',
        option3:'X-TECH',
        answer:'X-TECH',
    },

    {
        number: 3,
        question:'IoTとは何の略でしょう？',
        picture: 0,
        option1:'Internet of Things',
        option2:'Integrate into Technology',
        option3:'Information  on Tool',
        answer:'Internet of Things'
    },

    {
        number: 4,
        question:'日本が目指すサイバー空間とフィジカル空間を高度に融合させたシステムによって開かれる未来社会のことをなんと言うでしょうか？',
        picture: 0,
        option1:'Society 5.0',
        option2:'CyPhy',
        option3:'SDGs',
        answer:'Society 5.0',
        quote:'Society5.0 - 科学技術政策 - 内閣府',
    },

    {
        number: 5,
        question:'イギリスのコンピューター科学者であるギャビン・ウッド氏が提唱した、ブロックチェーン技術を活用した「次世代分散型インターネット」のことをなんと言うでしょう？',
        picture: 0,
        option1:'Web3.0',
        option2:'NFT',
        option3:'メタバース',
        answer:'Web3.0',
    },

    {
        number: 6,
        question:'先進テクノロジー活用企業と出遅れた企業の収益性の差はどれくらいあると言われているでしょうか？',
        picture: 0,
        option1:'約2倍',
        option2:'約5倍',
        option3:'約11倍',
        answer:'約5倍',
        quote:'Accenture Technology Vision 2021 '
    },
]  

function create_quiz(i){
    const quiz_html =`<section class="p_quiz_main>`
                        +`<h1>Q${number}</h1>`
                        +`<p>${question}</p>`
                        +`<img src="../assets/img/quiz/${number}.png">`
                        +`<h2>A</h2>`
                        +`<ul class="p_quiz_main_option">`
                            +`<li class="p_quiz_main_item">${quiz[i].option1}</li>`
                            +`<li class="p_quiz_main_item">${quiz[i].option2}</li>`
                            +`<li class="p_quiz_main_item">${quiz[i].option3}</li>`
                        +`</ul>`
                    +`</section>`;
                    
    return quiz_area.insertAdjacentHTML('beforeend',quiz_html)
}