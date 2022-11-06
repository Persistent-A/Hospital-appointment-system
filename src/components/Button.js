const Button = ({text, cls, onClick}) => {
  return (
    <button className={cls} onClick={onClick}>{text}</button>
  )
}

export default Button
