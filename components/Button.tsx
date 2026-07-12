type ButtonProps = {
    title: string;
  };
  
  export default function Button({ title }: ButtonProps) {
    return (
      <button
        style={{
          background: "#34D399",
          color: "#08111F",
          padding: "16px 34px",
          borderRadius: "12px",
          border: "none",
          fontSize: "18px",
          fontWeight: "bold",
          cursor: "pointer",
        }}
      >
        {title}
      </button>
    );
  }