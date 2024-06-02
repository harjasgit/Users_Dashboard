import React, { useContext } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { ThemeContext } from "../../../context/ThemeContext";
import { FaArrowUpLong } from "react-icons/fa6";
import { LIGHT_THEME } from "../../../constants/themeConstants";
import "./AreaCharts.scss";

const data = [
  {
    "timestamp":"2019-01-02T03:50:09.097718","flow_id":52373568,"in_iface":"eth0","event_type":"alert","src_ip":"8.42.77.171","src_port":65036,"dest_ip":"138.68.3.71","dest_port":3306,"proto":"TCP","alert":{"action":"allowed","gid":1,"signature_id":2010937,"rev":3,"signature":"ET SCAN Suspicious inbound to mySQL port 3306","category":"Potentially Bad Traffic","severity":2}
  },
  {
    "timestamp":"2019-01-02T03:54:44.259003","flow_id":53055648,"in_iface":"eth0","event_type":"alert","src_ip":"37.49.231.178","src_port":7433,"dest_ip":"138.68.3.71","dest_port":5060,"proto":"UDP","alert":{"action":"allowed","gid":1,"signature_id":2008578,"rev":6,"signature":"ET SCAN Sipvicious Scan","category":"Attempted Information Leak","severity":2}
  },
  {
    "timestamp":"2019-01-02T03:51:01.124914","flow_id":52713600,"in_iface":"eth0","event_type":"alert","src_ip":"61.176.222.167","src_port":59947,"dest_ip":"138.68.3.71","dest_port":1433,"proto":"TCP","alert":{"action":"allowed","gid":1,"signature_id":2403410,"rev":46061,"signature":"ET CINS Active Threat Intelligence Poor Reputation IP TCP group 56","category":"Misc Attack","severity":2}
  }
];

// Transform the data to match the expected keys
const transformedData = data.map(item => ({
  timestamp: new Date(item.timestamp).toLocaleTimeString(), // Use timestamp for X axis
  severity: item.alert.severity,
  category: item.alert.category
}));

const AreaBarChart = () => {
  const { theme } = useContext(ThemeContext);

  const formatTooltipValue = (value) => {
    return `${value}`;
  };

  const formatYAxisLabel = (value) => {
    return `${value}`;
  };

  const formatLegendValue = (value) => {
    return value.charAt(0).toUpperCase() + value.slice(1);
  };

  return (
    <div className="bar-chart">
      <div className="bar-chart-info">
        <h5 className="bar-chart-title">Alert Data</h5>
        <div className="chart-info-data">
          <div className="info-data-value">$50.4K</div>
          <div className="info-data-text">
            <FaArrowUpLong />
            <p>5% than last month.</p>
          </div>
        </div>
      </div>
      <div className="bar-chart-wrapper">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={200}
            data={transformedData}
            margin={{
              top: 5,
              right: 5,
              left: 0,
              bottom: 5,
            }}
          >
            <XAxis
              dataKey="timestamp"
              tickSize={0}
              axisLine={false}
              tick={{
                fill: `${theme === LIGHT_THEME ? "#676767" : "#f3f3f3"}`,
                fontSize: 14,
              }}
            />
            <YAxis
              tickFormatter={formatYAxisLabel}
              axisLine={false}
              tickSize={0}
              tick={{
                fill: `${theme === LIGHT_THEME ? "#676767" : "#f3f3f3"}`,
              }}
            />
            <Tooltip
              formatter={formatTooltipValue}
              cursor={{ fill: "transparent" }}
            />
            <Legend
              iconType="circle"
              iconSize={10}
              verticalAlign="top"
              align="right"
              formatter={formatLegendValue}
            />
            <Bar
              dataKey="severity"
              name="Severity"
              fill="#475be8"
              barSize={24}
              radius={[4, 4, 0, 0]}
            />
            <Bar
              dataKey="category"
              name="Category"
              fill="#e3e7fc"
              barSize={24}
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};


export default AreaBarChart;