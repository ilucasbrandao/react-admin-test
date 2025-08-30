// src/Vendas/VendaCreate.tsx
import {
  Create,
  SimpleForm,
  TextInput,
  NumberInput,
  DateInput,
  SelectInput,
  useNotify,
  useRedirect,
  FormDataConsumer,
} from "react-admin";

const VendaCreate = () => {
  const notify = useNotify();
  const redirect = useRedirect();

  const handleSubmit = async (values: any) => {
    try {
      const total =
        values.quantidade * values.unitario * (1 - values.desconto / 100);

      const formData = {
        order_date: values.date,
        product_name: values.produto,
        quantity: values.quantidade,
        unit_price: values.unitario,
        discount: values.desconto,
        total_amount: total,
        payment_method: values.formaPagamento,
        note: values.observacao,
      };

      await fetch("http://localhost:3000/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      notify("Venda criada com sucesso!", { type: "success" });
      redirect("/products");
    } catch (error) {
      console.error("Erro ao criar venda:", error);
      notify("Erro ao criar venda. Verifique os dados.", { type: "error" });
    }
  };

  return (
    <Create title="Create Venda">
      <SimpleForm onSubmit={handleSubmit}>
        {/* Total destacado no topo */}
        <FormDataConsumer>
          {({ formData }) => {
            const total =
              formData.quantidade && formData.unitario
                ? (
                    formData.quantidade *
                    formData.unitario *
                    (1 - (formData.desconto || 0) / 100)
                  ).toFixed(2)
                : "0.00";

            return (
              <div
                style={{
                  marginBottom: "1em",
                  padding: "1em",
                  backgroundColor: "#f5f5f5",
                  borderRadius: "8px",
                  textAlign: "center",
                  fontSize: "1.5em",
                  fontWeight: "bold",
                }}
              >
                Total: R$ {total}
              </div>
            );
          }}
        </FormDataConsumer>
        <DateInput source="date" label="Data" />
        <TextInput source="produto" label="Produto" />
        <NumberInput source="quantidade" label="Quantidade" />
        <NumberInput source="unitario" label="Unitário" />
        <NumberInput source="desconto" label="Desconto (%)" />
        <SelectInput
          source="formaPagamento"
          label="Forma de Pagamento"
          choices={[
            { id: "Cartão", name: "Cartão" },
            { id: "Dinheiro", name: "Dinheiro" },
            { id: "Pix", name: "Pix" },
            { id: "Boleto", name: "Boleto" },
          ]}
        />
        <TextInput source="observacao" label="Observação" multiline />
      </SimpleForm>
    </Create>
  );
};

export default VendaCreate;
