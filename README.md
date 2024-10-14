![Screenshot 2024-10-14 232545](https://github.com/user-attachments/assets/c3867d4f-f8ad-4268-aa88-7b7f495ac2c9)

## Hotel Booking Dashboard

This project is a **single-page dashboard** built using **React.js** to visualize hotel booking data. It provides four interactive charts, including a time series of visitors per day, a column chart of visitors by country, and two sparkline charts for adult and children visitors. The dashboard is also equipped with a **date range filter** to allow dynamic chart updates based on the selected date range.

## Features
- **Date Range Filter:** Allows users to select a date range, dynamically updating all charts to reflect the filtered data.
- **Time Series Chart:** Displays the total number of visitors (adults + children + babies) per day.
- **Column Chart:** Shows the number of visitors from each country.
- **Sparkline Charts:** Provides insights into the number of adult and children visitors over time.
  
### Demo Screenshot
![Hotel Booking Dashboard Screenshot](screenshot.png)

---

### Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Running the Project](#running-the-project)
- [Project Structure](#project-structure)
- [Screenshots](#screenshots)
- [Technologies Used](#technologies-used)
- [License](#license)

---

### Installation

Follow these steps to get the project running on your local machine:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/hotel-booking-dashboard.git
   ```

2. **Navigate to the project directory**:

   ```bash
   cd hotel-booking-dashboard
   ```

3. **Install dependencies**:

   Ensure that you have Node.js installed. If not, download it [here](https://nodejs.org/).

   Once inside the project directory, install the required npm packages:

   ```bash
   npm install
   ```

4. **Install additional dependencies**:
   We are using **ApexCharts** for rendering the charts. Install the necessary libraries:

   ```bash
   npm install apexcharts react-apexcharts
   ```

---

### Running the Project

After installing the dependencies, you can run the project with the following command:

```bash
npm start
```

This will start the development server, and the application will be live at `http://localhost:3000`. Open this URL in your browser to view the hotel booking dashboard.

---

### Project Structure

Here’s an overview of the project structure to help you navigate the code:

```
/hotel-booking-dashboard
│
├── /public
│   └── index.html
├── /src
│   ├── /components
│   │   ├── DateFilter.js          // Date selection component
│   │   ├── TimeSeriesChart.js     // Time series chart component
│   │   ├── ColumnChart.js         // Column chart component for visitors by country
│   │   ├── SparklineChart.js      // Sparkline chart component for adults and children
│   ├── App.js                     // Main application file
│   ├── index.js                   // Entry point for React
│   ├── data.js                    // Data filtering logic
│   └── index.css                  // Styles for the application
├── package.json                   // Project configuration and dependencies
└── README.md                      // Project README file
```

---

### Screenshots

#### Main Dashboard View
The following screenshot shows the hotel booking dashboard with a date filter, time series, column, and sparkline charts.

![Dashboard Overview](screenshot.png)

#### Date Filter
Select a date range to filter the data:

![Date Filter](date-filter.png)

#### Time Series Chart
Displays the total visitors per day (adults + children + babies):

![Time Series Chart](time-series.png)

#### Column Chart
Displays the number of visitors by country:

![Column Chart](column-chart.png)

#### Sparkline Charts
Sparkline charts provide a quick overview of adult and children visitors over time:

![Sparkline Charts](sparkline-charts.png)

---

### Technologies Used

- **React.js**: A JavaScript library for building user interfaces.
- **ApexCharts**: A modern charting library that helps create responsive and interactive charts.
- **HTML5**: For the structure of the page.
- **CSS3**: For styling the application.
- **JavaScript (ES6+)**: For logic and functionality.

---

### How It Works

The application dynamically fetches and filters hotel booking data based on the user-selected date range. It renders four charts using **ApexCharts**:
1. A time series chart to display total visitors per day.
2. A column chart to show the number of visitors per country.
3. Two sparkline charts to separately display the number of adult and children visitors over time.

The charts are updated whenever the user changes the date range using the **DateFilter** component.

---

### License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

By following the above steps, you'll be able to set up and run the hotel booking dashboard on your local machine. Let me know if you encounter any issues!

---

Feel free to update the **image URLs** with your actual screenshots and customize the content as needed!
