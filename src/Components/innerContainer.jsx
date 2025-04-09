
export default function InnerContainer({ children }) {
  return (
    <div className="innerCont flex   mx-3 rounded-lg p-3">
      {children}
    </div>
  );
}
