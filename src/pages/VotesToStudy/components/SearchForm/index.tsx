import { MagnifyingGlass } from "phosphor-react";
import { SearchFormContainer } from "./styles";
import { ChangeEvent } from "react";

interface SearchFormProps {
    setSearch: (search: string) => void;
}

export function SearchForm({ setSearch }: SearchFormProps) {
    const handleOnSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    }

    return (
        <SearchFormContainer>
            <input 
                type="search"
                name="search"
                placeholder="Busque pelo nome ou ticker para filtrar" 
                onChange={handleOnSearchChange}
            />
            <button type="submit" disabled>
                <MagnifyingGlass size={20} />
                Pesquisar
            </button>
        </SearchFormContainer>
    );
}