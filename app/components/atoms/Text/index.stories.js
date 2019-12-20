/**
 *
 * Stories for Text
 *
 * Atom
 */

import { text } from '@storybook/addon-knobs';
import React from 'react';
import { product } from 'utils/permutations';
import Text, { TextColors, TextVariants } from '.';

export default {
  title: 'Design|Atoms/Text',
  component: Text,
};

export const allPermutations = () => {
  const propPerms = product(TextColors, TextVariants);
  return (
    <div>
      {propPerms.map(([color, variant]) => (
        <Text key={`text-${color}-${variant}`} color={color} variant={variant}>
          {`Text ${variant} ${color}`}
        </Text>
      ))}
    </div>
  );
};

export const withExtraClasses = () => (
  <div>
    <Text className="p-5" color="dark">
      I have a padding of p-5
    </Text>
    <Text>I should be pushed down by pb-5</Text>
  </div>
);

export const withDynamicVariables = () => (
  <Text variant={text('Variant', 'h1')} color={text('Color', 'body')}>
    {text('Content', 'Text')}
  </Text>
);
