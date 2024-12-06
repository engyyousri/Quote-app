var quote=[
    {quote : "Be yourself; everyone else is already taken.",
     auther : "― Oscar Wilde"
},
    {quote : "So many books, so little time",
     auther : "― Frank Zappa"
},
    {quote : "A room without books is like a body without a soul.",
     auther : "― Marcus Tullius Cicero"
},
    {quote : "You only live once, but if you do it right, once is enough",
     auther : "― Mae West"
},
    {quote : "Be the change that you wish to see in the world.",
     auther : "― Mahatma Gandhi"
},
    {quote : "In three words I can sum up everything I've learned about life: it goes on.",
     auther : "― Robert Frost"
},
]

let x=-1;

function getQuote(){
    let num;
   
  do{
    num = Math.round(Math.random()*quote.length)


  }
  while(x===num);
  x = num
  console.log(num)
  document.getElementById('quote').innerHTML=quote[num].quote
  document.getElementById('auther').innerHTML=quote[num].auther
}

document.getElementById('vip').onclick=getQuote