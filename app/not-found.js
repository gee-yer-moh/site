import Polygon from "./_components/Polygon";

export default function NotFound() {
  // Generate three random numbers that sum to 404
  const generateNumbers = () => {
    const num1 = Math.floor(Math.random() * 404);
    const num2 = Math.floor(Math.random() * (404 - num1));
    const num3 = 404 - num1 - num2;
    return [num1, num2, num3];
  };

  const numbers = generateNumbers();

  return (
    <div style={{
      height: "100vh", 
      display: "flex", 
      justifyContent: "center", 
      alignItems: "center", 
      flexDirection: "column", 
      gap: "20px", 
      userSelect: "none"
    }}>
      <h4>{numbers.join(' + ')}</h4>
    </div>
  );
}
