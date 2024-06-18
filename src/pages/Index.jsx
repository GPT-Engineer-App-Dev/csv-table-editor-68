import React, { useState } from 'react';
import { Container, VStack, Text } from '@chakra-ui/react';
import CSVUploader from '../components/CSVUploader';
import EditableTable from '../components/EditableTable';
import CSVDownloader from '../components/CSVDownloader';

const Index = () => {
  const [data, setData] = useState(null);

  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={4} width="100%">
        <Text fontSize="2xl">CSV Upload, Edit, and Download Tool</Text>
        <CSVUploader onUpload={setData} />
        {data && (
          <>
            <EditableTable data={data} setData={setData} />
            <CSVDownloader data={data} />
          </>
        )}
      </VStack>
    </Container>
  );
};

export default Index;