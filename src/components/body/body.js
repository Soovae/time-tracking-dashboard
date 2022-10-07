import React from 'react'
import Card from '../card/card'
import Person from '../person/person'
import './body.css'
import DataCard from '../../json/data.json'


class Body extends React.Component {
    state = {
        currentPage : "daily"
    }
    
    navBtnClickParent = (current) => {
        this.setState({
            currentPage : current,
        })
    }
    render() {
        return (
            <div id='body' className='container2'>
                <div className='querie'>
                    <Person currentPage={this.state.currentPage} navBtnClick={this.navBtnClickParent}/>
                </div>
                <div className='d-flex flex-wrap all-card justify-content-lg-center'>
                    {DataCard.map((card, index) => {
                        return <Card key={index} card={card} time={this.state.currentPage}/>
                    })}
                    
                </div>
            </div>
        )
    }
}

export default Body