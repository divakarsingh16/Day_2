import "./shimmer.css";
const Shimmer = () => {
  return (
    <div className="parent-cont">
      {Array(14).fill("").map((e,index)=>( <div key={index} className="rectangle-box"></div>))}
    </div>
  );
};
export default Shimmer;
