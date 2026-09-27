import "./FilterSort.css"

interface FilteredSortProps{
    selectedSort: string;
    onChangeSort: (typeSort: string) => void
}

function FilterSort({selectedSort, onChangeSort}: FilteredSortProps){
    return(
        <div className="filterSort">
            <select value={selectedSort} onChange={(e) => onChangeSort(e.target.value)}>
                <option key={1} value="Todos">Todos</option>
                <option key={2} value="MaisAvaliado">Mais bem avaliados</option>
                <option key={3} value="MenosAvaliado">Menos bem avaliados</option>
                <option key={4} value="Recente">Mais recente</option>
                <option key={5} value="Antigo">Mais antigo</option>
                <option key={6} value="AlfabeticoCrescente">A - Z</option>
                <option key={7} value="AlfabeticoDecrescente">Z - A</option>
            </select>
        </div>
    );
}

export default FilterSort;