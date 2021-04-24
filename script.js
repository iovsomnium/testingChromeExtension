//컨텐츠 페이지 의 모든 텍스트를 가져온다.


//크롬 확장 기능중 tabs와 관련된 기능 중에 컨텐츠 페이지를 대상으로 코드를 실행한다. 
chrome.tabs.executeScript({
    code:'document.querySelector("body").innerText'
}, function(result){
    var bodyText = result[0]
    var bodyNum = bodyText.split(' ').length
    var myNum = bodyText.match(new RegExp('\\b(the|is|was|of|)\\b','gi')).length;
    var per = myNum /bodyNum*100;
    per = per.toFixed(2);

    document.querySelector('#result').innerText = myNum + '/' + bodyNum +'('+(per)+'%)'
})