/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "nanuelectricscom-inter-semi-bold-1367-font-family":
          "Inter-SemiBold, sans-serif",
        "nanuelectricscom-inter-semi-bold-331-upper-font-family":
          "Inter-SemiBold, sans-serif",
        "nanuelectricscom-inter-light-1645-font-family":
          "Inter-Light, sans-serif",
        "nanuelectricscom-inter-semi-bold-1758-upper-font-family":
          "Inter-SemiBold, sans-serif",
        "nanuelectricscom-inter-bold-1994-upper-font-family":
          "Inter-Bold, sans-serif",
        "nanuelectricscom-inter-light-italic-1631-font-family":
          "Inter-LightItalic, sans-serif",
        "nanuelectricscom-inter-light-1533-font-family":
          "Inter-Light, sans-serif",
        "nanuelectricscom-inter-semi-bold-1345-upper-font-family":
          "Inter-SemiBold, sans-serif",
        "nanuelectricscom-inter-bold-1942-upper-font-family":
          "Inter-Bold, sans-serif",
        "nanuelectricscom-inter-light-italic-1617-font-family":
          "Inter-LightItalic, sans-serif",
        "nanuelectricscom-inter-light-1561-font-family":
          "Inter-Light, sans-serif",
        "nanuelectricscom-inter-semi-bold-1378-upper-font-family":
          "Inter-SemiBold, sans-serif",
        "nanuelectricscom-inter-bold-1908-upper-font-family":
          "Inter-Bold, sans-serif",
        "nanuelectricscom-inter-light-italic-1645-font-family":
          "Inter-LightItalic, sans-serif",
        "nanuelectricscom-inter-light-1547-strikethrough-upper-font-family":
          "Inter-Light, sans-serif",
        "nanuelectricscom-inter-semi-bold-3194-upper-font-family":
          "Inter-SemiBold, sans-serif",
        "nanuelectricscom-inter-light-1631-font-family":
          "Inter-Light, sans-serif",
        "nanuelectricscom-inter-semi-bold-1772-upper-font-family":
          "Inter-SemiBold, sans-serif",
        "nanuelectricscom-inter-semi-bold-3353-upper-font-family":
          "Inter-SemiBold, sans-serif",
        "nanuelectricscom-inter-light-1617-font-family":
          "Inter-Light, sans-serif",
        "nanuelectricscom-inter-light-1463-font-family":
          "Inter-Light, sans-serif",
        "nanuelectricscom-inter-semi-bold-1994-upper-font-family":
          "Inter-SemiBold, sans-serif",
        "nanuelectricscom-inter-semi-bold-1786-upper-font-family":
          "Inter-SemiBold, sans-serif",
        "nanuelectricscom-inter-semi-bold-3382-upper-font-family":
          "Inter-SemiBold, sans-serif",
        "nanuelectricscom-inter-light-1659-font-family":
          "Inter-Light, sans-serif",
        "nanuelectricscom-inter-regular-1316-upper-font-family":
          "Inter-Regular, sans-serif",
        "nanuelectricscom-inter-semi-bold-1617-upper-font-family":
          "Inter-SemiBold, sans-serif",
        "nanuelectricscom-inter-semi-bold-1631-upper-font-family":
          "Inter-SemiBold, sans-serif",
        "nanuelectricscom-inter-semi-bold-1659-upper-font-family":
          "Inter-SemiBold, sans-serif",
        "nanuelectricscom-inter-semi-bold-1603-upper-font-family":
          "Inter-SemiBold, sans-serif",
        "nanuelectricscom-inter-semi-bold-1561-upper-font-family":
          "Inter-SemiBold, sans-serif",
      },
      fontSize: {
        "nanuelectricscom-inter-semi-bold-1367-font-size": "13.671875px",
        "nanuelectricscom-inter-semi-bold-331-upper-font-size": "33.09765625px",
        "nanuelectricscom-inter-light-1645-font-size": "16.453125px",
        "nanuelectricscom-inter-semi-bold-1758-upper-font-size": "17.578125px",
        "nanuelectricscom-inter-bold-1994-upper-font-size": "19.9375px",
        "nanuelectricscom-inter-light-italic-1631-font-size": "16.3125px",
        "nanuelectricscom-inter-light-1533-font-size": "15.328125px",
        "nanuelectricscom-inter-semi-bold-1345-upper-font-size": "13.453125px",
        "nanuelectricscom-inter-bold-1942-upper-font-size": "19.421875px",
        "nanuelectricscom-inter-light-italic-1617-font-size": "16.171875px",
        "nanuelectricscom-inter-light-1561-font-size": "15.609375px",
        "nanuelectricscom-inter-semi-bold-1378-upper-font-size": "13.78125px",
        "nanuelectricscom-inter-bold-1908-upper-font-size": "19.078125px",
        "nanuelectricscom-inter-light-italic-1645-font-size": "16.453125px",
        "nanuelectricscom-inter-light-1547-strikethrough-upper-font-size":
          "15.46875px",
        "nanuelectricscom-inter-semi-bold-3194-upper-font-size":
          "31.94140625px",
        "nanuelectricscom-inter-light-1631-font-size": "16.3125px",
        "nanuelectricscom-inter-semi-bold-1772-upper-font-size": "17.71875px",
        "nanuelectricscom-inter-semi-bold-3353-upper-font-size": "33.53125px",
        "nanuelectricscom-inter-light-1617-font-size": "16.171875px",
        "nanuelectricscom-inter-light-1463-font-size": "14.625px",
        "nanuelectricscom-inter-semi-bold-1994-upper-font-size": "19.9375px",
        "nanuelectricscom-inter-semi-bold-1786-upper-font-size": "17.859375px",
        "nanuelectricscom-inter-semi-bold-3382-upper-font-size": "33.8203125px",
        "nanuelectricscom-inter-light-1659-font-size": "16.59375px",
        "nanuelectricscom-inter-regular-1316-upper-font-size":
          "13.16249942779541px",
        "nanuelectricscom-inter-semi-bold-1617-upper-font-size": "16.171875px",
        "nanuelectricscom-inter-semi-bold-1631-upper-font-size": "16.3125px",
        "nanuelectricscom-inter-semi-bold-1659-upper-font-size": "16.59375px",
        "nanuelectricscom-inter-semi-bold-1603-upper-font-size": "16.03125px",
        "nanuelectricscom-inter-semi-bold-1561-upper-font-size": "15.609375px",
      },
      fontWeight: {
        "nanuelectricscom-inter-semi-bold-1367-font-weight": "600",
        "nanuelectricscom-inter-semi-bold-331-upper-font-weight": "600",
        "nanuelectricscom-inter-light-1645-font-weight": "300",
        "nanuelectricscom-inter-semi-bold-1758-upper-font-weight": "600",
        "nanuelectricscom-inter-bold-1994-upper-font-weight": "700",
        "nanuelectricscom-inter-light-italic-1631-font-weight": "300",
        "nanuelectricscom-inter-light-1533-font-weight": "300",
        "nanuelectricscom-inter-semi-bold-1345-upper-font-weight": "600",
        "nanuelectricscom-inter-bold-1942-upper-font-weight": "700",
        "nanuelectricscom-inter-light-italic-1617-font-weight": "300",
        "nanuelectricscom-inter-light-1561-font-weight": "300",
        "nanuelectricscom-inter-semi-bold-1378-upper-font-weight": "600",
        "nanuelectricscom-inter-bold-1908-upper-font-weight": "700",
        "nanuelectricscom-inter-light-italic-1645-font-weight": "300",
        "nanuelectricscom-inter-light-1547-strikethrough-upper-font-weight":
          "300",
        "nanuelectricscom-inter-semi-bold-3194-upper-font-weight": "600",
        "nanuelectricscom-inter-light-1631-font-weight": "300",
        "nanuelectricscom-inter-semi-bold-1772-upper-font-weight": "600",
        "nanuelectricscom-inter-semi-bold-3353-upper-font-weight": "600",
        "nanuelectricscom-inter-light-1617-font-weight": "300",
        "nanuelectricscom-inter-light-1463-font-weight": "300",
        "nanuelectricscom-inter-semi-bold-1994-upper-font-weight": "600",
        "nanuelectricscom-inter-semi-bold-1786-upper-font-weight": "600",
        "nanuelectricscom-inter-semi-bold-3382-upper-font-weight": "600",
        "nanuelectricscom-inter-light-1659-font-weight": "300",
        "nanuelectricscom-inter-regular-1316-upper-font-weight": "400",
        "nanuelectricscom-inter-semi-bold-1617-upper-font-weight": "600",
        "nanuelectricscom-inter-semi-bold-1631-upper-font-weight": "600",
        "nanuelectricscom-inter-semi-bold-1659-upper-font-weight": "600",
        "nanuelectricscom-inter-semi-bold-1603-upper-font-weight": "600",
        "nanuelectricscom-inter-semi-bold-1561-upper-font-weight": "600",
      },
      lineHeight: {
        "nanuelectricscom-inter-semi-bold-1367-line-height": "18.2px",
        "nanuelectricscom-inter-semi-bold-331-upper-line-height": "40.7px",
        "nanuelectricscom-inter-light-1645-line-height": "23.4px",
        "nanuelectricscom-inter-semi-bold-1758-upper-line-height": "21.6px",
        "nanuelectricscom-inter-bold-1994-upper-line-height": "28.6px",
        "nanuelectricscom-inter-light-italic-1631-line-height": "23.4px",
        "nanuelectricscom-inter-light-1533-line-height": "23.4px",
        "nanuelectricscom-inter-semi-bold-1345-upper-line-height": "18.2px",
        "nanuelectricscom-inter-bold-1942-upper-line-height": "28.6px",
        "nanuelectricscom-inter-light-italic-1617-line-height": "23.4px",
        "nanuelectricscom-inter-light-1561-line-height": "23.4px",
        "nanuelectricscom-inter-semi-bold-1378-upper-line-height": "18.2px",
        "nanuelectricscom-inter-bold-1908-upper-line-height": "28.6px",
        "nanuelectricscom-inter-light-italic-1645-line-height": "23.4px",
        "nanuelectricscom-inter-light-1547-strikethrough-upper-line-height":
          "23.4px",
        "nanuelectricscom-inter-semi-bold-3194-upper-line-height": "40.7px",
        "nanuelectricscom-inter-light-1631-line-height": "23.4px",
        "nanuelectricscom-inter-semi-bold-1772-upper-line-height": "21.6px",
        "nanuelectricscom-inter-semi-bold-3353-upper-line-height": "40.7px",
        "nanuelectricscom-inter-light-1617-line-height": "23.4px",
        "nanuelectricscom-inter-light-1463-line-height": "20.8px",
        "nanuelectricscom-inter-semi-bold-1994-upper-line-height": "normal",
        "nanuelectricscom-inter-semi-bold-1786-upper-line-height": "21.6px",
        "nanuelectricscom-inter-semi-bold-3382-upper-line-height": "40.7px",
        "nanuelectricscom-inter-light-1659-line-height": "23.4px",
        "nanuelectricscom-inter-regular-1316-upper-line-height": "17.28px",
        "nanuelectricscom-inter-semi-bold-1617-upper-line-height": "23.4px",
        "nanuelectricscom-inter-semi-bold-1631-upper-line-height": "23.4px",
        "nanuelectricscom-inter-semi-bold-1659-upper-line-height": "23.4px",
        "nanuelectricscom-inter-semi-bold-1603-upper-line-height": "23.4px",
        "nanuelectricscom-inter-semi-bold-1561-upper-line-height": "23.4px",
      },
      letterSpacing: {},
      borderRadius: {},
      colors: {
        "nanuelectricscom-black": "#000000",
        "nanuelectricscom-nero": "#ffffff",
        "nanuelectricscom-white-linen": "#faf6ee",
        "nanuelectricscom-verdun-green": "#305eff",
        "nanuelectricscom-nero-50": "rgba(255, 255, 255, 0.50)",
      },
      spacing: {},
      width: {},
      minWidth: {},
      maxWidth: {},
      height: {},
      minHeight: {},
      maxHeight: {},
    },
  },
  plugins: [],
}