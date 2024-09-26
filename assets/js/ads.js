function createAdsContent(body){
    const html = document.createElement('div');
    html.classList.add('ads-content');
    html.insertAdjacentHTML('afterbegin', body)

    document.querySelector('.mini-container').appendChild(html)

    return html
}

createAdsContent(`
    <div class="rec-wp-item">
        <p>Bu ýerde siziň reklamaňyz bolup biler<br> Habarlaşmak üçin: +99371147287</p>
    </div>
    `, )


// function ads(){
//     listAds = [
//         {title:'1', image:'dada', propertiens:'dada'},
//         {title:'2', image:'432', propertiens:'ffefef'},]

//     for(let i = 0; i < listAds.length; i++){
//         createAdsContent(`
//                 <div>
//                     <h1>${listAds[i]['title']}</h1>
//                     <h2>${listAds[i]['image']}</h2>
//                     <p>${listAds[i]['propertiens']}</p>
//                 </div>
//             `, 'ads-content')
//     }

// }
// ads()
