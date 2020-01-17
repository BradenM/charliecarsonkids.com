/**
 *
 * Color Helpers
 *
 * Utils
 */

import color from 'color';
import { Theme } from '../global-styles';

const Color = {};
Object.entries(Theme).forEach(([key, val]) => {
  Color[key] = color(val);
});
export default Color;
