const Org = (props) => {
  return (
    <div className={removeSpace(props.p.orgName)}>
      <img src={ props.p.svg }></img>
      <div className="innerSection">
        <div>
          <h3>{props.p.orgName}</h3>
          <svg width="21" height="5" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z"
              fill="#BBC0FF"
              fill-rule="evenodd"
            />
          </svg>
        </div>{" "}
        <h2>{props.p.hrs1}hrs</h2>
        <p>
          Last {props.p.dateName} - {props.p.hr2}hrs
        </p>
      </div>
    </div>
  );
};

function removeSpace(str) {
  if (typeof str !== "string" || str.length === 0) {
    return str;
  }
  return str.split(" ").join("");
}

export default Org;
