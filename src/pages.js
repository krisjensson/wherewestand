const pages = [
  // Dashboards

  {
    output: "./index.html",
    content: {
      title: "Our Goal",
      description:
        "This website is out to show you that our planet does not have a lot left if we dont change our ways of living.",
      heading_icon: "pe-7s-car icon-gradient bg-mean-fruit",
    },
    template: "./src/wherewestand.hbs",
  },
    {
    output: "./charts-chartjs.html",
    content: {
      title: "ChartJS",
      description:
        "Huge selection of charts created with the React ChartJS Plugin",
      heading_icon: "pe-7s-bandaid icon-gradient bg-amy-crisp",
    },
    template: "./src/wherewestand.hbs",
  },
  
  
];

module.exports = pages;
