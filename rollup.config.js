import babel from 'rollup-plugin-babel'
import resolve from '@rollup/plugin-node-resolve'
import external from 'rollup-plugin-peer-deps-external'
import commonjs from '@rollup/plugin-commonjs'
import {terser} from 'rollup-plugin-terser'

export default [{
    input: './src/index.js',
    output: [
        {
            file: 'dist/index.js',
            format: 'cjs',
        },
        {
            file:'dist/index.es.js',
            format: 'es',
            exports:'named',}
    ],
    plugins: [
        commonjs({
    include: [
      'node_modules/**'
    ],
    exclude: [
      'node_modules/process-es6/**'
    ],
    namedExports: {
      'node_modules/react/react.js': ['Children', 'Component', 'PropTypes', 'createElement'],
      'node_modules/react-dom/index.js': ['render']
    }
  }),
        babel({
            exclude: 'node_modules/**',
            presets: ['@babel/preset-react'],
        }),
        external(),
        resolve(),
        terser(),
    ]
}]