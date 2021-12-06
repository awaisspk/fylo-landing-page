import {styled} from '@stitches';

export const Typography = styled('p', {
  all: 'unset',
  color: '$white',
  fontFamily: '$primary',
  display: 'block',

  variants: {
    variant: {
      heading: {
        fontSize: '$5',
        fontWeight: '$700',
        lineHeight: '$3',
      },
      title: {
        fontSize: '$4',
        fontWeight: '$600',
        lineHeight: '$4',
      },
      para: {
        color: 'hsl(0 0% 100% / 0.8)',
        fontSize: '$2',
        fontWeight: '$400',
        lineHeight: '$2',
      },
    },
    align: {
      center: {
        textAlign: 'center',
      },
    },
  },
});
