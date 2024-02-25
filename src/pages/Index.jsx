import React, { useState } from "react";
import { Box, Text, Input, Button, Container, Heading, VStack, HStack, Image } from "@chakra-ui/react";
import { FaSearch, FaChartLine } from "react-icons/fa";

const Index = () => {
  const [ticker, setTicker] = useState("");

  // Placeholder function - to be implemented
  const fetchStockData = async () => {
    // This function would fetch stock data based on the ticker and update the state
    // For now, let's just console log the ticker
    console.log(`Fetch data for ticker: ${ticker}`);
  };

  return (
    <Container maxW="container.md" py={10}>
      <VStack spacing={8}>
        <Heading as="h1" size="xl" textAlign="center">
          Stock Historical Chart Viewer
        </Heading>
        <Box w="100%">
          <HStack>
            <Input placeholder="Enter Google Stock Ticker" value={ticker} onChange={(e) => setTicker(e.target.value)} />
            <Button colorScheme="blue" onClick={fetchStockData}>
              <FaSearch />
              &nbsp;Search
            </Button>
          </HStack>
        </Box>
        <Box w="100%" p={5} borderWidth="1px" borderRadius="lg">
          <VStack>
            <Text fontSize="2xl" fontWeight="bold">
              {ticker || "Stock Ticker"}
            </Text>
            {/* This is where the stock chart would be rendered */}
            <Box w="100%" h="300px" bg="gray.200" display="flex" alignItems="center" justifyContent="center" borderRadius="md">
              {/* Placeholder for chart */}
              <Text color="gray.500">Chart would be displayed here</Text>
              <FaChartLine size="3em" color="#CBD5E0" />
            </Box>
            {/* Placeholder for stock image */}
            <Image src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzdG9jayUyMG1hcmtldHxlbnwwfHx8fDE3MDg4NjI2NjJ8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Stock Market" />
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
