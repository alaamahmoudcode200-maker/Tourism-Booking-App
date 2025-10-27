import FilterPanel from './Filter';
import SearchResultCards from './cardsearch';
export default function SearchResult() {
    return (
        <section className="w-full max-w-7xl px-4 md:px-8 lg:px-16 mb-16 grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Left Side - Filter Panel */}
            <div className="md:col-span-1">
                <FilterPanel />
            </div>
            {/* Right Side - Search Result Cards */}
            <div className="md:col-span-3 space-y-6">
                <SearchResultCards />
            </div>
        </section>
    )
}
