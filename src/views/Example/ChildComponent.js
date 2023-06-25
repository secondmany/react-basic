import React from 'react'
import './Demo.scss'

class ChildComponent extends React.Component{

    state = {
        showJobs: false
    }

    handleShowHide = () => {
        this.setState({
            showJobs: !this.state.showJobs
        })
    }

    handleOnClickDelete = (job) => {
        this.props.deleteAJob(job)
    }

    render(){
        // console.log('>>> check props: ', this.props)
        let { arrJobs } = this.props;
        let { showJobs } = this.state;
        // let check = showJobs === true ? 'showJobs = true' : 'showJobs = false';
        return (
            <>
                {showJobs === false ?
                    <div>
                        <button className="btn-show"
                            onClick={() => this.handleShowHide()}>
                            Show
                        </button>
                    </div>
                :
                    <>
                        <div className="job-list">
                            {
                                arrJobs.map((item, index) => {
                                    return (
                                        <div key={item.id}>
                                            {item.title} - {item.salary}
                                            <></><span onClick={() => this.handleOnClickDelete(item)}>x</span>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div>
                            <button onClick={() => this.handleShowHide()}
                            >Hide
                            </button>
                        </div>
                    </>
                }
            </>
        )
            
    }

}

export default ChildComponent;