import React from 'react'
import myImg from '../../img/image-jeremy.png'
import './person.css'



class Person extends React.Component {
    // btnClick = (current) => {
    //     this.props.navBtnClick(current)
    // }
    render() {
        return (
            <div className='card-person'>
                <div className='body-person'>
                    <div className='pick-jeremy'>
                        <img src={myImg} alt="" />
                    </div>
                    <div className='person'>
                        <span className='report'>Report for</span>
                        <p className='jeremy-name'>Jeremy Robson</p>
                    </div>
                </div>
                <div className='footer-person'>
                    <div className='list-person'>
                        <ul className='ul-list'>
                            <li className={`mb-2 ${this.props.currentPage === "daily" ? "text-white" : ""}`} onClick={() => this.props.navBtnClick("daily")}>Daily</li>
                            <li className={`mb-2 ${this.props.currentPage === "weekly" ? "text-white" : ""}`} onClick={() => this.props.navBtnClick("weekly")}>Weekly</li>
                            <li className={`mb-2 ${this.props.currentPage === "monthly" ? "text-white" : ""}`} onClick={() => this.props.navBtnClick("monthly")}>Monthly</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Person