import React from 'react';
import { View, StyleSheet, ScrollView,Dimensions } from 'react-native';
import { DataTable } from 'react-native-paper';

const { width, height } = Dimensions.get('window');
const DynamicTable = ({ tableHead, tableTitle, tableData }) => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal={true}>
        <View>
          <DataTable>
            <DataTable.Header>
              {tableHead.map((head, index) => (
                <DataTable.Title key={index} style={styles.headerCell}>
                  {head}
                </DataTable.Title>
              ))}
            </DataTable.Header>

            {tableTitle.map((title, index) => (
              <DataTable.Row key={index}>
                <DataTable.Cell style={styles.titleCell}>{title}</DataTable.Cell>
                {tableData[index].map((data, dataIndex) => (
                  <DataTable.Cell key={dataIndex} style={styles.dataCell}>
                    {data}
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
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center', // Center the content horizontally in the header cell
  },
  titleCell: {
    flex: 1,
    minWidth: width*0.2,
    justifyContent: 'center',
  },
  dataCell: {
    flex: 1,
    minWidth: width*0.2,
    justifyContent: 'center',
  },
});

export default DynamicTable;
