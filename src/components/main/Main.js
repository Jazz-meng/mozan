import React, { Component } from 'react'
import './main.css'
class Main extends Component {
  state={
      count:0
    }
    addClick=()=>{
      this.setState({
        count:this.state.count==200 ? 0: this.state.count+1
      })
    }
    subClick=()=>{
      this.setState({
        count:this.state.count<1 ? 0: this.state.count-1
      })
    }
  render () {
    return (
      <div className='main'>
        <div className="banner">
          <img src={require('../images/pic1_03.jpg')} alt="" />
          <img src={require('../images/pic2_03.jpg')} alt="" />
          <img src={require('../images/pic3_03.jpg')} alt="" />
        </div>
        <div className="main_d">
          <div className="d_left">
            <div className="tetle">
              <img src={require('../images/pic03_04.png')} alt="" />
              <h1>龙之谷六周年限定礼包大Boss冰龙款男士T恤</h1>
            </div>
            <div className="time">
              <h4>距预售结束</h4>
              <div className="time_in">
                <div><h1><b>09</b>:</h1><span>天</span></div>
                <div><h1><b>15</b>:</h1><span>时</span></div>
                <div><h1><b>35</b>:</h1><span>分</span></div>
                <div><h1><b>55</b></h1><span className='sec'>秒</span></div>
              </div>
              <p><span>注:</span>商品将于<span>2017/10/5</span>统一发货</p>
            </div>
          </div>
          <div className="d_right">
            <div className='yushou'>
              <div className='tag ac'>预售价</div>
            <div className='price'>
              <p className='first_p'>￥<span>700.00</span></p>
              <p className='second_p'>正价：<span>￥960.00</span></p>
            </div>
            </div>
            <div className='kuanshi'>
              <div className='tag'>款式</div>
              <div className='type'>
                <div className='button'>iphone 5</div>
                <div className='button'>iphone 6</div>
                <div className='button'>iphone 6+</div>
              </div>
            </div>
            <div className='size'>
              <div className="tag">尺妈</div>
              <div className="chima">
                <div className='button btn'>XXS</div>
                <div className='button btn'>XS</div>
                <div className='button btn'>S</div>
                <div className='button btn'>M</div>
                <div className='button btn'>L</div>
                <div className='button btn'>XL</div>
              <div className='button btn'>XXL</div>
              </div>
            </div>
            <div className='num'>
              <div className="tag">数量</div>
              <div className="count">
                <div onClick={this.subClick} className='sub'>-</div>
                <div id='count' className='inp'>
                    {this.state.count}
                </div>
                <div onClick={this.addClick} className="add">+</div>
              </div>
            </div>
          </div>
          <div className="instantly">
            <a href="" className='order'>立即预约</a>
          </div>
        </div>
        <div className="bacg"></div>
        <div className='main_pic'>
          <p><img src={require('../images/pic4_09.jpg')} alt="" /></p>
          <p><img src={require('../images/pic6_10.jpg')} alt="" /></p>
          <p><img src={require('../images/pic7_11.jpg')} alt="" /></p>
          <p><img src={require('../images/pic8_11.jpg')} alt="" /></p>
        </div>
      </div>


    )
  }
}

export default Main
