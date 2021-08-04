import './BuildControl.css';

const BuildControl = ({ ingredient, moreHandler, lessHandler, disabled }) => {
  console.log(disabled);
  return (
    <div className="BuildControl">
      <div className="Label">
        {ingredient}
      </div>
      <button
        className="Less"
        onClick={lessHandler}
        disabled={disabled}
      >
        Less
      </button>
      <button className="More" onClick={moreHandler}>More</button>
    </div>
  );
}
 
export default BuildControl;