import React, { useState, useEffect } from "react";
import LogItem from "./LogItems";
import Preloader from "../layouts/Preloader";

const Logs = () => {
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getLogs();
    //eslint-disable-next-line
  }, []);

  const getLogs = async () => {
    setLoading(true);
    const res = await fetch("/logs");
    const data = await res.json();

    setLogs(data);
    setLoading(false);
  };

  if (loading) {
    return <Preloader></Preloader>;
  }

  return (
    <ul className="collection with-header">
      <li className="collection-header">
        <h4>System Logs</h4>
      </li>
      {!loading && logs.length === 0 ? (
        <p className="center"> No logs to show...</p>
      ) : (
        logs.map(log => (
          <LogItem log={log} key={log.id}>
            {" "}
          </LogItem>
        ))
      )}
    </ul>
  );
};

export default Logs;
