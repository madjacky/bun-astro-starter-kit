import postcssPresetEnv from 'postcss-preset-env';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import atImport from 'postcss-import';

export default {
  plugins: [
    atImport(),
    postcssPresetEnv({
      stage: 3,
      features: {
        "custom-media-queries": true,
      }
    }),
    autoprefixer(),
    cssnano()
  ]
};