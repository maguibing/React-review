import {Button, DatePicker} from 'antd'

// import styles from './index.module.scss' // 使用 className = {styles.root}

export default function AntDesign() {
  const onChange = (date, dateString) => {
    console.log(date.$d, dateString);
  }

  return(
    <div className="ant-design">
      <Button type='primary'  >测试按钮</Button>

      <DatePicker onChange={onChange}/>
    </div>
  )
}
