(function(){

    const liElements = document.getElementsByTagName('li')
    const ulElement = document.getElementsByTagName('ul')

    // 1 - a
    liElements[0].style.color = '#00f'
    
    // 1 - b

    for (i=0; i<3; i++){
        liElements[i].style.fontWeight = 'bold'
    }    
    
    // 1 - c

    ulElement[0].style.border = 'solid'

    // 1 - d

    ulElement[0].previousElementSibling.style.color = 'red'

    // 2
    
    const createTable = function(){
        let table = "<table border='1'>"
        for(let i=0; i<3; i++){
            table += '<tr>'
            for(let c=0; c<3; c++){
                table += '<td>element'+(i+1)+'</td>'
            }
            table += '</tr>'
        }
        table += '</table>'

        document.body.innerHTML = table
    }
    
    // 3

    const primaryDiagonal = function(){
        let trElements = document.getElementsByTagName('tr')
        for(let i=0; i<3; i++) {
            trElements[i].getElementsByTagName('td')[i].style.color = '#ffa500'       
        }
    }
    
    // 4

    const secondaryDiagonal = function(){
        let trElements = document.getElementsByTagName('tr')
        for(let i=0; i<3; i++){                
                trElements[(2-i)].getElementsByTagName('td')[i].style.color = '#00f'       
            }
    }
    
    // const selectFunction = function(){
    //     if(value == 1){
    //         primaryDiagonal()
    //     }else{
    //         secondaryDiagonal()
    //     }
    // }

})()