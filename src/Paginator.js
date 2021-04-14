import React from 'react';

export default function Paginator({gotoNextPage, gotoPrevPage}) {
  return (
    <div className="d-flex justify-content-around mt-4">
      {gotoPrevPage && <button className="btn btn-secondary" onClick={gotoPrevPage}>Previous page</button>}
      {gotoNextPage && <button className="btn btn-primary" onClick={gotoNextPage}>Next page</button>}
    </div>
  );
}
