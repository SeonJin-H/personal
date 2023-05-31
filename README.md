# Markup-Project-PersonalPage for Portfolio
포트폴리오 취합 목적의 반응형 웹사이트 구축(개인프로젝트)

![목업](https://github.com/SeonJin-H/personal/blob/main/mockup.png)
Demo: <http://hsj98.dothome.co.kr>


### 📑 개발 목표
* CSS를 이용한 동적 효과 구현 
* 제이쿼리 메서드 이해를 통한 동적 효과 이벤트 객체 생성
* 프로젝트 결과물 통합 및 개인 스타일 시각화를 위한 구성 설계 


### 🛠️ 사용 기술
* HTML
* CSS
* jQuery
* Media Query 


### 💎 주요 기능
* 제이쿼리를 이용한 커서 위치변수 반영 동적 효과 이벤트 구축
![작동예시](https://github.com/SeonJin-H/personal/blob/main/event.png)
~~~
var area = document.querySelector('body');
var p = document.getElementById('ob');

area.onmousemove = function(event) {   
    var bodyW = $("body").width();
    console.log(event.clientX + ', ' + event.clientY + ', ' + bodyW);    
    var x = event.clientX;
    var y = event.clientY;
    p.style.transform = 'translate(' + ((-0.1 * bodyW) + x * 0.2) + 'px, ' + (y * 0.2 - 50) + 'px)';
}; 
~~~

* CSS 활용한 헤더 영역 애니메이션 이벤트 적용
* 미디어 쿼리를 이용한 전체 페이지 개발


### 💡 개선 사항
* header 영역 메뉴 hover 이벤트 적용 필요

### 🖥️ 작업 기여
* 웹사이트 전체 구축
* 기여도 100%



