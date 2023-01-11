import { Component, createRef } from "react";
import ClassProps from "./class-props";

class ClassComponent extends Component {
  // 类组件定义状态
  state = {
    name: "Alice",
    age: 18,
    list: ["Tom", "Alice", "Jack"],
    user: {
      gender: "男"
    },
    ischeck: false,
    money: 1999
  }

  mobileRef = createRef()

  /**
   * 解决this问题 
   * 1、hanleClick = () => {}
   * 2、this.handleClick.bind(this)
   * 3、(e) => this.handlClick(e)
   */
  handleClick = () => {
    console.log(this.state.name);
  }
  changeName = () => {
    this.setState({
      name: "roma",
      list: [...this.state.list, 'rose'],
      user: {
        ...this.state.user,
        gender: "女"
      }
    })


    /**
     * 1、多次调用setState 会合并
     * 2、this.setState(preState => {
     *  return {
     *    age: preState + 1
     *   }
     * })
     */

    this.setState(preState => {
     return {
       age: preState.age + 1
      }
    }, () => {
      console.log(this.state.age);
    })
  }
  changeCheck(e) {
    this.setState({
      ischeck: e.target.checked
    })
  }
  getMobile() {
    alert('非受控组件' + this.mobileRef.current.value)
  }
  byPhone = (value) => {
    this.setState({
      money: this.state.money + value
    })
  }


  render() {
    return(
      <div className="class-component">
        <hr />
        姓名：{ this.state.name }
        年龄：{ this.state.age }
        <button onClick={this.changeName}>修改姓名</button>
        <ul>
          { this.state.list.map((v,i) => <li key={i} onClick={this.handleClick}>{v}</li>) }
          {/* { this.state.list.map(v => <li key={v} onClick={this.handleClick.bind(this)}>{v}</li>) } */}
          {/* { this.state.list.map(v => <li key={v} onClick={(e) => this.handleClick(e)}>{v}</li>) } */}
        </ul>

        <h3>受控组件</h3>
        <input type="checkbox" checked={this.state.ischeck} onChange={(e) => this.changeCheck(e)}/> <br />
        <input ref={this.mobileRef} type="number" placeholder="获取手机号"/> <button onClick={() => this.getMobile()}>获取手机号码</button>
        <hr />
        剩余钱：{ this.state.money }
        <ClassProps name='maguibing' age='18' byPhone={this.byPhone}>props.children: 我是你爹</ClassProps>
      </div>
    )
  }
}

export default ClassComponent
