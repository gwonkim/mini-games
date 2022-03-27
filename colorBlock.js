// const block = document.querySelector(".block");
// const nonblock = document.querySelector(".nonblock");

const color = ["red", "blue", "yellow", "green", "purple"]; // 블록 색상
const size = 3; // 크기
let blockColor = []; // 블록 색상
let checkedBlock = []; // 선택한 블록
let answerColor; // 정답 색상

const start = () => {
  createBlock(); // 블럭 생성
  showBlock();
  setTimeout(question, 1000);
};

const createBlock = () => {
  console.log('creatBlock... -----------------------------------')
  const game = document.querySelector(".game");
  const blockBoard = document.createElement("div"); 
  blockBoard.className = 'blockBoard'

  hiddenButton('start'); // 시작버튼 숨기기
  for (let r = 0; r < size; r++) {
    blockColor[r] = [];
    checkedBlock[r] = [];

    let rowBlock = document.createElement("div"); // RowBlock
    rowBlock.className = "rowBlock";
    
    for (let c = 0; c < size; c++) {
      let newBlock = document.createElement('div');
      let num = parseInt(Math.random() * 5); // 색상 랜덤 지정
      newBlock.className = `block`;
      newBlock.id = `block${r}${c}`;
      newBlock.addEventListener('click', onClickBlock);
      newBlock.style.background = color[num]; 

      blockColor[r][c]= color[num]; // 색상 저장
      newBlock.innerText = color[num]; // 확인용

      rowBlock.appendChild(newBlock);
    }
    blockBoard.appendChild(rowBlock);
  }
  game.appendChild(blockBoard);
  
  let submitbutton = document.createElement('button');
  let restartbutton = document.createElement('button');
  
  submitbutton.className = `submit`;
  submitbutton.innerText = '제출'
  submitbutton.addEventListener('click', submit);
  restartbutton.className = `restart`;
  restartbutton.innerText = '다시시작'
  restartbutton.addEventListener('click', onRestart);
  game.appendChild(submitbutton);
  game.appendChild(restartbutton);
};

// 문제
const question = () => {
  const text = document.querySelector('.text');
  answerColor = color[parseInt(Math.random() * 5)]; // 정답 색깔
  text.innerText = `${answerColor}를 선택해주세요.`;
}

/* 
  const question = () => {
  const game = document.querySelector(".game");
  const text = document.createElement('p');
  text.className = 'text';
  answerColor = color[parseInt(Math.random() * 5)]; // 정답 색깔
  text.innerText = `${answerColor}를 선택해주세요.`;
  game.appendChild(text);
} */

// 블럭 잠깐 보이기
let showBlock = () => {
  for(let i=0; i<size; i++) {
    for(let j=0; j<size; j++) {
      let block = document.querySelector(`#block${i}${j}`);
        setTimeout(() => {
          for(let j=0; j<size; j++) {
            block.classList.remove('block');
            block.classList.add('nonblock');
            block.style.background = '#fff'
            }
          }, 500);
      }
    clearTimeout();
  }
};

// 블럭 클릭
const onClickBlock = (e) => {
  let classN = e.target.classList[0];
  let id = e.target.id;
  let block = document.querySelector(`#${id}`);
  if (classN === 'nonblock') {
    block.classList.remove('nonblock');
    block.classList.add('block');
    block.style.background = `${blockColor[id[id.length-2]][id[id.length-1]]}`;
  } else if (classN === 'block') {
    block.classList.remove('block');
    block.classList.add('nonblock');
    block.style.background = '#fff';
  }

  // 정답 확인
  checkAnswer(id);
}

const checkAnswer = (id) => {
  if (blockColor[id[id.length-2]][id[id.length-1]] !== answerColor) {
    console.log('틀렸습니다.');
    alert('틀렸습니다!');
    onRestart();
  } else {
    console.log('answerColor : ', blockColor[id[id.length-2]][id[id.length-1]], '을 잘 선택하였습니다.')
  }
}

// 재시작
const onRestart = () => {
  document.querySelector('.blockBoard').remove();
  showButton('start');
  removeButton('text');
  removeButton('submit');
  removeButton('restart');
}

// 제출하기
const submit = (e) => {
  console.log('submit', submit);
  console.log("e", e);
  console.log("e", e.target);
  let answer = blockColor.filter(v => (v === answerColor ? true : false));
  console.log('정답!', answer);

  console.log("blockColor", blockColor);
  console.log("answerColor", answerColor);
  // answerColor;
};

// 버튼 숨기기
const hiddenButton = (value) => {
  let tag = document.querySelector(`.${value}`);
  tag.style.visibility = 'hidden';
};
// 버튼 숨기기
const removeButton = (value) => {
  document.querySelector(`.${value}`).remove();
};

// 버튼 보이기
const showButton = (value) => {
  let tag = document.querySelector(`.${value}`);
  tag.style.visibility = 'visible';
  // tag.style.display = 'block';
};
