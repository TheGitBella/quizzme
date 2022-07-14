function InputText(props: any) {
  return (
    <div className="inputText">
      <input type="text" placeholder={props.description} />
    </div>
  );
}

export { InputText };
