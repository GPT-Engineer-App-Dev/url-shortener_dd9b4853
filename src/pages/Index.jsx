import { useState } from "react";
import { Box, Button, Container, FormControl, FormLabel, Input, Stack, Text, useToast, VStack, Heading, Link } from "@chakra-ui/react";
import { FaLink, FaCopy } from "react-icons/fa";

const Index = () => {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const toast = useToast();

  const handleShortenUrl = () => {
    // Simulate URL shortening
    if (url.trim() === "") {
      toast({
        title: "Error",
        description: "Please enter a URL to shorten.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }
    const fakeShortUrl = `https://short.url/${Math.random().toString(36).substr(2, 8)}`;
    setShortUrl(fakeShortUrl);
    toast({
      title: "Success",
      description: "URL has been shortened!",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(shortUrl).then(() => {
      toast({
        title: "Copied!",
        description: "Short URL copied to clipboard.",
        status: "info",
        duration: 2000,
        isClosable: true,
      });
    });
  };

  return (
    <Container maxW="container.md" py={10}>
      <VStack spacing={8}>
        <Heading as="h1" size="xl">
          URL Shortener
        </Heading>
        <FormControl>
          <FormLabel htmlFor="url">Enter URL to shorten</FormLabel>
          <Stack direction={{ base: "column", md: "row" }} spacing={4}>
            <Input id="url" placeholder="https://example.com" value={url} onChange={(e) => setUrl(e.target.value)} />
            <Button leftIcon={<FaLink />} colorScheme="blue" onClick={handleShortenUrl}>
              Shorten
            </Button>
          </Stack>
        </FormControl>
        {shortUrl && (
          <Box p={4} borderWidth="1px" borderRadius="lg">
            <Text mb={2}>Short URL:</Text>
            <Link href={shortUrl} isExternal color="blue.500">
              {shortUrl}
            </Link>
            <Button ml={4} onClick={handleCopy} leftIcon={<FaCopy />} size="sm">
              Copy
            </Button>
          </Box>
        )}
      </VStack>
    </Container>
  );
};

export default Index;
