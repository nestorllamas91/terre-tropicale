import React, { Fragment } from 'react';

export default function Error(props) {
  return (
    <div>
      <div>
        {(() => {
          switch (props.statusCode) {
            case 404:
              return (
                <Fragment>
                  <div>
                    <span>Error in the server!</span>
                    <span>404 Not Found</span>
                  </div>
                  <div>
                    <span>
                      The resource you requested could not be found on the
                      server.
                    </span>
                  </div>
                </Fragment>
              );
            case 500:
              return (
                <Fragment>
                  <div>
                    <span>Error in the server!</span>
                    <span>500 Internal Server Error</span>
                  </div>
                  <div>
                    <span>
                      Your request could not be completed because an error has
                      occurred on the server.
                    </span>
                  </div>
                </Fragment>
              );
            case undefined:
              return (
                <Fragment>
                  <div>
                    <span>Error in the client!</span>
                  </div>
                  <div>
                    <span>An error has occurred on your web browser.</span>
                  </div>
                </Fragment>
              );
            default:
              return (
                <Fragment>
                  <div>
                    <span>Error in the server!</span>
                    <span>{props.statusCode}</span>
                  </div>
                </Fragment>
              );
          }
        })()}
      </div>
    </div>
  );
}
