import React from "react";
import axios from "axios";

class PlayerList extends React.Component {
    state = {
        country: this.props.country,
        currentList: []
    }
    componentDidMount() {
        console.log("PlayerList initialized");
        axios.get(`http://localhost:5000/api/players`)
            .then(res => {
                console.log(res);
                console.log(this.state.country);
                this.setState({
                    currentList: res.data.filter(item=>(item.country.toLowerCase().includes(this.state.country.toLowerCase())))
                });
            })
            .catch(err => console.log("Error: ", err));
    }
    componentDidUpdate(prevProps, prevState){
        console.log("PlayerList CDU ran.");
        if (prevProps.country !== this.props.country){
            this.setState({
                country: this.props.country
            });
            axios.get(`http://localhost:5000/api/players`)
            .then(res => {
                this.setState({
                    currentList: res.filter(item=>(item.country.toLowerCase().includes(this.props.country.toLowerCase())))
                });
            })
            .catch(err => console.log("Error: ", err));
        }
        
    }
    render(){
        return(
            <div>
                {this.state.currentList.map(item=>(
                    <div>
                        <h2>{item.name}</h2>
                        <p>Country: {item.country}</p>
                    </div>
                ))}
            </div>
        )
    }
}

export default PlayerList;