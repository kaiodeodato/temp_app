import { useState } from "react"

function Search() {

    const[cidade,setCidade] = useState("")

    function SearchInput(){
        let currentValue = document.querySelector('input[name=searchInput]').value
        console.log(currentValue)

        const url = `https://api.openweathermap.org/data/2.5/weather?q=${currentValue}&appid=4d8fb5b93d4af21d66a2948710284366&units=metric`
        fetch(url)
        .then(response => response.json())
        .then(data =>{
            const {main,name,sys,weather} = data;
            if(weather != undefined)
                console.log(weather[0].icon)
                const icon_image = weather[0].icon
                console.log(icon_image)
                const icon_url = 'http://openweathermap.org/img/wn/' + icon_image + '.png';
                console.log(data)

                setCidade(
                    `  
                    <div class="cabeca"> 
                        <h1>${name} | ${sys.country}</h1>
                    </div>
                    <div class="topo">
                        <img src ="${icon_url}"></img>
                        <h1>${main.temp.toFixed(0)}º</h1>  
                    </div>

                    <div class="baixo">
                        <div class="temps">
                            <p>${main.temp_max.toFixed(0)}º</p> <p>|</p> <p>${main.temp_min.toFixed(0)}º</p>    
                        </div>
                    </div>
                           
                    `
                )
        })
    }

    return (
        <div className="geral">
            <div className="search">
                <h2>Clima de qual cidade?</h2>
                <input placeholder="Digite aqui..." onKeyUp={SearchInput} type="text" name="searchInput"></input>  
                      
            </div>
            <div>
            {
                (cidade!="")?
                <div className="corpo" dangerouslySetInnerHTML = {{__html:cidade}} />:
                <div className="loading">loading...</div>
            }
            </div>
        </div>
    );
  }
  
  export default Search;
  