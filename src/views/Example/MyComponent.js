import React from 'react'
import ChildComponent from './ChildComponent'
import AddComponent from './AddComponent'

class MyComponent extends React.Component{

    state = {
        arrJobs: [
            { id: '1', title: 'Developer', salary: '500' },
            { id: '2', title: 'Tester', salary: '400' },
            { id: '3', title: 'Project Manager', salary: '600'}
        ]
    }

    addNewJob = (job) => {
        console.log(job)
        this.setState({
            arrJobs: [...this.state.arrJobs, job]
        })
    }

    deleteAJob = (job) => {
        let currentJobs = this.state.arrJobs
        currentJobs = currentJobs.filter(item => item.id != job.id)
        this.setState({
            arrJobs: currentJobs
        })
    }


    onClick = (event) => {
        event.preventDefault()
        console.log('check data input: ', this.state)
    }

    render(){
        console.log('>>> call render: ', this.state)
        return (
            <>
                <AddComponent
                    addNewJob={this.addNewJob}
                />
                
                <ChildComponent
                    arrJobs={this.state.arrJobs}
                    deleteAJob={this.deleteAJob}
                />
            </>
        )
            
    }

}

export default MyComponent;