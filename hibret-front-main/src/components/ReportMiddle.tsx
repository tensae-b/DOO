import React, { useEffect } from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

const BarGraph = ({ data, label, colors }) => {
  const chartRef = React.createRef();

  useEffect(() => {
    return () => {
      if (chartRef.current) {
        chartRef.current.chartInstance.destroy();
      }
    };
  }, [data]);

  const chartData = {
    labels: data.map(d => new Date(d.month).toLocaleString('default', { month: 'short' }) || d.template),
    datasets: [
      {
        label: label,
        data: data.map(d => d.count),
        borderColor: colors.borderColor,
        backgroundColor: colors.backgroundColor,
        borderWidth: 1,
        borderRadius: 10, // Round bars
        hoverBackgroundColor: colors.hoverBackgroundColor,
      }
    ]
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: 'rgba(200, 200, 200, 0.3)'
        }
      },
      x: {
        grid: {
          color: 'rgba(200, 200, 200, 0.3)'
        }
      }
    },
    plugins: {
      legend: {
        display: true,
        labels: {
          color: colors.borderColor,
          font: {
            size: 14
          }
        }
      }
    }
  };

  return <Bar ref={chartRef} data={chartData} options={options} />;
};

const PieGraph = ({ data, label, colors }) => {
  const chartRef = React.createRef();

  useEffect(() => {
    return () => {
      if (chartRef.current) {
        chartRef.current.chartInstance.destroy();
      }
    };
  }, [data]);

  const chartData = {
    labels: data.map(d => d.template),
    datasets: [
      {
        label: label,
        data: data.map(d => d.count),
        borderColor: colors.borderColor,
        backgroundColor: colors.backgroundColor,
        borderWidth: 1,
      }
    ]
  };

  const options = {
    plugins: {
      legend: {
        display: true,
        position: 'right',
        labels: {
          color: colors.borderColor,
          font: {
            size: 14
          }
        }
      }
    }
  };

  return <Pie ref={chartRef} data={chartData} options={options} />;
};

const AdminMiddle = ({ sampleData }) => {
  return (
    <div className="graphs flex gap-12 items-center mt-8 w-full">
      <div className="flex flex-col w-80 h-64 rounded-md border border-gray-200 bg-white p-6 shadow-md">
        <h3 className="font-urbanist font-bold text-gray-600 text-sm leading-6 mb-4">
          Active Users
        </h3>
        <BarGraph 
          data={sampleData.activeUsers} 
          label="Active Users" 
          colors={{
            borderColor: 'rgba(75, 192, 192, 1)',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            hoverBackgroundColor: 'rgba(75, 192, 192, 0.4)'
          }}
        />
      </div>
      <div className="flex flex-col w-80 h-64 rounded-md border border-gray-200 bg-white p-6 shadow-md">
        <h3 className="font-urbanist font-bold text-gray-600 text-sm leading-6 mb-4">
          Document Created
        </h3>
        <BarGraph 
          data={sampleData.documentCreation} 
          label="Document Creation" 
          colors={{
            borderColor: 'rgba(255, 99, 132, 1)',
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            hoverBackgroundColor: 'rgba(255, 99, 132, 0.4)'
          }}
        />
      </div>
      <div className="flex flex-col w-80 h-64 rounded-md border border-gray-200 bg-white p-6 shadow-md">
        <h3 className="font-urbanist font-bold text-gray-600 text-sm leading-6 mb-4">
          Workflow Initiation
        </h3>
        <PieGraph 
          data={sampleData.workflowInitiation} 
          label="Workflow Initiation" 
          colors={{
            borderColor: 'rgba(54, 162, 235, 1)',
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)'
            ],
          }}
        />
      </div>
    </div>
  );
};

const App = () => {
  const sampleData = {
    activeUsers: [
      { month: '2024-01', count: 5 },
      { month: '2024-02', count: 8 },
      { month: '2024-03', count: 7 },
      { month: '2024-04', count: 6 },
      { month: '2024-05', count: 9 },
      { month: '2024-06', count: 12 }
    ],
    documentCreation: [
      { month: '2024-01', count: 15 },
      { month: '2024-02', count: 20 },
      { month: '2024-03', count: 25 },
      { month: '2024-04', count: 22 },
      { month: '2024-05', count: 27 },
      { month: '2024-06', count: 30 }
    ],
    workflowInitiation: [
      { template: 'Loan Application', count: 10 },
      { template: 'Account Opening', count: 15 },
      { template: 'Insurance Claim', count: 8 },
      { template: 'Investment Plan', count: 12 }
    ]
  };

  return <AdminMiddle sampleData={sampleData} />;
};

export default App;
