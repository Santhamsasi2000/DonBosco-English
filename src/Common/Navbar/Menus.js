export const menus = [
  { name: "Home", path: "/" },

  {
    name: "Admissions",
    submenu: [
      { name: "Admission Process", path: "/admission/process" },
      { name: "Online Admission", path: "/admission/online" },
    ],
  },

  {
    name: "Fees",
    submenu: [
      { name: "Fee Structure", path: "/fees" },
      { name: "Payment", path: "/fees/payment" },
    ],
  },

  {
    name: "About Us",
    submenu: [
      { name: "Our School", path: "/about" },
      { name: "Mission & Vision", path: "/about/mission" },
    ],
  },

  {
    name: "Contact",
    path: "/contact",
  },
];