function insertDom(url){
    $.ajax({
        url: url,
        dataType: 'html',
        // async: false,
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
        { url: 'docs/2018-10-06_04-11.html' }, // 나비 자르기
        { url: 'docs/2018-10-06.html' }, // 포토샵 서울타워 광고 페이지
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