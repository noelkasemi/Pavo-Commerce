export default function Text({ style, text, position }) {
    switch (position) {
      case 'top left':
        return (
          <p
            className={`${style} absolute -translate-y-60 rounded bg-red-600 px-4 py-1 text-white font-semibold`}
          >
            {text}
          </p>
        );
      case 'top right':
        return (
          <p
            className={`${style} absolute -translate-y-60 translate-x-36 rounded bg-red-600 px-4 py-1 text-white font-semibold`}
          >
            {text}
          </p>
        );
      case 'bottom left':
        return (
          <p
            className={`${style} absolute rounded translate-y-24 -translate-x-2 bg-red-600 px-4 py-1 text-white font-semibold`}
          >
            {text}
          </p>
        );
      case 'bottom right':
        return (
          <p
            className={`${style} absolute translate-x-36 translate-y-24 rounded bg-red-600 px-4 py-1 text-white font-semibold`}
          >
            {text}
          </p>
        );
      default:
        return null; // Handle other positions or provide a default behavior
    }
  }
  