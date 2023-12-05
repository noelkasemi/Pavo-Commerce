
export default function Button(props) {
    return (
        <button onMouseEnter={props.hover} onMouseLeave={props.leave} className={`${props.style}  rounded-full px-8 py-3 `}>{props.children}{props.text}</button>
    )
}