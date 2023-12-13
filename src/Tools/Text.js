export default function Text({ style, text, position }) {
    switch (position) {
      case 'top left':
        return (
          <p
            className={`${style} absolute top-6 left-6 rounded bg-red-600 px-4 py-1 text-white font-semibold`}
          >
            {text}
          </p>
        );
      case 'top right':
        return (
          <p
            className={`${style} absolute top-6 right-6 rounded bg-red-600 px-4 py-1 text-white font-semibold`}
          >
            {text}
          </p>
        );
      case 'bottom left':
        return (
          <p
            className={`${style} absolute rounded bottom-6 left-6 bg-red-600 px-4 py-1 text-white font-semibold`}
          >
            {text}
          </p>
        );
      case 'bottom right':
        return (
          <p
            className={`${style} absolute bottom-6 right-6 rounded bg-red-600 px-4 py-1 text-white font-semibold`}
          >
            {text}
          </p>
        );
      default:
        return null; // Handle other positions or provide a default behavior
    }
  }
  