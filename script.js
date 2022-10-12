// console.log("Hello 4");

const board = [
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null],
];

const drop = (color, col) => {
  let freeSpace = false;
  for (let i = 5; i >= 0; i--) {
    if (!board[i][col]) {
      board[i][col] = color;
      freeSpace = true;
      return board;
    }
  }
  if (!freeSpace) {
    return "No free space";
  }
};

const check4 = (color, row, col) => {
  if (row < 0 || row > 5 || col < 0 || col > 6) {
    return {
      err: true,
      msg: "Starting point off board...",
    };
  }
  if (color !== "red" && color !== "blue")
    return { err: true, msg: "Must pass 'red' or 'blue'..." };
  if (board[row][col] !== color)
    return { err: true, msg: "Starting color not same as parameter color..." };

  let NStotal = 0;
  let moreNorth = true;
  let northTracker = 1;
  // Check North
  do {
    if (!board[row - northTracker]) {
      // console.log("No more north");
      moreNorth = false;
    } else if (board[row - northTracker][col] === color) {
      NStotal++;
      northTracker++;
    } else {
      // console.log("Next north no match...");
      moreNorth = false;
    }
  } while (moreNorth === true);
  // Check South
  let moreSouth = true;
  let southTracker = 1;
  do {
    if (!board[row + southTracker]) {
      // console.log("No more South");
      moreSouth = false;
    } else if (board[row + southTracker][col] === color) {
      NStotal++;
      southTracker++;
    } else {
      // console.log("Next South no match...");
      moreSouth = false;
    }
  } while (moreSouth === true);
  // console.log("North-South Total: " + NStotal);

  // EWtotal
  // Check East
  let EWtotal = 0;
  let moreEast = true;
  let eastTracker = 1;
  do {
    if (!board[row][col + eastTracker]) {
      // console.log("No more East");
      moreEast = false;
    } else if (board[row][col + eastTracker] === color) {
      EWtotal++;
      eastTracker++;
    } else {
      // console.log("Next East No Match");
      moreEast = false;
    }
  } while (moreEast === true);
  // Check West
  let moreWest = true;
  let westTracker = 1;
  do {
    if (!board[row][col - westTracker]) {
      // console.log("No more West");
      moreWest = false;
    } else if (board[row][col - westTracker] === color) {
      EWtotal++;
      westTracker++;
    } else {
      // console.log("Next West no match...");
      moreWest = false;
    }
  } while (moreWest === true);
  // console.log("East-West Total: " + EWtotal);

  // NESWtotal
  // Check North East
  let NESWtotal = 0;
  let moreNE = true;
  let NETracker = 1;
  do {
    if (!board[row - NETracker]) {
      // console.log("No more NE");
      moreNE = false;
    } else if (board[row - NETracker][col + NETracker] === color) {
      NESWtotal++;
      NETracker++;
    } else {
      // console.log("Next NE no match...");
      moreNE = false;
    }
  } while (moreNE === true);
  // Check South West
  let moreSW = true;
  let SWTracker = 1;
  do {
    if (!board[row + SWTracker]) {
      // console.log("No more SW");
      moreSW = false;
    } else if (board[row + SWTracker][col - SWTracker] === color) {
      NESWtotal++;
      SWTracker++;
    } else {
      // console.log("Next SW no match...");
      moreSW = false;
    }
  } while (moreSW === true);
  // console.log("Northeast-Southwest Total: " + NESWtotal);

  // SENWtotal
  // Check South East
  let SENWtotal = 0;
  let moreSE = true;
  let SETracker = 1;
  do {
    if (!board[row + SETracker]) {
      // console.log("No more SE");
      moreSE = false;
    } else if (board[row + SETracker][col + SETracker] === color) {
      SENWtotal++;
      SETracker++;
    } else {
      // console.log("Next SE no match...");
      moreSE = false;
    }
  } while (moreSE === true);
  // Check North West
  let moreNW = true;
  let NWTracker = 1;
  do {
    if (!board[row - NWTracker]) {
      // console.log("No more NW");
      moreNW = false;
    } else if (board[row - NWTracker][col - NWTracker] === color) {
      SENWtotal++;
      NWTracker++;
    } else {
      // console.log("Next NW no match...");
      moreNW = false;
    }
  } while (moreNW === true);
  // console.log("Southeast-Northwest Total: " + SENWtotal);

  const totals = [NStotal, EWtotal, NESWtotal, SENWtotal];

  let winner = false;
  totals.forEach((total, idx) => {
    if (total >= 3) {
      winner = true;
    }
  });

  if (winner) {
    return { err: false, winner: true, msg: `${color} wins!`, color: color };
  } else {
    return { err: false, winner: false };
  }
};
