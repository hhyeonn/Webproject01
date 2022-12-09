// main.js
window.addEventListener('load', () => {

/* 주메뉴 */
const gnbMenu = document.querySelectorAll('.gnb>ul>li');
const headerWrap = document.querySelector(".header_wrap");

for(var i=0;i<gnbMenu.length;i++){
    gnbMenu[i].addEventListener('mouseover',(e) => {
        e.currentTarget.classList.add('on');
        var ht = e.currentTarget.children[1].offsetHeight;//이벤트.가 발생된. li에. 높이 지정
        headerWrap.style.height = 70 + ht + 'px';
    });

    gnbMenu[i].addEventListener('mouseout',(e) => {
        e.currentTarget.classList.remove('on');
        headerWrap.style.height = '70px';
    });

    gnbMenu[i].children[0].addEventListener('focus', (e) => {//li>a 키보드 tab키로도 움직이게
        e.currentTarget.parentElement.classList.add('on');
        var ht = e.currentTarget.nextElementSibling.offsetHeight; //li>div
        headerWrap.style.height = 70 + ht + 'px';
    });

    gnbMenu[i].children[0].addEventListener('blur', (e) => {
        e.currentTarget.parentElement.classList.remove('on');
        headerWrap.style.height = '70px';
    });
}

/* 검색박스 */
const srchWrap = document.querySelector(".srch_wrap");
const btnSrch = document.querySelector(".btn_srch");
const btnSrchClose = document.querySelector(".btn_srch_close");

btnSrch.addEventListener("click", (e) => {
    e.preventDefault();
    srchWrap.classList.add("on");
});

btnSrchClose.addEventListener("click", (e) => {
    e.preventDefault();
    srchWrap.classList.remove("on");
});

/* 오토배너 */
const btnNext = document.querySelector('a.btn_next');
const btnPrev = document.querySelector('a.btn_prev');
const slide = document.querySelectorAll('li.slide');//0,1,2
const slideRoll = document.querySelectorAll('.slide_roll li');//0,1,2
const btnPlay = document.querySelector('.btn_play');

let bnnNum = 0;
let lastNum = document.querySelectorAll('.slide_wrap>li').length - 1;//2

/* next 버튼 */
btnNext.addEventListener('click', e => {
    bnnNum++;
    if(bnnNum>lastNum){bnnNum = 0;}

    activation(bnnNum,slide);
    activation(bnnNum,slideRoll);

    // slide.forEach(item => { //forEach = 각각. 배열에 있는거 하나하나 가져와서 active 넣어줌
    //     item.classList.remove('active');
    // });
    // slide[bnnNum].classList.add('active');

    // slideRoll.forEach(idx => {
    //     idx.classList.remove('on');
    // });
    // slideRoll[bnnNum].classList.add('on');
});

/* prev 버튼 */
btnPrev.addEventListener('click',function(){
    bnnNum--;
    if(bnnNum<0) bnnNum = lastNum;

    activation(bnnNum,slide);
    activation(bnnNum,slideRoll);

    // slide.forEach(item => {
    //     item.classList.remove('active');
    // });
    // slide[bnnNum].classList.add('active');

    // slideRoll.forEach(idx => {
    //     idx.classList.remove('on');
    // });
    // slideRoll[bnnNum].classList.add('on');
});

/*오토배너 */
function autoBanner(){
    //next버튼 눌렀을때
    bnnNum++;
    if(bnnNum>lastNum)bnnNum = 0;

    activation(bnnNum,slide);
    activation(bnnNum,slideRoll);
    autoBnn = setTimeout(autoBanner,5000); //재귀함수

    // slide.forEach(item => {
    //     item.classList.remove('active');
    // });
    // slide[bnnNum].classList.add('active');

    // slideRoll.forEach(idx => {
    //     idx.classList.remove('on');
    // });
    // slideRoll[bnnNum].classList.add('on');
}
let autoBnn = setTimeout(autoBanner,5000); //최초호출

/* 배너 재생 멈춤 버튼 */
let flag = true;

btnPlay.addEventListener('click', () => {
    if(flag){//멈춤
        btnPlay.classList.add('on');
        clearTimeout(autoBnn);
        flag = false;
    }else{//재생
        btnPlay.classList.remove('on');
        autoBnn = setTimeout(autoBanner,5000);
        flag = true;
    }
});

/* 롤링버튼 클릭 */
for(let i=0;i<slideRoll.length;i++){
    slideRoll[i].addEventListener('click', e =>{
        e.preventDefault();
        activation(i,slide);
        activation(i,slideRoll);
    });
};

function activation(index, list){
    for(let el of list){
        el.classList.remove("on","active");
    }
    list[index].classList.add("on","active");


    // curRoll = item.currentTarget; //클릭이벤트가 전달된 엘리먼트
    // parentRoll =  curRoll.parentElement; //연결된 엘리먼트의 부모
    // childRoll = parentRoll.children; //부모 엘리먼트의 자식 엘리먼트들
    // curIdx = Array.from(childRoll).indexOf(curRoll); //열결된 엘리먼트의 인덱스

    // slide.forEach(function(item){
    //     item.classList.remove('active');
    // });
    // slide[curIdx].classList.add('active');

    // slideRoll.forEach(function(idx){
    //     idx.classList.remove('on');
    // });
    // slideRoll[curIdx].classList.add('on');
}


/* top버튼 */
const btnTop = document.querySelector('a.btn_top');

window.addEventListener('scroll', () => {
    let scroll = document.querySelector('html').scrollTop;
    console.log(scroll);
    if(scroll <= 0){
        btnTop.classList.remove("on","ab");
    }else if(scroll>2700){
        btnTop.classList.add("ab");
        btnTop.classList.add("on");
    }else{
        btnTop.classList.remove("ab");
        btnTop.classList.add("on");
    }
});

btnTop.addEventListener('click', e => {
    e.preventDefault();
    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
});

// 화면 스크롤 시 이벤트
const newsList = document.querySelector("#newsList");
const newsletterBox = document.querySelector("#newsletter_box");
const prhallSec = document.querySelector("#prhall_sec");
const listArea1 = document.querySelector("#listarea1");
const listArea2 = document.querySelector("#listarea2");
const listArea3 = document.querySelector("#listarea3");
 

window.addEventListener("scroll",(e)=>{
  let scroll = document.querySelector("html").scrollTop;
  console.log(scroll);
  if(scroll > 350){
    newsList.style.opacity = 1;
  
  } if(scroll > 740){
    newsletterBox.style.opacity = 1;

  } if(scroll > 1110){
     prhallSec.style.opacity = 1;
   
  } if(scroll > 1930 ){
    listArea1.style.opacity = 1;
    
  }  if(scroll > 2350){
    listArea2.style.opacity = 1;
    
  } if(scroll > 2750){
    listArea3.style.opacity = 1;
  
}
})

});
