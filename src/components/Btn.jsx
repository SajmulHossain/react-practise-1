

function Btn({btnName, styleName}) {
  return (
    <button className={`btn ${styleName}`}>{btnName}</button>
  )
}

export default Btn;