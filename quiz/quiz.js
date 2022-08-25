'use strict';

const quiz_area = document.getElementById('quizPage');

const quiz = [
    {
        number: 1,
        question:'日本のIT人材が2030年には最大どれくらい不足すると言われているでしょうか？',
        // picture: 0,
        option:['約28万人','約79万人','約183万人'],
        answer:'約79万人',
        quote:'経済産業省 2019年3月 － IT 人材需給に関する調査',
    },

    {
        number: 2,
        question:'既存業界のビジネスと、先進的なテクノロジーを結びつけて生まれた、新しいビジネスのことをなんと言うでしょう？',
        // picture: 0,
        option:['INTECH','BIZZTECH','X-TECH'],
        answer:'X-TECH',
        quote:'',
    },

    {
        number: 3,
        question:'IoTとは何の略でしょう？',
        // picture: 0,
        option:['Internet of Things','Integrate into Technology','Information  on Tool'],
        answer:'Internet of Things',
        quote:'',
    },

    {
        number: 4,
        question:'日本が目指すサイバー空間とフィジカル空間を高度に融合させたシステムによって開かれる未来社会のことをなんと言うでしょうか？',
        // picture: 0,
        option:['Society 5.0','CyPhy','SDGs'],
        answer:'Society 5.0',
        quote:'Society5.0 - 科学技術政策 - 内閣府',
    },

    {
        number: 5,
        question:'イギリスのコンピューター科学者であるギャビン・ウッド氏が提唱した、ブロックチェーン技術を活用した「次世代分散型インターネット」のことをなんと言うでしょう？',
        // picture: 0,
        option:['Web3.0','NFT','メタバース'],
        answer:'Web3.0',
        quote:'',
    },

    {
        number: 6,
        question:'先進テクノロジー活用企業と出遅れた企業の収益性の差はどれくらいあると言われているでしょうか？',
        // picture: 0,
        option:['約2倍','約5倍','約11倍'],
        answer:'約5倍',
        quote:'Accenture Technology Vision 2021 '
    },
]  

// 問題をランダムにする
const shuffleQuestion = (ary) => {
    for (let k = ary.length - 1; k >= 0; k--) {
        const l = Math.floor(Math.random() * (k + 1));
        [ary[k], ary[l]] = [ary[l], ary[k]];
        console.log('aaa');
    }
    return ary;
    }
shuffleQuestion(quiz);

for(let i = 0; i < quiz.length; i++){

    // 選択肢をランダムにする
    let shuffleNumber = Math.random();

    if(shuffleNumber <= 0.33){
        let shuffleOption = quiz[i].option[0];
        quiz[i].option.shift();
        quiz[i].option.push(shuffleOption);
    } else if (shuffleNumber <= 0.66){
        let shuffleOption = quiz[i].option[2];
        quiz[i].option.pop();
        quiz[i].option.unshift(shuffleOption);
    }

    if(quiz[i].quote === ''){
        const quiz_html =`<section class="p_quiz_main">`
        +`<h1>Q${i + 1}</h1>`
        +`<p>${quiz[i].question}</p>`
        +`<img src="../assets/img/quiz/${quiz[i].number}.png">`
        +`<h2>A</h2>` 
        +`<ul class="p_quiz_main_option">`
        +`<li class="p_quiz_main_item p_quiz_main_item_disappeared" id="p_quiz_${i}_1">${quiz[i].option[0]}</li>`
        +`<li class="p_quiz_main_item p_quiz_main_item_disappeared" id="p_quiz_${i}_2">${quiz[i].option[1]}</li>`
        +`<li class="p_quiz_main_item p_quiz_main_item_disappeared" id="p_quiz_${i}_3">${quiz[i].option[2]}</li>`
        +`</ul>`
        +`</section>`;
    quiz_area.insertAdjacentHTML('beforeend',quiz_html)
    } else{        
        const quiz_html2 =`<section class="p_quiz_main">`
        +`<h1>Q${i + 1}</h1>`
        +`<p>${quiz[i].question}</p>`
        +`<img src="../assets/img/quiz/${quiz[i].number}.png">`
        +`<h2>A</h2>`
        +`<ul class="p_quiz_main_option">`
        +`<li class="p_quiz_main_item p_quiz_main_item_disappeared" id="p_quiz_${i}_1">${quiz[i].option[0]}</li>`
        +`<li class="p_quiz_main_item p_quiz_main_item_disappeared" id="p_quiz_${i}_2">${quiz[i].option[1]}</li>`
        +`<li class="p_quiz_main_item p_quiz_main_item_disappeared" id="p_quiz_${i}_3">${quiz[i].option[2]}</li>`
        +`</ul>`
        +`<div class="p_quiz_main_tips">`
            +`<img src="../assets/img/icon/icon-note.svg" alt="">`
            +`<p>${quiz[i].quote}</p>`
        +`</div>`
        +`</section>`;        
    quiz_area.insertAdjacentHTML('beforeend',quiz_html2)
    }


    // 正誤判定,処理終了,矢印削除
    let isAnswered;

    for(let j = 1; j < 4; j++) {
        const select = document.getElementById(`p_quiz_${i}_${j}`);
        select.addEventListener('click', function(){
        if(isAnswered === true){
            return;
        }
        isAnswered = true;
        
        const disappearProcess = document.querySelectorAll(`.p_quiz_main_option`);
            const classDisappear = disappearProcess[i].querySelectorAll(`.p_quiz_main_item`);
            for(let o = 0; o < classDisappear.length; o++){
                classDisappear[o].classList.remove('p_quiz_main_item_disappeared');
            }

        const heightChange = document.querySelectorAll('.p_quiz_main');
        heightChange[i].style.height = '1024px';

        let optionText = select.innerHTML;
            if(optionText == quiz[i].answer){
                console.log('正解');
                select.style.borderColor = '#3366FF';
                select.style.backgroundColor = '#eee';
                let addElement = document.createElement('div');
                addElement.id = 'correct';
                const relativeElement = document.querySelectorAll('.p_quiz_main_option');
                addElement.innerHTML = `<h3>正解！</h3>
                                        <div> 
                                            <h4>A</h4>
                                            <h5>${quiz[i].answer}</h5>
                                        </div>`
                relativeElement[i].after(addElement);
            } else{
                console.log('不正解');
                select.style.borderColor = '#3366FF';
                select.style.backgroundColor = '#eee';
                let addElement = document.createElement('div');
                addElement.id = 'wrong';
                const relativeElement = document.querySelectorAll('.p_quiz_main_option');
                addElement.innerHTML = `<h3>不正解！</h3>
                                        <div> 
                                            <h4>A</h4>
                                            <h5>${quiz[i].answer}</h5>
                                        </div>`
                relativeElement[i].after(addElement);
            }
        }
    )
}
    
}