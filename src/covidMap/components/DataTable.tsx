import { Table } from 'antd';

const columns = [
  {title:'地区', dataIndex:'area', key:'area'},
  {title:'现存确诊', dataIndex:'curConfirm', key:'curConfirm', sorter: {
    compare: (a: { curConfirm: number; }, b: { curConfirm: number; }) => a.curConfirm - b.curConfirm,
    multiple: 3,
  },},
  {title:'累计确诊', dataIndex:'allConfirm', key:'allConfirm'},
  {title:'死亡', dataIndex:'allDead', key:'allDead'},
  {title:'治愈', dataIndex:'allCure', key:'allCure'}
]

export default function DataTable(props: { tableData: any; }){
  const {tableData} = props
  return (
    <Table
    columns = {columns}
    expandable={{
      // expandedRowRender: record => <Table columns={columns} dataSource={record.subList} showHeader={true} pagination={false}/>
      indentSize:0
    }}
    dataSource = {tableData}
    pagination = {false}
    size={'small'}
    />
  )
}
