const Highlight = ({ children, color }) => (
  <span
    style={{
      backgroundColor: color || "#009400",
      borderRadius: '4px',
      color: '#fff',
      padding: '0.02rem 0.4rem',
      border: "1px solid #003100",
      cursor: "pointer"
    }}>
    {children}
  </span>
);

export default Highlight