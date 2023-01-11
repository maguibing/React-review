import { Component } from 'react'
import PropTypes from 'prop-types'

export default class ClassProps extends Component {
  //  类组件通讯 直接 this.props.xxx
  byPhone = () => {
    this.props.byPhone(-500)
  }

  render() {
    const { name, age, children } = this.props
    return(
      <div className='class-props'>
        props 类组件通讯 {name} {age}  children: { children }
        <button onClick={this.byPhone}>买手机 类组件子传父</button>
      </div>
    )
  }
}

/**
 * 校验 props 类型
 */
ClassProps.propTypes = {
  name: PropTypes.string
}
