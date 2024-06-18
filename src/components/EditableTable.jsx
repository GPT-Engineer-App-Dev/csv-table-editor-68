import React from 'react';
import { Table, Thead, Tbody, Tr, Th, Td, Button, Input } from '@chakra-ui/react';
import { FaPlus, FaTrash } from 'react-icons/fa';

const EditableTable = ({ data, setData }) => {
  const handleInputChange = (e, rowIndex, columnName) => {
    const newData = [...data];
    newData[rowIndex][columnName] = e.target.value;
    setData(newData);
  };

  const handleAddRow = () => {
    const newRow = Object.keys(data[0]).reduce((acc, key) => ({ ...acc, [key]: '' }), {});
    setData([...data, newRow]);
  };

  const handleRemoveRow = (rowIndex) => {
    const newData = data.filter((_, index) => index !== rowIndex);
    setData(newData);
  };

  return (
    <Table variant="simple">
      <Thead>
        <Tr>
          {Object.keys(data[0]).map((key) => (
            <Th key={key}>{key}</Th>
          ))}
          <Th>Actions</Th>
        </Tr>
      </Thead>
      <Tbody>
        {data.map((row, rowIndex) => (
          <Tr key={rowIndex}>
            {Object.keys(row).map((key) => (
              <Td key={key}>
                <Input value={row[key]} onChange={(e) => handleInputChange(e, rowIndex, key)} />
              </Td>
            ))}
            <Td>
              <Button onClick={() => handleRemoveRow(rowIndex)} colorScheme="red" size="sm" leftIcon={<FaTrash />}>Remove</Button>
            </Td>
          </Tr>
        ))}
        <Tr>
          <Td colSpan={Object.keys(data[0]).length + 1}>
            <Button onClick={handleAddRow} colorScheme="green" size="sm" leftIcon={<FaPlus />}>Add Row</Button>
          </Td>
        </Tr>
      </Tbody>
    </Table>
  );
};

export default EditableTable;