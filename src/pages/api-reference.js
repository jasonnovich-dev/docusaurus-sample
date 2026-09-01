import React from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';

function ApiReference() {
  return (
    <BrowserOnly fallback={<div>Loading API reference…</div>}>
      {() => {
        const { RedocStandalone } = require('redoc');

        return (
          <div style={{ maxWidth: 1200, margin: '0 auto', padding: '2rem 1rem' }}>
            <RedocStandalone
              specUrl="/docusaurus-sample/openapi/openapi.yaml"
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
