"use client";

import { Suspense, use } from "react";
import { ErrorBoundary } from "react-error-boundary";

const DataContainer = ({ dataPromise }) => {
  return (
    <ErrorBoundary fallback={<p className="error">There was an error!</p>}>
      <Suspense fallback={<p>Fetching Data...</p>}>
        <DataComponent dataPromise={dataPromise} />
      </Suspense>
    </ErrorBoundary>
  );
};

const DataComponent = ({ dataPromise }) => {
  const data = use(dataPromise);
  return <p>{data && data}</p>;
};
export default DataContainer;
