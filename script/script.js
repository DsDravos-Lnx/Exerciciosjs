(function(){

    const liElements = document.getElementsByTagName('li')
    const ulElement = document.getElementsByTagName('ul')

    liElements[0].style.color = '#00f'
    liElements[2].style.fontWeight = 'bold'
    ulElement[0].style.border = 'solid'

    const diagonal = function(){
        let trElements = document.getElementsByTagName('tr')
        for(let i=0; i<3; i++) {
            trElements[i].getElementsByTagName('td')[i].style.color = '#ffa500'       
        }
    }
    diagonal()

})()