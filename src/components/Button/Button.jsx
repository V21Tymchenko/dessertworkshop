
const Button = ({type="button", disabled = false, children}) => {
    return <button type={type} disabled={disabled}> {children}</button>
}
export default Button;