const submit = document.querySelector(".submit");
const block = document.querySelector(".block");
  const nonblock = document.querySelector(".nonblock");


const color = ["red", "blue", "yellow", "green", "purple"]; // 블록 색상
let blockAnswer = [];
let answerColor;

window.onload = function () {
  let board = document.querySelector(".board");

  for (let i = 0; i < 3; i++) {
    let answer = [];
    let blockRow = document.createElement("div"); // 블록 한 줄
    blockRow.className = "blockRow";
    for (let j = 0; j < 3; j++) {
      let block = document.createElement("div"); // 블록
      let num = parseInt(Math.random() * 5); // 색상 랜덤 지정
      block.id = `block${i}${j}`;
      block.className = `block`;
      answer[j] = color[num];
      block.innerText = color[num];
      block.style.backgroundColor = color[num]; 
      block.addEventListener("click", onClickBlock);
      // block.classList.add(`backgroundColor = ${color[num]}`);

      // block.classList.remove('block');
      // block.classList.add('nonblock');
      blockRow.appendChild(block);
    }
    console.log("answer", answer);
    blockAnswer.push(answer);
    board.appendChild(blockRow);
  }

  // console.log('blockAnswer', blockAnswer);
  setTimeout(time(), 2000);
  answerColor = color[parseInt(Math.random() * 5)];
  let text = document.createElement("p");
  text.innerText = `${answerColor}를 선택해주세요.`;
  board.appendChild(text);

  
};

// window.addEventListener("onclick", e => {});

let time = () => {
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      let block = document.querySelector(`#block${i}${j}`);
      // block.style.backgroundColor = color[0];
      block.classList.remove('nonblock');
      block.classList.add('block');
      setInterval(() => {
        block.style.backgroundColor = '#fff'; 
        block.classList.add('nonblock');
        block.classList.remove('block');
        // notification.classList.remove('show')
      }, 500);
      // }, 3000);
    }
  }
  console.log('nonblock ??', nonblock, block)
};

const onClickBlock = (e) => {
  console.log('e', e);
  console.log('e', e.target.classList);
  let clickItem = e.target.classList[1];
  if (clickItem === "block") {
    clickItem.toggle('nonblock');
    // nonblock.classList.toggle('block');
  } else if ((clickItem === "nonblock")) {
    clickItem.toggle('block');
  }
  console.log('click');
  // e.target.className = 'block';
}

const init = () => {
/*   function init() {
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        const block = document.querySelector(`#block${i}${j}`);
        block.addEventListener("click", onClickBlock);
    }
  } */
  
 /*  console.log('nonblock ??', nonblock, block)
  block.addEventListener("click", onClickBlock);
  nonblock.addEventListener("click", () => onClickBlock); */
  submit.addEventListener("click", e => {
    submit;
    console.log("e", e);
    console.log("e", e.target);
    let answer = blockAnswer.filter(v => (v === answerColor ? true : false));
    console.log('정답!', answer);
  
    console.log("blockAnswer", blockAnswer);
    console.log("answerColor", answerColor);
    // answerColor;
  });
};

init();