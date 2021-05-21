import React, {useState} from 'react';
import './conversor.css'


function Conversor (props) {

        let [valorMoeda, setValorMoeda] = useState(0.00)
        let [valorConvertido, setValorConvertido] = useState(0)

        let dados = `${props.moedaA}_${props.moedaB}`
        let url = `https://free.currconv.com/api/v7/convert?q=${dados}&compact=ultra&apiKey=c0e646585b759fbb1ea0`

        function converter(){

            fetch(url).then(res => {
                return res.json()
            }).then(json => {
                let cotacao = json[dados]
                setValorConvertido((parseFloat(valorMoeda) * cotacao).toFixed(2))})
            }

        return(
            <div className='conversor'>
                <h2>{props.moedaA} para {props.moedaB}</h2>
                
                <input className='input_dados' type='text' onChange={(event)=> {setValorMoeda(event.target.value)}}/>

                <button className='botao_dados' type='submit' onClick={converter}>Converter</button>
                <h2>Valor convertido = {valorConvertido}</h2>
            </div>
        )

}

export default Conversor;
