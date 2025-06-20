export function customSize(size) {
  switch (size) {
    case "small":
      return "text-sm";
    case "medium":
      return "text-base";
    default:
      return "text-lg"
  }
}

export function customTheme(theme) {
  switch (theme) {
    case "first":
      return "bg-blue-500 text-white hover:bg-blue-600";
    case "second":
      return "bg-green-500 text-white hover:bg-green-600";
    default:
      return "bg-gray-400 text-white hover:bg-gray-500";
  }
}
