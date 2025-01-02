const NotificationPanel = ({ companies = [] }) => {
  // Safeguard: Ensure `companies` is always an array
  const overdueCompanies = companies
    .map((company) => {
      // Safeguard: Ensure `lastCommunications` is an array
      const overdueCommunications = (company.lastCommunications || []).filter(
        (communication) => new Date(communication.date) < new Date()
      );
      return {
        name: company.name || "Unnamed Company",
        overdueCommunications,
      };
    })
    .filter((company) => company.overdueCommunications.length > 0);

  const todayCompanies = companies
    .map((company) => {
      // Safeguard: Ensure `lastCommunications` is an array
      const todayCommunications = (company.lastCommunications || []).filter(
        (communication) =>
          new Date(communication.date).toDateString() === new Date().toDateString()
      );
      return {
        name: company.name || "Unnamed Company",
        todayCommunications,
      };
    })
    .filter((company) => company.todayCommunications.length > 0);

  return (
    <div className="bg-white p-4 rounded shadow">
      {/* Overdue Communications */}
      <div>
        <h2 className="font-bold">Overdue Communications</h2>
        {overdueCompanies.length > 0 ? (
          overdueCompanies.map((company, index) => (
            <div key={index} className="bg-red-100 p-2 rounded mb-2">
              <strong>{company.name}</strong>
              {(company.overdueCommunications || []).map((communication, idx) => (
                <div key={idx}>
                  <span>
                    - Last Communication:{" "}
                    {communication.date || "No date available"} - Due{" "}
                    {Math.ceil(
                      (new Date() - new Date(communication.date)) / (1000 * 3600 * 24)
                    )}{" "}
                    days ago
                  </span>
                </div>
              ))}
            </div>
          ))
        ) : (
          <div className="text-gray-500">No overdue communications</div>
        )}
      </div>

      {/* Today's Communications */}
      <div>
        <h2 className="font-bold mt-4">Today's Communications</h2>
        {todayCompanies.length > 0 ? (
          todayCompanies.map((company, index) => (
            <div key={index} className="bg-green-100 p-2 rounded mb-2">
              <strong>{company.name}</strong>
              {(company.todayCommunications || []).map((communication, idx) => (
                <div key={idx}>
                  <span>
                    - Last Communication: {communication.date || "No date available"}
                  </span>
                </div>
              ))}
            </div>
          ))
        ) : (
          <div className="text-gray-500">No communications for today</div>
        )}
      </div>
    </div>
  );
};
export default NotificationPanel;
