import './Backdrop.css'

const Backdrop = ({show,click}) => {
  return (
  show &&  <div className="backdrop" onClick={click}>Backdrop</div>
  )
}

export default Backdrop