import resolve from 'rollup-plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';

export default {
  input: './src/index.ts',
  output: [
    {
      format: 'cjs',
      file: 'dist/wy-cloud-utils.cjs.js',
      name: 'wyutils',
    },
    {
      format: 'esm',
      file: 'dist/wy-cloud-utils.esm.js',
      name: 'wyutils',
    },
    {
      format: 'umd',
      file: 'dist/wy-cloud-utils.umd.js',
      name: 'wyutils',
    }
  ],
  plugins: [typescript({ tsconfig: './tsconfig.json' }), resolve()]
}