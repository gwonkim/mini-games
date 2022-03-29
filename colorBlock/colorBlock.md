# color block game

## 목차
- [colorBlock 게임 설명](#colorBlock-게임은-무엇인가?)
  - [게임 순서](#게임-순서)
  - [주의사항](#주의사항)
- [주요 함수](#주요-함수)
  - [블록판 생성](#블록판-생성)
  - [블록 클릭](#블록-클릭)
  - [제출](#제출)

## colorBlock 게임은 무엇인가?
- 잠깐 보여진 블록판을 기억해서 랜덤으로 뽑힌 색상의 칸을 전부 누르면 성공!

### 게임 순서
1. 시작하기 버튼을 누르면 격자모양의 블록판 하나가 1초 정도 잠깐 보였다가 사라진다.
2. 사라진 순간 블록판 아래에 'oo색을 선택해주세요.'라는 문구가 나온다.(색상은 랜덤이다.)
3. 해당 색상을 올바르게 선택했다면 성공

### 주의사항
- 잘못된 블록을 눌렀을 경우 '틀렸습니다'라는 문장이 나오고 시작 화면으로 돌아간다.
- 첫 화면에서는 시작 버튼만 보이고 게임이 시작되었을 때는 제출 버튼과 재시작 버튼만 보인다.

## 주요 함수
### 블록판 생성
```javascript
const createBlockBoard = () => {
  const game = document.querySelector(".game");
  const blockBoard = document.createElement("div");
  blockBoard.className = 'blockBoard';

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
  createButton(); // 제출과 재시작 버튼 생성
```
   
### 블록 클릭
- 블록을 클릭하였을 경우 해당 블록을 찾아 클래스를 변경하는 방법으로 구현
```javascript
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
```
   
### 제출
```javascript
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
```