const createBlock = () => {
  const color = ["red", "blue", "yellow", "green", "purple"]; // 색상
  // let blockColor = [];
  // let block = document.createElement('div'); // 세로
  let blockRow = document.createElementNS('div'); // 가로

  for (let i = 0; i < 10; i++) {
    // let blockColor2 = [];
    for (let j = 0; j < 10; j++) {
      let block1 = document.createElement("div"); // 가로
      let num = parseInt(Math.random() * 5); // 색상 랜덤 지정
      
      // blockColor2[j] = [num];
      block1.style.backgroundColor(color[num]);
      blockRow.appendChild(block1);
      // console.log(blockColor2);
    }
    blockRow.appendChild('<br />');
    // blockColor[i] = blockColor2;
  }
  document.body.appendChild(blockRow);

  console.log(blockColor);
};

// console.log(createBlock());
createBlock();
