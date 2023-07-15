


var authorQuote=[
    {
        quote:'“Be yourself; everyone else is already taken.”',
        author:'Oscar Wilde'
    },
    {
        quote:'“So many books, so little time.”',
        author:'Frank Zappa',
    },
    {
        quote:'“You only live once, but if you do it right, once is enough.”',
        author:' Mae West'
    },
    {
        quote:'“Good friends, good books, and a sleepy conscience: this is the ideal life.”',
        author:' Mark Twain'
    },
    {
        quote:"“Fairy tales are more than true: not because they tell us that dragons exist, but because they tell us that dragons can be beaten.”",
        author:"Neil Gaiman"
    },
    {
        quote:"“The fool doth think he is wise, but the wise man knows himself to be a fool.”",
        author:"William Shakespeare,",
    },

    {
        quote:"“A woman is like a tea bag; you never know how strong it is until it's in hot water.”",
        author:"Eleanor Roosevelt",
    },
    {
        quote: "“Life is like riding a bicycle. To keep your balance, you must keep moving.”",
        author:"Albert Einstein",
    },
    {
        quote: "“Some people never go crazy. What truly horrible lives they must lead.”",
        author:"Charles Bukowski",
    }
]

function yourQuote(){
    var random=Math.floor(Math.random()*authorQuote.length);
document.getElementById('qoute').innerHTML=`${authorQuote[random].quote} `;
document.getElementById('author').innerHTML=`${authorQuote[random].author} `;

}
yourQuote()