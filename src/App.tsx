import { Page, Box } from "@shopify/polaris";
import BudgetCard from "./components/BudgetCard";

export default function App() {
  return (
    <Page
      title="Budgets"
      primaryAction={{ content: "Add Budget", onAction: () => {} }}
      secondaryActions={[{ content: "Add Expense", onAction: () => {} }]}
    >
      <Box
        as="div"
        paddingBlockStart="400"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: "1rem",
          alignItems: "start",
        }}
      >
        <BudgetCard name="Entertainment" amount={600} max={1000} />
      </Box>
    </Page>
  );
}
