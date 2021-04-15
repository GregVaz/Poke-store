import React from 'react';

export default function Paginator({gotoNextPage, gotoPrevPage}) {
  return (
    <div className="d-flex justify-content-around mt-4 paginator">
      {gotoPrevPage && <button className="btn btn-secondary btn-sm" onClick={gotoPrevPage}>Previous page</button>}
      {gotoNextPage && <button className="btn btn-primary btn-sm" onClick={gotoNextPage}>Next page</button>}
    </div>
  );
}
