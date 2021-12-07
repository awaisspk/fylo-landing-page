import {styled} from '@stitches';
import React from 'react';

const StyledTextInput = styled('input', {
  all: 'unset',
  backgroundColor: 'white',
  borderRadius: '0.3em',
  height: '40px',
  width: 'min(275px, 100%)',
  px: '$3',
  border: '1px solid #cecece',
});

type Props = React.ComponentProps<typeof StyledTextInput>;

export const TextInput = React.forwardRef(
  (props: Props, ref: React.Ref<HTMLInputElement>) => (
    <StyledTextInput ref={ref} {...props} type="email" />
  )
);

TextInput.displayName = 'TextInput';
