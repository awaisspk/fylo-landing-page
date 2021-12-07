import {FlexPrimitive} from '@components/Flex';
import Grid from '@components/Grid';
import {
  EmailIcon,
  FbIcon,
  InstaIcon,
  Logo,
  MobileIcon,
  TwitterIcon,
} from '@components/icons';
import {styled} from '@stitches';
import {Text} from '@components/Typography';
import {Box} from '@components/Box';

const Wrapper = styled('section', {
  backgroundColor: '$veryDarkBlue',
  width: '100%',
  py: '$12',
});

const Link = styled('a', {
  color: '#fff',
  fontSize: '$3',
  cursor: 'pointer',
  '& svg': {
    mr: '$4',
  },
  '&:hover': {
    textDecoration: 'underline',
  },
});

const LinkIcon = styled('a', {
  color: '#fff',
  border: '1px solid CurrentColor',
  borderRadius: '$full',
  size: 40,
  flexCenter: true,
  '&:hover': {
    border: '1px solid $brightBlue',
  },
});

const Flex = styled(FlexPrimitive, {
  gap: '$2',
});

export const Footer = () => {
  return (
    <Wrapper>
      <Grid
        as="footer"
        alignItems="center"
        css={{
          minH: '$3',
          width: 'min(1200px,90%)',
          marginX: 'auto',
          gap: '$12',
          '@bp3': {
            gridTemplateColumns: 'repeat(3, 1fr)',
          },
        }}
      >
        <Flex
          flow="col"
          css={{
            '@bp3': {
              mt: '-200px',
            },
          }}
        >
          <Box css={{marginY: '$6'}}>
            <Logo color="#fff" />
          </Box>
          <Link>
            <MobileIcon /> Phone : +92300990099
          </Link>
          <Link>
            <EmailIcon /> example@fylo.com
          </Link>
        </Flex>

        <Grid
          alignItems="start"
          css={{
            gridTemplateColumns: '1fr',
            '@bp1': {
              gridTemplateColumns: '1fr 1fr',
            },
          }}
        >
          <Flex flow="col">
            <Text css={{color: '#fff'}}>About us</Text>
            <Link>Jobs</Link>
            <Link>Press</Link>
            <Link>Blog</Link>
          </Flex>

          <Flex flow="col">
            <Text css={{color: '#fff'}}>Contact us</Text>
            <Link>Terms</Link>
            <Link>Privacy</Link>
          </Flex>
        </Grid>

        <Flex
          css={{
            '@bp3': {
              mt: '-90px',
            },
          }}
        >
          <LinkIcon>
            <FbIcon />
          </LinkIcon>
          <LinkIcon>
            <TwitterIcon />
          </LinkIcon>
          <LinkIcon>
            <InstaIcon />
          </LinkIcon>
        </Flex>
      </Grid>
    </Wrapper>
  );
};
