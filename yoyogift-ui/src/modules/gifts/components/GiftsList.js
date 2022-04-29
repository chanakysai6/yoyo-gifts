import React from 'react'
// import PropTypes from "prop-types";
import { withStyles } from '@material-ui/core/styles'

import history from '../../common/components/history'
// import axios from 'axios';
import DataGrid, {
  Column,
  Grouping,
  Button,
  // Editing,
  GroupPanel,
  Scrolling,
  Pager,
  Paging,
  FilterRow,
  HeaderFilter,
  SearchPanel,
  Selection,
  // , Export
} from 'devextreme-react/data-grid'
import 'devextreme/dist/css/dx.material.lime.dark.compact.css'
import { connect } from 'react-redux'
import { adminEmail } from '../../../config/constants'
// import { useNavigate } from 'react-router-dom';
// import { Workbook } from 'exceljs';
// import { saveAs } from 'file-saver';
// import { exportDataGrid } from 'devextreme/excel_exporter';

const allowedPageSizes = [10, 15, 20, 25, 50]

const styles = (theme) => ({
  root: {
    width: '90%',
    margin: '2%',
    padding: '1%',
  },
  table: {
    minWidth: 100,
  },
  tableWrapper: {
    overflow: 'hidden',
  },
})

class GiftsList extends React.Component {
  state = {
    giftCardsFiltered: this.props.giftCardsFiltered,
    page: 0,
    rowsPerPage: 10,
  }

  // handleChangePage = (event, page) => {
  //   this.setState({ page });
  // };

  onSelectionChanged = ({ selectedRowsData }) => {
    const data = selectedRowsData[0]
    // navigate(`/${data.id}`, { characterId: data.id })
    // console.log(data)
    history.push(`/giftCards/${data.id}`)
  }

  // handleChangeRowsPerPage = event => {
  //   this.setState({ page: 0, rowsPerPage: event.target.value });
  // };

  renderGridCell = (cellData) => {
    // console.log(cellData)
    return (
      <div>
        <img
          src={`${cellData.value}`}
          width="100"
          height="100"
          alt={`${cellData.data.cardName}`}
        ></img>
      </div>
    )
  }
  
  render() {
    let {
      // classes,
      giftCardsFiltered,
      //  ,
      // userDetails
    } = this.props
    // const { rowsPerPage, page } = this.state;
    // console.log(giftCardsFiltered);
    // const emptyRows =
    //   rowsPerPage -
    //   Math.min(rowsPerPage, giftCardsFiltered.length - page * rowsPerPage);
    return (
      <div>
        <DataGrid
          dataSource={giftCardsFiltered}
          id="gridContainer"
          keyExpr="id"
          
          // columnAutoWidth={true}
          width="100%"
          showBorders={true}
          // rowAlternationEnabled={true}
          hoverStateEnabled={true}
          onSelectionChanged={this.onSelectionChanged}
          // onExporting={onExporting}
        >
          {/* {this.props.userDetails && */}
          {/* // adminEmail.includes(this.props.userDetails.email) ? ( */}
            {/* <Editing allowDeleting={this.onAllowDeleting} ></Editing> */}
          {/* // ) : <Editing allowDeleting={false}></Editing>} */}
          <GroupPanel visible={true} />
          <Grouping autoExpandAll={true} />
          <Selection mode="single" />

          <FilterRow
            visible={true}
            // applyFilter={this.state.currentFilter}
          />
          <HeaderFilter visible={true} />
          <SearchPanel visible={true} width={240} placeholder="Search..." />
          <Column
            caption=" "
            dataField="cardImage"
            allowFiltering={false}
            allowSorting={false}
            cellRender={this.renderGridCell}
          />
          <Column dataField="cardCategory" dataType="string" groupIndex={0} />
          <Column dataField="cardName" caption="Name" />
          <Column dataField="cardPoints" caption="Card Points" />
          <Column dataField="cardRetailer" caption="Card Retailer" />
          <Column dataField="cardShortDesc" caption="Card Offer" />
          <Column
            dataField="cardIssueDate"
            dataType="date"
            caption="Card Issue Date"
          />
          <Column
            dataField="cardExpiryDate"
            dataType="date"
            caption="Card Expire Date"
          />
          <Column dataField="cardCount" caption="Cards Remaining Left" />
          {this.props.userDetails &&
          adminEmail.includes(this.props.userDetails.email) ? (
            <Column type="buttons">
              <Button
                text="EDIT"
                hint="EDIT"
                onClick={(e) => {
                  // console.log(e.row.data)

                  history.push(`/AddUpdateForm/${e.row.data.id}`)
                  // props.redeemCard(e.row.data)
                }}
                // disabled={isCloneIconDisabled}
              />
  
            </Column>
          ) : null}

          {/*<Column dataField="name" width="auto" caption="Name" />
                <Column dataField="description" caption="Description" width="40%" /> */}
          <Scrolling mode="virtual" />
          <Paging defaultPageSize={10} />
          <Pager
            visible={true}
            allowedPageSizes={allowedPageSizes}
            displayMode="full"
            showPageSizeSelector={true}
            showInfo={true}
            alignContent={true}
          />
          {/* <Export enabled={true} /> */}
        </DataGrid>

        {/* <Paper className={classes.root}>
        <div className={classes.tableWrapper}>
          <Table className={classes.table}>
            <TableBody>
              <Grid container spacing={16}>
                {giftCardsFiltered
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map(giftCard => {
                    return (
                      <Grid item xs={12} sm={6} md={3} lg={3}>
                     { userDetails  ?  <GiftCard giftCard={giftCard} userEmail={userDetails.email}/> : history.push('/') }
                       </Grid>
                    );
                  })}
              </Grid>
              {emptyRows > 0 && (
                <TableRow style={{ height: 48 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TablePagination
                  rowsPerPageOptions={[10, 20]}
                  colSpan={3}
                  count={giftCardsFiltered.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  SelectProps={{
                    native: true
                  }}
                  onChangePage={this.handleChangePage}
                  onChangeRowsPerPage={this.handleChangeRowsPerPage}
                  ActionsComponent={TablePaginationActionsWrapped}
                  props
                />
              </TableRow>
            </TableFooter>
          </Table>
        </div>
      </Paper> */}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    // giftCards: state.gifts.giftCards,
    // giftCardsFiltered: state.gifts.giftCardsFiltered,
    userDetails: state.login.detailsObject.data,
  }
}
// GiftsList.propTypes = {
//   classes: PropTypes.object.isRequired
// };

export default connect(mapStateToProps)(withStyles(styles)(GiftsList))
