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

// Calculate category frequencies
const categoryFrequencies = data.reduce((acc, item) => {
  const category = item.alert.category;
  if (acc[category]) {
    acc[category]++;
  } else {
    acc[category] = 1;
  }
  return acc;
}, {});

const totalAlerts = data.length;

// Convert the frequencies object to an array for easier mapping
const categories = Object.keys(categoryFrequencies).map((category) => ({
  name: category,
  count: categoryFrequencies[category],
  percent: (categoryFrequencies[category] / totalAlerts) * 100,
}));

const AreaProgressChart = () => {
  return (
    <div className="progress-bar">
      <div className="progress-bar-info">
        <h4 className="progress-bar-title">Categories</h4>
      </div>
      <div className="progress-bar-list">
        {categories.map((category) => (
          <div className="progress-bar-item" key={category.name}>
            <div className="bar-item-info">
              <p className="bar-item-info-name">{category.name}</p>
              <p className="bar-item-info-value">{category.count} alerts</p>
            </div>
            <div className="bar-item-full">
              <div
                className="bar-item-filled"
                style={{
                  width: `${category.percent}%`,
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AreaProgressChart;
