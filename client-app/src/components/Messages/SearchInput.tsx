import React from 'react'
import { Header, Input } from 'semantic-ui-react'

export const SearchInput = () => {
    return (
        <Header floated="right">
            <Input
            size="mini"
            icon="search"
            name="searchTerm"
            placeholder="search messages"
            ></Input>
        </Header>
    )
}

export default SearchInput
