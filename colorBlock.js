const color = ["red", "blue", "yellow", "green", "purple"]; // 블록 색상
let size; // 크기
let blockColor = []; // 블록 색상
let checkedBlock = []; // 선택한 블록
let answerColor; // 정답 색상

const start = (num, time) => {
  size = num;
  createBlock(); // 블록 생성
  showBlock(time); // 블록 보이기
  setTimeout(question, 500+time); // 문제 생성
};

const createBlock = () => {
  const game = document.querySelector(".game");
  const blockBoard = document.createElement("div");
  blockBoard.className = 'blockBoard';

  hiddenButton('start3'); // 시작버튼 숨기기
  hiddenButton('start5'); // 시작버튼 숨기기
  hiddenButton('start10'); // 시작버튼 숨기기
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
      checkedBlock[r][c] = false; // check 초기화

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

// 블록 보이기
let showBlock = (time) => {
  for(let i=0; i<size; i++) {
    for(let j=0; j<size; j++) {
      let block = document.querySelector(`#block${i}${j}`);
        setTimeout(() => {
          for(let j=0; j<size; j++) {
            block.classList.remove('block');
            block.classList.add('nonblock');
            block.style.background = '#fff'
            }
          }, time);
      }
    clearTimeout();
  }
};

// 문제
const question = () => {
  const text = document.querySelector('.text');
  answerColor = color[parseInt(Math.random() * 5)]; // 정답 색깔
  text.innerText = `${answerColor}를 선택해주세요.`;
};

// 블록 클릭
const onClickBlock = (e) => {
  let id = e.target.id;
  checkAnswer(id);
  let classN = e.target.classList[0];
  let block = document.querySelector(`#${id}`);

  // class change
  if (classN === 'nonblock') {
    block.classList.remove('nonblock');
    block.classList.add('block');
    block.style.background = `${blockColor[id[id.length-2]][id[id.length-1]]}`;
  } else if (classN === 'block') {
    block.classList.remove('block');
    block.classList.add('nonblock');
    block.style.background = '#fff';
  }
};

// 정답 확인
const checkAnswer = (id) => {
  if (blockColor[id[id.length-2]][id[id.length-1]] !== answerColor) {
    alert('틀렸습니다!');
    onRestart();
  } else { // 정답 체크
    checkedBlock[id[id.length-2]][id[id.length-1]] = true;
  }
};

// 재시작
const onRestart = () => {
  location.reload();
}

// 제출하기
const submit = () => {
  for (let r = 0; r < size; r++) {
    for (let c = 0; c < size; c++) {
      if(blockColor[r][c] === answerColor && !checkedBlock[r][c]){
        alert('정답이 아닙니다.');
        return onRestart();
      }
    }
  }
  alert('정답입니다.');
  return onRestart();
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
};
