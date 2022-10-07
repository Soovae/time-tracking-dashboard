import React from 'react'
import './card.css'
import image from '../../img/icon-ellipsis.svg'


class Card extends React.Component {

    render() {
        return (
            <div className='cards'>
                <div className='cards-img'>
                    <div className={this.props.card.color}>
                        <img src={this.props.card.link} alt="" />
                    </div>
                </div>
                <div className='cards-body'>
                    <div className='cards-info'>
                        <div className='content'>
                            <div className='d-flex justify-content-between'>
                                <h4 className='text-white mb-2'>{this.props.card.title}</h4>
                                <div className='testimg'>
                                    <img src={image} alt="" />
                                </div>
                            </div>
                            <div>
                            <p className='text-white hours mb-0'>{this.props.card.timeframes[this.props.time].current}hrs</p>
                                {/* {this.props.time === "daily" &&
                                    <p className='text-white hours mb-0'>{this.props.card.timeframes.daily.current}hrs</p>
                                }
                                {this.props.time === "weekly" &&
                                    <p className='text-white hours mb-0'>{this.props.card.timeframes.weekly.current}hrs</p>
                                }
                                {this.props.time === "monthly" &&
                                    <p className='text-white hours mb-0'>{this.props.card.timeframes.monthly.current}hrs</p>
                                } */}
                            </div>
                            <div>
                            <p className='last-week mb-0'>Last {this.props.card.timeframes[this.props.time].day} - {this.props.card.timeframes[this.props.time].previous}hrs</p>

                                {/* {this.props.time === "daily" &&
                                    <p className='last-week mb-0'>Last {this.props.card.timeframes.daily.day} - {this.props.card.timeframes.daily.previous}hrs</p>
                                }
                                {this.props.time === "weekly" &&
                                    <p className='last-week mb-0'>Last {this.props.card.timeframes.weekly.day} - {this.props.card.timeframes.weekly.previous}hrs</p>
                                }
                                {this.props.time === "monthly" &&
                                    <p className='last-week mb-0'>Last {this.props.card.timeframes.monthly.day} - {this.props.card.timeframes.monthly.previous}hrs</p>
                                } */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Card