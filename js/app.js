function insertDom(url){
    $.ajax({
        url: url,
        dataType: 'html',
        success: function(data){
            $('#root').append(data);
        }
    }).fail(function(){throw 'load error!!'})
}

$(function(){
    var docs = [
        { url: 'templates/header.html' },
        /*** add here... ***/
        { url: 'docs/2018-09-27a.html' }, // 의사소통능력
        { url: 'docs/2018-09-27.html' }, // 자기소개서
        { url: 'docs/2018-09-26.html' }, // 
    ]

    docs.map(function(doc){
        console.log(doc.url);
        insertDom(doc.url)
    })
})