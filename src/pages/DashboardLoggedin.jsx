import { useState, useEffect } from 'react';
import { Table } from 'antd';
import { Bar } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, Title, BarElement } from 'chart.js';

// Register the necessary elements and scales
Chart.register(CategoryScale, LinearScale, Title, BarElement);
const columns = [
    {
        title: 'No',
        dataIndex: 'No',
        key: 'No',
    },
    {
        title: 'Customer name',
        dataIndex: 'name',
        key: 'name',
        render: (text) => <a>{text}</a>,
    },
    {
        title: 'Property Name',
        dataIndex: 'property',
        key: 'property',
    },
    {
        title: 'Total Time',
        dataIndex: 'totalTime',
        key: 'totalTime',
    },
    {
        title: 'Name Time',
        dataIndex: 'nameTime',
        key: 'nameTime',
    },
    {
        title: 'Total price',
        dataIndex: 'price',
        key: 'price',
    },
    {
        title: 'Start Date',
        dataIndex: 'startDate',
        key: 'startDate',
    },
    {
        title: 'End Date',
        dataIndex: 'endDate',
        key: 'endDate',
    },
];
const data = [
    {
        key: '1',
        No: '1', // Add this property
        name: 'John Brown',
        property: 'Ruby',
        price: 'Rp. 800.000',
        totalTime: 2,
        nameTime: 'Day',
        startDate: '25-09-2023',
        endDate: '27-09-2023',
    },
    {
        key: '2',
        No: '2', // Add this property
        name: 'Jim Green',
        property: 'Ivory',
        price: 'Rp. 1.000.000',
        totalTime: 2,
        nameTime: 'Day',
        startDate: '25-09-2023',
        endDate: '27-09-2023',
    },
    {
        key: '3',
        No: '3', // Add this property
        name: 'Joe Black',
        property: 'Amber',
        price: 'Rp. 1.300.000',
        totalTime: 2,
        nameTime: 'Day',
        startDate: '25-09-2023',
        endDate: '27-09-2023',
    },
];
const DashboardLoggedin = () => {
    const [revenueData, setRevenueData] = useState({
        labels: [
            'January', 'February', 'March', 'April',
            'May', 'June', 'July', 'August',
            'September', 'October', 'November', 'December'
        ],
        datasets: [
            {
                label: 'Total Revenue',
                data: [], // Initialize with empty data
                backgroundColor: '#AFF78D',
            },
        ],
    });

    // Simulated revenue data for demonstration
    useEffect(() => {
        const simulatedData = [5000, 6000, 7500, 8200, 9500, 10400, 12300, 13600, 11700, 9600, 7800, 6500];
        setRevenueData(prevData => ({
            ...prevData,
            datasets: [{
                ...prevData.datasets[0],
                data: simulatedData,
            }],
        }));
    }, []);

    return (
        <div>
            <h2>Total Revenue by Month</h2>
            <div className="bar-chart">
                <Bar
                    data={revenueData}
                    options={{
                        scales: {
                            x: {
                                beginAtZero: true, // Customize X-axis options
                            },
                            y: {
                                beginAtZero: true, // Customize Y-axis options
                            },
                        },
                        maintainAspectRatio: false, // Prevent chart from maintaining a 2:1 aspect ratio
                        responsive: true, // Make the chart responsive to the container
                        plugins: {
                            legend: {
                                display: true,
                                position: 'top',
                            },
                        },
                    }}
                    height={400}
                    width={1150} // Set the chart height to 700px
                />
            </div>
            <Table columns={columns} dataSource={data} />
        </div>
    );
};

export default DashboardLoggedin;
