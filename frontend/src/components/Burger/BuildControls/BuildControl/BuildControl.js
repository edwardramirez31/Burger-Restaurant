import './BuildControl.css';

const BuildControl = ({ingredient, moreHandler}) => {
  return (
    <div className="BuildControl">
      <div className="Label">
        {ingredient}
      </div>
      <button className="Less">Less</button>
      <button className="More" onClick={moreHandler}>More</button>
    </div>
  );
}
 
export default BuildControl;