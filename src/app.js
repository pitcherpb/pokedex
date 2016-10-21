import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => (
    <hearder>
        <h1>{props.title}</h1>
    </hearder>
)

const Content = (props) => (
    <section>
        <p>{props.content}</p>
        <Items items={props.items}/>
    </section>
)

const Items = (props) => {
    console.log(props.items)
    return (
        <ul>
        {props.items.map(item => (
            <li><img src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${item.id}.png`} width='98px'/><br/><span id='pokemon_name'>{item.name}</span><span id='pokemon_number'>#{item.id}</span></li>
        ))}
        </ul>
    )
}

const App = () => {
    const appTitle = 'Pokedex'
    const appContent = 'This is a simple react applicationt'
    const items = [
        {"id":"001","name":"Bulbasaur"},
        {"id":"002","name":"Ivysaur"},
        {"id":"003","name":"Venusaur"},
        {"id":"004","name":"Charmander"},
        {"id":"005","name":"Charmeleon"},
        {"id":"006","name":"Charizard"},
        {"id":"007","name":"Squirtle"},
        {"id":"008","name":"Wartortle"},
        {"id":"009","name":"Blastoise"},
        {"id":"010","name":"Caterpie"}
    ]
    return(
        <section className="app-container">
            <Header title={appTitle} />
            <Content 
                content={appContent}
                items={items}
            />
        </section>
    )


}


const element = document.getElementById('app')
ReactDOM.render(<App />, element)