import React from "react"

class Timer extends React.Component {
    constructor(){
        super()
        this.state = {
            timer:5
        }
    }

    componentDidMount(){
        this.interval = setInterval(()=>{
            this.setState({timer:this.state.timer-1})
        },1000)
    }

    componentDidUpdate(){
        if(this.state.timer===0){
            clearInterval(this.interval)
        }
    }


    render(){
        console.log(this.state.timer)
        if(this.state.timer!==0){
            return(
                <h1>{this.state.timer}</h1>
                )
        }else{
            return (
                <div>
                    <h1>Timer Ends</h1>
            <audio autoPlay>
                <source src={"http://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/theme_01.mp3"} type={"audio/mpeg"}></source>
            </audio>
            </div>
            )
        }
        
    }
}

export default Timer