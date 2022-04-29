import React from 'react';
import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableHead from '@material-ui/core/TableHead';
// import TableRow from '@material-ui/core/TableRow';
// import Paper from '@material-ui/core/Paper';
// import {DateFormatter} from '../../common/components/DateFormatter';
import DataGrid, { Column, Scrolling, Pager, Paging, FilterRow, HeaderFilter, SearchPanel, Selection,
  //  Export
   } from 'devextreme-react/data-grid';
import 'devextreme/dist/css/dx.material.teal.dark.css';
// import { Workbook } from 'exceljs';
// import { saveAs } from 'file-saver';
// import { exportDataGrid } from 'devextreme/excel_exporter';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
});

const allowedPageSizes = [10, 15, 20, 25, 50];

function GiftsSend(props) {
  const {
    //  classes,
      data } = props;
  

  return (

    <div>
     <DataGrid dataSource={data}
      // id="gridContainer" keyExpr="id"
                columnAutoWidth={true}
                width="100%"
                showBorders={true}                
                hoverStateEnabled={true}
                // onSelectionChanged={onSelectionChanged}
                // onExporting={onExporting}
            >
                <Selection mode="single" />
                <FilterRow visible={true}
                />
                <HeaderFilter visible={true} />
                <SearchPanel visible={true}
                    
                    placeholder="Search..." />
                {/* <Column caption="Character" dataField="thumbnail.path"
                    width="auto" allowFiltering={false} allowSorting={false}
                    cellRender={renderGridCell} /> */}
                <Column dataField="cardName" width="20%" caption="CARD NAME" />
                <Column dataField="cardPoints" caption="POINTS" width="20%" />
                <Column dataField="receiverEmail" caption="SENT TO" width="20%" />
                <Column dataField="cardIssueDate" caption="ISSUE DATE" width="20%" dataType="date" />
                <Column dataField="cardExpiryDate" caption="EXPIRY DATE" width="20%" dataType="date" />
                <Scrolling mode="virtual" />
                <Paging defaultPageSize={10} />
                <Pager
                    visible={true}
                    allowedPageSizes={allowedPageSizes}
                    displayMode="full"
                    showPageSizeSelector={true}
                    showInfo={true}
                    alignContent={true} />
                {/* <Export enabled={true} /> */}
            </DataGrid>

    {/* <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>CARD NAME</TableCell>
            <TableCell >POINTS</TableCell>
            <TableCell >SENT TO</TableCell>
            <TableCell >ISSUE DATE</TableCell>
            <TableCell >EXPIRY DATE</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(row => (
            <TableRow key={row.id}>
              
              <TableCell>{row.cardName}</TableCell>
              <TableCell >{row.cardPoints}</TableCell>
              <TableCell >{row.receiverEmail}</TableCell>
              <TableCell>{DateFormatter(row.cardIssueDate)}</TableCell>
              <TableCell>{DateFormatter(row.cardExpiryDate)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper> */}

    </div>
  );
}

GiftsSend.propTypes = {
  classes: PropTypes.object.isRequired,
};



export default withStyles(styles)(GiftsSend)