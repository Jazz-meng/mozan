import React, { Component } from 'react'
import './header.css'
import Meau from '../images/菜单.svg'
import Search from '../images/搜索.svg'
import Bag from '../images/购物袋.svg'

class Header extends Component {
  render () {
    return (
      <div className="header">
        <div className='headerout'>
          <div className='headertop'>
            <img className='meau' src={Meau} alt="meau" />
            <a href='https://www.baidu.com' className='logo' ></a>
            <div className="h_right">
              <img className='soso' src={Search} alt="soso" />
              <img className='bag' src={Bag} alt="bag" />
              <div>
                <a href="">登录/</a>
                <a href="">注册</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Header
