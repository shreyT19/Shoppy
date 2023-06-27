import React from "react";

import {
  GridColumn,
  ColumnsDirective,
  ExcelExport,
  PdfExport,
  Edit,
  Inject,
  ColumnDirective,
  Resize,
  Sort,
  ContextMenu,
  Filter,
  Page,
  GridComponent,
} from "@syncfusion/ej2-react-grids";

import {ordersData,ordersGrid,contextMenuItems} from '../data/dummy'
import { Header } from "../components";

const Orders = () => {
  return <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>

    <Header category="Page" title="Orders"/>
    <GridComponent id="gridComp" dataSource={ordersData}>
      <ColumnsDirective>
        {
          ordersGrid.map((item,index)=>{
            return <ColumnDirective key={index} {...item}>
            </ColumnDirective>
          })
        }
      </ColumnsDirective>
    </GridComponent>
  </div>;
};

export default Orders;