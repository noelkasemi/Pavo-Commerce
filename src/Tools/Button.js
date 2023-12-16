export default function Button(props, {key}) {
  return (
    <button
    key={key}
    style={{ textTransform: 'capitalize' }}
      onClick={props.onClick}
      onMouseEnter={props.enter}
      onMouseLeave={props.leave}
      className={`${props.style} flex bg-blue-500 hover:bg-blue-400  px-4 py-2 rounded-lg `}
    >
      {props.text || props.children}
    </button>
  );
}
