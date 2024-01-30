// Write your code here
import './index.css'
const DenominationItem = props => {
  const {item, buttonClick} = props
  const {value} = item

  const onClickingButton = () => {
    buttonClick(value)
  }
  return (
    <div>
      <li className="buttons">
        <button className="but" onClick={onClickingButton}>
          {value}
        </button>
      </li>
    </div>
  )
}
export default DenominationItem
