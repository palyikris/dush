export default function InputField(props){
    return(
        <div>
            <label>{props.label}</label>
            <input type={props.inputType} placeholder={props.inputPlaceholder}/>
        </div>
    )
}