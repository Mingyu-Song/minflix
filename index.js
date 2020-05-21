// window.onload = function(){
// /*변수 생성*/
//   let list = [];
//   let open = [];
//   let i;
//   let tran0 = 0;
//   let tran1 = 0;
//   let tran2 = 0;
//   let tran3 = 0;
//   let tran4 = 0;
//   let cross = [];

//   /*버튼클래스를 선택해온다*/
//   for(i = 1; i < 6; i++){
//     list.push(document.querySelector(".btn"+i));
//     cross.push(document.querySelector(".svg"+i));
//     console.log(cross);
//     console.log(list);
//   }

// /*버튼클래스를 선택해온다*/
//   for(i = 1; i < 6; i++){
//     open.push(document.querySelector(".asw"+i));
//   }
  
//   /*초기 오픈텍스트는 디스플레이 하지않음*/
//   /*for(i = 0; i < 5; i++){
//     open[i].style.display = "none";
//   }  */
//   let openToClose0 = function(){
//     if(tran0 === 1){
//       cross[0].style.transform = "rotate(45deg)";
//       open[0].classList.add('asw1');
//       tran0 = 0;
//     }
//     else{
//       cross[0].style.transform = "rotate(90deg)";
//       cross[1].style.transform = "rotate(45deg)";
//       cross[2].style.transform = "rotate(45deg)";
//       cross[3].style.transform = "rotate(45deg)";
//       cross[4].style.transform = "rotate(45deg)";
//       open[0].classList.remove('asw1');
//       tran0 = 1;
//       tran1 = 0;
//       tran2 = 0;
//       tran3 = 0;
//       tran4 = 0;
//     }
//   }
//   let openToClose1 = function(){
//     if(tran1 === 1){
//       cross[1].style.transform = "rotate(45deg)";
//       open[1].style.display = "none";
//       tran1 = 0;
//     }
//     else{
//       cross[0].style.transform = "rotate(45deg)";
//       cross[1].style.transform = "rotate(90deg)";
//       cross[2].style.transform = "rotate(45deg)";
//       cross[3].style.transform = "rotate(45deg)";
//       cross[4].style.transform = "rotate(45deg)";

//       open[0].style.display = "none";
//       open[1].style.display = "block";
//       open[2].style.display = "none";
//       open[3].style.display = "none";
//       open[4].style.display = "none";
//       tran0 = 0;
//       tran1 = 1;
//       tran2 = 0;
//       tran3 = 0;
//       tran4 = 0;
//     }
//   }
//   let openToClose2 = function(){
//     if(tran2 === 1){
//       cross[2].style.transform = "rotate(45deg)";
//       open[2].style.display = "none";
//       tran2 = 0;
//     }
//     else{
//       cross[0].style.transform = "rotate(45deg)";
//       cross[1].style.transform = "rotate(45deg)";
//       cross[2].style.transform = "rotate(90deg)";
//       cross[3].style.transform = "rotate(45deg)";
//       cross[4].style.transform = "rotate(45deg)";

//       open[0].style.display = "none";
//       open[1].style.display = "none";
//       open[2].style.display = "block";
//       open[3].style.display = "none";
//       open[4].style.display = "none";
//       tran0 = 0;
//       tran1 = 0;
//       tran2 = 1;
//       tran3 = 0;
//       tran4 = 0;
//     }
//   }
//   let openToClose3 = function(){
//     if(tran3 === 1){
//       cross[3].style.transform = "rotate(45deg)";
//       open[3].style.display = "none";
//       tran3 = 0;
//     }
//     else{
//       cross[0].style.transform = "rotate(45deg)";
//       cross[1].style.transform = "rotate(45deg)";
//       cross[2].style.transform = "rotate(45deg)";
//       cross[3].style.transform = "rotate(90deg)";
//       cross[4].style.transform = "rotate(45deg)";

//       open[0].style.display = "none";
//       open[1].style.display = "none";
//       open[2].style.display = "none";
//       open[3].style.display = "block";
//       open[4].style.display = "none";
//       tran0 = 0;
//       tran1 = 0;
//       tran2 = 0;
//       tran3 = 1;
//       tran4 = 0;
//     }
//   }
//   let openToClose4 = function(){
//     if(tran4 === 1){
//       cross[4].style.transform = "rotate(45deg)";
//       open[4].style.display = "none";
//       tran4 = 0;
//     }
//     else{
//       cross[0].style.transform = "rotate(45deg)";
//       cross[1].style.transform = "rotate(45deg)";
//       cross[2].style.transform = "rotate(45deg)";
//       cross[3].style.transform = "rotate(45deg)";
//       cross[4].style.transform = "rotate(90deg)";

//       open[0].style.display = "none";
//       open[1].style.display = "none";
//       open[2].style.display = "none";
//       open[3].style.display = "none";
//       open[4].style.display = "block";
//       tran0 = 0;
//       tran1 = 0;
//       tran2 = 0;
//       tran3 = 0;
//       tran4 = 1;
//     }
//   }
//   list[0].addEventListener('click', openToClose0);
//   list[1].addEventListener('click', openToClose1);
//   list[2].addEventListener('click', openToClose2);
//   list[3].addEventListener('click', openToClose3);
//   list[4].addEventListener('click', openToClose4);  
// }


window.onload = function(){
  let btn = document.getElementsByClassName('btn');
  console.log(btn);
  
  let openPage = function(){
    if(this.nextElementSibling.classList.contains('active') === false){
      for(var j = 0; j < btn.length; j++){
        btn[j].nextElementSibling.classList.remove('active');
      }
      this.nextElementSibling.classList.toggle('active');
    }
    else{
      this.nextElementSibling.classList.toggle('active');
    }
  }//이거 짠거 너무 감격..다른사람들에겐 별거 아니겠지만 ..

  
  for(var i = 0; i < btn.length; i++){
    btn[i].addEventListener('click', openPage);
  }
}
