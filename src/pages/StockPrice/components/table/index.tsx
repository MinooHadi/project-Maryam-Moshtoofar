import {
  Table,
  TablePaginationConfig,
  Image,
  Input,
  Form,
  InputRef,
  FormInstance,
} from "antd";
import convertToPersian from "num-to-persian";
import {
  Dispatch,
  SetStateAction,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { useAppSelector, useAppDispatch } from "../../../../redux/hooks";
import {
  fetchProducts,
  updateProduct,
} from "../../../../redux/features/admin/products/productsSlice";
import { fetchCategories } from "../../../../redux/features/admin/categories/categoriesSlice";
import { Product } from "../../../../types";
import { BASE_URL } from "../../../../config/api";
import React from "react";
import { useSearchParams } from "react-router-dom";
const EditableContext = React.createContext<FormInstance<any> | null>(null);

type EditableTableProps = Parameters<typeof Table>[0];
type ColumnTypes = Exclude<EditableTableProps["columns"], undefined>;
interface EditableCellProps {
  editing: boolean;
  setEditing: Dispatch<SetStateAction<boolean>>;
  title: React.ReactNode;
  editable: boolean;
  children: React.ReactNode;
  dataIndex: keyof Product;
  record: Product;
  handleSave: (record: Product) => void;
}
interface EditableRowProps {
  index: number;
}
const EditableRow: React.FC<EditableRowProps> = ({ index, ...props }) => {
  const [form] = Form.useForm();
  return (
    <Form form={form} component={false}>
      <EditableContext.Provider value={form}>
        <tr {...props} />
      </EditableContext.Provider>
    </Form>
  );
};
const EditableCell: React.FC<EditableCellProps> = ({
  title,
  editable,
  children,
  dataIndex,
  record,
  handleSave,
  ...restProps
}) => {
  const inputRef = useRef<InputRef>(null);
  const form = useContext(EditableContext)!;
  const [editing, setEditing] = useState(false);
  const escFunction = useCallback((event: KeyboardEvent) => {
    if (event.key === "Escape") {
      setEditing(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", escFunction, false);

    return () => {
      document.removeEventListener("keydown", escFunction, false);
    };
  }, []);

  useEffect(() => {
    if (editing) {
      inputRef.current!.focus();
    }
  }, [editing]);

  const toggleEdit = () => {
    setEditing(!editing);
    form.setFieldsValue({ [dataIndex]: record[dataIndex] });
  };

  const save = async () => {
    try {
      const values = await form.validateFields();
      toggleEdit();
      handleSave({ ...record, ...values });
    } catch (errInfo) {
      console.log("Save failed:", errInfo);
    }
  };

  let childNode = children;

  if (editable) {
    childNode = editing ? (
      <Form.Item
        style={{ margin: 0 }}
        name={dataIndex}
        rules={[
          {
            required: true,
            message: `${title} is required.`,
          },
        ]}
      >
        <Input ref={inputRef} onPressEnter={save} />
      </Form.Item>
    ) : (
      <div
        className="editable-cell-value-wrap"
        style={{ paddingRight: 24 }}
        onClick={toggleEdit}
      >
        {children}
      </div>
    );
  }

  return <td {...restProps}>{childNode}</td>;
};

const ProductTable: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams({
    _page: "1",
    _limit: "5",
  });
  const state = useAppSelector((state) => state.products);
  const queryParams = useAppSelector((state) => state.products.queryParams);
  const loading = useAppSelector((state) => state.products.loading);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProducts(searchParams));
    dispatch(fetchCategories());
  }, [searchParams]);

  const defaultColumns: (ColumnTypes[number] & {
    editable?: boolean;
    dataIndex: string;
  })[] = [
    {
      title: "تصویر",
      dataIndex: "",
      key: "thumbnail",
      render: (_: string, record: any) => (
        <Image width={200} src={`${BASE_URL}/files/${record.image[0]}`} />
      ),
    },
    {
      title: "نام کالا",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "قیمت",
      dataIndex: "price",
      key: "price",
      editable: true,
      render: (text: any) =>
        convertToPersian(
          text.toLocaleString("fa-IR", { maximumFractionDigits: 2 })
        ),
    },
    {
      title: "موجودی",
      dataIndex: "quantity",
      key: "quantity",
      editable: true,
      render: (text: string) => convertToPersian(text),
    },
  ];
  const handleSave = (row: Product) => {
    dispatch(updateProduct({ id: Number(row.id), editedProduct: row })).then(
      () => dispatch(fetchProducts(searchParams))
    );
  };

  const handleTableChange = (newPagination: TablePaginationConfig) => {
    searchParams.set("_page", String(newPagination.current));
    setSearchParams(searchParams);
    dispatch(fetchProducts(searchParams));
  };

  const columns = defaultColumns.map((col) => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record: Product) => ({
        record,
        editable: col.editable,
        dataIndex: col.dataIndex,
        title: col.title,
        handleSave,
      }),
    };
  });

  const components = {
    body: {
      row: EditableRow,
      cell: EditableCell,
    },
  };

  return (
    <Table
      components={components}
      columns={columns as ColumnTypes}
      dataSource={[...state.products]}
      rowKey={(product: any) => product.id}
      pagination={queryParams.pagination}
      loading={loading}
      onChange={handleTableChange}
    />
  );
};

export default ProductTable;
