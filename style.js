document.addEventListener("DOMContentLoaded", function () {
  openTab("tab1"); // Show the first tab by default
});

function openTab(tabName) {
  var i;
  var tabContent = document.getElementsByClassName("tab-content");
  for (i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = "none";
  }

  document.getElementById(tabName).style.display = "block";

  // Initialize charts based on the selected tab
  if (tabName === "tab1") {
    renderChart("chart1", "Sample Data for Tab 1", [12, 19, 3, 5, 2]);
  } else if (tabName === "tab2") {
    renderChart("chart2", "Sample Data for Tab 2", [8, 15, 7, 10, 5]);
  }
}

function renderChart(chartId, label, data) {
  var ctx = document.getElementById(chartId);
  if (!ctx) {
    console.error("Canvas element not found with ID: " + chartId);
    return;
  }

  var chart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["January", "February", "March", "April", "May"],
      datasets: [
        {
          label: label,
          data: data,
          backgroundColor: "rgba(75, 192, 192, 0.2)",
          borderColor: "rgba(75, 192, 192, 1)",
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
}
