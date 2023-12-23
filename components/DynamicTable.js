import React from 'react';
import { View, StyleSheet, ScrollView, Dimensions, Text } from 'react-native';
import { DataTable } from 'react-native-paper';

const { width } = Dimensions.get('window');
const cellWidth = width * 0.25; // Adjust cell width as needed

const CustomHeaderCell = ({ children }) => (
  <View style={[styles.headerCell, { width: cellWidth }]}>
    <Text style={[styles.headerText, { flexWrap: 'wrap' }]}>{children}</Text>
  </View>
);

const DynamicTable = ({ tableHead, tableTitle, tableData }) => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal={true}>
        <View>
          <DataTable>
            <DataTable.Header>
              {tableHead.map((head, index) => (
                <CustomHeaderCell key={index}>{head}</CustomHeaderCell>
              ))}
            </DataTable.Header>

            {tableTitle.map((title, index) => (
              <DataTable.Row key={index}>
                <DataTable.Cell style={[styles.titleCell, { width: cellWidth }]}>
                  <Text style={styles.cellText}>{title}</Text>
                </DataTable.Cell>
                {tableData[index].map((data, dataIndex) => (
                  <DataTable.Cell key={dataIndex} style={[styles.dataCell, { width: cellWidth }]}>
                    <Text style={styles.cellText}>{data}</Text>
                  </DataTable.Cell>
                ))}
              </DataTable.Row>
            ))}
          </DataTable>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: '2%',
  },
  headerCell: {
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1, // Optional: Add styling for cell borders
    borderColor: '#ccc', // Optional: Add cell border color
  },
  headerText: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
  titleCell: {
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1, // Optional: Add styling for cell borders
    borderColor: '#ccc', // Optional: Add cell border color
  },
  dataCell: {
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1, // Optional: Add styling for cell borders
    borderColor: '#ccc', // Optional: Add cell border color
  },
  cellText: {
    textAlign: 'center',
    flexWrap: 'wrap', // Allow text to wrap within the cell width
  },
});

export default DynamicTable;
