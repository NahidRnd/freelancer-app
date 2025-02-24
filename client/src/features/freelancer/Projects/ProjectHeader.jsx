import useCategories from "../../../hooks/useCategories";
import Filter from "../../../ui/Filter";
import FilterDropdown from "../../../ui/FilterDropdown"

const sortOptions = [
  {
    label: "مرتب سازی (جدیدترین)",
    value: "latest"
  },
  {
    label: "مرتب سازی (قدیمی ترین)",
    value: "earliest"
  },
]

const statusOptions = [
  {
    label: "همه",
    value: "ALL"
  },
  {
    label: "باز",
    value: "OPEN"
  },
  {
    label: "بسته",
    value: "CLOSED"
  },
]

function ProjectHeader() {
  const {transformedCategories} = useCategories();
  
  return (
    <div className="flex sm:flex-row flex-col items-center justify-between mb-8">
      <h3 className="text--header">لیست پروژه ها</h3>
      <div className="flex sm:flex-row flex-col gap-y-2 sm:gap-x-8 items-center">
        <Filter options={statusOptions} filterField="status" />
        <FilterDropdown options={sortOptions} filterField="sort" />
        <FilterDropdown options={[{value: "ALL", label: "دسته بندی (همه)"}, ...transformedCategories]} filterField="category" />
      </div>
    </div>
  )
}

export default ProjectHeader
