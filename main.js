/* eslint-disable indent */
/* eslint-disable quotes */
/* eslint-disable semi */
const m_generate=document.querySelector('.generator')
const m_img=document.querySelector(".image")
const m_author=document.querySelector(".author")
const m_load=document.querySelector(".load")


async function generate()
{
    const url='https://meme-api.com/gimme'
    let response = await fetch(url)
    let data = await response.json()
    const len=data.preview.length
    m_img.src=data.preview[len-1]
    m_img.style.display="block"
    m_load.style.display="none"
    m_author.innerHTML=`Meme by ${data.author}`
}

// m_generate.addEventListener('click',()=>{generate})
m_generate.addEventListener("click", () => {
    generate();
});

