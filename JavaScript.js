/*
Animals Ahoy!
Given a list of REST endpoints, write an infinite scrollable page that loads farm animal
images which are not duplicate of each other.
1. Every rest endpoint will give you a URL of an image. Image of an animal
2. The animal has be shown below in the page, and based on scrollbar movement, it
should load more
3. Images will repeat in the API response (which is random). But it should not repeat
in your display.
Expectations from a good design:
1. Images will come in random sizes. You are expected to not break the page design as much as possible.
2. Arrangements of images in the page is left to your imagination and creativity You can rearrange them.
3. A good design will take care of memory consumed in the browser
Cat: https://aws.random.cat/meow 
Dog: https://random.dog/woof.json
*/
const container= document.querySelector('.container')
const url='https://aws.random.cat/meow'


async function fetchAsync (url) {
    let response = await fetch(url);
    let data = await response.json();

    return data['file'];
  }

function loadImages(numImages){
    let j=0;
    while(j<numImages){
    let x= fetchAsync(url).then((data)=>{
        console.log(data)
        const img= document.createElement('img')
        img.src= `${data}`
        container.appendChild(img)
    })
    j++;
}
}
loadImages(9)


window.addEventListener('scroll',()=> {
    if(window.scrollY + window.innerHeight >= document.documentElement.scrollHeight) {
        loadImages(9)
    }
})
