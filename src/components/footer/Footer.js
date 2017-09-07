import React, { Component } from 'react'
import './footer.css'
import Guide from '../images/zhinan.svg'
import Pay from '../images/pay.svg'
import Send from '../images/peisong.svg'
import Shou from '../images/wenhao.svg'
import Serve from '../images/phone.svg'
import About from '../images/guanyu.svg'
import Rule from '../images/mianze.svg'
import Link from '../images/link.svg'
import Re from '../images/re.svg'
class Footer extends Component {
  render () {
    return (
      <div className='footer'>
        <div className="footer_out">
          <div className="footer_in">
            <div className="one">
            <h1>帮助信息</h1>
              <div className="list">
                <ul>
                  <li><img className='zhifu' src={Guide} alt="zhinan" /><a href="">购物指南</a></li>
                  <li><img className='zhifu' src={Pay} alt="zhifu" /><a href="">支付方式</a></li>
                  <li><img className='zhifu' src={Send} alt="peisong" /><a href="">配送方式</a></li>
                  <li><img className='zhifu' src={Shou} alt="shouhou" /><a href="">售后服务</a></li>
                </ul>
                <ul>
                  <li><img className='zhifu' src={Serve} alt="fuwu" /><a href="">服务中心</a></li>
                  <li><img className='zhifu' src={About} alt="guanyu" /><a href="">关于我们</a></li>
                  <li><img className='zhifu' src={Rule} alt="mianze" /><a href="">免责条款</a></li>
                  <li><img className='zhifu' src={Link} alt="lianjie" /><a href="">友情链接</a></li>
                </ul>
              </div>
            </div>
            <div className='two'>
              <h1>关注我们</h1>
              <div className="us">
                <div className='taobao'>
                  <img className='taoer' src={require('../images/taoer_09.png')} alt="" />
                  <img className='tao' src={require('../images/taobao_31.png')} alt="" />
                </div>
                <div className='weixin'>
                  <img className='taoer' src={require('../images/weier_11.png')} alt="" />
                  <img src={require('../images/weixin_31.png')} alt="" />
                </div>
              </div>
            </div>
            <div className='three'>
              <h1>客服热线</h1>
              <div>
                <img className='re' src={Re} alt="rexian" />
                <div>
                  <span>400 113 5353</span>
                  <p>[周一至周五9:00-18:00]</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer_d_out">
          <div className="foot_down">
            <a href=""></a>
            <div>
              <p>北京开普乐科技有限公司©版权所有 Copyright 2015-2025 Morethan.cc All rights reserved.</p>
              <p>地址：北京市朝阳区建国路93号院4号楼4层505</p>
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default Footer
