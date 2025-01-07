import { CheckboxGroup } from "./checkbox-group"
import { FilterSection } from "./filter-section"

const marketplaceOptions = [
  { id: "us", label: "United States" },
  { id: "uk", label: "United Kingdom" },
  { id: "de", label: "Germany" },
]

export function MarketplaceFilter() {
  return (
    <FilterSection title="Marketplace">
      <CheckboxGroup options={marketplaceOptions} />
    </FilterSection>
  )
}