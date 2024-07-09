type ButtonProps = {
  className?: string;
  label: string;
  handleClick?: () => void;
  loading?: boolean;
};
const primaryClass =
  "px-4 mt-4 py-2 bg-blue-500 w-full text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50";
//TODO: Add comments
const Button = ({
  className,
  handleClick,
  loading = false,
  label,
}: ButtonProps) => {
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
