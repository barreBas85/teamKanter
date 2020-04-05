//Author: Chris Guilliamse

//event listeners:
document.getElementById("nextMeme").addEventListener("click", nextMeme);
document.getElementById("prevMeme").addEventListener("click", previousMeme);


const memePaths = ["/images/memes/f80vlbb3wgq41.jpg", "images/memes/i5nqc7pcrlq41.jpg", "images/memes/k00yth3c1nq41.jpg", "images/memes/ted5j1pwnmq41.png", "images/memes/xyz0u0mvcmq41.jpg", "images/memes/yn9j2kyqinq41.jpg", "images/memes/s0gx14key0r41.jpg"];
let currentmeme = 0;

document.getElementById("memeImageHeader").innerHTML = "Meme 1 van " + memePaths.length;

function nextMeme()
{
    if(currentmeme == memePaths.length - 1)
    {
        currentmeme = 0
    }
    else
    {
        currentmeme++;
    }
    let str = memePaths[currentmeme];
    let imgHandle = document.getElementById("memeImage");
    imgHandle.src = str;
    let memeplus1 = currentmeme + 1;
    document.getElementById("memeImageHeader").innerHTML = "Meme " + memeplus1 + " van " + memePaths.length;
}
function previousMeme()
{
    if(currentmeme == 0)
    {
        currentmeme = memePaths.length - 1;
    }
    else
    {
        currentmeme--;
    }
    let str = memePaths[currentmeme];
    let imgHandle = document.getElementById("memeImage");
    imgHandle.src = str;
    let memeplus1 = currentmeme + 1;
    document.getElementById("memeImageHeader").innerHTML = "Meme " + memeplus1 + " van " + memePaths.length;
}

