import Heart from "../assets/Svg/Heart";

export default function ({
  onClick,
  btnText,
  children,
  cardStyle,
  imageStyle,
  titleStyle,
  btnStyle,
  title,
  image,
}) {
  return (
    <article
      className={`${cardStyle} bg-white  w-full p-4 rounded-lg shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]`}
    >
      <img
        title={title}
        onClick={onClick}
        src={image}
        alt={title}
        className={`${imageStyle} w-full h-48 object-cover cursor-pointer mb-4 hover:brightness-90`}
      />
      <h3 className={`${titleStyle} text-lg font-semibold mb-2 truncate`}>
        {title}
      </h3>
      {children}
      <article className="mt-4 flex justify-between items-end">
        <button
          className={`${btnStyle} bg-blue-500 hover:bg-blue-400 text-white px-4 py-2 rounded-lg`}
        >
          {btnText}
        </button>
        <Heart style={`cursor-pointer w-9 h-9`} />
      </article>
    </article>
  );
}
