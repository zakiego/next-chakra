import { ExternalLinkIcon } from "@chakra-ui/icons";
import {
  Code,
  Container,
  Heading,
  Link,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import Head from "next/head";
import NextImage from "next/image";

export default function Index() {
  const breakpoints = {
    base: "7",
    sm: "",
  };

  return (
    <div>
      <Head>
        <title>Next Chakra</title>
        <meta
          name="description"
          content="Next.js and Chakra UI With TypeScript"
        />
      </Head>
      <Container
        maxWidth="container.xl"
        className="vercel"
        paddingX={breakpoints}
      >
        <VStack
          align="center"
          justify="center"
          height="100vh"
          spacing="6"
          textAlign="center"
        >
          <NextImage
            src="/static/images/next-chakra.png"
            width={654}
            height={124.02}
            alt="Next.js and Chakra UI"
          />

          <VStack spacing="4">
            <Heading as="h1" fontSize={{ base: "3xl", md: "5xl" }}>
              <Link
                href="https://nextjs.org"
                _focus={{ boxShadow: "none" }}
                isExternal
              >
                Next.js
              </Link>{" "}
              and{" "}
              <Link
                href="https://chakra-ui.com"
                _focus={{ boxShadow: "none" }}
                isExternal
              >
                Chakra UI
              </Link>
            </Heading>
            <Text opacity="80%">With TypeSciprt, Prettier, and ESLint</Text>
          </VStack>

          <Stack>
            <Code
              bg="gray.700"
              textColor="white"
              rounded="md"
              paddingX="5"
              paddingY="4"
              fontSize={{ base: "sm", md: "md" }}
            >
              yarn create next-app --example
              https://github.com/zakiego/next-chakra
            </Code>
          </Stack>
          <Stack>
            <Link
              color="teal.500"
              href="https://github.com/zakiego/next-chakra"
              fontSize={{ base: "sm", md: "md" }}
              _focus={{ boxShadow: "none" }}
              isExternal
            >
              View github repository <ExternalLinkIcon ml="2px" />
            </Link>
          </Stack>
        </VStack>
      </Container>
    </div>
  );
}
