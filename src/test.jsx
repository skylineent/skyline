import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { List } from 'antd';
import { createSlice, configureStore, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState: {
        pokemons: [],
        status: 'idle',
        error: null,
    },
    reducers: {},
    extraReducers: {
        [fetchPokemons.pending]: (state) => {
            state.status = 'loading';
        },
        [fetchPokemons.fulfilled]: (state, action) => {
            state.status = 'succeeded';
            state.pokemons = action.payload;
        },
        [fetchPokemons.rejected]: (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        },
    },
});

export const fetchPokemons = createAsyncThunk('pokemon/fetchPokemons', async () => {
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=20');
    return response.data.results;
});

const store = configureStore({
    reducer: {
        pokemon: pokemonSlice.reducer,
    },
});

function PokemonList() {
    const dispatch = useDispatch();
    const pokemonStatus = useSelector((state) => state.pokemon.status);
    const pokemons = useSelector((state) => state.pokemon.pokemons);

    useEffect(() => {
        if (pokemonStatus === 'idle') {
            dispatch(fetchPokemons());
        }
    }, [pokemonStatus, dispatch]);

    return (
        <List
            itemLayout="horizontal"
            dataSource={pokemons}
            loading={pokemonStatus === 'loading'}
            renderItem={(pokemon) => (
                <List.Item>
                    <List.Item.Meta
                        title={<a href="#">{pokemon.name}</a>}
                        avatar={<img alt={pokemon.name} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.url.split('/')[6]}.png`} />}
                    />
                </List.Item>
            )}
        />
    );
}

export default PokemonList;
