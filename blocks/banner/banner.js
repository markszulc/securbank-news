export default function decorate(block) {

    const content = block.querySelector('div'); 

    const bannercontent = document.createElement("div");
    bannercontent.classList.add(`banner-content`);

    const bannertext = content.querySelector('div'); 
    const bannertextdiv = document.createElement("div");
    bannertextdiv.classList.add(`banner-text`);
    bannertextdiv.append(bannertext);

    const bannerpic = bannertext.querySelector('picture');
    const bannerpicdiv = document.createElement("div");
    bannerpicdiv.classList.add(`banner-pic`);
    bannerpicdiv.append(bannerpic);


    bannercontent.append(bannerpicdiv);
    bannercontent.append(bannertextdiv);
    
    block.append(bannercontent);

}
