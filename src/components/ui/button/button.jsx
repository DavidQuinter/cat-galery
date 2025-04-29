import "./button.css"

export const Button = ({
  type = "button",
  variant = "primary",
  size = "md",
  children,
  onClick,
  className = "",
  disabled = false,
}) => {
  const baseClass = "button";
  const variants = {
    primary: "btn-primary",
    secondary: "btn-secondary",
    danger: "btn-danger",
    success: "btn-success",
    warning: "btn-warning",
    ghost: "btn-ghost",
    outline: "btn-outline",
  };
  const sizes = {
    sm: "btn-sm",
    md: "btn-md",
    lg: "btn-lg",
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseClass} ${variants[variant]} ${sizes[size]}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
