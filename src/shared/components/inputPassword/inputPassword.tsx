function InputPassword(props: any) {
  return (
    <div className="inputPassword">
      <input type="password" placeholder={props.description} />
    </div>
  );
}

export { InputPassword };
