import { format } from 'date-fns';
import { Table } from 'antd';
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
        filters: [
            {
                text: 'Day',
                value: 'Day',
            },
            {
                text: 'Month',
                value: 'Month',
            },
            {
                text: 'Year',
                value: 'Year',
            },
        ],
        onFilter: (value, record) => record.nameTime === value,
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
        render: (date) => format(date, 'dd-MM-yyyy'), // Format the date
        filters: [
            {
                text: 'January',
                value: 0,
            },
            {
                text: 'February',
                value: 1,
            },
            {
                text: 'March',
                value: 2,
            },
            {
                text: 'April',
                value: 3,
            },
            {
                text: 'May',
                value: 4,
            },
            {
                text: 'June',
                value: 5,
            },
            {
                text: 'July',
                value: 6,
            },
            {
                text: 'August',
                value: 7,
            },
            {
                text: 'September',
                value: 8,
            },
            {
                text: 'October',
                value: 9,
            },
            {
                text: 'November',
                value: 10,
            },
            {
                text: 'December',
                value: 11,
            },
        ],
        onFilter: (value, record) => {
            const month = record.startDate.getMonth();
            return month === value;
        },
    },

    {
        title: 'End Date',
        dataIndex: 'endDate',
        key: 'endDate',
        render: (date) => format(date, 'dd-MM-yyyy'), // Format the date
        filters: [
            {
                text: 'January',
                value: 0,
            },
            {
                text: 'February',
                value: 1,
            },
            {
                text: 'March',
                value: 2,
            },
            {
                text: 'April',
                value: 3,
            },
            {
                text: 'May',
                value: 4,
            },
            {
                text: 'June',
                value: 5,
            },
            {
                text: 'July',
                value: 6,
            },
            {
                text: 'August',
                value: 7,
            },
            {
                text: 'September',
                value: 8,
            },
            {
                text: 'October',
                value: 9,
            },
            {
                text: 'November',
                value: 10,
            },
            {
                text: 'December',
                value: 11,
            },
        ],
        onFilter: (value, record) => {
            const month = record.endDate.getMonth();
            return month === value;
        },
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
        startDate: new Date(2023, 8, 25),
        endDate: new Date(2023, 8, 27),
    },
    {
        key: '2',
        No: '2', // Add this property
        name: 'Jim Green',
        property: 'Ivory',
        price: 'Rp. 1.000.000',
        totalTime: 2,
        nameTime: 'Day',
        startDate: new Date(2023, 8, 25),
        endDate: new Date(2023, 8, 27),
    },
    {
        key: '3',
        No: '3', // Add this property
        name: 'Joe Black',
        property: 'Amber',
        price: 'Rp. 1.300.000',
        totalTime: 2,
        nameTime: 'Day',
        startDate: new Date(2023, 8, 25),
        endDate: new Date(2023, 8, 27),
    },
];
const onChange = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
};
function TransactionLoggedIn() {
    return (
        <div className='w-full p-7'>
            <h1>Transaction</h1>
            <Table columns={columns} dataSource={data} onChange={onChange} />
        </div>
    )
}

export default TransactionLoggedIn