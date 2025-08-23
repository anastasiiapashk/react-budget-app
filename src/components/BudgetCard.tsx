import {
  Box,
  Button,
  Card,
  InlineStack,
  ProgressBar,
  Text,
} from "@shopify/polaris";
import { currencyFormatter } from "../utils";

const Tone = {
  Success: "success",
  Warning: "warning",
  Critical: "critical",
};

export default function BudgetCard({ name, amount, max, gray }) {
  const ratio: number = max > 0 ? amount / max : 0;
  const percent: number = Math.min(100, Math.round(ratio * 100));
  const tone: string | undefined = getProgressBarTone(ratio);
  let background = "bg-surface-neutral";
  if (amount > max) {
    background = "bg-surface-critical";
  } else if (gray) {
    background = "bg-surface-neutral";
  }

  return (
    <Box background={background} padding="400" borderRadius="200" shadow="300">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "baseline",
          marginBottom: 12,
          gap: 8,
        }}
      >
        <Text as="h3" variant="headingMd">
          {name}
        </Text>

        <Text as="p" variant="bodyMd">
          {currencyFormatter.format(amount)}{" "}
          <Text as="span" tone="subdued" variant="bodySm">
            / {currencyFormatter.format(max)}
          </Text>
        </Text>
      </div>

      <div style={{ marginBlock: 8 }}>
        <ProgressBar progress={percent} tone={tone} />
      </div>

      <Box paddingBlockStart="200">
        <InlineStack gap="200" align="end">
          <Button variant="secondary" onClick={() => {}}>
            Add Expense
          </Button>
          <Button variant="tertiary" onClick={() => {}}>
            View Expenses
          </Button>
        </InlineStack>
      </Box>
    </Box>
  );
}

function getProgressBarTone(ratio) {
  if (ratio < 0.5) return Tone.Success;
  if (ratio < 0.75) return undefined;
  return Tone.Critical;
}
