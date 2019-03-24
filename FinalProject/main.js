$(function(){
    
    let db = firebase.firestore().collection('memeCollection')

    let memeUrl = "https://api.imgflip.com/get_memes"

    $.get(memeUrl, function(data){
        console.log(data.data.memes)
        data.data.memes.forEach(element => {
        //`<div id ="main">${element.data}</div>`
        //$("#main").append(`<div>${element.name}</div>`);
        // $(".memeMenu").append(`<div><img src="${element.url}"></div>`);
        $(".dropdown-content").append(`<a href="${element.url}" class="active">${element.name}</a>`);
        
        $(`<a href="${element.url}" class="active">${element.name}</a>`).click(function(){
            
            $(".container").show(`<div class="container"><img src="${element.url}"></div>`)
          });
        });

        
    })

})
