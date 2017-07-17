import React from 'react'
import ReactDOM from 'react-dom'

const user = {
    name: 'Andy',
    nickname: 'The mattador!'
}

const Welcome = (props) => <h1> Hello {props.name} </h1>
const Paragraph = (props) => <p> {props.text} </p>
const Footer = (props) => <p> {props.text} </p>

class Clock extends React.Component {
    constructor(props) {
        super(props)
        this.state = { date: new Date() }
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(), 1000)
    }

    componentWillUnmount() {
        clearInterval(this.timerID)
    }

    tick() {
        this.setState({
            date: new Date()
        })
    }

    render() { 
        return (
            <div>
                <h1>Tick, tock!</h1>
                <h2>{this.state.date.toLocaleTimeString()}</h2>
            </div>
        )
    }
}

const Link = () => {
    const handleClick = (e) => {
        e.preventDefault()
        alert('hello!')
    }

    return (
        <a onClick={handleClick}>
            click me!
        </a>
    )
}

const App = () => (
    <div>
        <Welcome name={user.name} />
        <Paragraph text="This is the paragraph text" />
        <Clock />
        <Footer text="Goodbye!" />
        <Link />
    </div>
)

const root = document.getElementById('root')
ReactDOM.render(<App />, root)