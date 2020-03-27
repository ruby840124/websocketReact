import React from 'react';
import logo from './asset/cat.jpg';
import { FaApple } from "react-icons/fa";
import './App.css';


class App extends React.Component {
		//建構子
		constructor(props) {
			super(props);
		}
		
		//新增資料的按鈕
		changeName = (e) => {
      alert("123");
		}
		

		//到螢幕上的元件
		render() {
			return (
      <div>
        <div className="container">
          <label className="ChatTitle">FengChat</label>
          <img className="logo" src={logo} alt="" />
          <label className="nameBlock" >訪客A <FaApple/></label>
          <div className="status-box">服務狀況:<span id="status">-</span> / <span id="online">0</span> 人 , 在線 ^0^</div>
          <div className="content">
          </div>
        </div>
        <div className="msgContainer">
          <div className="send-box">
            <form id="send-form">
              <div className="submitBlock">
                  <div className="upload-btn-wrapper">
                    <button className="_button">上傳圖片 </button>
                    <input className="msgImg" type="file" accept="image/*" />
                  </div>
                  <button className="_button">傳送訊息</button>
                  </div>
                <input type="text" name="msg" id="msg" placeholder="請輸入文字...."/>
            </form>
          </div>
        </div>
      </div>
			);
		}
	}
	
export default App;
