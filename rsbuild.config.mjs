import { defineConfig, loadEnv } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

const { publicVars } = loadEnv({ prefixes: ['REACT_APP_'] });

export default defineConfig(() => {
  return {
    plugins: [pluginReact()],
    source: {
      alias: {
        react:
          import.meta.env.REACT_APP_REACT_18 === 'true' ? 'react-18' : 'react',
        'react-dom':
          import.meta.env.REACT_APP_REACT_18 === 'true'
            ? 'react-dom-18'
            : 'react-dom',
      },
      define: {
        ...publicVars,
      },
    },
  };
});
