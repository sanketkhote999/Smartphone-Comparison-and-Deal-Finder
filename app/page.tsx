import { SmartphoneFilter } from "@/components/smartphone-filter";
import { SearchHeader } from "@/components/search-header";
import { PopularCategories } from "@/components/popular-categories";
import { SmartphoneDetails } from "@/components/smartphone-details";

export default function Home() {
  return (
    <div className="min-h-screen">
      <SearchHeader />
      <div className="pt-20">
        <PopularCategories />
        <div className="container mx-auto px-4 py-8">
          <div className="grid lg:grid-cols-[300px_1fr] gap-6">
            <div className="lg:sticky lg:top-24 lg:h-[calc(100vh-6rem)] lg:overflow-auto">
              <SmartphoneFilter />
            </div>
            <SmartphoneDetails />
          </div>
        </div>
      </div>
    </div>
  );
}