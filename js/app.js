function insertDom(url){
    $.ajax({
        url: url,
        dataType: 'html',
        async: false,
        success: function(data){
            if(data != null){
                $('#root').append(data);

                // 문서 날짜 정보(파일명 참조)
                var time = url
                            .replace('docs/', '')
                            .replace('.html', '');
                $('.time').last().html(time);
            }
        }
    }).fail(function(){throw 'load error!!'})
}

$(function(){
    var docs = [
        { url: 'templates/header.html' },
        /*** add here... ***/
        // { url: 'docs/2018-10-15a.html' }, // 포스터
        { url: 'docs/2018-10-19.html' }, // 페르소나 모델 
        { url: 'docs/2018-10-18.html' }, // 사무용 판매 쇼핑몰 분석
        { url: 'docs/2018-10-16.html' }, // 폰트 활용 타이틀
        { url: 'docs/2018-10-15b.html' }, // 적목현상 제거
        { url: 'docs/2018-10-15.html' }, // 페인트 활용 인물 일러스트
        { url: 'docs/2018-10-12-04.html' }, // 물감브러시 활용 프사
        { url: 'docs/2018-10-12-02.html' }, // 브러시
        { url: 'docs/2018-10-12-03.html' }, // 이미지 구도, 수평 기울기
        { url: 'docs/2018-10-12.html' }, // 메인메뉴 목차 구성하기
        { url: 'docs/2018-10-11-03-47.html' }, // 이미지 분할
        { url: 'docs/2018-10-11.html' }, // 웹사이트 분석 사례2
        { url: 'docs/2018-10-10_04-11.html' }, // 나비 자르기
        { url: 'docs/2018-10-10.html' }, // 포토샵 서울타워 광고 페이지
        { url: 'docs/2018-10-05.html' }, // 포토샵 제품 이미지 합성
        { url: 'docs/2018-10-04.html' }, // 1차평가: 의사소통능력
        { url: 'docs/2018-09-27a.html' }, // 의사소통능력
        { url: 'docs/2018-09-27.html' }, // 자기소개서
        { url: 'docs/2018-09-26.html' }, // 웹 디자인이란
    ]

    docs.map(function(doc){
        console.log(doc.url);
        insertDom(doc.url);
    })
    // $.each(docs, function(i, data){
    //     console.log(data.url);
    //     insertDom(data.url);
    // })
})