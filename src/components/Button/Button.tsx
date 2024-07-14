type ButtonProps = {
  className?: string;
  label: string;
  handleClick?: () => void;
  loading?: boolean;
};

/**
 * Custom Button.
 *
 * @example
 * <Button label="Button" />
 * @returns {JSXElement}
 */
const Button = ({
  className,
  handleClick,
  loading = false,
  label,
}: ButtonProps) => {
  const primaryClass = `px-4 mt-4 py-2 bg-blue-500 w-full text-white rounded-md hover:bg-blue-600 disabled:opacity-0.75 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 ${
    loading ? "opacity-50 cursor-not-allowed" : ""
  }`;

  return (
    <button
      type="button"
      aria-label="label"
      onClick={handleClick}
      disabled={loading}
      className={className || primaryClass}
    >
      {loading ? "loading..." : label}
    </button>
  );
};

export default Button;
