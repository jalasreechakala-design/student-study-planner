function Analytics({ tasks }) {
  const completed =
    tasks.filter(
      (task) => task.completed === 1
    ).length;

  const pending =
    tasks.filter(
      (task) => task.completed !== 1
    ).length;

  return (
    <div>
      <h1>📊 Analytics</h1>

      <div className="card-container">

        <div className="card">
          <h3>Total Tasks</h3>
          <h2>{tasks.length}</h2>
        </div>

        <div className="card">
          <h3>Completed</h3>
          <h2>{completed}</h2>
        </div>

        <div className="card">
          <h3>Pending</h3>
          <h2>{pending}</h2>
        </div>

      </div>
    </div>
  );
}

export default Analytics;