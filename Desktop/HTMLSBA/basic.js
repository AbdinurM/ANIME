function clickCounter() {
    if (typeof(Storage) !== "undefined") {
      if (localStorage.clickcount) {
        localStorage.clickcount = Number(localStorage.clickcount)+1;
      } else {
        localStorage.clickcount = 1;
      }
      document.getElementById("result").innerHTML = "Thank you for your vote " + localStorage.clickcount ;
    } 
  }
  function clickCounter1() {
    if (typeof(Storage) !== "undefined1") {
      if (localStorage.clickcount1) {
        localStorage.clickcount1 = Number(localStorage.clickcount1)+1;
      } else {
        localStorage.clickcount1 = 1;
      }
      document.getElementById("result1").innerHTML = "Thank you for your vote " + localStorage.clickcount1 ;
    } 
  }
  function clickCounter2() {
    if (typeof(Storage) !== "undefined1") {
      if (localStorage.clickcount2) {
        localStorage.clickcount2 = Number(localStorage.clickcount2)+1;
      } else {
        localStorage.clickcount2 = 1;
      }
      document.getElementById("result2").innerHTML = "Thank you for your vote " + localStorage.clickcount2 ;
    }
  }
  function clickCounter3() {
    if (typeof(Storage) !== "undefined1") {
      if (localStorage.clickcount3) {
        localStorage.clickcount3 = Number(localStorage.clickcount3)+1;
      } else {
        localStorage.clickcount3 = 1;
      }
      document.getElementById("result3").innerHTML = "Thank you for your vote " + localStorage.clickcount3 ;
    } 
  }
  function totalvote() {
    if (typeof(Storage) !== "undefined1") {
      if (localStorage.result > reuslt1){
        document.getElementById("totalvote").innerHTML = "Dbz is in the lead!"
      }
    }
  }
  function myFunction() {
    document.getElementById("demo").innerHTML = "Paragraph changed.";
  }