export default function TRlinha({
  className = "border-b border-gray-100",
  children1,
  children2,
}) {
  if (className == "red") {
    return (
      <tr className="border-b border-gray-100">
        <td className="p-3 text-red-600">{children1}</td>
        <td className="p-3 text-right font-medium text-red-600">{children2}</td>
      </tr>
    );
  }
  return (
    <tr className={className}>
      <td className="p-3">{children1}</td>
      <td className="p-3 text-right font-medium">{children2}</td>
    </tr>
  );
}
