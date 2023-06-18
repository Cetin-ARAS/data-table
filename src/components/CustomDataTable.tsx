import DataTable, { TableColumn } from 'react-data-table-component';

export interface IDataRow {
  socialLink: string;
  socialName: string;
  description: string;
}

type Props = {
  data: IDataRow[];
};

const CustomDataTable = ({ data }: Props) => {
  const styles = {
    rows: {
      style: {
        backgroundColor: '#F3F6FF',
      },
      stripedStyle: {
        backgroundColor: '#fff',
      },
    },
  };
  const columns: TableColumn<IDataRow>[] = [
    {
      name: 'Sosyal Medya Linki',
      selector: (row ) => row.socialLink,
      sortable: true,
    },
    {
      name: 'Social Medya Adı',
      selector: (row) => row.socialName,
      sortable: true,
    },
    {
      name: 'Açıklama',
      selector: (row) => row.description,
    },
  ];

  return <DataTable count pagination striped customStyles={styles} columns={columns} data={data} noDataComponent={<p className="py-10">Seçenek Yok</p>} />;
};

export default CustomDataTable;
