import './style.css';

function InputSubmit(props: any) {
  return (
    <div className="inputSubmit">
      <input type="submit" value={props.description} className="submit-btn" />
    </div>
  );
}

export { InputSubmit };
