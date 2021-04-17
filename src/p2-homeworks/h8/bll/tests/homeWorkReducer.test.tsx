import React from 'react';
import {homeWorkReducer} from "../homeWorkReducer";
import {initialPeopleType} from "../../HW8";

let initialState: initialPeopleType;

beforeEach(() => {
    initialState = [
        {_id: 0, name: "Кот", age: 3},
        {_id: 1, name: "Александр", age: 66},
        {_id: 2, name: "Коля", age: 16},
        {_id: 3, name: "Виктор", age: 44},
        {_id: 4, name: "Дмитрий", age: 40},
        {_id: 5, name: "Ирина", age: 55},
    ]
});

test("sort name up", () => {
    const newState = homeWorkReducer(initialState, {type: "sort", payload: "up"});

    console.log(newState);
    expect(newState[0]._id).toBe(1);
    expect(newState[2].name).toBe("Дмитрий");
    expect(newState[4].age).toBe(16);
});
test("sort name down", () => {
    const newState = homeWorkReducer(initialState, {type: "sort", payload: "down"});

    console.log(newState);
    expect(newState[1]._id).toBe(2);
    expect(newState[2].name).toBe("Ирина");
    expect(newState[3].age).toBe(40);
});
test("check age 18", () => {
    const newState = homeWorkReducer(initialState, {type: "check-age", payload: 18});

    console.log(newState);
    expect(newState[0].age).toBeGreaterThanOrEqual(18);
    expect(newState[1].age).toBeGreaterThanOrEqual(18);
    expect(newState[2].age).toBeGreaterThanOrEqual(18);
    expect(newState[3].age).toBeGreaterThanOrEqual(18);
});
