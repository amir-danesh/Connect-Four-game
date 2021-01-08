var all_buttons = $('button');
var all_columns = $('td');

var turn = 'blue'

function togturn(){
  if (turn == 'blue'){
    turn = 'red';
  } else{
    turn = 'blue';
  }
}

function insert_chips(col){
  for (var i = col+35; i > -1; i-=7) {
    if (all_buttons.eq(i).css('background-color') == "rgb(128, 128, 128)"){
      all_buttons.eq(i).css({'background-color':turn});
      checkwin();
      togturn();
      return;
    }
  }
}

function checkwin(){
  for (var i = 35; i > -1; i-=7) {
    for (var j = 0; j < 4; j++) {
      var temp = [all_buttons.eq(i+j).css('background-color'),all_buttons.eq(i+j+1).css('background-color'),all_buttons.eq(i+j+2).css('background-color'),all_buttons.eq(i+j+3).css('background-color')]
      if(identical(temp) == true){
        return we_have_winner();
      }
    }
  }
  for (var i = 35; i > 20; i-=7) {
    for (var j = 0; j < 7; j++) {
      var temp = [all_buttons.eq(i+j).css('background-color'),all_buttons.eq(i+j-7).css('background-color'),all_buttons.eq(i+j-14).css('background-color'),all_buttons.eq(i+j-21).css('background-color')]
      if(identical(temp) == true){
        return we_have_winner();
      }
    }
  }
  for (var i = 35; i > 20; i-=7) {
    for (var j = 0; j < 4; j++) {
      var temp = [all_buttons.eq(i+j).css('background-color'),all_buttons.eq(i-7+j+1).css('background-color'),all_buttons.eq(i-14+j+2).css('background-color'),all_buttons.eq(i-21+j+3).css('background-color')]
      if(identical(temp) == true){
        return we_have_winner();
      }
    }
  }
  for (var i = 41; i > 26; i-=7) {
    for (var j = 0; j > -4; j--) {
      var temp = [all_buttons.eq(i+j).css('background-color'),all_buttons.eq(i-7+j-1).css('background-color'),all_buttons.eq(i-14+j-2).css('background-color'),all_buttons.eq(i-21+j-3).css('background-color')]
      if(identical(temp) == true){
        return we_have_winner();
      }
    }
  }
}

function identical(array) {
    for(var k = 0; k < array.length - 1; k++) {
        if(array[k] !== array[k+1] || array[k] == "rgb(128, 128, 128)") {
          return false;
        }
    }
    return true;
}

function we_have_winner(){
  $('h3').html('<strong>' + turn + ' won the game! Restart the page to play again!')
  all_buttons.off('click');
}

all_buttons.click(function(){
  insert_chips(all_buttons.index($(this))%7)
})
