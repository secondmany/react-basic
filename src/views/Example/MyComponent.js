import React from 'react'

class MyComponent extends React.Component{

    state = {
        name: 'Trung',
        company: 'BMIS'
    }

    handleOnChangeName = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    render(){

        return (
            <>
                <div> 
                    <input value={this.state.name} type="text"
                        onChange={(event) => this.handleOnChangeName(event)} />
                    My name is {this.state.name}</div>
                <div> I work at {this.state.company}.</div>        
            </>
        )
            
    }

}

export default MyComponent;