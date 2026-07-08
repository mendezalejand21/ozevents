export const brand = {
  name: "OZ Event Services",
  tagline: "Your Safety • Our Priority",
  rc: "BN 9619955",
  email: "info@ozeventservices.com",
  phone: "0813 750 9682",
  phoneE164: "+2348137509682",
  address: [
    "F7 Mammy Market,",
    "82 Division Abakpa Cantonment,",
    "Enugu",
  ].join("\n"),
} as const;

export const links = {
  whatsapp: `https://wa.me/${brand.phoneE164.replace("+", "")}`,
  tel: `tel:${brand.phone.replace(/\s/g, "")}`,
  mailto: `mailto:${brand.email}`,
} as const;

