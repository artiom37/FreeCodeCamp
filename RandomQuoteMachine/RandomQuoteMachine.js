$(document).ready(function(){

//Global var's
var randomNum;
var randomQuote;
var randomAuthor;
getQuote();

function getQuote(){
  var quotes =[{
    "quote": "Hello, Wisconsin !!!",
    "author": "-Eric"
  }, {
     "quote": "I have a definite opinion on this... I don't care.",
     "author": "-Hyde"
  }, {
     "quote": "Punk is the nihilistic outcry.",
     "author": "-Hyde"          
  }, {
     "quote": "Hey, if God didn't want me to wear this shirt so much, he wouldn't made them(Led Zeppelin) rock so hard",
     "author": "-Hyde"
  },{
     "quote": "I don't answer stupid questions.",
     "author": "-Hyde"         
  }, {
     "quote": "Don't put me in your fantasies, I don't even like being in your real life.",
     "author": "-Hyde"             
  }, {
     "quote": "I don't love people, I love Camaros, Zeppelin, and french fries - in that order.",
     "author": "-Hyde"             
  }, {
     "quote": "They want to kill Rock N' Roll because they know it makes us horny, man.",
     "author": "-Hyde"             
  }, {
     "quote": "You're engaged. It's Latin for \"screwed for life\" ",
     "author": "-Hyde"             
  }, {
     "quote": "Well, I'd like to help...   but not as much as I'd like not to.",
     "author": "-Red"             
  }, {
     "quote": "What are you going to put on your resume - dumbass?",
     "author": "-Red"             
  }, {
     "quote": "[to Eric] Oh you're coming too,pal. And there's gonna be heavy lifting... You better bring Donna.",
     "author": "-Red"             
  }, {
     "quote": "Kelso, I'm gonna miss you trying to grab my boob... it makes me feel pretty. God, I'm sad.",
     "author": "-Donna"             
  }, {
     "quote": "I like my women like I like my wine - red and full of alcohol.",
     "author": "-Fez"             
  }, {
     "quote": "Why don't you try some of that forgiveness that Jesus talked so much about so much?",
     "author": "-Kitty"             
  }, {
     "quote": "Crack a book, you lazy son-of-a-bitch.",
     "author": "-Fez"             
  }, {
     "quote": "All families are embarrassing. If they aren't embarrassing they're dead.",
     "author": "-Kitty"             
  }, {
     "quote": "We're all gonna go to church and we're gonna have a damn nice Sunday.",
     "author": "-Red"             
  }, {
     "quote": "Without rules, we all might as well be up in a tree flinging our crap at each other..",
     "author": "-Red"             
  }, {
     "quote": "Wow, my first X-rated movie. I don't know what's going on, but that is the luckiest pizza boy ever.",
     "author": "-Fez"             
  }, {
     "quote": "Opportunity does not knock, then knock again, then leave a note saying \"sorry I missed you\"",
     "author": "-Fez"             
  }, {
     "quote": "[Red stole Bob's Christmas lights] Oh, my god. I married the Grinch. I'm Mrs. Grinch!",
     "author": "-Kitty"             
  }, {
     "quote": "Don't resist me, Mama. It's boogie time.",
     "author": "-Fez"             
  }, {
     "quote": "I like showing my butt. I like to show it and I like to shake it.",
     "author": "-Donna"             
  }, {
     "quote": "You have the right to remain BURNED!",
     "author": "-Kelso"             
  }, {
     "quote": "[Kitty]: Sex, it's not dirty. [Red]: It's not clean either.",
     "author": "-Kitty and Red"             
  }, {
     "quote": "[Directions to Phoenix] Go south until you see a cactus. If you hit a guy with sombrero, you've gone too far.",
     "author": "-Red"             
  }, {
     "quote": "Oh, Red you do care.",
     "author": "-Kitty"             
  }, {
     "quote": "That kid's on dope!",
     "author": "-Red"             
  }, {
     "quote": " [shouts] Ooooh! Burn! That's a burn about a burn! That's a 2nd degree burn!",
     "author": "-Kelso"             
  }, {
     "quote": "Why does everybody go everywhere with us? Look at all these damn kids. I feel like a Mormon. ",
     "author": "-Red"             
  }, {
     "quote": "I'm sorry, Red, I saw this as my one chance to say 'Laurie got married' without having to add, 'And the baby came early.'",
     "author": "-Kitty"             
  }, {
     "quote": "Why would you just cuddle with her when you could do it? I mean,Forman,doing it is \"it.\"That's why they call it \"IT.\"",
     "author": "-Kelso"             
  }, {
     "quote": "Fez, the foundation of a good relationship is three little words: I don't know. What're you doing? I don't know. What're you thinking about? I don't know. Who's that under you? I don't know.",
     "author": "-Kelso"             
  }, {
     "quote": "What the hell kind of restaurant is this? You got eight people singing happy birthday, and no one can bring my wife a damn salad.",
     "author": "-Red"             
  }, {
     "quote": "One day, I'm gonna open a restaurant, and everything on the menu is gonna be special. So, when somebody comes in and says \"Hey, Kelso, what's special on the menu?\", I can say \"Everything.\"",
     "author": "-Kelso"             
  }, {
     "quote": "Donna, sex is how we control men. If they know we like it as much as they do, we'll never get jewelry again.",
     "author": "-Jackie"             
  }, {
     "quote": "I wonder what's up with Jackie. She looks scared... like a deer in the headlights caught with its pants down.",
     "author": "-Fez"             
  }, {
     "quote": "Jackie, I'm sorry you have to see me in this T-shirt. I know how it emphasizes my hunkalicious bod.",
     "author": "-Kelso"             
  }, {
     "quote": "I knew hooking up with Jackie was a big mistake but I did it anyway. That's what she does, man. She makes you stupid. I bet Kelso was composing symphonies before he met her.",
     "author": "-Hyde"             
  }, {
     "quote": "[about Bob's hair] His head looks like a poodle's ass.",
     "author": "-Red"             
  }, {
     "quote": "You're right, Jackie, the Fonz could beat up Bruce Lee.",
     "author": "-Eric"             
  }, {
     "quote": "Oh my god, I told her that, it was me! I saved the day!",
     "author": "-Jackie"             
  }, {
     "quote": "So, Michael cheated on me with Laurie, and Laurie cheated on him! There is a God, and he's on MY SIDE!",
     "author": "-Jackie"             
  }, {
     "quote": "This suit is for leisure. But many times I wear it to get down to business.",
     "author": "-Fez"             
  }, {
     "quote": "It's amazing what one act of civil disobedience can do for a person.",
     "author": "-Eric"             
  }, {
     "quote": "That's not a tater tot... that's a tater giant!",
     "author": "-Fez"             
  }, {
     "quote": "Cartoons make me horny. Oh and food.",
     "author": "-Kelso"             
  }, {
     "quote": "That's the price you pay for docking your Love Boat in Jackie Vallarta.",
     "author": "-Hyde"             
  }, {
     "quote": "If you really do love her, there's only one thing to do, man. You gotta dump her and live free.",
     "author": "-Kelso"             
  }, {
     "quote": "Look, the sooner you realize I'm a genius, the better off we'll both be.",
     "author": "-Jackie"             
  }, {
     "quote": "The last time I was that close to a Japanese machine, it was shooting at me.",
     "author": "-Red"             
  }, {
     "quote": "I'm not shallow. I just judge women on their looks.",
     "author": "-Kelso"             
  }, {
     "quote": "You know, Hyde, at first I thought your father was a real dirtbag. But I've come to realize that there's a fine line between dirt bag and Father Of The Year.",
     "author": "-Eric"             
  }, {
     "quote": "Hey Hyde, this is a cool place for a party. It's already trashed.",
     "author": "-Eric"             
  }, {
     "quote": "If this van's a-rockin'... we're in there doing it.",
     "author": "-Kelso"             
  }, {
     "quote": "If you call ham \"Canadian bacon\", what do you call bacon?",
     "author": "-Kelso"             
  }, {
     "quote": "Girls must really like astronauts, 'cause it says here they get all the tang they want.",
     "author": "-Kelso"             
  }, {
     "quote": "Look, she's beautiful, she believes in me, and if I can get her to put out, it's 3 out of 3. Right now, it's 2 out of 3, and I'm sorry but 50\% ain't gonna cut it.",
     "author": "-Kelso"             
  }, {
     "quote": "It looks like 'Hee Haw' puked in here.",
     "author": "-Red"             
  }, {
     "quote": "You kids change partners more than square dancers.",
     "author": "-Kitty"             
  }, {
     "quote": "Look at me. I weigh 80 pounds. Do you know why I'm bald? It's because my body is eating its own hair.",
     "author": "-Eric"             
  }, {
     "quote": "Whenever I look at naked ladies, I get really tired. Then I get my second wind, and then I want to look at more naked ladies.",
     "author": "-Fez"             
  }, {
     "quote": "Panties. Glorious panties.",
     "author": "-Eric"             
  }, {
     "quote": "You're stubborn, under qualified and can barely speak English... Welcome to the DMV.",
     "author": "-Nina"             
  }, {
     "quote": "These after-school specials are thrilling. Who knew that one beer could turn a cheerleader into a whore?",
     "author": "-Fez"             
  }, {
     "quote": "When used separately, women and alcohol can be a lot of fun. But if you mix them, they can turn you into a dumbass.",
     "author": "-Red"             
  }, {
     "quote": "It turns out, the key to winning Jackie's heart was in the last place I thought to look - my own brain.",
     "author": "-Kelso"             
  }, {
     "quote": "Oh, don't worry Fez. She probably felt bad she was doing it with the foreigner.",
     "author": "-Jackie"             
  }, {
     "quote": "I've fallen asleep not doing it and woken up doing it",
     "author": "-Kelso"             
  }  
  ];//end of quotes data array
  
  randomNum = Math.floor((Math.random()*quotes.length));
  randomQuote=quotes[randomNum].quote;
  randomAuthor=quotes[randomNum].author;
  
  //passing data to HTML classes
  $(".quote").text(randomQuote);
  $(".author").text(randomAuthor);
  
};//end of getQuote() function


  
  $("#btnNewQuote").on("click",function(){
      getQuote();
  });  

  //Here's some basic logic to accomodate Twitter's 140 character max allowance for a tweet
  //though it seems it doesnt work due to Tweeter converts its tweets to Unicode values
  //So i decided to leave it as is.
  if(randomQuote.length + randomAuthor.length > 140)
    {       
       randomQuote = randomQuote.substring(0, 109 - randomAuthor.length)+"...";             
    }
  //Call for twiiter url with quote and author 
    $("#btnTweet").on("click",function(){
     window.open("https://twitter.com/intent/tweet?text="+randomQuote+"%0A"+randomAuthor+"%20%40That70sQuotes"); 
      
    });  
   
});//THE END