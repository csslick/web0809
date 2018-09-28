function insertDom(url){
    $.ajax({
        url: url,
        dataType: 'html',
        success: function(data){
            $('#root').append(data);

            // 문서 날짜 정보(파일명 참조)
            var time = url
                        .replace('docs/', '')
                        .replace('.html', '');
            $('.time').last().html(time);
        }
    }).fail(function(){throw 'load error!!'})
}

$(function(){
    var docs = [
        { url: 'templates/header.html' },
        /*** add here... ***/
        { url: 'docs/2018-09-27a.html' }, // 의사소통능력
        { url: 'docs/2018-09-27.html' }, // 자기소개서
        { url: 'docs/2018-09-26.html' }, // 웹 디자인이란
    ]

    docs.map(function(doc){
        console.log(doc.url);
        insertDom(doc.url);
    })
})