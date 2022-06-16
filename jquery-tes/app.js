// // Method1
// const myFunc = function(){
//     console.log('jQuery is ready');
// }
// $( document ).ready(myFunc)
// ///////////////////////////////
// window.onload = function(){
//     console.log("js is ready");
// }

// Method2
//resemblance to document.querySelector('h1').innerHTML = 'Hello!'
$( document ).ready(function(){
    console.log("jQuery is ready");

    $('h1').html('Hello!')
    
    $('#sub-title').css('textAlign', 'center')

    $('.title').css('color','red')
    $('.title').css('fontWeight','bold')

    $('.item').css('color','blue')
    $('.item').addClass('myClass')

    $('.hide').hide()
    
    $('#button').click(()=>{
        $('img').attr('src', `https://picsum.photos/500/300?random=5`)
    })
    $('img').attr({
        src:'https://picsum.photos/500/300?random=2',
        alt:'Hello Hello random pic',
        title:'would you look at that',
        height:'100px',
        width:'100px',
})
})
