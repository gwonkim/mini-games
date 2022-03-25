const color = ["red", "blue", "yellow", "green", "purple"]; // 블록 색상

window.onload = function() {
  let board = document.querySelector('.board');

 for (let i = 0; i < 10; i++) {
   let blockRow = document.createElement('div'); // 블록 한 줄
   blockRow.className = 'blockRow';
   for (let j = 0; j < 10; j++) {
      let block = document.createElement("div"); // 블록
      block.className = 'block';
      let num = parseInt(Math.random() * 5); // 색상 랜덤 지정
      block.innerText = color[num];
      block.style.backgroundColor = color[num];
      blockRow.appendChild(block);
    }
    board.appendChild(blockRow);
  }
};

