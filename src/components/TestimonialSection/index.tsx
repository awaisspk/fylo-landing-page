import {ImageContainer} from '@components/Hero/Hero';
import Image from 'next/image';
import {styled} from '@stitches';
import {Link, Paragraph, Title} from '@components/Typography';
import {Flex} from '@components/Flex';

const Wrapper = styled('div', {
  mt: '200px',
  py: '100px',
  backgroundColor: '#f9f8fe',
  position: 'relative',
});

const Section = styled('section', {
  width: 'min(1200px,90%)',
  marginX: 'auto',
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  alignItems: 'center',

  '@bp2': {
    flexDirection: 'row-reverse',
  },
});

const Curve = styled('div', {
  position: 'absolute',
  top: -115,
  left: 0,
  right: 0,
  height: 115,

  '&:before': {
    position: 'absolute',
    content: '',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',

    background: 'url("/images/bg-curve-mobile.svg") no-repeat',
    '@bp2': {
      background: 'url("/images/bg-curve-desktop.svg") no-repeat',
    },

    backgroundSize: 'contain',
    backgroundPosition: 'bottom',
  },
});

export const Testimonial = () => {
  return (
    <Wrapper>
      <Section>
        <Curve />
        <ImageContainer
          css={{
            '@bp2': {
              flexBasis: '50%',
            },
          }}
        >
          <Image
            src="/images/illustration-2.svg"
            alt=""
            width={400}
            height={400}
            quality={100}
            layout="fixed"
            priority
          />
        </ImageContainer>
        <Flex
          flow="col"
          center
          gap="3"
          css={{
            '@bp2': {
              flexBasis: '45%',
              alignItems: 'start',
            },
          }}
        >
          <Title textAlign="center" css={{mb: '$5'}}>
            Stay productive, wherever you are
          </Title>
          <Paragraph textAlign={{'@initial': 'center', '@bp2': 'start'}}>
            Never let location be an issue when accessing your files, Fylo has
            you covered for all of your file storage needs.
          </Paragraph>
          <Paragraph textAlign={{'@initial': 'center', '@bp2': 'start'}}>
            Securely share files and folders with family, friends and colleages
            for live collboration. No email attachments required!
          </Paragraph>
          <Link variant="primary">See how fylo works</Link>
        </Flex>
      </Section>
    </Wrapper>
  );
};
