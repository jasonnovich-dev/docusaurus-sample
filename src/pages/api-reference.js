import React from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import useBaseUrl from '@docusaurus/useBaseUrl';

function ApiReference() {
  const specUrl = useBaseUrl('/openapi/openapi.yaml');

  return (
    <BrowserOnly fallback={<div>Loading API reference…</div>}>
      {() => {
        const { RedocStandalone } = require('redoc');

        return (
          <div style={{ maxWidth: 1200, margin: '0 auto', padding: '2rem 1rem' }}>
            <RedocStandalone
              specUrl={specUrl}
              options={{
                theme: {
                  colors: {
                    primary: {
                      main: '#2f6fed',
                    },
                  },
                  typography: {
                    fontSize: '16px',
                    lineHeight: '1.5',
                    fontFamily: 'system-ui, sans-serif',
                  },
                },
              }}
            />
          </div>
        );
      }}
    </BrowserOnly>
  );
}

export default ApiReference;
