import {styled} from '@stitches';
import {motion, Variants} from 'framer-motion';
import React from 'react';

const StyledButton = styled(motion.button, {
  border: 'none',
  color: 'white',
  fontFamily: 'Inter',
  fontSize: '$2',
  fontWeight: '$600',
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '$lg',
  userSelect: 'none',
  WebkitTapHighlightColor: 'transparent',
  height: '40px',
  width: 'min(200px,100%)',
  backgroundColor: '$brightBlue',

  '& svg': {
    marginRight: '0.5rem',
  },

  '@supports selector(:focus-visible)': {
    '&:focus-visible': {
      outline: 'none',
      boxShadow:
        '0 20px 40px hsla(176, 68%, 64%,0.5) 0 0 0 3px  hsla(176, 68%, 64%,0.3)',
    },
  },
});

type ButtonProps = {
  icon?: 'arrow' | 'email' | 'github';
};

type StyledButtonProps = React.ComponentProps<typeof StyledButton>;
type Props = StyledButtonProps & ButtonProps;

export const Button: React.FC<Props> = ({icon, children, ...rest}) => {
  const isIcon = icon !== undefined;

  const buttonVariants: Variants = {
    idle: {
      scale: 1,
    },
    hover: {
      scale: 1.05,
    },
    tap: {
      scale: 0.98,
    },
  };

  return (
    <>
      <StyledButton
        css={{px: isIcon ? '10px' : '$3'}}
        variants={buttonVariants}
        initial="idle"
        whileHover="hover"
        whileTap="tap"
        {...rest}
      >
        {children}
      </StyledButton>
    </>
  );
};
