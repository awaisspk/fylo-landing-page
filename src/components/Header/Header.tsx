import {Flex} from '@components/Flex';
import {Logo} from '@components/icons';
import {Link} from '@components/Typography';
import {styled} from '@stitches';

const StyledHeader = styled('header', Flex, {
  maxW: 'min(1200px,90%)',
  marginX: 'auto',
  justifyContent: 'space-between',
  alignItems: 'center',
  height: 100,

  [`${Link}`]: {
    '&:hover': {
      color: '$brightBlue',
      cursor: 'pointer',
    },
  },
});

const Wrapper = styled('div', {});
const Nav = styled('nav', {});

export const Header = () => {
  return (
    <Wrapper>
      <StyledHeader>
        <Logo width={120} />
        <Nav>
          <Flex as="ul" css={{listStyle: 'none', gap: '$5'}}>
            <li>
              <Link>Features</Link>
            </li>
            <li>
              <Link>Team</Link>
            </li>
            <li>
              <Link>Sign in</Link>
            </li>
          </Flex>
        </Nav>
      </StyledHeader>
    </Wrapper>
  );
};
