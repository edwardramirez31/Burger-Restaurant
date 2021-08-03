import './BuildControl.css';

const BuildControl = (props) => {
  return (
    <div className="BuildControl">
      <div className="Label">
        {props.ingredient}
      </div>
      <button className="Less">Less</button>
      <button className="More">More</button>
    </div>
  );
}
 
export default BuildControl;