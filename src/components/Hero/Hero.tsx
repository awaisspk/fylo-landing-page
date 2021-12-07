import {Button} from '@components/Buttons';
import {Flex} from '@components/Flex';
import {TextInput} from '@components/TextInput';
import {Paragraph, Title} from '@components/Typography';
import {styled} from '@stitches';
import Image from 'next/image';

const Main = styled('main', {
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

const Wrapper = styled('div', {
  // minH: '100vh',
});

const ImageContainer = styled('div', {
  width: 'min(400px,100%)',
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
});

export const Hero = () => {
  return (
    <Wrapper>
      <Main>
        <ImageContainer
          css={{
            '@bp2': {
              flexBasis: '50%',
            },
          }}
        >
          <Image
            src="/images/illustration-1.svg"
            width={400}
            height={400}
            quality={100}
            alt="illustration of files"
            layout="fixed"
            priority
          />
        </ImageContainer>
        <Flex
          flow="col"
          gap="4"
          css={{
            '@bp2': {
              flexBasis: '45%',
            },
          }}
        >
          <Title css={{textAlign: 'center', '@bp2': {textAlign: 'start'}}}>
            All your files in one secure location, accessible anywhere
          </Title>
          <Paragraph css={{textAlign: 'center', '@bp2': {textAlign: 'start'}}}>
            Fylo stores your most important files in one secure location. Access
            them whether you need, share and collaborate with friends, family,
            and coworkers
          </Paragraph>
          <Flex
            flow="row"
            wrap="wrap"
            gap="5"
            main={{'@initial': 'center', '@bp3': 'start'}}
          >
            <TextInput />
            <Button
              css={{
                width: 'min(300px,100%)',

                '@bp5': {
                  width: '150px',
                },
              }}
            >
              Get started
            </Button>
          </Flex>
        </Flex>
      </Main>
    </Wrapper>
  );
};
